import axios from 'axios';

const handler = async (m, { text, args }) => {
  if (!args[0]) throw 'Gunakan contoh .simi woee kontolll';
  
  try {
    const response = await axios.get(`https://skizo.tech/api/simi?text=${encodeURIComponent(text)}&apikey=${global.xzn}`);
    const result = response.data.result;
    
    m.reply(result);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengakses Simi API.');
  }
}

handler.command = ['simi'];
handler.tags = ['game'];
handler.help = ['simi <teks>'];

export default handler;