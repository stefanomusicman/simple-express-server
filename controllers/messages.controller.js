const path = require('path'); //Module to help retrieve files

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'coffee.jpeg'));
    res.render('messages', {
        title: 'Messages',
        friend: 'Pietro'
    })
};

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}