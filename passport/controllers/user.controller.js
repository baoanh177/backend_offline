const { User, Provider } = require("../models/index")

module.exports = {
    index: async (req, res) => {
        const users = await User.findAll({
            include: { model: Provider }
        })
        res.render("users/index", { users, layout: "layouts/admin-layout" })
    }
}