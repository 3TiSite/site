import uridir from "@3-/uridir"
import viteConf from "@3-/vite-conf"

const conf = await viteConf(uridir(import.meta))
conf.resolve.alias["~"] = "https://127.0.0.1:7777"
console.log(conf)
conf.hmr = { clientPort: 443 }
export default conf
