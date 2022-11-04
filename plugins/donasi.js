const qrku = "https://github.com/ai-man-123"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • digi [0102810046]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/60102810046
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
