"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const providers = [
            {
                id: 1,
                name: "local",
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
        await queryInterface.bulkInsert("providers", providers)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('providers')
    },
}
