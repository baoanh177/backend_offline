"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Link extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Link.belongsTo(models.User, {
                foreignKey: "user_id"
            })
        }
    }
    Link.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            origin_link: DataTypes.STRING, 
            link_id: DataTypes.STRING,
            password: DataTypes.STRING,
            safe_navigate: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            clicks: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "Link",
            tableName: "links",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return Link
}
