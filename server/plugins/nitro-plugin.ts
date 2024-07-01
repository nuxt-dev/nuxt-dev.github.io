export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("render:html", (_html, { event }) => {
    console.log(`render:html - ${getRequestURL(event)}`);
    // console.log("render:html", html);
    // html.bodyAppend.push("<hr>Appended by custom plugin</hr>");
  });

  nitro.hooks.hook("render:response", (_response, { event }) => {
    console.log(`render:response - ${getRequestURL(event)}`);
    // console.log("render:response", response);
  });
});
