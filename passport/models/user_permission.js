"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class User_permission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User_permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: DataTypes.INTEGER,
            permission_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User_permission",
            tableName: "user_permission",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    )
    return User_permission
}
