const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const aboutRouter = require('./routes/about.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {      
  const start = Date.now();
  next();                                       
  console.log(`${req.method} ${req.baseUrl}${req.url} ${Date.now() - start}ms`);  
});

app.use((express.json()));           

app.use('/friends', friendsRouter);       //* mount friendsRouter on '/friends' path
app.use('/messages', messagesRouter);     //* mount messagesRouter on '/messages' path

app.use('/about', aboutRouter); //!


app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
