const { Seed } = require('../models');

module.exports = {
  findAll: async function(req, res) {
    try {
      let findAllOptions = {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        order: [
          ['plantType', 'DESC'],
          ['name', 'DESC'],
        ],
      };

      if (req.query.withPlants) findAllOptions.include = 'plants';
      
      const seeds = await Seed
        .findAll(findAllOptions);
      res.status(200).json(seeds);
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  create: async function(req, res) {
    try {
      const seed = await Seed
        .create(
          req.body.seedData
        );
      res.status(200).json(seed);
    }
    catch (err) {
      res.status(400).json(err);
    }
  }
}