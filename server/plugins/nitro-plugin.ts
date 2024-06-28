export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("render:html", (html, { event }) => {
    console.log("render:html");
    // console.log("render:html", html);
    html.bodyAppend.push("<hr>Appended by custom plugin</hr>");
  });

  nitro.hooks.hook("render:response", (response, { event }) => {
    console.log("render:response");
    // console.log("render:response", response);
  });
});
