const Sequelize = require('sequelize')
const sequelize = require('./sequelize.js')

let defineTable = (name, obj) => {
  let defaultObj = Object.assign(
    { id: { type: Sequelize.STRING(50), primaryKey: true } }, obj
  )
  return sequelize.define(name, defaultObj, { timestamps: false })
}
module.exports = defineTable