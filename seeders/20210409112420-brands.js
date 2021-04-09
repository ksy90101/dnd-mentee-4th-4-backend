'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [
      {
        name: '무신사',
        url: 'https://www.musinsa.com',
        promotionUrl: 'https://store.musinsa.com/app/plan/lists',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '스타일쉐어',
        url: 'https://www.styleshare.kr',
        promotionUrl: 'https://www.styleshare.kr/store',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '에잇세컨즈',
        url: 'https://www.ssfshop.com/8Seconds',
        promotionUrl: 'https://www.ssfshop.com/special/list',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '쿠팡',
        url: 'https://www.coupang.com',
        promotionUrl: 'https://www.coupang.com/np/exhibition/ALL',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '11번가',
        url: 'http://www.11st.co.kr',
        promotionUrl:
          'https://www.11st.co.kr/html/exhibition/planningMain21.html',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'G마켓',
        url: 'https://www.gmarket.co.kr',
        promotionUrl: 'https://www.styleshare.kr/store',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '티몬',
        url: 'https://www.tmon.co.kr',
        promotionUrl: 'https://www.tmon.co.kr/planning/',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '위메프',
        url: 'https://front.wemakeprice.com',
        promotionUrl: 'https://front.wemakeprice.com/promotions/main',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Brands', null, {});
  },
};
