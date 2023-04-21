module.exports = (sequelize, Sequelize) => {
    const Institution = sequelize.define('Institution', {
        Name: Sequelize.DataTypes.STRING,
        Money: Sequelize.DataTypes.DECIMAL,
        UserEmail: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
	return Institution
}