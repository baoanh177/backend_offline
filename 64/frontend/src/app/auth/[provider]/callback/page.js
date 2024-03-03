"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Callback({ params, searchParams }) {
    const router = useRouter()

    const { provider } = params
    const queryString = new URLSearchParams(searchParams).toString()
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/${provider}/callback?${queryString}`)
            .then(res => res.json())
            .then(data => {
                Object.keys(data.data).forEach(key => {
                    Cookies.set(key, data.data[key])
                })
                router.push("/")
            })
    }, [])

    return <>
        <span>{provider}</span>
        <h1>Redirecting...</h1>
    </>
}

export default Callback;