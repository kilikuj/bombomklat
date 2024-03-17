import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { tmpFiles, pomf } from '../scraper/tmpUpload.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let link3 = await pomf(media)
  let link4 = await tmpFiles(media)
    
  m.reply(`
*Upload by Telegraph*  
*Link:* ${link}
*Size:* ${media.length} Byte
*Expired:* ${isTele ? 'No Expiry Date' : 'Unknown'}

*Tmp files*
*Link:* ${link4.data.url}
*Size:* ${media.length} Byte
*Expired:* _2 hour_

*Upload by Pomf*
*Link* : ${link3.files[0].url}
*Size* : ${link3.files[0].size}
*Expired:* not expired 
`)
}
handler.help = ['upload']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
handler.register = true

export default handler