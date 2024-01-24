"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable("email_histories", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            to_email: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            content: Sequelize.STRING(500),
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            sent_at: Sequelize.DATE,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("email_histories")
    },
}
