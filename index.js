/**
 * Created by mon on 2016/11/10.
 */
const express = require('express');
const app = express();

//定义路由中间件
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
app.use('/',indexRouter);
app.use('/users',usersRouter);

app.listen(3000)