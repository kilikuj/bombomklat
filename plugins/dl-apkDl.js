import { apkDl, search } from '../scraper/apkDownload.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
switch (command) {
case 'apksearch':
    if (!text) throw `[!] *Invalid*\nEx : ${usedPrefix+command} talking tom `
    try {
    conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
    
    let cari = await search(text)
    let teks = `乂 *A P P  S E A R C H*\n\n📮 Note! : Untuk cara download bisa ketik:\n${usedPrefix}apkdl link_dibawah\n\n`
    for (let i of cari.data) {
    teks += `📝 *Title :* ${i.judul}
⚙️ *Developer :* ${i.dev}
🔗 *Link :* ${i.link}\n\n`
    }
    
    await conn.sendMessage(m.chat, {text: teks})
    conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
     } catch (e) {
     m.reply(eror)
     } finally {
     
     }
               
    break 
    case 'apkdl': case 'downloadapk':
    if (!text) throw `[!] *Invalid*\nMasukan link yang benar!\nContoh: ${usedPrefix+command} https://www.apkmirror.com/apk/poulwrap/sunray-vpn-ultra-speed/sunray-vpn-ultra-speed-3-000-release/sunray-vpn-ultra-speed-3-000-android-apk-download/download/?key=b643ef14c0d9ff7c4b0a16bbd964f2a21f143c53&forcebaseapk=true`
    conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
    apkDl(text).then(a => {
    conn.sendMessage(m.chat, {image: {url: a.gambar}, caption: `*Title*: ${a.title}\n*Link*: ${a.link}\n*linkDl*: ${a.linkdl}\n`}, {quoted: m})
    conn.sendMessage(m.chat, { document: { url: a.linkdl }, fileName: `${a.title}.apk`, mimetype: 'apk/zip' }, { quoted: m })
    //conn.sendFile(m.chat, a.url, `${a.title}.apk`, `⛌ *Apk Mirror*\n\n${a.title}`, m)
        conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
        }).catch(e => {
        m.reply(eror)
        })
    break
    }

}

handler.command = handler.help = ['apksearch','apkdl','downloadapk'];
handler.tags = ['downloader'];
handler.register = true;
handler.limit = true;

export default handler