const express = require('express');
const router = express.Router();

const BandModel = require('../model/band');

router.get('/api/bands', async (req, res, next) => {
  const {
    sort = '',
    page = 0,
    recommend = '' } = req.query;

  if (sort.length > 0) {
    const result = await BandModel.sortBand(page);

    res.json(result);
  }

  if (recommend.length > 0) {
    const result = await BandModel.recommend(page);
    res.json(result);
  }

  console.log('http connection');
});

module.exports = router;
