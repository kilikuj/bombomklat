/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

/*import axios from "axios"
import { tiktokdl } from '../scraper/tiktokdl.js'
import { Tiktok } from '../scraper/tiktok.js'

let handler = async (m, { conn, args, usedPrefix, text, command}) => {
let input = `List type:
  ⛒ v2 (mp4 + mp3)
  ⛒ v3 (wm)
    
${usedPrefix + command} https://vm.tiktok.com/ZSL7p9jRV/`

let type = (args[0] || '').toLowerCase()
if (!text) return m.reply(input)

switch (type) {
case 'v2':
if (!args[1]) return m.reply(input)

if (!(args[1].includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)

if (!args[1].includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)

const { data } = (
        await axios.post(
          "https://ezsave.app/api/tiktok/video-downloader",
          {
            url: args[1],
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
      ).data;
conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})

let cap = `*${data[0].title}*

duration: ${data[0].duration}
url: ${args[1]}
●───//──────●
  *TIK TOK V2*
    
`

let v2 = await conn.sendFile(m.chat, data[0].url || emror, 'eror.mp4', cap, m)

 conn.sendMessage(m.chat, {react: {text: '✔️', key: m.key}})


break
case 'v3':
if (!args[1]) return m.reply(input)

if (!(args[1].includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)

if (!args[1].includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)

conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
const { title, author, nowm, watermark, audio, thumbnail} = await Tiktok(args[1])
let capv3 = `   乂 *TIK TOK V3*

    ᨔ Name: ${author}
    ᨔ Type: no watermark 
`
let vid = await conn.sendFile(m.chat, watermark || emror, 'eror.mp4', capv3, m)
await conn.sendMessage(m.chat, {audio: {url: audio}}, {quoted: m}).then(_ => {
conn.sendMessage(m.chat, {react: {text: '✔️', key: m.key}})
      })

break
default:
if (!text) return m.reply(input)
if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)

conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
const { status, caption, server1, serverHD } = await tiktokdl(text);
if (status === true) {
const cap = `    乂 *TIK TOK V1*

quality: ${server1.quality}
url: ${text}

`

await conn.sendFile(m.chat, server1.url || emror, '', cap, m).then(_ => {
conn.sendMessage(m.chat, {react: {text: '✔️', key: m.key}})
    })
    
    } else {
    m.reply(eror)
    }
    
  }
  }
handler.help = ['v1','v2','v3(wm)'].map(v => `tiktok ${v} <link>`)
handler.tags = ['downloader']
handler.command = /^(tiktok|tt(dl|download)?)$/i
handler.limit = true
handler.register = true

export default handler

/**
async function tiktok(url) {
   try {
      let data = await axios.get("https://ssstik.io/en", {
         headers: {
            "Hx-Current-Url": "https://ssstik.io/en",
            "Hx-Request": true,
            "Hx-Target": "target",
            "Hx-Trigger": "_gcaptcha_pt",
            "Origin": "https://ssstik.io",
            "Referer": "https://ssstik.io/en",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })

      let tt = /tt:(["'])(.*?)\1/g.exec(data.data)[2]

      data = await axios.post("https://ssstik.io/abc?url=dl", {
         id: url,
         locale: "en",
         tt
      }, { 
         headers: {
            "Accept": "*\/*", 
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Hx-Current-Url": "https://ssstik.io/en",
            "Hx-Request": true,
            "Hx-Target": "target",
            "Hx-Trigger": "_gcaptcha_pt",
            "Origin": "https://ssstik.io",
            "Referer": "https://ssstik.io/en",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })

      let $ = cheerio.load(data.data)

      let slide = $("ul > li").map((a, b) => {
         return $(b).find("a").attr('href') || $(b).find("img").attr("src")
      }).get()

      let result = {
         thumbnail: $("img.result_author").attr("src"),
         author: $("div.pure-u-18-24.pd-lr > h2").text().trim() || $("div.pure-u-20-24.pd-lr > h2").text().trim(),
         description: $("div.pure-u-18-24.pd-lr > p").text().trim(),
         media: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active.notranslate").attr("href") || slide,
         music: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.vignette_active.notranslate").attr("href") || $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.notranslate").attr("href"),
         like: $("div.d-flex.flex-1.align-items-center.justify-content-start").text().trim(),
         comment: $("div.d-flex.flex-1.align-items-center.justify-content-center").text().trim(),
         share: $("div.d-flex.flex-1.align-items-center.justify-content-end").text().trim()
      }

      return result
   } catch (e) {
      throw e
   }
}
**/