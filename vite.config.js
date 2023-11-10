import uridir from '@3-/uridir'
import viteConf from '@3-/vite-conf'

export default await viteConf(uridir(import.meta))
