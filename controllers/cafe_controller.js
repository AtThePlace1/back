const cafeService = require('../services/cafe_services')

const detailController = async (req, res) => {
  const cafe_pk = req.params.cafe_pk;

  try {
    const cafeDetail = await cafeService.detailService(cafe_pk);
    return res.status(200).json({ cafeDetail })
  }

  catch (error) {
    console.log(error)
    res.status(error.status || 500).json({ message: error.message });
  }
}

const mapController = async (req, res) => {
  try {
    const mapDetail = await cafeService.mapService();
    res.status(201).json({ mapDetail })
  } catch (error) {
    console.log(error)
    res.status(error.status || 500).json({ message: error.message })
  }
}

module.exports = { detailController, mapController };