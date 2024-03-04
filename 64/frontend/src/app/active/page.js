"use client"

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

function Active() {
    const router = useRouter()

    const handleSendMail = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/active-account`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Cookies.get("activeEmail"))
        })
        if(!response.ok) {
            return toast.error("Something went wrong, please reload and try again!")
        }
        toast.success("OK, Kiểm tra mail đi")
    }

    return <>
        <h1 className="h1">Tài khoản chưa được kích hoạt</h1>
        <button 
            className="btn btn-success"
            onClick={handleSendMail}
        >Kích hoạt tài khoản</button>
    </>
}

export default Active;