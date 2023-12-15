// models/service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  brandName: { type: String, required: true, default: 'Unknown Brand' },
  serviceDetails: { type: String, required: true, default: 'No details available' },
  requiredService: { type: String, required: true, default: 'Default Service' },
  email: { type: String, required: true, default: 'example@example.com' },
  phone: { type: String, required: true, default: '123-456-7890' },
 
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
