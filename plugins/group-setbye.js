let handler = async (m, { conn, text, owner }) => {
    // Pastikan hanya owner yang dapat mengakses fitur ini
    if (m.sender !== owner) {
        return conn.reply(m.chat, 'Command ini hanya bisa diakses oleh owner.', m);
    }

    if (text) {
        // Ganti bagian ini dengan logika pengaturan sesuai kebutuhan Anda
        global.dbSucceed.data.chats.sBye = text;
        m.reply("Berhasil");
    } else {
        throw "Teks tidak boleh kosong";
    }
};

handler.help = ["setbye"];
handler.tags = ["group"];
handler.command = /^setbye$/i;
handler.group = true;
handler.owner = true; 
handler.admin = true; // Ganti admin dengan owner
handler.private = false; // Ganti false dengan true jika Anda ingin menggunakan perintah ini di obrolan pribadi

export default handler;
