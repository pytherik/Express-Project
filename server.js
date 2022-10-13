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

app.use((req, res, next) => {                    //* middleware - placed between request and response
  const start = Date.now();
  next();                                        //* dont't forget! otherwise the app gets stuck.
  console.log(`${req.method} ${req.url} ${Date.now() - start}ms`);  //* time passing
});

app.use((express.json()));           //* transform json data accessable in req.body

app.post('/friend', (req, res) => {
  if (!req.body.name) {             //* throw error on missing data  
    return res.status(400).json({   //* and return !important!
      error: 'Missing friend name'
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get('/friends', (req, res) => {                  //* status 200, content-type: text/html
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {     //* handle incoming id-request
  const friendId = Number(req.params.friendId);   //* converting to number not necessary
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);                //* set status manually
  } else {
    res.status(404).json({                        //* set status manually
     error: "Freund*in existiert nicht."
    });
  }
})


app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
