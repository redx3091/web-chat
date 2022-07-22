const Model = require('./model');

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

function listChat(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId) {
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populate) => {
                if(err) {
                    reject(err);
                    return false;
                }

                resolve(populate);
            });
    });
}

module.exports = {
    add: addChat,
    list: listChat,
}