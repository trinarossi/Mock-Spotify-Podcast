const router = require("express").Router();
const { Episode, Series } = require("../db");

router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Episode.findByPk(req.params.id, {
        include: {
          model: Series,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;