/*
set template by VynaaChan 
*/

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    const menu = global.db.data.settings[conn.user.jid]

    let type = (args[0] || '').toLowerCase()
        
    switch (type) {
    case 'image':
    
    menu.image = true
    menu.gif = false
    menu.teks = false
    menu.doc = false
    m.reply(`Success change template *Image*`)
break 
    case 'gif':
    
    menu.image = false
    menu.gif = true
    menu.teks = false
    menu.doc = false
    m.reply(`Success change template *Gif*`)
break 
    case 'teks':
    
    menu.image = false
    menu.gif = false
    menu.teks = true
    menu.doc = false
    m.reply(`Success change template *Text*`)
break 
    case 'doc': case 'document':
    
    menu.image = false
    menu.gif = false
    menu.teks = false
    menu.doc = true
    m.reply(`Success change template *Document*`)
break 
    
    default:
    return await conn.sendThumb(m.chat, `   𝑻𝒆𝒎𝒑𝒍𝒂𝒕𝒆 𝒏𝒐𝒕 𝒇𝒐𝒖𝒏𝒅 \n\n *List template :*\n\n1. image\n2. gif\n3. teks\n4. document\n\n${global.namebot}`, thumbnail, m)
    
    }
}
handler.help = ["image","gif","teks","doc"].map(v => `setmenu ${v}`)
handler.tags = ['owner']
handler.command = /^(setmenu)?$/i

handler.group = false
handler.rowner = true

export default handler