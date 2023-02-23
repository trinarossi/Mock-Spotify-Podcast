const router = require("express").Router();
const { Episode, Series } = require("../db");

router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Series.findByPk(req.params.id, {
        include: {
          model: Episode
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;