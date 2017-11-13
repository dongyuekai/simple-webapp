const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Worldu89y98y9'
})

app.listen(process.env.PORT)
console.log('Listening on'+process.env.PORT)