Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 1, checked:0, name:"布言布语", title:"2018秋冬新款宽松保暖大毛领连帽棉衣学生棉服可爱棉服", yanse:"黑色", chima:"XL", newprice:100.00, oldprice:185.00, num:1 }, 
      { id: 2, checked:0, name:"萌叔百货", title:"冬季宽松短款棉马甲贴布字母连帽卫衣高腰直筒显瘦牛仔裤时尚套装", yanse:"黑色", chima:"XL", newprice:100.00, oldprice:185.00, num:1 }, 
      { id: 3, checked:0, name:"平静海", title:"字母流苏慵懒风甜美小清新网红毛衣套头女韩版秋装新款针织衫上衣", yanse:"黄色", chima:"XX", newprice:56.00, oldprice:300.00, num:1 },
      { id: 4, checked:0, name:"NO WAY", title:"慵懒风毛衣女翻领套头宽松韩版2018学生小清新秋冬长袖翻领针织打底衫外套潮", yanse:"白色", chima:"XXX", newprice:95.00, oldprice:200.00, num:1 }
    ],
    total:0.00
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    
    var total = this.data.total;
    console.log(total)
    var list = this.data.list;
    console.log(list)
    var length = list.length;
    console.log(length)

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  radioChange: function(e){

  },
  quanxuan: function (e) {
    var list = this.data.list;
    if (e.detail.value.length) {
      for (var i = 0; i < list.length; i++) {
        list[i].checked = 1;
      }
      this.setData({
        list: list
      });
    } else {
      for (var i = 0; i < list.length; i++) {
        list[i].checked = 0;
      }
      this.setData({
        list: list
      });
    }
  },
  Change: function (e) {
    var list = this.data.list;
    console.log(0);
    console.log(list);
    console.log(e.detail.value.length)
    if (e.detail.value.length >= list.length) {
      this.setData({
        checked: 1
      });
    } else {
      this.setData({
        checked: 0
      });
    }
  },
})


