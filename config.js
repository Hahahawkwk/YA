const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://restapi.frteam.xyz',
}

global.APIKeys = {
	'https://restapi.frteam.xyz': 'XFBDup8X',
}

// Other
global.apikey = ['XFBDup8X']
global.apikeyprem = ['danzzprem']
global.apikeyvip = ['XFBDup8X'] 
global.namabot = ['KadekBotz']
global.namaowner = ['KadekBotz']
global.wmm = 'Whatsapp Bot Multi Device By Kadek'
global.owner = ['6283114072346']
global.premium = ['6283114072346']
global.packname = 'BotzzMee'
global.author = 'KadekGanz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = 'BotzzMee'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "10",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/532595ee8b16b4eebde86.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
