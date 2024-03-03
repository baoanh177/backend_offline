"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

function RegisterForm({ setLogin }) {
    const router = useRouter()

    const handleRegister = async e => {
        e.preventDefault()
        const formData = Object.fromEntries([...new FormData(e.target)])
        if(formData.password != formData.confirm) return alert("Mật khẩu k khớp")
        const response = await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            const data = await response.json()
            Object.keys(data.errors).forEach(key => {
                alert(data.errors[key])
            })
            return
        }
        const data = await response.json()
        alert("Đăng kí xong rồi, check mail để active")
        a.target.reset()
    }

    return <>
        <div className="mt-3 h5">Register</div>
        <form className="w-50 flex mx-auto" onSubmit={handleRegister}>
            <input
                type="email" 
                name="email"
                required
                className="form-control mt-3"
                placeholder="Enter email..."
            />
            <input
                type="password" 
                name="password"
                required
                min={6}
                className="form-control mt-3"
                placeholder="Enter password..."
            />
            <input
                type="password" 
                name="confirm"
                required
                min={6}
                className="form-control mt-3"
                placeholder="Confirm password..."
            />
            <button className="btn btn-warning w-100 mt-3">Register</button>
        </form>
        <button
            className="btn btn-primary mt-3 w-50 mx-3"
            onClick={() => setLogin(true)}
        >
            Login
        </button>
    </>
}

export default RegisterForm;