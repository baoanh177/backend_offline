"use strict"

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt")
module.exports = {
    async up(queryInterface, Sequelize) {
        const salt = bcrypt.genSaltSync(10)
        const users = [
            {
                name: "Bao Anh",
                email: "baoanh123@gmail.com",
                status: true,
                password: bcrypt.hashSync("123456", salt),
                provider_id: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: "Bao Anh FPL",
                email: "anhdbbph39175@fpt.edu.vn",
                status: true,
                password: bcrypt.hashSync("111111", salt),
                provider_id: 1,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
        await queryInterface.bulkInsert("users", users)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users");
    },
}
