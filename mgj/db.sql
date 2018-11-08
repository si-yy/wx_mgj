#db.sql   项目数据库脚本文件
#1:创建库  mgj
#2:进入    mgj 
#3:创建用户名   mgj_user

CREATE DATABASE mgj CHARSET=utf8;
USE mgj;

#用户表
CREATE TABLE mgj_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO mgj_user VALUES(null,'tom',md5('123'));
INSERT INTO mgj_user VALUES(null,'dongdong',md5('123'));
INSERT INTO mgj_user VALUES(null,'jerry',md5('123'));

#轮播表
CREATE TABLE mgj_imagelist(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(50)
);
INSERT INTO mgj_imagelist VALUES(null,
'http://127.0.0.1:3000/img/banner1.webp',
'图片1');
INSERT INTO mgj_imagelist VALUES(null,
'http://127.0.0.1:3000/img/banner2.webp',
'图片2');
INSERT INTO mgj_imagelist VALUES(null,
'http://127.0.0.1:3000/img/banner3.webp',
'图片3');

SELECT id,img_url,title FROM mgj_imagelist;



