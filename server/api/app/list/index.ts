import assert from "assert";
import { z } from "zod";
import appstore from "app-store-scraper";
import googleplay from "google-play-scraper";

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
  const runtimeConfig = useRuntimeConfig();
  const crossApps = runtimeConfig.crossApps as {
    id: string;
    android?: { package_name: string };
    ios?: { bundle_id: string };
  }[];
  assert(
    crossApps.every((app) => app.android || app.ios),
    "Invalid APPS",
  );
  const apps = crossApps.filter((app) => !query.platform || (query.platform === "android" && app.android) || (query.platform === "ios" && app.ios));
  // console.log(`Query: ${JSON.stringify(query)}`);
  const data: {
    id: string;
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
        id: app.id,
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
                url: `https://play.google.com/store/apps/details?${Object.entries({
                  id: app.android.package_name,
                  hl: query.lang ?? "en",
                  gl: query.country ?? "us",
                })
                  .map(([k, v]) => k + "=" + v)
                  .join("&")}`,
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
        id: app.id,
        title: info.title,
        icon: info.icon,
        description: info.description,
        android: {
          package_name: app.android.package_name,
          url: `https://play.google.com/store/apps/details?${Object.entries({
            id: app.android.package_name,
            hl: query.lang ?? "en",
            gl: query.country ?? "us",
          })
            .map(([k, v]) => k + "=" + v)
            .join("&")}`,
        },
      });
    }
  }
  // await event.respondWith(Response.json({ data: data }));
  return data;
});
