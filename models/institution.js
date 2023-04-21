module.exports = (sequelize, Sequelize) => {
    const Institution = sequelize.define('Institution', {
        Name: Sequelize.DataTypes.STRING,
        Money: Sequelize.DataTypes.DECIMAL,
        UserEmail: Sequelize.DataTypes.INTEGER
    },{
        timestamps: false
    });
	return Institution
}