import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import { DeepPartial, SiteOptions } from "lume/core.ts";

const config: DeepPartial<SiteOptions> = {
  src: "./src",
};

const base_path = Deno.env.get("BASE_PATH");
if (base_path) {
  config.location = new URL(base_path);
}

const site = lume(config);

site.use(plugins());

export default site;
