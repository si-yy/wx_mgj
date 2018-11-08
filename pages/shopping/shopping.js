// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    shoplist:[],//保存数据
    pageIndex:0,   //当前显示页码
    pageSize:6,    //每页数量
    load:true
  },
  loadMore:function(){
    wx.request({
      url:"http://127.0.0.1:3000/products",
      data:{
        pno:++this.data.pageIndex,
        pageSize:this.data.pageSize,
      },
      method:"get",
      success: (res)=>{
        console.log(res.data);
        var rows=this.data.shoplist.concat(res.data.data);
        this.setData({
          shoplist:rows
        });
        console.log(this.data.pageIndex)
        console.log(res.data.pageCount)
        if(this.data.pageIndex < res.data.pageCount){
          this.setData({
            load:true
          });
        }else{
          this.setData({
            load:false
          });
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    setTimeout(()=>{
      this.loadMore();
    },800)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showDetail:function(e){
    console.log(e);
    var pid=e.target.dataset.pid;
    console.log(pid);
    wx.navigateTo({
      url: '../detail/detail?pid='+pid
    })
  },
  class:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../class/class'
    })
  }
})