// controllers/serviceController.js
const Service = require('../models/contacts.model');

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error getting services:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error('Error getting service by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new service
const createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    console.error('Error creating service:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a service by ID
const updateServiceById = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(updatedService);
  } catch (error) {
    console.error('Error updating service by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a service by ID
const deleteServiceById = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports ={getAllServices,getServiceById, createService,updateServiceById,deleteServiceById};