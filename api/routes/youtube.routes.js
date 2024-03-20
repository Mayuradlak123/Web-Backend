const express = require('express');
const {  getVideoUrlController } = require('../controller/youtube.controller.js');
const router=express.Router();

router.post("/get-video-url",getVideoUrlController )
module.exports = router