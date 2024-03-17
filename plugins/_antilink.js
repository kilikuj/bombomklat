

const isLinkTik = /tiktok.com/i;
const isLinkYt = /youtube.com|youtu.be/i;
const isLinkTel = /t.me/i;
const isLinkFb = /facebook.com|fb.me/i;
const isLinkIg = /instagram.com/i;
const isLinkHttp = /http|https/i;
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    let chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);
    let bot = global.db.data.settings[this.user.jid] || {};
    const isAntiLinkTik = isLinkTik.test(m.text);
    const isAntiLinkYt = isLinkYt.test(m.text);
    const isAntiLinkTel = isLinkTel.test(m.text);
    const isAntiLinkFb = isLinkFb.test(m.text);
    const isAntiLinkIg = isLinkIg.test(m.text);
    const isAntiLinkHttp = isLinkHttp.test(m.text);
    if (chat.antiLinkTik && !isAdmin && isAntiLinkTik) {
        m.reply(`Waduh *${name}* Telah Mengirim Link Tiktok!!${isBotAdmin ? '' : '\n\nJadikan Bot Admin Terlebih dahulu'}`);
        if (isBotAdmin && chat.antiLink && !isAdmin) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'masih aja share link, hadeuh kwkw')           
        }
    }
    if (chat.antiLink && isAntiLinkYt&& !isAdmin) {
        m.reply(`Waduh *${name}* Telah Mengirim Link Youtube!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLink && !isAdmin) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'masih aja share link, hadeuh kwkw')      
        }
    }
    
    if (chat.antiLink && isAntiLinkTel&& !isAdmin) {
        m.reply(`Waduh *${name}* Telah Mengirim Link Telegram!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLink && !isAdmin) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'masih aja share link, hadeuh kwkw')      
        }
    }
    
    if (chat.antiLink && isAntiLinkFb&& !isAdmin) {
        m.reply(`Waduh *${name}* Telah Mengirim Link Facebook!!*${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && chat.antiLink && !isAdmin) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'masih aja share link, hadeuh kwkw')      
        }
    }
    if (chat.antiLink && isAntiLinkIg&& !isAdmin) {
        m.reply(`Waduh *${name}* Telah Mengirim Link Instagram!!${isBotAdmin ? '' : '\n\nJadikan Bot Admin Terlebih dahulu'}`);
        if (isBotAdmin && chat.antiLink && !isAdmin) {
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'masih aja share link, hadeuh kwkw')      
        }
    }

    if (chat.antiLinkAll && isAntiLinkHttp&& !isAdmin) {

        if (isBotAdmin && chat.antiLinkAll && !isAdmin) {        
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLinkAll && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Yahaha, Moga Harimu Suram!')      
        }
    }
    return !0;
}