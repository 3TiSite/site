import {captcha} from '@~3/captcha'
import lang from '@~3/lang'
import {toastErr} from '@~3/toast'
import fBin from '@3-/fetch/fBinPrefix.js'

import {API} from '~/conf.js'
const fbin = fBin(API);

export const req = async (url, opt)=>{
  opt.method = opt.method || 'POST';
  opt.headers = opt.headers || {};
  opt.headers['Accept-Language'] = lang();
  opt.credentials = 'include';
  try {
    return await fbin(url, opt);
  }catch(r){
    var {status} = r;
    if(status){
      switch(status){
      case 417: // form error
        throw await r.json()
      case 412: // captcha error
        return await captcha(
          url,
          opt.body,
          new Uint8Array(await r.arrayBuffer())
        );
        break;
      default:
        // 避免 dialog 被立马关闭
        setTimeout(
          async ()=>toastErr(r.status + ' : ' + await r.text())
        );
        throw r;
      }
    }else{
      throw r;
    }
  }

}

export default new Proxy(
  {},
  {
    get:(_, url)=>async (...args)=>{
      var opt = {};
      if(args.length)opt.body = JSON.stringify(args);
      return req(url, opt)
    }
  }
)

