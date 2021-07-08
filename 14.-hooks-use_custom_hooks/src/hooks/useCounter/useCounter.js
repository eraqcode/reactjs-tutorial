import { useState } from 'react'

export const useCounter = ( initialState = 0 ) => {
    const [value, setValue] = useState(initialState)

    const incremento = ( factor = 0 ) => {
        setValue( value + factor );
    }

    const decremento = ( factor = 0 ) => {
        setValue( value - factor );
    }

    return [ value, incremento, decremento ];
}