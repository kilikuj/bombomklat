import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/9ac8918bc081b12262fa5.mp4"},
      gifPlayback: true,
      caption: 'Euphyllia adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh VynaChan, bot ini menggunakan sumber asli base Botcahx yang terus diperbarui oleh VynaChan untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.\nDengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, Bot Euphyllia dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. Bot Euphyllia juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.\nSebagai produk yang dikembangkan dan diperbarui oleh VynaChan, Bot Euphyllia selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan Bot Euphyllia, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan Bot Euphyllia sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!\n\nEuphyllia is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by VynaChan, this bot uses the original source of Botcahx that is constantly updated by VynaChan to provide an easier and more enjoyable interactive experience.With its broad ability to answer questions and provide solutions, Bot Euphyllia can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Bot Euphyllia can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.\nAs a product developed and updated by VynaChan, Bot Euphyllia always receives the latest feature updates to provide better and more advanced services.With Bot Euphyllia, you dont have to worry about the\nquality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Bot yukk now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!',
      contextInfo: {
      externalAdReply: {
      title: `© About Me`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/97cc66919b3fa27f2fdbd.jpg',
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(about)$/i;

export default handler;