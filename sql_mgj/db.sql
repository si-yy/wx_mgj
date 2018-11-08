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


CREATE TABLE product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  xiaoshou VARCHAR(25),
  title   VARCHAR(255),
  price   INT,
  cang    INT
);
INSERT INTO product VALUES(null,'','已售530件','时尚套装两件套秋季女装新款韩版宽松小清新气质休闲撞色针织衫毛衣外套学生显瘦百搭针织半身裙女',80,1000);
INSERT INTO product VALUES(null,'','已售630件','冬季中长款加厚毛衣裙套头女宽松半高领韩版外套打底针织衫',90,2000);
INSERT INTO product VALUES(null,'','已售830件','假两件拼接格子高领连帽加厚套头卫衣女2018秋季新款韩版宽松长袖上衣外套',100,3000);
INSERT INTO product VALUES(null,'','已售930件','2018秋冬新款纯色麂皮绒加厚夹克外套男士韩版潮流鹿皮绒棉衣保暖棉服上衣男装',110,4000);
INSERT INTO product VALUES(null,'','已售530件','时尚套装两件套秋季女装新款韩版宽松小清新气质休闲撞色针织衫毛衣外套学生显瘦百搭针织半身裙女',80,1000);
INSERT INTO product VALUES(null,'','已售630件','冬季中长款加厚毛衣裙套头女宽松半高领韩版外套打底针织衫',90,2000);
INSERT INTO product VALUES(null,'','已售830件','假两件拼接格子高领连帽加厚套头卫衣女2018秋季新款韩版宽松长袖上衣外套',100,3000);
INSERT INTO product VALUES(null,'','已售930件','2018秋冬新款纯色麂皮绒加厚夹克外套男士韩版潮流鹿皮绒棉衣保暖棉服上衣男装',110,4000);
INSERT INTO product VALUES(null,'','已售530件','时尚套装两件套秋季女装新款韩版宽松小清新气质休闲撞色针织衫毛衣外套学生显瘦百搭针织半身裙女',80,1000);
INSERT INTO product VALUES(null,'','已售630件','冬季中长款加厚毛衣裙套头女宽松半高领韩版外套打底针织衫',90,2000);
INSERT INTO product VALUES(null,'','已售830件','假两件拼接格子高领连帽加厚套头卫衣女2018秋季新款韩版宽松长袖上衣外套',100,3000);
INSERT INTO product VALUES(null,'','已售930件','2018秋冬新款纯色麂皮绒加厚夹克外套男士韩版潮流鹿皮绒棉衣保暖棉服上衣男装',110,4000);
INSERT INTO product VALUES(null,'','已售530件','时尚套装两件套秋季女装新款韩版宽松小清新气质休闲撞色针织衫毛衣外套学生显瘦百搭针织半身裙女',80,1000);
INSERT INTO product VALUES(null,'','已售630件','冬季中长款加厚毛衣裙套头女宽松半高领韩版外套打底针织衫',90,2000);
INSERT INTO product VALUES(null,'','已售830件','假两件拼接格子高领连帽加厚套头卫衣女2018秋季新款韩版宽松长袖上衣外套',100,3000);
INSERT INTO product VALUES(null,'','已售930件','2018秋冬新款纯色麂皮绒加厚夹克外套男士韩版潮流鹿皮绒棉衣保暖棉服上衣男装',110,4000);



