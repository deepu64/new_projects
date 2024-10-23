import { useEffect, useState } from "react"



function useFetch (url) {
    const [data,setData] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    async function fetchData() {
        setLoading(true)
        try{
            const response = await fetch(url)
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            setData(result)
            setError(null)
            setLoading(false)
        }catch(e){
            setError(`${e} Some Error Occured`)
            
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])
    
    return {data,loading,error}
}

export default useFetch