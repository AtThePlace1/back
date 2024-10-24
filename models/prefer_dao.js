const myDataSource = require('./init')

const userPreferCafe = async (pet, decaffe, group_seat, terrace) => {
  return await myDataSource.query(`
    SELECT cafe_name, opening_hours, location_address, latitude, longitude, contact_number, sns_account,
    pet, decaffe, group_seat, terrace
    FROM cafe_feature
    LEFT JOIN cafes ON cafes.id = cafe_feature.cafe_id
    WHERE pet = ? AND decaffe = ? AND group_seat = ? AND terrace = ?
    `, [pet, decaffe, group_seat, terrace])
}

module.exports = { userPreferCafe };
