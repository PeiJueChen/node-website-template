const Koa = require('koa');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// use historyApiFallback
app.use(historyApiFallback());

app.use(serve(path.resolve(__dirname,'../build')));
app.use(serve(path.resolve(__dirname,'../www')));
app.use(serve(path.resolve(__dirname,'../dist')));
app.use(serve(path.resolve(__dirname,'../static')));


const post = 3000;
app.listen(post, () => {
    console.log(`服务器在${post}端口启动成功~`);
})