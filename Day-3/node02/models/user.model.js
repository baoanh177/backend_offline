const sql = require("../utils/db")

module.exports = {
    all: (status, keyword) => {
        let filter = sql`WHERE name IS NOT NULL`
        if(status == 'active' || status == 'inactive') {
            filter = sql`${filter} AND status=${status == 'active'}`
        }
        if(keyword) {
            filter = sql`${filter} AND LOWER(email) LIKE ${'%' + keyword.toLowerCase() + '%'}`
        }
        console.log(filter)
        return sql`SELECT * FROM users ${filter} ORDER BY updated_at DESC`
    },
    checkEmail: email => {
        const result = sql`SELECT * FROM users where email=${email}`
        return result
    },
    postUser: ({name, email, status}) => {
        console.log(name, email, status)
        const result = sql`INSERT INTO users(name, email, status) VALUES(${name}, ${email}, ${status})`
        console.log('result:', result)
        return result
    },
    deleteUser: id => {
        return sql`DELETE FROM users where id = ${id}`
    },
    getUser: id => {
        return sql`SELECT * FROM users where id = ${id}`
    },
    updateUser: (body) => {
        return sql`UPDATE users SET name=${body.name}, email=${body.email}, status=${body.status},
        updated_at=NOW() where id = ${body.id}`
    }
}