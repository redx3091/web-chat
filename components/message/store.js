const model = require('./model');

function addMessage(message) {
    //list.push(message);
    const myMessage = new model(message)
    myMessage.save(); 
}

function getMessage(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterChat !== null){
            filter = {chat: filterChat};
        }
        model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    })
}

updateText = async (id, message) => {
    const foundMessage = await model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return model.deleteOne({
        _id: id
    });
}
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    removeMessage

}