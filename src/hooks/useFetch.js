import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData]= useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setLoading(false)
        setError(null)
      },)
      .catch((e)=>{
        if(e.name === 'AbortError'){
          console.log('fetch aborted')
        }
        else{
          setLoading(false)
          setError(e.message)
        }
      })
    }, 1000);
    console.log('Fetched')
    return ()=> abortCont.abort()
   
  }, [url])

  return {data, isLoading, error}
}

export default useFetch