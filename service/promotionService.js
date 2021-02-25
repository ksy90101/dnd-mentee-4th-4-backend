const Promotion = require('../models/Promotion.js');
const Brand = require('../models/Brand.js');

const findAll = () => {
  return Promotion.findAll();
};

const findByBrand = (brandId) => {
  return Promotion.findAll({
    where: { brand_id: brandId },
  });
};

const createAll = async (promotions, brand) => {
  const savedPromotions = promotions.forEach((promotion) => {
    const promotionJson = JSON.parse(promotion);

    const createdPromotion = {
      title: promotionJson.title,
      description: promotionJson.description,
      image: promotionJson.image,
      url: promotionJson.url,
      brandId: brand.id,
    };

    console.log(brand)

    try {
      Promotion.create(createdPromotion);
    } catch (e) {
      console.log(e);
    }
  });

  return savedPromotions;
};

module.exports = {
  findAll,
  findByBrand,
  createAll,
};
