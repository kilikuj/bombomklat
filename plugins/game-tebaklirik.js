import fetch from 'node-fetch';

function getRandomImage() {
    // Gantilah dengan logika pengambilan gambar acak sesuai kebutuhan Anda
    const imageUrls = [
        'https://i.ibb.co/41ZrKWs/acbcae5e05f77aa2208baa00e8d0598e.jpg',
        'https://i.ibb.co/41ZrKWs/acbcae5e05f77aa2208baa00e8d0598e.jpg',
        'https://i.ibb.co/41ZrKWs/acbcae5e05f77aa2208baa00e8d0598e.jpg',
        // Tambahkan URL gambar sesuai kebutuhan
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

let timeout = 120000;
let poin = 4999;

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = getRandomImage();

    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {};
    let id = m.chat;

    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0]);
        throw false;
    }

    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');

    if (!res.ok) throw await `${res.status} ${res.statusText}`;

    let data = await res.json();
    let json = data[Math.floor(Math.random() * data.length)];
    let caption = `*${command.toUpperCase()}*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hlir untuk bantuan
Bonus: ${poin} XP
    `.trim();

    conn.tebaklirik[id] = [
        await conn.sendFile(m.chat, imgr, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[id][0]);
            delete conn.tebaklirik[id];
        }, timeout)
    ];
}

handler.help = ['tebaklirik'];
handler.tags = ['game'];
handler.command = /^tebaklirik/i;

export default handler;
