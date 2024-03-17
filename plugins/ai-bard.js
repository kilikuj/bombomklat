import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('Ada yang bisa di bantu');
  } else {
    const apiUrl = `https://api.azz.biz.id/api/bard?q=${text}&key=alok`;

    m.reply('Sedang memproses...'); // Add loading message

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the data here
        const result = data.respon;
        m.reply(result);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        m.reply('Maaf, terjadi kesalahan saat mengambil data dari API.');
      });
  }
};

handler.command = handler.help = ['bard'];
handler.tags = ['ai'];
handler.register = true

handler.limit = true;

export default handler;