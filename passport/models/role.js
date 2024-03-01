"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Role.belongsToMany(models.User, {
                foreignKey: "role_id",
                through: "user_role"
            })
            Role.belongsToMany(models.Permission, {
                foreignKey: "role_id",
                through: "role_permission"
            })
        }
    }
    Role.init(
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
            modelName: "Role",
            tableName: "roles",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return Role
}
