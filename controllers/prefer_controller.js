const preferService = require('../services/prefer_services.js')

const userPreferController = async (req, res) => {
  const pet = req.query.pet || 0;
  const decaffe = req.query.decaffe || 0;
  const group_seat = req.query.group_seat || 0;
  const terrace = req.query.terrace || 0;

  try {
    const preferCafe = await preferService.userPreferService(pet, decaffe, group_seat, terrace);
    res.status(200).json({ preferCafe })
  } catch (error) {
    console.log(error)
    res.status(error.statusCode || 500).json({ error: error.message })
  }
}

module.exports = { userPreferController }
