// @ts-check

const mongoose = require('mongoose');

const MDB_URI =
  'mongodb+srv://boyoung:7167@cluster0.uae2ehq.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

const connect = () => {
  mongoose.connect(MDB_URI, { dbName: 'kdt4' }, (err) => {
    if (err) {
      console.error('몽고디비 연결 문제 발생', err);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });

  mongoose.connection.on('error', (err) => {
    console.error('몽고디비 연결 문제 발생', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊어졌습니다. 연결을 재시도합니다.');
    connect();
  });
};

module.exports = connect;
