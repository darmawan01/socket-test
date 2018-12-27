const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { socketConf } = require('./socket.conf');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

const server = http.Server(app);
server.listen(8001, (err) => console.log('Apps Running On Port 8001'));

const io = socketIO(server);
socketConf(io);