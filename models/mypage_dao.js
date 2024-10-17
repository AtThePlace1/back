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
   LEFT JOIN cafe_likes ON users.id = cafe_likes.user_id
   LEFT JOIN cafes ON cafe_likes.cafe_id = cafes.id
   WHERE users.id = ?
   GROUP BY users.id
    `, [pk])
}

const getPkByUser = async (pk) => {
  return await myDataSource.query(`
    SELECT id FROM users WHERE id = ?`, [pk]
  )
}

module.exports = { getMyPageDetails, getPkByUser }