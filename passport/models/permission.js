"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Permission.belongsToMany(models.Role, {
                foreignKey: "permission_id",
                through: "role_permission"
            })
        }
    }
    Permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Permission",
            tableName: "permissions",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    )
    return Permission
}
