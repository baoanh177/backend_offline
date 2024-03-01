"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class User_role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            
        }
    }
    User_role.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: DataTypes.INTEGER,
            role_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User_role",
            tableName: "user_role",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return User_role
}
