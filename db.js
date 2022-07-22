const db = require('mongoose');

db.Promise = global.Promise;
//'mongodb://localhost:27017/telegrom'
async function connect(url) {
    await db.connect(url, {
        useNewurlParser:true,
    });
    console.log('[db] Conectada con exito');
}

module.exports = connect;