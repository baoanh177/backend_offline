"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.User_device, {
                foreignKey: "user_id"
            })
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: "User",
            tableName: 'users',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
    return User
}
