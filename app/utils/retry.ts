export class RetryOptions {
  private readonly delayFactor: number; // 毫秒
  private readonly randomizationFactor: number;
  private readonly maxDelay: number; // 毫秒
  private readonly maxAttempts: number;

  constructor(options?: {
    delayFactor?: number;
    randomizationFactor?: number;
    maxDelay?: number;
    maxAttempts?: number;
  }) {
    this.delayFactor = options?.delayFactor ?? 200;
    this.randomizationFactor = options?.randomizationFactor ?? 0.25;
    this.maxDelay = options?.maxDelay ?? 30 * 1000;
    this.maxAttempts = options?.maxAttempts ?? 8;
  }

  private delay(attempt: number): number {
    console.assert(attempt >= 0, "attempt cannot be negative");
    if (attempt <= 0) {
      return 0;
    }
    const rf = this.randomizationFactor * (Math.random() * 2 - 1) + 1;
    const exp = Math.min(attempt, 31);
    const delay = this.delayFactor * Math.pow(2.0, exp) * rf;
    return delay < this.maxDelay ? delay : this.maxDelay;
  }

  async retry<T>(
    fn: () => T | Promise<T>,
    options?: {
      retryIf?: (attempt: number, error: Error) => boolean | Promise<boolean>;
      onRetry?: (attempt: number, error: Error) => void | Promise<void>;
    },
  ): Promise<T> {
    let attempt = 0;
    while (true) {
      try {
        return await fn();
      } catch (e) {
        if (e instanceof Error) {
          if (
            attempt >= this.maxAttempts - 1 ||
            (options?.retryIf != null && !(await options.retryIf(attempt, e)))
          ) {
            throw e;
          }
          if (options?.onRetry != null) {
            await options.onRetry(attempt, e);
          }
        } else {
          throw e;
        }
      }
      attempt++;
      await new Promise((resolve) => setTimeout(resolve, this.delay(attempt)));
    }
  }
}

// Call [fn] retrying so long as [retryIf] return `true` for the exception
// thrown, up-to [maxAttempts] times.
//
// Defaults to 8 attempts, sleeping as following after 1st, 2nd, 3rd, ...,
// 7th attempt:
//  1. 400 ms +/- 25%
//  2. 800 ms +/- 25%
//  3. 1600 ms +/- 25%
//  4. 3200 ms +/- 25%
//  5. 6400 ms +/- 25%
//  6. 12800 ms +/- 25%
//  7. 25600 ms +/- 25%
//
// If no [retryIf] function is given this will retry any for any [Error]
// thrown. To retry on an [Error], the error must be caught and _rethrown_
// as an [Error].
export function retry<T>(
  fn: () => T | Promise<T>,
  options?: {
    delayFactor?: number;
    randomizationFactor?: number;
    maxDelay?: number;
    maxAttempts?: number;
    retryIf?: (attempt: number, error: Error) => boolean | Promise<boolean>;
    onRetry?: (attempt: number, error: Error) => void | Promise<void>;
  },
): Promise<T> {
  return new RetryOptions({
    delayFactor: options?.delayFactor ?? 200,
    randomizationFactor: options?.randomizationFactor ?? 0.25,
    maxDelay: options?.maxDelay ?? 30 * 1000,
    maxAttempts: options?.maxAttempts ?? 8,
  }).retry(fn, {
    retryIf: options?.retryIf,
    onRetry: options?.onRetry,
  });
}
