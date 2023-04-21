class InstitutionService {
    constructor(db) {
        this.client = db.sequelize;
        this.Institution = db.Institution;
    }

    async getAll() {
        return this.Institution.findAll({
            where: {}
        })
    }
    
}
module.exports = InstitutionService;