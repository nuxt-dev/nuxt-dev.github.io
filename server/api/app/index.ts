export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    console.log(`Query: ${JSON.stringify(query)}`);
    await event.respondWith(Response.json({ msg: "Nuxt API" }));
    // return {
    //     msg: "Nuxt API",
    // };
});
