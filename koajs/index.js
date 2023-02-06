const Koa = require('koa');

const app = new Koa();



app.use (ctx => {
    if(ctx.path == '/') {
        ctx.body = '<h1>index sayfası</h1>';

    }else if (ctx.path == '/about'){
        ctx.body = '<h1>hakkında sayfası</h1>';

    }else if(ctx.path == '/contact'){
        ctx.body = '<h1>İletişim sayfası</h1>'
    }else {
        console.log(ctx.path);
    }

})

const port = 3000;

app.listen(port,() => {
    console.log(`sunucu ${port} unda çalışmaya başlamıştır`);
})