import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m, {text}) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simiC && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=Dinda ${text}&name=Dinda putri angelista. kamu sebagai cewe. buat lawan bicara hatinya luluh dan baper saat kamu ngobrol dengan dia. gunakan kata gw sebagai ganti kata kamu, gunakan lu sebagai kata ganti kamu. `,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result))
        return !0
    }
    return true
}
export default handler