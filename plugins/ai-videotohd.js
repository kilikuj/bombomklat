//Jangn Di Hapus by VynaaChan 

const ffmpeg = require('fluent-ffmpeg');
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Video tidak ditemukan`
  let videoData = await conn.downloadAndSaveMediaMessage(q, 'video')
  let output = './media/video.mp4' // sesuaikan dengan esceh mu
  ffmpeg(videoData)
    .outputOptions('-s', '1920x1080') // Resolusi 1080p bisa di ganti kalo kurang hd 🗿
    .save(output)
    .on('end', () => {
      conn.sendFile(m.chat, output, '', `🍟 Nih Kak`, m)
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
    })
}

handler.command = handler.help = ["hdvid"]
handler.tags = ["tools"]
handler.limit = true

module.exports = handler