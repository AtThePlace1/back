const myDataSource = require('./init');

const cafeDetail = async (cafe_pk) => {
  return await myDataSource.query(`
    SELECT cafe_name, opening_hours, location_address, contact_number, sns_account, latitude,longitude,
    cafe_images.image_main, cafe_images.image_menu
    FROM cafes
    LEFT JOIN cafe_images ON cafes.id = cafe_images.cafe_id
    WHERE cafes.id = ?` , [cafe_pk])
}

module.exports = { cafeDetail }