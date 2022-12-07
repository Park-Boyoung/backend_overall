// @ts-check

const express = require('express');
const cors = require('cors');

const PORT = 4000;
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
// const { urlencoded } = require('express');

app.use(cors());
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행중입니다.`);
});