const myDataSource = require('./init')

const userPreferCafe = async (pet, decaffe, group_seat, terrace) => {
  console.log(pet, decaffe, group_seat, terrace)
  return await myDataSource.query(`
    SELECT cafe_name
    FROM cafes
    WHERE pet = ? AND decaffe = ? AND group_seat = ? AND terrace = ?
    `, [pet, decaffe, group_seat, terrace])

}

module.exports = { userPreferCafe };
