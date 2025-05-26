const fs = require('fs');
const path = require('path');
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = sequelize;

module.exports = db;
