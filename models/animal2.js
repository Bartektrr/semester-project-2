module.exports = (sequelize, Sequelize) => {
    const Animal2 = sequelize.define('Animal2', {
        Name: Sequelize.DataTypes.STRING,
        Species: Sequelize.DataTypes.STRING,
        Birthday: Sequelize.DataTypes.DATE
    },{
        timestamps: false
    });
	return Animal2
}