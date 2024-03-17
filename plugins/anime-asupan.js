let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', wm, m)
}
handler.help = ['asupan']
handler.tags = ['anime']
handler.command = /^asupan$/i

handler.premium = false
handler.fail = null
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://telegra.ph/file/ea9e15b73d56d968c8741.mp4"
]