const cafeDao = require('../models/cafe_dao');

const detailService = async (cafe_pk) => {
  return await cafeDao.cafeDetail(cafe_pk);
}

const mapService = async () => {
  return await cafeDao.cafeMap();
}
module.exports = { detailService, mapService }