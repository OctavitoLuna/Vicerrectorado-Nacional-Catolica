// src/controllers/CrudController.js
class CrudController {
    constructor(service) {
      this.service = service;
    }
  
    getAll = async (req, res) => {
      try {
        const records = await this.service.getAll();
        res.json(records);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    getById = async (req, res) => {
      try {
        const record = await this.service.getById(req.params.id);
        if (!record) {
          return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(record);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    create = async (req, res) => {
      try {
        const record = await this.service.create(req.body);
        res.status(201).json(record);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    update = async (req, res) => {
      try {
        const record = await this.service.update(req.params.id, req.body);
        if (!record) {
          return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(record);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    delete = async (req, res) => {
      try {
        const record = await this.service.delete(req.params.id);
        if (!record) {
          return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json({ message: 'Registro eliminado' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  }
  
  module.exports = CrudController;
  