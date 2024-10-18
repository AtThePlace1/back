const myDataSource = require('./init');

const checkLiked = async (user_id, cafe_id) => {
  return await myDataSource.query(`
    SELECT user_id, cafe_id
    FROM user_likes
    WHERE user_id = ? AND cafe_id = ?`, [user_id, cafe_id])
}

const insertLiked = async (user_id, cafe_id) => {
  return await myDataSource.query(`
    INSERT INTO user_likes (user_id, cafe_id)
    VALUES (?, ?)
    `, [user_id, cafe_id])
}

const deleteLiked = async (user_id, cafe_id) => {
  return await myDataSource.query(`
    DELETE FROM user_likes
    WHERE user_id = ? AND cafe_id = ?`, [user_id, cafe_id])
}

module.exports = { checkLiked, insertLiked, deleteLiked }