"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Email_history extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Email_history.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            to_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            sent_at: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Email_history",
            tableName: "email_histories",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return Email_history
}
