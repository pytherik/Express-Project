const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
  res.send(`<body style="background-color: #777;">
              <h1 style="font-size: 65;text-align: center; color: #f9d4a3;">
              Blödmann!
              </h1>
            </body>`);
})

app.get('/messages', (req, res) => {
  res.send(`<body style="background-color: #777;">
              <h1 style="font-size: 65;text-align: center; color: #f9d4a3;margin-top: 10%">
              Hallo Doofmann!
              </h1>
            </body>`);
})


app.listen(PORT, () => console.log(`Server is lisening on port ${PORT}`));
