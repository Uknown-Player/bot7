const fs = require("fs")

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require("./system/lib/MyFunction")

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString("id")

//===========================//

global.prefa = ["","!",".",",","🐬","🐋"]
global.owner = ["6282396328667"]//bisa pake no kamu
global.ownMain = "6282396328667"//bisa pake no kamu
global.NamaOwner = "decode.id"
global.usePairingCode = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.filenames = "case.js"//ini juga bisa di rename
global.namabot = "Agler Forger"//bisa kamu namain bot nya
global.author = "AndraZyy"
global.packname = "TheBot"//bisa kamu namain
global.yt = "https://whatsapp.com/channel/"//kalau ada yt isi aj
global.hiasan = `	◦  `//tergantung 
global.gris = '`'//bisa di pake kalau ada qris

//===========================//

//===========================//

//API PREMIUM\\
global.APIs = {
	gsz: 'https://api.betabotz.eu.org'
}

global.APIKeys = {
	'https://https://api.betabotz.eu.org': 'Syaxyz'
}

global.gsz = 'syaxyz'
global.logic = 'Saya adalah AI yang dirancang untuk membantu mahasiswa dalam pembahasan coding serta pelajaran umum seperti Matematika, Bahasa Indonesia, Bahasa Inggris, Fisika, Kimia, Rekayasa Perangkat Lunak, dan Basis Data dengan penjelasan yang mudah dipahami dan relevan'

//===========================//

global.xchannel = {
	jid: '@newsletter'
	}

//===========================//

global.country = `10`
global.system = {
gmail: `TheBot@gmail.com`,
}

//===========================//

global.nick = {
aaa: "Agler Forger v9",//ganti sesuai selera
sss: "TypeCase📌"//ganti sesuai selera
}
//ganti aj sesuai selera
global.mess = {
 ingroup: '*Can Only Be Used In Group🎃*',
 admin: '*Can Only Be Used Admin🎃*',
 owner: '*Can Only Be Used Owner🎃*',
 premium: '*Can Only Be Used Owner And Premium User🎃*',
 usingsetpp: '*Setpp Can Only Be Used By The Owner*',
 wait: '*Waiting For Processing*',
 success: '*Success🎃*',
 bugrespon: '> Agler Sending Bug..\n> Wait One Minute For Crash🎃'
}

//===========================//

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
