const { Brand } = require('../models');
const sequelize = require('sequelize');

const op = sequelize.Op;

const findAll = () => {
  return Brand.findAll();
};

const searchByName = (brandName) => {
  return Brand.findAll({
    where: {
      name: { [op.like]: `%${brandName}%` },
    },
  });
};

module.exports = {
  findAll,
  searchByName,
};
