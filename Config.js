const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['918119042855']
global.ownername = "⸺꯭𓆩꯭〭〬𓆩U𝙧𝙖𝙝𝙖𝙧𝙖𓆪ﮩ꯭٨ـ o 。"//owner name
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Indian"

global.botname = '⸺꯭𓆩꯭〭〬𓆩U𝙧𝙖𝙝𝙖𝙧𝙖𓆪ﮩ꯭٨ـ o 。' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘⸺꯭𓆩꯭〭〬𓆩Mj𓆪ﮩ꯭٨ـ o 。'
global.packname = 'insta'
global.author = 'mj.exe____'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Mj."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaXNXHt8F2pCDdNq0p3E'

//custom prefix
global.prefa = ['!']

//false=disable and true=enable
global.welcome = false //auto welcome
global.react = false //auto react
global.groupOnly = false;
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 ⸺꯭𓆩꯭〭〬𓆩U𝙧𝙖𝙝𝙖𝙧𝙖𓆪ﮩ꯭٨ـ o 。 Bot 🎀*\n\n*🧩 ',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
