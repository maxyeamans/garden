const { Planter } = require('../models');

module.exports = {
  findAll: async function(req, res) {
    try {
      let findAllOptions = {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        order: [
          ['name', 'DESC'],
        ],
      };
      
      const planters = await Planter
        .findAll(findAllOptions);
      res.status(200).json(planters);
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  create: async function(req, res) {
    try {
      const planter = await Planter
        .create(
          req.body.planterData
        );
      res.status(200).json(planter);
    }
    catch (err) {
      res.status(400).json(err);
    }
  }
}