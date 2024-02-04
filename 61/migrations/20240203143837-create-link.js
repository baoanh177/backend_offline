"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("links", {
            id: {
                type: Sequelize.INTEGER,
            },
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            origin_link: Sequelize.STRING,
            link_id: Sequelize.STRING,
            password: Sequelize.STRING,
            safe_navigate: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            clicks: Sequelize.INTEGER,
            user_id: Sequelize.INTEGER,
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("links")
    },
}
