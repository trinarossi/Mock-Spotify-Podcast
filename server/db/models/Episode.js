const Sequelize = require('sequelize');
const { STRING, CHAR } = Sequelize;
const db = require('../database');

const Episode = db.define("episode", {
  name: {
    type: STRING,
    allownull: false,
    notEmpty: true
  },
  description: {
    type: CHAR(800),
    allownull: false,
    notEmpty: true
  },
  imgUrl: {
    type: STRING
  }
});

module.exports = Episode;