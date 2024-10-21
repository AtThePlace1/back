const preferDao = require('../models/prefer_dao');

const userPreferService = async (pet, decaffe, group_seat, terrace) => {
  return await preferDao.userPreferCafe(pet, decaffe, group_seat, terrace)
}

module.exports = { userPreferService }