import fs from 'fs'
import acrcloud from 'acrcloud'

let handler = async (m, {usedPrefix, command, conn, text }) => {

if (!text) throw `Error!\nMasukan username, *Ex: ${usedPrefix + command} ${text}`
//access token
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

if (/audio|video/.test(mime)) {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''

m.reply(wait)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) return m.reply('Music not found.')
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `乂  *SEARCHING SONG*

◦ Title: ${title}
◦ Name artis: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Not known'}
◦ Album: ${album.name || 'Not known'}
◦ Genre: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Not known'}
◦ Di Rilis: ${release_date || 'not known '}

`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else m.reply(`Reply audio atau video dengan perintah ${comand}`)

}
handler.help = ['whatmusic']
handler.tags = ['tool']
handler.command = /^(whatmusic)$/i
handler.limit = true
handler.register = true 

export default handler