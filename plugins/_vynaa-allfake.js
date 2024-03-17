
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	let fotonyu = 'https://telegra.ph/file/70e494fe577ec970790ca.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()

global.emror = 'https://telegra.ph/file/a6294049a1863a69154cf.jpg'

		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.skrep = (await import('../scraper/scrape.js'))
		global.skrep2 = (await import('../scraper/scrape2.js'))
		global.skrep3 = (await import('../scraper/scrape3.js'))
		global.skrepdl = (await import('../scraper/scrape_dl.js'))
		global.skrep4 = (await import('../scraper/scrape4.js'))
		global.skreps = (await import('../scraper/scrape-search.js'))
		global.skrepdl = (await import('../scraper/scrape_dl.js'))
        global.axios = (await import('axios')).default
		global.fetch = (await import('node-fetch'))
        global.cheerio = (await import('cheerio'))
		global.bochil = (await import('@bochilteam/scraper'))
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await conn.getName(owner[0] + '6283134698065@s.whatsapp.net'), 'Vynaa Chan', 'https://whatsapp.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
        global.fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
        
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				// forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: namebot,
					body: '',
					mediaUrl: ``,
					description: '',
					previewType: "PHOTO",
					thumbnailUrl: logo,
					sourceUrl: sgc,					
				}
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            title: namebot,
            body: '',
            thumbnailUrl: pp,
            sourceUrl: sig
         }
       }
     }
   }
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}