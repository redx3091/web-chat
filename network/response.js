const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid Format',
    '500': 'Internal Error',
}
exports.success = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if(!status){
        status = 200;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }
    res.status(status || statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function(req, res, message, status, details) {
    console.log('[response error]',details);

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
