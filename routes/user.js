// @ts-check

const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   const str = '여기는 유저 라우터';
//   const json = JSON.stringify(str);
//   res.send(json);
// });

// 파라미터
router.get('/id/:id', (req, res) => {
  const str = `파라미터로 받은 id 값은 ${req.params.id}입니다.`;
  const json = JSON.stringify(str);
  res.send(json);
});

// 쿼리
router.get('/', (req, res) => {
  const str = `쿼리로 받은 id 값은 ${req.query.id}, password 값은 ${req.query.password}입니다.`;
  const json = JSON.stringify(str);
  res.send(json);
});

router.post('/', (req, res) => {
  const str = `Form 태그로부터 받은 id 값은 ${req.body.id}, password 값은 ${req.body.password}입니다.`;
  const json = JSON.stringify(str);
  res.send(json);
});
module.exports = router;
