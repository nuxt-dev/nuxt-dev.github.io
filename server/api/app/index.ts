import { z } from "zod";
import appstore from "app-store-scraper";
import googleplay from "google-play-scraper";

// const resp = await useFetch("/api/app?platform=android&package_name=com.example.app");
export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z.object({
      platform: z.enum(["android", "ios"]),
      package_name: z.string(),
      country: z.string().optional(),
      lang: z.string().optional(),
    }).parse,
  );
  // console.log(`Query: ${JSON.stringify(query)}`);
  let data:
    | {
        id?: number;
        appId: string;
        title: string;
        icon: string;
        description: string;
        version: string;
        url: string;
      }
    | undefined;
  switch (query.platform) {
    case "android":
      const androidInfo = await googleplay.app({
        appId: query.package_name,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data = {
        appId: androidInfo.appId,
        title: androidInfo.title,
        icon: androidInfo.icon,
        description: androidInfo.description,
        version: androidInfo.version,
        url: androidInfo.url,
      };
      break;
    case "ios":
      const iosInfo = await appstore.app({
        id: query.package_name,
        country: query.country ?? "us",
        lang: query.lang ?? "en",
      });
      data = {
        id: iosInfo.id,
        appId: iosInfo.appId,
        title: iosInfo.title,
        icon: iosInfo.icon,
        description: iosInfo.description,
        version: iosInfo.version,
        url: iosInfo.url,
      };
      break;
  }
  await event.respondWith(Response.json({ data: data }));
  // return {
  //     msg: "Nuxt API",
  // };
});
