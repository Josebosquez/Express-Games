const express = require('express');
const router = express.Router();


router.get('/check', function (req, res){
    res.json({message: "Welcome to Games info App"})
})

module.exports = router