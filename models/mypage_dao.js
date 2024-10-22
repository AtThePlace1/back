const myDataSource = require('./init');

const getMyPageDetails = async (pk) => {
  return await myDataSource.query(`
   SELECT nickname, profile_image,
   JSON_ARRAYAGG(
   JSON_OBJECT(
   'cafe_id', cafes.id,
   'cafe_name', cafes.cafe_name, 
   'cafe_address', cafes.location_address
  )) AS likeList
   FROM users
   LEFT JOIN user_likes ON users.id = user_likes.user_id
   LEFT JOIN cafes ON user_likes.cafe_id = cafes.id
   WHERE users.id = ?
   GROUP BY users.id
    `, [pk])
}

const getPkByUser = async (pk) => {
  return await myDataSource.query(`
    SELECT id FROM users WHERE id = ?`, [pk]
  )
}

const uploadProfile = async (pk, profile_url) => {
  return await myDataSource.query(`
    UPDATE users
    SET profile_image = ?
    WHERE id = ?`, [profile_url, pk])
}
module.exports = { getMyPageDetails, getPkByUser, uploadProfile }