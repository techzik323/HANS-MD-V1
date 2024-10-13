"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test1", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*nipo online kama kawa* 👋 \n\n ' + "i'm a whatsapp bot multi-device created by Hans Tech";
    let d = '                                                                           𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 HANSTZ 𝐓𝐄𝐀𝐌✨';
    let varmess = z + d;
    var mp4 = 'https://i.imgur.com/lfqWcEv.jpeg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
