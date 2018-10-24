var express = require("express");
var router = express.Router();
var url = require("url");
// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js');
// 首页 —— 推荐列表
var homeList = require("./home/list.js");
var homeList1 = require("./home/list1.js");

router.get('/api/homead', function(req,res) {
  res.send(homeAdData);
});

router.get("/api/homelist",function(req,res){
  var path_url = url.parse(req.url,true);
  var city = path_url.query.city;
  var page = path_url.query.page;
  console.log("商铺列表：");
  console.log("城市：" + city);
  console.log("页码：" + page);
  if(city == "北京"){
    res.send(homeList);
  }else{
    res.send(homeList1);
  }

})

// 搜索
var searchListData = require('./search/list.js')
router.get('/api/search', function(req,res) {
    console.log('搜索结果页 - 搜索结果')
    // 参数
    var path_url = url.parse(req.url,true);
    const paramsPage = path_url.query.page
    const paramsCity = path_url.query.city
    const paramsCategory = path_url.query.category
    const paramsKeyword = path_url.query.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)
    res.send(searchListData)
})

// 详情页 - 商户信息
const detailInfo = require('./details/info.js')
router.get('/api/details', function(req,res) {
    console.log('详情页 - 商户信息')
    var path_url = url.parse(req.url,true);
    const id = path_url.query.id
    console.log('商户id: ' + id)
    res.send(detailInfo)
})

// 详情页 - 用户评论
const detailComment = require('./details/comment.js')
router.get('/api/details/comment',function(req,res) {
    console.log('详情页 - 用户点评')
    var path_url = url.parse(req.url,true);
    const page = path_url.query.page
    const id = path_url.query.id
    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)
    res.send(detailComment)
})


module.exports = router;
