import { aio } from '../scraper/aio.js'
let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {

 let info = `masukan link !
support link :
1. YouTube
2. TikTok
3. Twitter
4. Instagram
dll.. `
if (!text) return m.reply(info)

aio(text).then(a => {
let hasil = a.medias
 let cap = `乂 *A I O  D O W N L O A D E R*
*Url* : ${hasil[5].url}
`

conn.sendFile(m.chat, hasil[5].url, '', cap, m)
}).catch(e => {
let hasil = a.medias
 let cap = `乂 *A I O  D O W N L O A D E R*
*Url* : ${hasil[1].url}
`

conn.sendFile(m.chat, hasil[1].url, '', cap, m)
}).catch(e => {
m.reply('Oops.. feature *error*')
})
}
    
handler.help = ['aio']
handler.tags = ['downloader']
handler.command = /^(aio)$/i
handler.limit = true 
handler.register = true

export default handler