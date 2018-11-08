const express = require("express");
const routerImageList=require("./router/imagelist");
const pool = require("./pool");
const mysql = require("mysql");
var app = express();
//1.加载处理跨域模块
const cors=require("cors");
//2.允许哪个地址跨域访问
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
}));
app.listen(3000);
app.use(express.static(__dirname+"/public")); 
app.use("/imagelist",routerImageList);


//分页商品列表
app.get("/products",(req,res)=>{
   var pno = req.query.pno;          //当前页页码
   var pageSize = req.query.pageSize;//页大小
   var sql = "SELECT count(id) as c FROM product";
   var process = 0;
   var obj = {pno:pno,pageSize:pageSize};
   pool.query(sql,(err,result)=>{
       if(err)throw err;
       var pageCount = Math.ceil(result[0].c/pageSize);
       process+=50;
       obj.pageCount = pageCount;
       if(process == 100){
         res.send(obj);
       }
   })
   var sql =" SELECT * FROM product";
       sql+=" LIMIT ?,?";
   var offset = parseInt((pno-1)*pageSize);
   pageSize = parseInt(pageSize);
   pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        process+=50;
        obj.data = result;
        if(process == 100){
            res.send(obj);
        }
   });
});









