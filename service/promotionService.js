const promotion = require('../models/Promotion.js');

const findAll = () => {
  return promotion.findAll();
};

const findByBrand = (brandId) => {
  return promotion.findAll({
    where: { brand_id: brandId },
  });
};
module.exports = {
  findAll,
  findByBrand,
};
