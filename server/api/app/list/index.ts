import { z } from "zod";
import assert from "assert";
import appstore from "app-store-scraper";
import googleplay from "google-play-scraper";

const ANDROID_PACKAGE_NAME_LIST = ["com.android.chrome"];
const IOS_BUNDLE_ID_LIST = ["com.google.chrome.ios"];

const APPS: {
  alias: string;
  android?: {
    package_name: string;
  };
  ios?: {
    bundle_id: string;
  };
}[] = [
  {
    alias: "chrome",
    android: {
      package_name: "com.android.chrome",
    },
    ios: {
      bundle_id: "com.google.chrome.ios",
    },
  },
  {
    alias: "firefox",
    android: {
      package_name: "org.mozilla.firefox",
    },
    ios: {
      bundle_id: "org.mozilla.ios.Firefox",
    },
  },
];

assert(
  APPS.every((app) => app.android || app.ios),
  "Invalid APPS",
);

// const resp = await useFetch("/api/app/list");
// const resp = await useFetch("/api/app/list?platform=android");
// const resp = await useFetch("/api/app/list?platform=ios");
export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z
      .object({
        platform: z.enum(["android", "ios"]).or(z.string()).optional(),
      })
      .and(
        z.object({
          country: z.string().optional(),
          lang: z.string().optional(),
        }),
      ).parse,
  );
  const apps = APPS.filter(
    (app) =>
      !query.platform ||
      (query.platform === "android" && app.android) ||
      (query.platform === "ios" && app.ios),
  );
  // console.log(`Query: ${JSON.stringify(query)}`);
  let data: {
    alias: string;
    title: string;
    icon: string;
    description: string;
    android?: {
      package_name: string;
      url: string;
    };
    ios?: {
      id: number;
      bundle_id: string;
      url: string;
    };
  }[] = [];
  for (const app of apps) {
    if (app.ios) {
      const info = await appstore.app({
        appId: app.ios.bundle_id,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data.push({
        alias: app.alias,
        title: info.title,
        icon: info.icon,
        description: info.description,
        ios: {
          id: info.id,
          bundle_id: info.appId,
          url: info.url,
        },
        ...(app.android
          ? {
              android: {
                package_name: app.android.package_name,
                url: `https://play.google.com/store/apps/details?id=${app.android.package_name}`,
              },
            }
          : {}),
      });
    } else if (app.android) {
      const info = await googleplay.app({
        appId: app.android.package_name,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data.push({
        alias: app.alias,
        title: info.title,
        icon: info.icon,
        description: info.description,
        android: {
          package_name: app.android.package_name,
          url: `https://play.google.com/store/apps/details?id=${app.android.package_name}`,
        },
      });
    }
  }
  // await event.respondWith(Response.json({ data: data }));
  return {
    data: data,
  };
});
