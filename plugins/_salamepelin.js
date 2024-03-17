
export async function before(m, { conn, participants }) {
  // Inisialisasi state jika belum ada
  if (!conn.danil_join) {
    conn.danil_join = {
      join: false,
      time: 0,
    };
  }

  const currentTime = Math.floor(Date.now() / 1000);

  // Cek apakah pesan berasal dari grup dan apakah sudah memenuhi cooldown
  if (!m.isGroup || conn.danil_join.time > currentTime) {
    console.log("Not a group message or still in cooldown");
    return;
  }

  // Cek apakah pengirim adalah user premium
  const isOwners = global.db.data.users[m.chat]?.owners;

  let messageText = "";
  let mentionedUsers = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);

  // Logika sambutan berdasarkan nomor pengirim
  switch (m.sender) {
    case "6287856915280@s.whatsapp.net":
      messageText = "Perhatian, Epelin Cakep No Counter telah datang, beri hormat kepada Epelin";
      break;
    case "nolu@s.whatsapp.net":
      messageText = "Perhatian, Sepuh Gabut *Arss* telah datang, beri hormat!";
      break;
    default:
      if (isOwners) {
        messageText = "Selamat datang, Owner ku !";
      }
      break;
  }

  // Kirim pesan jika ada teks sambutan yang harus dikirim
  if (messageText) {
    await conn.sendMessage(
      m.chat,
      {
        text: messageText,
      },
      {
        quoted: m,
        mentions: mentionedUsers,
      }
    );

    // Atur ulang state danil_join untuk cooldown
    conn.danil_join = {
      join: true,
      time: currentTime + 600, // Cooldown 2 detik
    };
  } else {
    console.log("No message to send");
  }
}