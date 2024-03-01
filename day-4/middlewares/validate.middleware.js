const { object } = require('yup')

module.exports = (req, res, next) => {
    req.validate = async (data, rule = {}) => {
        const schema = object(rule)
        try {
            const body = await schema.validate(data, {
                abortEarly: false
            })
            return body
        }catch(e) {
            const errors = Object.fromEntries(e.inner.map(item => [item.path, item.message]))
            req.flash('errors', errors)
            req.flash('old', data)
        }
    }
    // Lưu lỗi nếu validate failed vào req để thuận tiện hiển thị ở view
    const errors = req.flash('errors')
    req.errors = errors.length ? errors[0] : {}
    const old = req.flash('old')
    req.old = old.length ? old[0] : {}
    next()
}