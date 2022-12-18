var express = require('express');
var app = express();
var path = require('path');
// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//.env 
require('dotenv').config();
const db = require("./models");
const initRoutes = require("./routes/routes");
global.__basedir = __dirname + "/..";
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
db.sequelize.sync();
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
//routes

const port = process.env.PORT;

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port,"0.0.0.0",function(){
    console.log('Server is listening on port 1004');
});