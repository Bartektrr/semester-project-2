class InstitutionService {
    constructor(db) {
        this.client = db.sequelize;
        this.Institution = db.Institution;
    }

    async getAll() {
        return this.Institution.findAll({
            where: {}
        }).catch(function (err) {
            console.log(err);
        })
    }

    async create(name, email) {
        return this.Institution.create(
            {
                UserEmail: email,
                Name: name,
                Money: 0
            }
        ).catch(function (err) {
            console.log(err);
        }) 
    }
    
    async update(institutionId, money) {
        return this.Institution.update({
            Money: money,
        }, { where: {id: institutionId}})
        .catch(function (err) {
            console.log(err);
        })
    }
    
    async delete(institutionId) {
        return this.Institution.destroy({
            where: {id: institutionId}
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = InstitutionService;