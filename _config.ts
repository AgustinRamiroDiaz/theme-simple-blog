import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  src: "./src",
  location: new URL("https://agustinramirodiaz.github.io/theme-simple-blog/"),
});

site.use(plugins());

export default site;
