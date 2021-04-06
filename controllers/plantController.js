const {Plant} = require('../models');

module.exports = {
  findAll: async function(req, res) {
    try {
      const plants = await Plant
        .findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          order: [
            ['plantType', 'DESC'],
            ['name', 'DESC'],
          ],
          include: 'seed',
        });
      res.status(200).json(plants)
    }
    catch (err) {
      res.status(500).json(err)
    }
  },
  create: async function(req, res) {
    try {
      const plant = await Plant
        .create(req.body.plantData);
      res.status(200).json(plant);
    }
    catch (err) {
      res.status(400).json(err);
    }
  }
}