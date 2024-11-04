// src/services/CrudService.js
class CrudService {
    constructor(model) {
      this.model = model;
    }
  
    async getAll() {
      return await this.model.findAll();
    }
  
    async getById(id) {
      return await this.model.findByPk(id);
    }
  
    async create(data) {
      return await this.model.create(data);
    }
  
    async update(id, data) {
      const record = await this.model.findByPk(id);
      if (record) {
        return await record.update(data);
      }
      return null;
    }
  
    async delete(id) {
      const record = await this.model.findByPk(id);
      if (record) {
        return await record.destroy();
      }
      return null;
    }
  }
  
  module.exports = CrudService;
  