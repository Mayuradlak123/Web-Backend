// routes/itemsRoutes.js
const express = require('express');
const router = express.Router();
const {getAllServices,getServiceById, createService,updateServiceById,deleteServiceById} =require("../controllers/contacts.controller")

router.get('/get-service', getAllServices);
router.get('/get-service-by-id/:id', getServiceById);
router.post('/create-service/', createService);
router.put('/update-service/:id', updateServiceById);
router.delete('/delete-service/:id', deleteServiceById);

module.exports = router;
