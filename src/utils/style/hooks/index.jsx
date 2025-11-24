import { useState, useEffect } from 'react';

export function useFetch(url) {

    const [data, setData] = useState({});
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if(!url) return
        async function fetchData() {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                if (!response.ok){ throw new Error(`Fetch error: ${response.status}`)}
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.error('useFetch error', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, isloading, error}
}