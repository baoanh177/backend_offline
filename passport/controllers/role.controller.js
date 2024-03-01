const { string } = require("yup")
const { Role, Permission, Role_permission } = require("../models/index")

module.exports = {
    index: async (req, res) => {
        const roles = await Role.findAll()
        res.render("roles/index", { roles, layout: "layouts/admin-layout" })
    },
    add: (req, res) => {
        const msg = req.flash("msg")
        res.render("roles/add", { req, msg, layout: "layouts/admin-layout" })
    },
    handleAdd: async (req, res) => {
        const body = await req.validate(req.body, {
            name: string().required("Không được để trống")
        })

        if(body) {
            let { name, permissions } = body

            // const role = await Role.create({name})

            if(!permissions) {
                permissions = []
            }

            permissions = Array.isArray(permissions) ? permissions : [permissions]
            
            if(permissions.length) {
                const permissionInstances = await Promise.all(permissions.map(async (value) => {
                    const [result] = await Permission.findOrCreate({
                        where: { name: value.trim() },
                        defaults: { name: value.trim() }
                    })
                    return result
                }))

                console.log(permissions)
            }

            // for(const permission of body.permission) {
            //     const perm = await Permission.findOrCreate({
            //         where: { name: permission }
            //     })
            //     await Role_permission.findOrCreate({
            //         where: {
                        
            //         }
            //     })
            // }
            req.flash("msg", "Thêm role thành công")
        }
        res.redirect("/roles/add")
    },
    edit: (req, res) => {
        res.render("roles/edit")
    }
}