const Sequelize = require('sequelize')
const defineTable = require('../mysql/defineTable.js')
let obj = {
    name: Sequelize.STRING(100),
    value: Sequelize.STRING(100)
}
let Chat = defineTable('chats', obj)
let insert = async (ctx, next) => { // 插入数据
  var now = Date.now()
  await Chat.create({
    id: 'id-' + now,
    name: ctx.request.body.name,
    value: ctx.request.body.value 
  })
  ctx.response.body = {msg : 'success'}
}

let getChatList = async (ctx, next) => {
  let abc = await Chat.findAll({ where: { }})
  ctx.response.body = abc
}
let testDatabase = async (ctx, next) => {
    /* let data = await Pet.findAll({ where: { name: 'Odie'}}) // 修改 || 删除
    for (let i of data) {
        i.version = 10
        await i.save()
        await i.destroy()
    } */
    /* await Pet.create({ // 插入
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    }) */
    /* let data = await Pet.findAll({ where: { name: 'Odie'}}) // 查询
    if (ctx.request.body.name === '123' && ctx.request.body.password === '456') {
        ctx.response.body = data[0]
    } else {
        ctx.response.body = { msg: 'login failed' }
    } */
}


module.exports = {
    'insert': {fun: insert, methods: 'POST', url: '/eons/insert'},
    'getChatList': {fun: getChatList, methods: 'POST', url: '/eons/getChatList'}
}