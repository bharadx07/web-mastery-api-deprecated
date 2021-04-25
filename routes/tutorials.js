const express = require("express")
const router = express.Router();

router.get("/tutorial/:section/:course", (req,res) => {
  res.send(`You tried to visit the tutorial for the ${req.params.section} section with the ${req.params.res} course`)
})

module.exports = router