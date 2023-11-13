const express = require("express");
const app = express();
const http = require('http').createServer(app);
const port = 5000;
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
   let arr = []
   axios.get(url, { responseType: 'arraybuffer', responseEncoding: 'binary' }).then((resq) => {
      let newArr = []
      const $ = cheerio.load(resq.data)
      let a = $(".content .board_list ul li").text()
      console.log(a);
      res.send(newArr)
   })
})

http.listen(port, () => {
   console.log("Listen on port : " + port);
})