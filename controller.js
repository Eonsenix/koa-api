const fs = require('fs')
function addMapping(router, mapping) {
    for (let url in mapping) { // 遍历对象
        if (url.startsWith('GET ')) {
            let path = url.substring(4)
            router.get(path, mapping[url])
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5)
            router.post(path, mapping[url])
        } else {
            console.log('invaild URL')
        }
    }
}

function addControllers(router, dir) {
    let files = fs.readdirSync(__dirname + dir) // 返回一个数组 数组里面是文件名
    let js_files = files.filter((f) => { // 过滤出js结尾文件
        return f.endsWith('.js')
    })
    for (let i of js_files) {
        let mapping = require(__dirname + dir + '/' + i) // require就是获取module.export的内容
        // { 'GET /eons/xixi': [AsyncFunction: fn_index], 'POST /eons/postdata': [AsyncFunction: fn_signin] }
        addMapping(router, mapping)
    }
}

module.exports = function (dir) { // 输出的是函数
    let controllers_dir = dir || '/controllers'
    let router = require('koa-router')()
    addControllers(router, controllers_dir)
    return router.routes()
}