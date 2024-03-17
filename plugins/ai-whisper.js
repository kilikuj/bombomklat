import WebSocket from 'ws'
import fs from 'fs'

let wss = 'wss://openai-whisper.hf.space/queue/join';
const whisper = async (buffer) => {
return new Promise(async (resolve, reject) => {
let result = {}
let send_data_payload = {
"fn_index":0,
"data":
[
{
"name": "audio",
"data":"data:audio/wav;base64," + buffer.toString('base64')
}
],
"session_hash":"cwpo8hy02ed"
}
const ws = new WebSocket(wss);
ws.onopen = function() {
console.log("Connected to websocket")
};
ws.onmessage = async function(event) {
let message = JSON.parse(event.data);
ws.send(JSON.stringify(send_data_payload));
switch (message.msg) {
case 'process_completed': 
result.text = message.output.data[0];
break;
}
};

ws.onclose = function(event) {
if (event.code === 1000) {
console.log('Process completed successfully');
} else {
m.reply('Err : WebSocket Connection Error:\n');
}
resolve(result)
};
})
}

let handler = async(m, { conn, text, args, command, usedPrefix}) => {

let q = m.quoted ? m.quoted : m
if (!q) return m.reply('Media not found')
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    
if (!/audio/.test(mime)) return m.reply(`Reply audio dengan perintah ${usedPrefix + command}`)

let media = await q.download?.()
let proses = await whisper(media);
if (!proses.text) return m.reply('Gagal memuat data.');
conn.sendMessage(m.chat, {text: proses.text}, {quoted: m})
}

handler.help = ['whisper']
handler.tags = ['ai']
handler.command = /^(ws|whisper|totext)$/i
handler.register = true 
handler.limit = true

export default handler