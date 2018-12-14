const fs = require('fs')

let addApi = (router, api) => {
    for (let i of Object.values(api)) {
        i.methods === 'GET' ? router.get(i.url, i.fun) : router.post(i.url, i.fun)
    }
}

let addControllers = (router, dir) => {
    let files = fs.readdirSync(__dirname + dir) // 返回一个数组 数组里面是文件名
    let js_files = files.filter((f) => f.endsWith('.js')) // 过滤出js结尾文件
    for (let i of js_files) {
        let api = require(__dirname + dir + '/' + i) // require就是获取module.export的内容
        addApi(router, api)
    }
}

module.exports = () => { // 输出的是函数
    let router = require('koa-router')()
    addControllers(router, '/controllers')
    return router.routes()
}