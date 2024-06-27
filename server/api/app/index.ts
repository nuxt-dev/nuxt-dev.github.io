import { z } from "zod";

// const resp = await useFetch("/api/app?platform=android&package_name=com.example.app");
export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z.object({
      platform: z.enum(["android", "ios"]),
      package_name: z.string(),
    }).parse,
  );
  console.log(`Query: ${JSON.stringify(query)}`);
  await event.respondWith(Response.json({ msg: "Nuxt API" }));
  // return {
  //     msg: "Nuxt API",
  // };
});
