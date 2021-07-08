import React from 'react'

export const useAxios = ( method, url, data=null) => {
    const [state, setstate] = useState({ data: null })
    const [ data ] = state
    useEffect(() => {
        Axios({
          method: method,
          url: url,
          data:data
        })
          .then( response => {
            console.log( response.data )
            setstate({
              data: response.data
            })
          } )
      }, [])
}
