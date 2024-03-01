"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: Sequelize.STRING,
            status: Sequelize.BOOLEAN,
            refresh_token: Sequelize.STRING,
            provider_id: Sequelize.INTEGER,
            created_at: {
                type: Sequelize.DATE,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users")
    },
}
