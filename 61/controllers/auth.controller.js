module.exports = {
    index: (req, res) => {
        res.render("auth/login")
    },
    logout: (req, res) => {
        req.logout(err => {})
        return res.redirect("/auth/login")
    }
}