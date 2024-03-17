let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/7c4bc9ce6370d52a4c6de.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah Atau Qris Diatas, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..


❏──「 *Payment* 」
│ • *Pulsa:* [082389924037]
│ • *Dana:* [${global.pdana}]
❏──────────────๑


Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler