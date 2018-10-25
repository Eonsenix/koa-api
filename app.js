const koa = require('koa')
const app = new koa()
const bodyparser = require('koa-bodyparser')
const controller = require('./controller')

app.use(bodyparser())
app.use(controller())
app.listen(9900)
console.log('start at port 9900')