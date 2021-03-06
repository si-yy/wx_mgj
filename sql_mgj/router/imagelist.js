//图片轮播
//1:引入模块 pool express
const pool = require("../pool");
const express = require("express");
//2:创建路由对象
var router = express.Router();
//3:处理请示 GET /list 返回所有图片轮播数据
router.get("/list",(req,res)=>{
    var sql = "SELECT id,img_url,title FROM mgj_imagelist";
    pool.query(sql,(err,result)=>{
      //如果执行操作出错误，抛出错误对象
      if(err)throw err;  
      //1 执行正确  -1 -2 -3 操作失败 告诉程序 
      res.send({code:1,msg:result});
  });
});

//4:导出当前路由模块
module.exports = router;