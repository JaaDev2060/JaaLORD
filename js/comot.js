require('./config/settings')
const { BufferJSON, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const { uptotelegra } = require(`./lib/upload`)
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const thumb = fs.readFileSync ('./image/thumb.jpg')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, moment, jsonformat, parseMention, getRandom } = require('./lib/functions')

module.exports = comot = async (comot, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const { color, bgcolor, pickRandom, randomNomor } = require('./lib/console.js')
const { wallpaper, wikimedia, quotesAnime, komiku, ssweb, sholat, tafsirsurah, fbdl } = require("./lib/search");
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//`
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await comot.decodeJid(comot.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));

const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await comot.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = antilink.includes(from) ? true : false
const petik = "```"
global.v = '𝗖𝗢𝗠𝗢𝗧 𝗠𝗗'
const reply = (teks) => {
return comot.sendMessage(from, { text: teks, contextInfo:{ forwardingScore: 9999, isForwarded: true}}, { quoted: m})} 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const pler = JSON.parse(fs.readFileSync('./js/db/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const prem = JSON.parse(fs.readFileSync('./database/premium.json').toString())
const isPrem = prem.includes(m.sender)
	
if (!comot.public) {
if (!m.key.fromMe) return
} 
//anti link
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isAdmins) return reply(mess.admin)
if (isCreator) return reply(mess.owner)
await comot.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.sender
               }
            }).then((res) => reply('⚠️ Link Group Detected!\n✅ The link has been deleted!')).catch((err) => m.reply(mess.error))
}

}

    if (m.message) {
            comot.readMessages([m.key])
        }
        
        if (global.autoRecord) {
if (command) {
comot.sendPresenceUpdate('recording', from)
}
}
        
        async function replyprem(teks) {
    m.reply(`This feature is for premium user, contact the owner to become premium user`)
}
        
const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${nameowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namebot},;;;\nFN:${namebot}\nitem1.TEL;waid=${owner}:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        
const replyy = (teks) => {
comot.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

// cmd
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await comot.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

switch (command) {
//=================================================//
case 'owner':
reply('wa.me/6283838077485 not spam')
break
case 'menu': {
let menu =`𝗕𝗼𝘁 𝗶𝗻𝗶 𝗮𝗱𝗮𝗹𝗮𝗵 𝗯𝗼𝘁 𝗺𝘂𝗹𝘁𝗶 𝗱𝗲𝘃𝗶𝗰𝗲 𝘆𝗮𝗻𝗴 𝗯𝗲𝗿𝗷𝗮𝗹𝗮𝗻 𝗺𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗹𝗶𝗻𝘂𝗸 , 𝗯𝗼𝘁 𝗶𝗻𝗶 𝗺𝗮𝘀𝗶𝗵 𝘁𝗮𝗵𝗮𝗽 𝗽𝗲𝗻𝗴𝗲𝗺𝗯𝗮𝗻𝗴 𝘀𝗲𝗵𝗶𝗻𝗴𝗴𝗮 𝗺𝗮𝘀𝗶𝗵 𝗮𝗱𝗮 𝘆𝗮𝗻𝗴 𝗲𝗿𝗼𝗿 , 𝗱𝗶𝗹𝗮𝗿𝗮𝗻𝗴 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁

————「 𝗜𝗻𝗳𝗼 𝗯𝗼𝘁 」————

𝗡𝗮𝗺𝗮 𝗯𝗼𝘁 : 𝗖𝗼𝗺𝗼𝘁 𝗠𝗗
𝗡𝗮𝗺𝗮 𝗼𝘄𝗻𝗲𝗿 : 𝗝𝗮𝗮 𝗢𝗙𝗖
𝗩𝗲𝗿𝘀𝗶 𝗯𝗼𝘁 : 𝙑𝟭
𝗕𝗮𝗶𝗹𝗲𝘆𝘀 𝗯𝗼𝘁 : 𝘼𝙙𝙞𝙬𝙖𝙟𝙨𝙝𝙞𝙣𝙜
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}

🅞 = 𝗢𝘄𝗻𝗲𝗿 𝗼𝗻𝗹𝘆
🅖 = 𝗚𝗿𝗼𝘂𝗽 𝗼𝗻𝗹𝘆
🅕 = 𝗙𝗿𝗲𝗲
🅟 = 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗼𝗻𝗹𝘆

╭─「 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}tiktok 🅕
╰─────────╼
╭─「 𝗚𝗿𝗼𝘂𝗽 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}antilink 🅖
│‎➤ » ${prefix}group 🅖
│‎➤ » ${prefix}kick 🅖
│‎➤ » ${prefix}hidetag 🅖
╰─────────╼
╭─「 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}tourl 🅕
│‎➤ » ${prefix}qc 🅕
│‎➤ » ${prefix}sticker 🅟
│‎➤ » ${prefix}attp 🅕
╰─────────╼
╭─「 𝗢𝘄𝗻𝗲𝗿 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}addprem 🅞
│‎➤ » ${prefix}delprem 🅞
│‎➤ » ${prefix}join 🅞
│‎➤ » ${prefix}self 🅞
│‎➤ » ${prefix}public 🅞
╰─────────╼`
comot.sendMessage(m.chat, {
image: fs.readFileSync('./image/logo.jpg'),
caption: menu,
contextInfo:{
mentionedJid:[text],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": false,
"title": ` ${global.namebot}`,
"body": `${nameowner}`,
"sourceUrl": `${gr}`
                },
                quoted: fkontak
                }})
                }
break
case 'attp': {             
if (args.length == 0) return m.reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗛𝗮𝗹𝗹𝗼`)
await comot.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${args}` }}, { quoted: m })
}
break
case 'addprem':
if (!args[0]) return m.reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝟲𝟮𝟴𝟯𝟴𝟯𝟴𝟬𝟳𝟳𝟰𝟴𝟱`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await comot.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`𝗡𝗼𝗺𝗼𝗿 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 𝗣𝗿𝗲𝗺𝗶𝘂𝗺`)
break
case 'delprem':
if (!args[0]) return m.reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝟲𝟮𝟴𝟯𝟴𝟯𝟴𝟬𝟳𝟳𝟰𝟴𝟱`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝗣𝗿𝗲𝗺𝗶𝘂𝗺`)
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `${petik}❎ Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}${petik}`
if (!quoted) throw `${petik}❎ Kirim/Balas Keterangan Video/Gambar ${prefix + command}${petik}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await comot.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'sticker': {
if (!isPrem) return m.reply(mess.prem)
if (!quoted) return m.reply(`❎ 𝗥𝗲𝗽𝗹𝘆 𝗳𝗼𝘁𝗼 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁 𝗱𝗮𝗻 𝗸𝗲𝘁𝗶𝗸 ${command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
m.reply(mess.wait)
let encmedia = await comot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply(`❎ 𝗠𝗮𝘅𝗶𝗺𝘂𝗺 𝟭𝟬 𝘀𝗲𝗰𝗼𝗻𝗱`)
let media = await quoted.download()
let encmedia = await comot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`❎ 𝗥𝗲𝗽𝗹𝘆 𝗳𝗼𝘁𝗼 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁 𝗱𝗮𝗻 𝗸𝗲𝘁𝗶𝗸 ${command}`)
}
}
break
case "tiktok": {
if (!q) return m.reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} https://vm.tiktok.com/ZSLdF9NYN`)
await m.reply(mess.wait)
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${q}`)
let vidtik = await comot.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: `mess.succes` }, { quoted: m })
}
break
case 'hidetag': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`${petik}Text?${petik}`)
comot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'group': {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!q) return m.reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗰𝗹𝗼𝘀𝗲`)
if (args[0] == 'close') {
comot.groupSettingUpdate(from, 'announcement')
m.reply(mess.succes)
} else if (args[0] == 'open') {
comot.groupSettingUpdate(from, 'not_announcement')
m.reply(mess.succes)
} else {
m.reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗼𝗽𝗲𝗻`)
}}
break
case 'antilink':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗼𝗻`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return m.reply('✅ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗮𝗸𝘁𝗶𝗳')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return m.reply('✅ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝗻𝗼𝗻𝗮𝘁𝗶𝗳𝗸𝗮𝗻')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else { m.reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗼𝗻/𝗼𝗳𝗳`) }
           
function generateRandomPassword() {
  // Generate a 10-character random password
  return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
break
case 'join': {
if (!isCreator) return (mess.owner)
if (!text) throw '𝗠𝗮𝘀𝘂𝗸𝗮𝗻 𝗹𝗶𝗻𝗸 𝗴𝗿𝗼𝘂𝗽𝗻𝘆𝗮 𝗸𝗮𝗸'
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com/')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await comot.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await comot.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
m.reply(`𝗗𝗼𝗻𝗲`)
}
break
case "qc": {
if (!quoted){
const getname = await comot.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
comot.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
comot.sendImageAsSticker(from, buffer, m, opt)
});
} else {
m.reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${command} 𝗵𝗮𝗶`)
}
}
break

default:
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})