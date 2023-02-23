const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// The name of the DB is the same as the package name "final-project"
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
})

module.exports = db