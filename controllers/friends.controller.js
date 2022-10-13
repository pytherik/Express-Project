const model = require('../models/friends.model');


function postFriend(req, res) {
  if (!req.body.name) {   
    return res.status(400).json({
      error: 'Missing friend name'
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length
  };
  model.push(newFriend);
  res.json(newFriend);
};

function getOneFriend(req, res) { 
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);    //* simple json as 'View'
  } else {
    res.status(404).json({ 
     error: "Freund*in existiert nicht."
    });
  }
};

function getAllFriends (req, res) {   
  res.json(model);                   //* friends array as 'View'
};



module.exports = {
  postFriend,
  getOneFriend,
  getAllFriends,
};