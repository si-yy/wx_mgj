const express = require("express");
const routerImageList=require("./router/imagelist");
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