const response = require("../utils/response")

module.exports = {
    accounts: async (req, res) => {
        const accounts = {}
        req.user.accounts.forEach((acc) => {
            accounts[acc.provider] = acc
        })
        response.success(res, 200, "Success", {
            current: req.user.current,
            accounts,
        })
    },
}
