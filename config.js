const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3rVPnJVMelkABEUUbyA6OTkpIQCCpBrgWKn/32C3Z3uhzlneniqVFFrr1pr7f0C0gxXSEctmLyAvMQNJKhbkjZHYAKk2vdRCfrAgwSCCQhUi+bmlDAv9lMmH1LyYSbk0lFnb5oVBv4xUKbFluK3NEU9g9c+yOtzgt0/ADYSPbUHB9efRXvok1l1L1bKmV6EWyvEhKNHom8t7Yh3rh1ghwhxidNAyUN0QSVMdNSaEJffo09JqsQHJ++yypajwTwmmrOcudRiKwS5cublQ7gf9nqb1rDG36R/OqakWZmpRtu1v0cGbxrO/VQuFG66UE1WQ+djNU/d9FC90a9wkCJv7qGUYNJ+W/da5Q+3VYuFkEt7moNTxrEHkaKIU5OrVgOB22uswxrGPs2+R3yFNNqJ5P1QVBqprpf31NXmA9117b2wonZeMJaF7KQtJTX+StwsP7IS/x/dVWMlHSCzLdeDW6wEBgzlJcqPSSRnJ3o1XKij2WCus5mpfJM+Oxo3cAk1zaT2UplweWIt8Nw3ruU5FOprrARc4Ryy9TEKPulDUpd/YnmCEQ6l/LwVbterfafUi9ouDUOCcL+TJF4Z2m3EYHd6sB0N18ezEB3gKtnpC9fmpTXD9MgdJu3cXrpKax/1I3H5LAqeHy+KUTv3wIR+7YMSBbgiJSQ4Sx97XB9Ar9kht0TkoS7o0Wtv1kYmmg5VsajEaLboTY1C1a3SDKlk1AzS1oC8XtXUM+iDvMxcVFXI03BFsrI1UFXBAFVg8vfPPkjRjbz51lVj6T7wcVkRK63zJIPeh6kfh9B1szoluzZ15W6BSjChPrcRITgNqk7GOoWlG+IGySEkFZj4MKnQax94qMEu6vDAr1/NRqdycWMz69HTEV345qnedJTDLH37heZ4SPvC8In1eeGJY6jx05nj6CdhPD4jyPIUz1OgD/B7y3R3fuvg8Ohvqu1BdigkFYM7niWnu24etdQyHi68SY9K5IEJKWvUB2foxnW+z2KU/gHXPN3iqZP1WmNbFboXLV2fCqamdA3iL7hvloLJy+eYkjOvw2NPJstpjAr64PJIIO5ezrAsz1M0zzNjekIzf1U/rp2QMM9/pIh0uO+idzc8RCBOKjAB8mJQjvSNpqwbGo8qVRWNQJQDEXya9BH2tzRd1Gs1zinxnubbeBFm/C2vmUQoCmZ3psfCjFvibbEgVpNen/8FBExAeauDjScoM1tWZNfZ1tODPYwuA7nY+piZ5fOCsfRiMMrvQ7lcx6NNUR2ig7vbMLHMFuKgme9qPFulmhMxljPteeRST6/PXbW3sHwtdm+mVujRm3sSX8gthFEWZ+ZV7hF+6UQS20sUE0dCvJqNI6apo7u+kK1I3a/SuT8wT/nFXmp7Die+ssCUrZz3B9HJ8HsbPsZA8j5+8aNDXt6j5WP0mGYp7Cz6L3O+ppx67X/BeJ+Pv0mSdAqrpal7osEPrZN8hGsXnknuw4LEF8E3t0jmYojP9pIfg9fXn32QJ5D4WXkBEwBTr8ywB/oggRURPxt1jy+oIvCSgwk9YjmeoyiG74NLK+b5jkDy0d9A7L51PQKv/wAMz+4H+gcAAA==',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "Bigsly",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 233595652412",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

