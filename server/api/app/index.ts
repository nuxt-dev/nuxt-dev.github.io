import { z } from "zod";
import appstore from "app-store-scraper";
import googleplay from "google-play-scraper";

// const resp = await useFetch("/api/app?platform=android&package_name=com.example.app");
// const resp = await useFetch("/api/app?platform=ios&bundle_id=com.google.chrome.ios");
export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z
      .discriminatedUnion("platform", [
        z.object({
          platform: z.literal("android"),
          package_name: z.string(),
        }),
        z.object({
          platform: z.literal("ios"),
          bundle_id: z.string(),
        }),
      ])
      .and(
        z.object({
          country: z.string().optional(),
          lang: z.string().optional(),
        }),
      ).parse,
  );
  // console.log(`Query: ${JSON.stringify(query)}`);
  let data: {
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
  switch (query.platform) {
    case "android":
      const androidInfo = await googleplay.app({
        appId: query.package_name,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data = {
        title: androidInfo.title,
        icon: androidInfo.icon,
        description: androidInfo.description,
        android: {
          package_name: androidInfo.appId,
          url: androidInfo.url,
        },
      };
      break;
    case "ios":
      const iosInfo = await appstore.app({
        appId: query.bundle_id,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data = {
        title: iosInfo.title,
        icon: iosInfo.icon,
        description: iosInfo.description,
        ios: {
          bundle_id: iosInfo.appId,
          url: iosInfo.url,
        },
      };
      break;
  }
  // await event.respondWith(Response.json({ data: data }));
  return {
    data: data,
  };
});
