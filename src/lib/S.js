import { captcha } from "@~3/captcha"
import lang from "@~3/lang"
import { toastErr } from "@~3/toast"
import fget from "@3-/fetch"
import AUTH from "@2-/conf/AUTH.js"
import { API } from "~/conf.js"
// const fbin = fBin(API)

export const req = async (url, opt) => {
	opt.method = opt.method || "POST"
	opt.headers = opt.headers || {}
	opt.headers["Accept-Language"] = lang()
	opt.credentials = "include"
	try {
		const r = await fget(API + url, opt)
		console.log("get set cookie", url, [...r.headers.entries()])
		return new Uint8Array(await r.arrayBuffer())
	} catch (r) {
		const { status } = r
		if (status) {
			switch (status) {
				case 417: // form error
					try {
						r = await r.json()
					} catch (err) {
						r = err
						break
					}
					throw r
				case 401:
					return new Promise((resolve, reject) => {
						AUTH(() => req(url, opt).then(resolve, reject))
					})
				case 412: // captcha error
					return captcha(url, opt.body, new Uint8Array(await r.arrayBuffer()))
			}
		}
		setTimeout(async () => {
			try {
				r = await r.text()
			} finally {
				toastErr(r)
			}
		})
		throw r
	}
}

export default new Proxy(
	{},
	{
		get:
			(_, url) =>
			async (...args) => {
				const opt = {},
					{ length } = args
				if (length) {
					opt.body = JSON.stringify(length > 1 ? args : args[0])
				}
				return req(url, opt)
			},
	},
)
