const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;

app.use((req, res, next) => {      
  const start = Date.now();
  next();                                       
  console.log(`${req.method} ${req.baseUrl}${req.url} ${Date.now() - start}ms`);  
});
app.use(express.static(path.join(__dirname, 'public')))
app.use((express.json()));
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express-Example',
    caption: 'Tours, Atomic-Café, 1989'
  });
});

app.use('/friends', friendsRouter);       //* mount friendsRouter on '/friends' path
app.use('/messages', messagesRouter);     //* mount messagesRouter on '/messages' path


app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
