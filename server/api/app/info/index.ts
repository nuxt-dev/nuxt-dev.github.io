import assert from "assert";
import { z } from "zod";
import appstore from "app-store-scraper";
import googleplay from "google-play-scraper";

// const resp = await useFetch("/api/app/info?id=chrome");
export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z
      .object({
        id: z.string(),
      })
      .and(
        z.object({
          country: z.string().optional(),
          lang: z.string().optional(),
        }),
      ).parse,
  );
  const runtimeConfig = useRuntimeConfig();
  const apps = runtimeConfig.crossApps as {
    id: string;
    android?: { package_name: string };
    ios?: { bundle_id: string };
  }[];
  assert(
    apps.every((app) => app.android || app.ios),
    "Invalid APPS",
  );
  const app = apps.find((app) => app.id === query.id);
  assert(app, "Invalid ID");
  // console.log(`Query: ${JSON.stringify(query)}`);
  let data: {
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
  };
  if (app.ios) {
    const info = await appstore.app({
      appId: app.ios.bundle_id,
      country: query.country ?? "us",
      lang: query.lang ?? "en",
    });
    data = {
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
    };
  } else if (app.android) {
    const info = await googleplay.app({
      appId: app.android.package_name,
      country: query.country ?? "us",
      lang: query.lang ?? "en",
    });
    data = {
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
    };
  } else {
    throw new Error("Invalid app");
  }
  // await event.respondWith(Response.json({ data: data }));
  return data;
});
