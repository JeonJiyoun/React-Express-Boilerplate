require('dotenv').config();  // env 파일 import
const path = require('path'); // 파일 경로 불러오기 위한 라이브러리
const express = require('express'); // express framework 사용
const app = express(); // express 실행
const port = process.env.PORT; // env 파일 내에서 PORT변수 가져옴  
const apiRouter = require('./routes/index'); // endpoint 가 api 로 시작하면 route 폴더안에 있는 index.js  폴더로 이동

//ssr(express server 에서 build 된 react html 파일을 render) + csr(이후 render)

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../client', 'build'))); // static 파일 가져옴 원래 express 는 public 을 default path 로 인식하고 있음

// use = middleware
// res = return
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

// start express server on port 3000
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;