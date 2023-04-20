module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        Name: Sequelize.DataTypes.STRING,
        Species: Sequelize.DataTypes.STRING,
        Birthday: Sequelize.DataTypes.DATE
    },{
        timestamps: false
    });
    Animal.associate = function(models) {
        console.log("ok");
    };
	return Animal
}