
import axios from'axios'

let handler = async(m, { conn, text, args, command, usedPrefix}) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vt.tiktok.com/ZSNjugL4u//`

let url = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`
// function 
 if (!text) return m.reply(input)
 
 	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
	const { data } = (
        await axios.post(
          "https://ezsave.app/api/tiktok/slide-downloader",
          {
            url: text,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
      ).data;

let det = []
det = data
m.reply(wait)
let no = 1
for (let i of det) {
 conn.sendFile(m.sender, i.url, '', `Gambar ke - ${no++}`, m)
 }
 
}

handler.help = ['tiktokslide <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg|ttslide|tiktokslide)$/i

handler.register = true 
handler.limit = true

export default handler