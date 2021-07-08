import { useState } from 'react'

export const useForm = ( initialState={} ) => {
   const [values, setValues] = useState(initialState)

   const handleInputChange = ({target}) => {
        setValues({
        ...values,
        [target.name]: target.value
        })
   }    
    const handleFormSubmit = (e) => {
        e.prevenDefault();
        setValues({
          name: '',
          country: '',
          genre: ''
        })
    }

      return [ values, handleInputChange, handleFormSubmit ];
  
}
