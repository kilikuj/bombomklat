
import uploadImage from '../lib/uploadImage.js'
import axios from 'axios'
import fs from "fs"

async function imageAnime(url) {
  return new Promise(async(resolve, reject) => {
    let { data } = await axios({
      url: "https://tools.revesery.com/image-anime/convert.php",
      method: "POST",
      data: new URLSearchParams(Object.entries({
        "image-url": url
      })),
      headeres: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    console.log(data)
    resolve(data)
  })
  
}
let handler = async (m, { conn, usedPrefix, text, args,command }) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
    let mime_ = `Kirim/Reply Gambar Dengan Caption ${usedPrefix + command}`
    
    const react = {react: {text: "⏳", key: m.key}}
    
    async function reload () {
	conn.sendMessage(m.chat, react)
		}
    const reactdone = {react: {text: "✔️", key: m.key}}
    
    async function done () {
	conn.sendMessage(m.chat, reactdone)
		}
		
	

if (!mime) throw mime_
if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	let media = await q.download()
    let url = await uploadImage(media)
    
reload()
let cap = '*Result from* : ' + usedPrefix + command
imageAnime(url).then(a => {
let buffer = Buffer.from(a.image.replace("data:image/png;base64,",""), "base64")
conn.sendMessage(m.chat, { image: buffer , caption: cap})
}, {quoted: m}).catch(e => {
m.reply('error: ' + e)
})

done()
}
handler.command = ['jadianime','toanime']
handler.help = ["toanime"];
handler.tags = ["process"];
handler.limit = true;
handler.register = true

export default handler;