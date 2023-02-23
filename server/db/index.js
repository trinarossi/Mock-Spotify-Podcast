const db = require('./database');
const Series = require("./models/Series");
const Episode = require("./models/Episode");

Episode.belongsTo(Series);
Series.hasMany(Episode);


module.exports = {

  db,
  Series,
  Episode

}