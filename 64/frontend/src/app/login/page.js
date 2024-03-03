"use client"

import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

function Login() {
    const [isLogin, setLogin] = useState(true)

    const googleLogin = async () => {
        const response = await fetch("http://localhost:8080/api/google")
        if (!response.ok) return alert("Something went wrong")
        const data = await response.json()
        window.location.href = data.data
    }
    const githubLogin = async () => {
        const response = await fetch("http://localhost:8080/api/github")
        if (!response.ok) return alert("Something went wrong")
        const data = await response.json()
        window.location.href = data.data
    }

    return (
        <>
            <div className="text-center">
                <button
                    className="btn btn-success mt-3 w-50 mx-3"
                    onClick={googleLogin}
                >
                    Google
                </button>
                <button
                    className="btn btn-dark mt-3 w-50 mx-3"
                    onClick={githubLogin}
                >
                    Github
                </button>
                {
                    isLogin ?
                    <LoginForm setLogin={setLogin}/> :
                    <RegisterForm setLogin={setLogin}/>
                }
            </div>
        </>
    )
}

export default Login
