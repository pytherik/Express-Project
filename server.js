const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {                  //* status 200, content-type: text/html
  res.send(`<body style="background-color: #777;">
              <h1 style="font-size: 65;text-align: center; color: #f9d4a3;">
              Blödmann!
              </h1>
            </body>`);
});

app.get('/messages', (req, res) => {        //* status 200, content-type: text/html
  res.send(`<body style="background-color: #777;">
              <h1 style="font-size: 65;text-align: center; color: #f9d4a3;margin-top: 10%">
              Hallo Doofmann!
              </h1>
            </body>`);
});

app.get('/json', (req, res) => {            //* status 200, content-type: application/json
  res.send({ name: 'Dummkopf!!!!' });
});

app.post('/messages', (req, res) => {
  console.log('Bereite Nachrichten auf!')
});
  
// * Status-Code and Content-Type are automatically added to the Header



//* must be placed after routings!
app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
