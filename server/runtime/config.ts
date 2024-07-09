import assert from "assert";

export default function useMyApps() {
  const runtimeConfig = useRuntimeConfig();
  const myApps = runtimeConfig.public.apps as {
    id: string;
    android?: { package_name: string };
    ios?: { bundle_id: string };
  }[];
  assert(
    myApps.every((app) => app.android || app.ios),
    "Invalid Apps",
  );
  return myApps;
}
