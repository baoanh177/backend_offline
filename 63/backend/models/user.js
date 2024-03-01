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
            User.belongsTo(models.Provider, {
                foreignKey: "provider_id"
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
            name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: DataTypes.STRING,
            refresh_token: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            provider_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return User
}
