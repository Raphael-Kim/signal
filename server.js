const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'2273ulabula',
  database:'heyum'
});

db.connect();

app.listen(3210, ()=>{
  console.log('Always my eyes on here');
});

app.post('/checkKakao', function(req, res){
  var data = {
    kakaoCode: req.body.kakaoCode 
  };
  var sql = `SELECT kakaoCode FROM userInfo WHERE kakaoCode = '${data.kakaoCode}'`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/submit', function(req, res){
	console.log(req.body); 
  var data = {
    email: req.body.email, 
    name: req.body.name,
    check1: req.body.check1,
    check2: req.body.check2,
    check3: req.body.check3,
    kakaoCode: req.body.kakaoCode,
    kakaoImg: req.body.kakaoImg
  };
  var sql = 'INSERT INTO userInfo SET ?';
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      res.send(result);
    } 
  });
});

app.post('/fetchUserCode', function(req, res){
  var data = {
    kakaoCode: req.body.kakaoCode 
  };
  var sql = `SELECT userCode, name FROM userInfo WHERE kakaoCode = '${data.kakaoCode}'`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/askSubmit', function(req, res){
	console.log(req.body); 
  var data = {
    name: req.body.name, 
    writerCode: req.body.userCode,
    content: req.body.contents,
    datetime: req.body.datetime
  };
  var sql = 'INSERT INTO ask SET ?';
  db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
  });
});

app.post('/FetchNewAskCard', function(req, res){
  var sql = 
  `select 
  ask.askCode, ask.content as askTitle, ask.name, ask.datetime, ask.writerCode, answer.content as answerContent, answer.name as answerName, answer.count, answer.kakaoImg 
  from ask left join  (select
            s.askCode2, s.content, s.name, s.count, userInfo.kakaoImg
            from (select
            answer.askCode2, answer.content, answer.name, s.count, answer.writerCode2
            from answer join (select max(answerCode) as answerCode, askCode2, count(askCode2) as count from answer group by askCode2) s
            on (answer.answerCode = s.answerCode))s join userInfo
            on (s.writerCode2 = userInfo.userCode))answer
  on (ask.askCode = answer.askCode2) 
  ORDER BY ask.askCode DESC LIMIT 5;`;
  db.query(sql, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/FetchOldAskCard', function(req, res){
  var data = {
    askCode: req.body.currentAskCode
  };
  var sql =
  `select 
  ask.askCode, ask.content as askTitle, ask.name, ask.datetime, ask.writerCode, answer.content as answerContent, answer.name as answerName, answer.count, answer.kakaoImg 
  from ask left join  (select
            s.askCode2, s.content, s.name, s.count, userInfo.kakaoImg
            from (select
            answer.askCode2, answer.content, answer.name, s.count, answer.writerCode2
            from answer join (select max(answerCode) as answerCode, askCode2, count(askCode2) as count from answer group by askCode2) s
            on (answer.answerCode = s.answerCode))s join userInfo
            on (s.writerCode2 = userInfo.userCode))answer
  on (ask.askCode = answer.askCode2)
  where ask.askCode < '${data.askCode}' 
  ORDER BY ask.askCode DESC LIMIT 5;`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/commentSubmit', function(req, res){
	console.log(req.body); 
  var data = {
    askCode2: req.body.askCode2,
    content: req.body.contents,
    datetime: req.body.datetime,
    name: req.body.name,
    writerCode2: req.body.userCode,
  };
  var sql = 'INSERT INTO answer SET ?';
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/FetchAskerImg', function(req, res){
  var data = {
    userCode: req.body.writerCode
  };
  var sql =`select kakaoImg from userInfo where userCode = '${data.userCode}';`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/FetchNewAnswerCard', function(req, res){
  var data = {
    askCode: req.body.askCode
  };
  var sql =
  `select 
  answer.answerCode, answer.content, answer.datetime, answer.name, answer.score, answer.parent, userInfo.kakaoImg 
  from answer, userInfo 
  where userInfo.userCode = answer.writerCode2 and answer.askCode2 = '${data.askCode}' 
  ORDER BY answer.answerCode DESC LIMIT 5;`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});

app.post('/FetchOldAnswerCard', function(req, res){
  var data = {
    askCode: req.body.askCode,
    answerCode: req.body.currentAnswerCode
  };
  var sql = 
  `select 
  answer.answerCode, answer.content, answer.datetime, answer.name, answer.score, answer.parent, userInfo.kakaoImg 
  from answer, userInfo 
  where userInfo.userCode = answer.writerCode2 and answer.askCode2 = '${data.askCode}' and answer.answerCode < '${data.answerCode}' 
  ORDER BY answer.answerCode DESC LIMIT 5;`;
  db.query(sql, data, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.send(result);
    } 
  });
});