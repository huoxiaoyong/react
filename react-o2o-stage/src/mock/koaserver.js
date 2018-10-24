const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const AdData = require("./home/ad.js");
const homeData = require("./home/list.js");

router.get('/api/homead', async (ctx, next) => {
    ctx.body = AdData;
});

router.get('/api/homelist/:city/:page', async (ctx, next) => {

    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' +   paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeData;
});

app.use(router.routes());
app.listen(3002);
console.log('app started at port 3002...');
