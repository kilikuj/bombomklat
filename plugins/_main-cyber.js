import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

const floc = {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `apa sih`,"h": `Hmm`, 'jpegThumbnail': await conn.resize(thumb, 100, 100)}}
}
let a = ["apa si","iya","oy","ha?","siap","gw?","males bgt sumpah","siapa?","gw kah?","hemm","oke","sip","yuhu","hadir!!","di sini","iya boskuh","ada apa?","bot Redy","yoi men"]

let pick = pickRandom(a)

conn.sendMessage(m.chat, {text: pick}, {quoted: floc})

}
handler.customPrefix = /^(Eup|lia)/i;
handler.command = new RegExp();
handler.exp = 200
handler.premium = false
handler.owner = true 
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}