"use client"

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Home() {
    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        const access = Cookies.get("accessToken")
        const refresh = Cookies.get("refreshToken")
        if (!access || !refresh) return router.push("/login")
        fetch("http://localhost:8080/api/accounts", {
            headers: { Authorization: `Bearer ${access}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.data)
            })
            .catch((e) => console.error(e))
    }, [])

    const handleLogout = async () => {
        const access = Cookies.get("accessToken")
        const refresh = Cookies.get("refreshToken")
        const response = await fetch("http://localhost:8080/api/logout", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access}`,
            },
            method: "POST",
            body: JSON.stringify({ refresh_token: refresh }),
        })
        if (response.ok) {
            Cookies.remove("accessToken")
            Cookies.remove("refreshToken")
            router.push("/login")
        }
    }

    return (
        <>
            <div className="">
                <div className="">
                    <img src={user?.current?.image} alt="" />
                </div>
                <div className="">
                    Google:
                    {user?.accounts?.google?.name ?? (
                        <button className="btn btn-success">Đăng nhập</button>
                    )}
                </div>
                <div className="">
                    Github:
                    {user?.accounts?.github?.name ?? (
                        <button className="btn btn-dark">Đăng nhập</button>
                    )}
                </div>
                <div className="">
                    Local:
                    {user?.accounts?.local?.name ?? (
                        <button className="btn btn-warning">Đăng nhập</button>
                    )}
                </div>
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
                Đăng xuất
            </button>
        </>
    )
}

export default Home
