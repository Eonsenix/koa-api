const Sequelize = require('sequelize')
const defineTable = require('../mysql/defineTable.js')
let obj = {
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}
let Pet = defineTable('pets', obj)
var now = Date.now()
let fn_index = async (ctx, next) => {
    console.log(ctx.request.query) // get请求 参数
    ctx.response.body = `
        <h1>Index</h1>
        <form action="/eons/postdata1" method="post">
            <p>文字: <input name="value" value="koa"></p>
            <p><input type="submit" value="提交"></p>
        </form>`
}

let testDatabase = async (ctx, next) => {
    let data = await Pet.findAll({ where: { }}) // 修改 || 删除
    ctx.response.body = data
}

let getProfitListByMonth = async (ctx, next) => { // 月度分润
    let page = ctx.request.query.page
    let size = ctx.request.query.size
    let data = []
    for(let i=0;i < 100; i ++) {
        data.push(
            {
                "id":i,
                "tradeMonth":"2018-09",
                "brhCode":"022001",
                "brhName":"这是机构名称捏" + i,
                "addMchtNum":1 + i,
                "cartTradeNum":200 + i,
                "cartTradeAmt":12123.12,
                "notCartTradeNum":300,
                "notCartTradeAmt":121445.23,
                "profitSumPreTax":12132.22
            })
    } 
    ctx.response.body = {
        "returnCode": "0",
        "errorInfo": "这是错误信息",
        "result": {
            "page": page,
            "size": size,
            "totalPages": Math.ceil(data.length/size),
            "totalElements": data.length,
            "data":data.slice((page-1)*size, page*size)
        }
    }
}


module.exports = {
    'fn_index': {fun: fn_index, methods: 'GET', url: '/eons/xixi'},
    'testDatabase': {fun: testDatabase, methods: 'POST', url: '/eons/postdata'},
    'getProfitListByMonth': {fun: getProfitListByMonth, methods: 'GET', url: '/city/v1/getProfitListByMonth'}
}