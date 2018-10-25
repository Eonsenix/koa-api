let fn_index = async (ctx, next) => {
    ctx.response.body = 'open success'
}
let fn_signin = async (ctx, next) => {
    if (ctx.request.body.name === '123' && ctx.request.body.password === '456') {
        ctx.response.body = { msg: 'login successd' }
    } else {
        ctx.response.body = { msg: 'login failed' }
    }
}
let checkList = async (ctx, next) => {
    ctx.response.body = {
        content: [
            { tradeMonth: 1, outfit: 'a', totalNum: 1, totalMoney: 590, wechatTotalNum: 2, wechatTotalMoney:2, alipaytotalNum: 100, alipaytotalMoney: 100, moneyTax: 10000},
            { tradeMonth: 2, outfit: 'b', totalNum: 1, totalMoney: 590, wechatTotalNum: 2, wechatTotalMoney:2, alipaytotalNum: 100, alipaytotalMoney: 100, moneyTax: 10000},
            { tradeMonth: 3, outfit: 'c', totalNum: 1, totalMoney: 590, wechatTotalNum: 2, wechatTotalMoney:2, alipaytotalNum: 100, alipaytotalMoney: 100, moneyTax: 10000},
            { tradeMonth: 4, outfit: 'd', totalNum: 1, totalMoney: 590, wechatTotalNum: 2, wechatTotalMoney:2, alipaytotalNum: 100, alipaytotalMoney: 100, moneyTax: 10000}
        ],
        firstPage: null,
        ignoreFields: null,
        lastPage: null,
        number: 0,
        numberOfElements: null,
        size: 10,
        sort: null,
        statDataMap: null,
        totalElements: 31807,
        totalPages: 3181
    }
}
let getOutfit = async (ctx, next) => { 
    ctx.response.body = {
        returnCode: '0',
        data: {
            content:[
                {name: '代理机构1', value: '1'},
                {name: '代理机构2', value: '2'},
                {name: '代理机构3', value: '3'},
                {name: '代理机构4', value: '4'}
            ]
        }
    } 
}

let downLoad = async (ctx, next) => { 
    ctx.response.body = {
        returnCode: '0',
        msg: '成功'
    }
}
module.exports = {
    'GET /eons/xixi': fn_index,
    'POST /eons/postdata': fn_signin,
    'GET /eons/api/checkList': checkList, // 获取列表
    'POST /eons/api/getOutfit': getOutfit, // 所属机构
    'POST /eons/api/downLoad': downLoad // 下载
}