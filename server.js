const express = require('express');
const friendsController = require('./controllers/friends.controller')
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;


app.use((req, res, next) => {      
  const start = Date.now();
  next();                                       
  console.log(`${req.method} ${req.url} ${Date.now() - start}ms`);  
});

app.use((express.json()));           

// * functions stored in controllers/friends.controller.js

app.post('/friend', friendsController.postFriend);
app.get('/friends', friendsController.getAllFriends);
app.get('/friends/:friendId', friendsController.getOneFriend);

// * functions stored in controllers/messages.controller.js

app.get('/messages', messagesController.getMessages);
app.post('messages', messagesController.postMessage);



app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
