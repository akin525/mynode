module.exports = (sequelize, Sequelize) => {
    const deposit = sequelize.define("deposits");

    return deposit;
};
