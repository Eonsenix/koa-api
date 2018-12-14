const Sequelize = require('sequelize')
const config = require('./config')
var sequelize = new Sequelize(config.database, config.username, config.password, { // 数据库名 用户名 密码
  host: config.host,  // 主机名 127.0.0.1
  dialect: 'mysql', // 专业用语
  pool: {
      max: 5,
      min: 0,
      idle: 30000
  }
})
module.exports = sequelize