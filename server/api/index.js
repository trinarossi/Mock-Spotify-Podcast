'use strict'

const router = require('express').Router();
const { Episode, Series } = require("../db");


router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Series.findAll({
        include: {
          model: Episode,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

router.use("/series", require('./series'));
router.use("/episode", require('./episode'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
});

module.exports = router
