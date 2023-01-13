import { useEffect, useState } from "react"
import { getData } from "./api"

export const Daka = () => {
    // const data = useState([])

    const loadData = async () => {
        const data = getData("88041", "2023-01-11", "2023-01-13")
        alert(window.location.href)
        alert(JSON.stringify(location.href))
    }

    useEffect(() => { loadData() }, [])
    return <div>Daka</div>
}