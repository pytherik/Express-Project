const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Jimi Hendrix'
  },  
  {
    id: 1,
    name: 'Betty Davis'
  },  

];

app.get('/friends', (req, res) => {                  //* status 200, content-type: text/html
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {     //* handle incoming id-request
  const friendId = req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);                 //* set status manually
  } else {
    res.status(404).json({                        //* set status manually
     error: "Freund*in existiert nicht."
    });
  }
})



app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
