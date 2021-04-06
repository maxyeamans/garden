const Seed = require('./Seed');
const Plant = require('./Plant');
const Planter = require('./Planter');

Plant.belongsTo(Seed);
Seed.hasMany(Plant);

Plant.belongsTo(Planter);
Planter.hasMany(Plant);

module.exports = {Seed, Plant, Planter};