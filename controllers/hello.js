const fs = require('mz/fs')
const mime = require('mime')
let origin = async (ctx, next) => {
    // ctx.response.body = 'open success'
    /* let a = __dirname + '/abc.html'
       let b = fs.readFileSync(a, 'utf-8')
       ctx.response.body = b */
    /* let a = __dirname + '/abc.html'
    ctx.response.type = mime.getType('/controllers/abc.html') // 获取返回类型
    ctx.response.body = await fs.readFile(a); */
    ctx.response.body = 'hi ~~~~'
}

module.exports = {
    'origin': {fun: origin, methods: 'GET', url: '/'}
}