const Sequelize = require('sequelize');
const { STRING, CHAR, BOOLEAN } = Sequelize;
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
  },
  dateUploaded: {
    type: STRING
  },

  length: {
    type: STRING
  },
  explicit: {
    type: BOOLEAN
  }
});

module.exports = Episode;