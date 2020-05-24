//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList: [],
    //导航 数组
    catesList: [],
    //楼层数据
    floorList: [],
    floorItemList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
    console.log(this.catesList);
  },
  getSwiperList() {
    //1.发送异步请求来获取轮播图数据 优化的手段可以通过es6的技术promise来解决这个问题
    wx - wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      complete: (res) => {},
      // data: data,
      // header: header,
      dataType: 'json',
      method: 'GET',
      responseType: 'text',
      fail: (res) => {},
      success: (result) => {
        // console.log(result);
        this.setData({
          swiperList: result.data.message
        })
      }
    })
  },
  //获取 分类导航数据
  getCateList() {
    wx - wx.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
      success: (result) => {
        this.setData({
          catesList: result.data.message
        })
      }
    })
  },
  //获取 楼层数据
  getFloorList() {
    wx - wx.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
      success: (result) => {
        this.setData({
          floorList: result.data.message
        })
      }
    })
  },
})