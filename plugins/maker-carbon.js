/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, {text, conn, usedPrefix, command}) => {
try {

if (!text) return conn.reply(m.chat, `Masukan prompt!`, m)

conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})

// function json 
let result = await fetchJson(`https://aemt.me/carbon?text=${text}`)

// sending_ file
conn.sendFile(m.chat, result.result || emror, 'error.jpg', `📣 *Result from ${usedPrefix+command} ${text}*`, m)

conn.sendMessage(m.chat, {react: {text: '📢', key: m.key}})
} catch (e) {
console.log(`${global.eror} : ${e}`)
m.reply(`${global.eror} : ${e}`)
conn.sendMessage(m.chat, {react: {text: '✖️', key: m.key}})

}

}
handler.help = handler.command = ['carbon']
handler.tags = ['maker']
handler.limit = true
handler.register = true

export default handler