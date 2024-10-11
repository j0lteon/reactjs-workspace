import axios from "axios"
import { useEffect, useState } from "react"

export default (url) => {
    const [data, setData] = useState(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const requisitar = async () => {
            const resposta = await axios.get(`http://localhost:8080/${url}`)
            setData(resposta.data)
            setCarregando(false)
        }
        requisitar()
    }, [])

    return [data, carregando];
}