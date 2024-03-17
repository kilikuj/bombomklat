import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Ganti nomor kamu
global.owner = [
['9999', 'VynaaChan', true]
] 
global.mods = []
global.prems = []
// Info info
global.nomerbot = '9999'
global.nomorwa = '9999'
global.nameown = 'ᴠʏɴᴀᴀ ᴄʜᴀɴ'
global.nomerown = '6283134698065'
global.packname = '© ᴇᴜᴘʜʏʟʟɪᴀ ɴᴇᴡ ᴇʀᴀ'
global.author = 'ᴠʏɴᴀᴀ ᴄʜᴀɴ'
global.namebot = 'ᴇᴜᴘʜʏʟʟɪᴀ ɴᴇᴡ ᴇʀᴀ'
global.wm = 'ᴇᴜᴘʜʏʟʟɪᴀ ɴᴇᴡ ᴇʀᴀ'
global.stickpack = 'ᴇᴜᴘʜʏʟʟɪᴀ ɴᴇᴡ ᴇʀᴀ'
global.stickauth = 'ᴇᴜᴘʜʏʟʟɪᴀ ɴᴇᴡ ᴇʀᴀ\n© ʙʏ ᴠʏɴᴀᴀ ᴄʜᴀɴ'


  

//thumbnail 
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.didyou = 'https://telegra.ph/file/d723e79cc63a19e6aeb26.jpg'
global.rulesBot = 'https://telegra.ph/file/1df2325bc0045a4769947.jpg'
// Ubah Foto Kamu Disni
global.thumbnail = 'https://telegra.ph/file/96bc76257b97dc255821f.jpg'
global.thumb = 'https://telegra.ph/file/96bc76257b97dc255821f.jpg'
global.logo = 'https://telegra.ph/file/50258d56b5cf27a7f8016.jpg'





// foto 
global.unReg = 'https://telegra.ph/file/ef9ca63211bd75173cb2d.jpg'
global.registrasi = 'https://telegra.ph/file/a247d8f2cb4c5da5a5c0c.jpg'
global.confess = 'https://telegra.ph/file/03cabea082a122abfa5be.jpg'
global.access = 'https://telegra.ph/file/2dfad8dc1973f3b994819.jpg'
global.tqto = 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg'
global.spotify = 'https://telegra.ph/file/d888041549c7444f1212b.jpg'
global.weather = 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg'
global.gempaUrl = 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg'
global.akses = 'https://telegra.ph/file/11205edd1d46e09b2abf9.jpg'
// wel/good
global.wel = 'https://telegra.ph/file/ddc2589307fe851dfa1db.mp4'
global.good = 'https://telegra.ph/file/b262558cf65343c584e64.mp4'
// Sosmed
global.sig = 'https://instagram.com/_xwby_'
global.sgh = 'http://linkbio.co/VLShop'
global.sgc = 'https://chat.whatsapp.com/Fm3eK89kfee9Pk4HebSH9Q'
// ambil .idgc ketik di grup lu 
// => m.chat 
global.idgc = '-'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '082389924037'
// Info Wait
global.wait = '*Tunggu sebentar..*'
global.eror = '*Terjadi Kesalahan*!'
global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.uptime = ''
global.xyro = 'UnlimitedXyroineeKey'
global.fxc = 'Frieren'
global.lol = 'GataDios' //GataDios , Akiraa, haikalgans
global.rose = 'Rk-ArssDaebotsu'
global.betabotz = 'CyberGenius'
global.xzn = 'namaaris' //y6rsxtbase,yoyox
global.neoxr = 'Rodotz'
global.ibeng = '-'

global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    rose: "https://itsrose.life",
    fxc: "https://api-fxc7.cloud.okteto.net",
    lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://itsrose.life": "Rk-83ba3adcfcc7af3b28ec46ec_free_tier",
    "https://api-fxc7.cloud.okteto.net": "Frieren",
    "https://api.lolhumaan.xyz": "GataDios"
    
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})