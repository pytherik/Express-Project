const express = require('express');

//* separate imports of node modules from applicational imports

const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('ip-address: ', req.ip);
  next();
})
  

//* setting paths relative to mountpoint of friendsRouter (server.js)
friendsRouter.post('/', friendsController.postFriend); 
friendsRouter.get('/', friendsController.getAllFriends);
friendsRouter.get('/:friendId', friendsController.getOneFriend);


module.exports = friendsRouter;