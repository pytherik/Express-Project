const path = require('path');

function getMessages(req, res) {            //* use named functions to enable node help debugging
 
  res.render('messages', {
    title: 'Nachrichten für meine Freunde',
    friend: 'Hulk Hogan'
  })
 
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Andere0012.jpg'));
  // res.send(`<body style="background-color: #777;">
  //             <h1 style="font-size: 65;text-align: center; color: #f9d4a3;margin-top: 10%">
  //             Hallo Doofmann!
  //             </h1>
  //           </body>`);
};

function postMessage(req, res) {
  console.log('Verarbeite Nachrichten...')
};

module.exports = {
  getMessages,
  postMessage,
};
