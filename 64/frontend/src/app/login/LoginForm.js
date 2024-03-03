"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

function LoginForm({ setLogin }) {
    const router = useRouter()

    const emailLogin = async e => {
        e.preventDefault()
        const formData = Object.fromEntries([...new FormData(e.target)])
        const response = await fetch("http://localhost:8080/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) return alert("Something went wrong")
        const data = await response.json()
        Object.keys(data.data).forEach(key => {
            Cookies.set(key, data.data[key])
        })
        router.push("/")
    }

    return <>
        <div className="mt-3 h5">Login with Email</div>
        <form className="w-50 flex mx-auto" onSubmit={emailLogin}>
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
                className="form-control mt-3"
                placeholder="Enter password..."
            />
            <button className="btn btn-warning w-100 mt-3">Login</button>
        </form>
        <button
            className="btn btn-primary mt-3 w-50 mx-3"
            onClick={() => setLogin(false)}
        >
            Register
        </button>
    </>
}

export default LoginForm;