/**
 * Created by mon on 2016/11/10.
 */
const path = require('path');
const express = require('express');
const app = express();

//定义路由中间件
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

//设置模版引擎
app.set('views', path.join(__dirname, 'views')); //设置存储模版的目录
app.set('view engine', 'ejs');

app.use('/',indexRouter);
app.use('/users',usersRouter);

//错误处理
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);