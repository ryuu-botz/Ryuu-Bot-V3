let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗦𝗛𝗜𝗡𝗡 𝗕𝗢𝗧*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › Group Random Botz', description: "Group Utama 𝙳𝚁𝙰𝙶𝙾𝙽-𝙱𝙾𝚃𝚉", rowId:".gcbot"},
        {title: '✉️ › Grup Anime', description: "Group Kedua", rowId:".gcbot2"},
        {title: '📧 › Group Full Bot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator 𝙳𝚁𝙰𝙶𝙾𝙽-𝙱𝙾𝚃𝚉 >ω<", rowId:".owner"},
        {title: '🧿 › Info Fangz BOT', description: "Info 𝙳𝚁𝙰𝙶𝙾𝙽-𝙱𝙾𝚃𝚉 >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk Levi ≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler