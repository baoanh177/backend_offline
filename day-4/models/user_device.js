"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class User_device extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User_device.belongsTo(models.User, {
                foreignKey: "user_id"
            })
        }
    }
    User_device.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            agent: DataTypes.STRING,
            os_name: DataTypes.STRING,
            os_version: DataTypes.STRING,
            client_type: DataTypes.STRING,
            client_name: DataTypes.STRING,
            device_type: DataTypes.STRING,
            device_brand: DataTypes.STRING,
            last_active: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "User_device",
            tableName: "users_devices",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return User_device
}
