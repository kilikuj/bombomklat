

import fetch from 'node-fetch'
import axios from 'axios'
import { Tiktok } from '../scraper/tiktok.js'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vm.tiktok.com/ZSL7p9jRV/`
	if (!text) return m.reply(input)
m.reply(wait)
  let res = await Tiktok(text)
  let cap = `乂 *T i k  T o k*\n♮ *Username:* ${res.author}\n♮ *Description:* ${res.title}
`
let a = await conn.sendFile(m.chat, res.thumbnail || emror, '', cap, m)
 
await conn.sendMessage(m.chat, { 
    audio: { url: res.audio }, 
    mimetype: 'audio/mpeg', 
    fileName: `${res.title}.mp3`,
    ptt: false
  }, {quoted: a})
}
  
handler.help = ['tiktokmp3']
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|ttmp3)$/i
handler.limit = true
handler.register = true

export default handler
/*
const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};


async function shortener(url) {
  return url;
}

async function Tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  let result = {};

  result.creator = "Tioxy";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}
*/