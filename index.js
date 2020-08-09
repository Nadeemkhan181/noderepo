const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
var expressHbs = require('express-handlebars');
var path = require('path')
var ip = require("ip");


app.engine('.hbs', expressHbs({defaultLayout: 'index', extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname, 'public' )));


app.get('/', (req, res) => {
    res.render("layouts/index", {address : ip.address()})
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})