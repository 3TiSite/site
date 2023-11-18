import {MD} from '~/conf.js'
import lang from '@~3/lang'
import fTxt from '@3-/fetch/fTxt.js'

export default (url, ...args)=> fTxt(MD + lang() + '/' + url+'.md', ...args)
