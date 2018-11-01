const express=require('express');
let server=express();
server.listen(8080);
server.use(express.static('template/ejs/'))
// 
server.use('/index',require('./router/index.js'))
server.use('/article',require('./router/article.js'))
server.use('/user',require('./router/user.js'))