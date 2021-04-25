const express = require("express")
const router = express.Router();
const tutorialInfo = require("../tutorials/tutorial-info.js")
const fs = require("fs")

BACKEND_URL = "https://WebMasteryServer.bharadwajd.repl.co"

router.get("/:unit/:file", (req,res) => {
  res.sendFile(`/home/runner/WebMasteryServer/tutorials/${req.params.unit}/${req.params.file}`)
})

module.exports = router

