import React, { memo } from 'react'

export const Small = memo(( { value } ) => {
    console.log("Me volvi a lmostrar...")
    return (
        <div>
            <p>
                <small> { value } </small>
            </p>
           
        </div>
    )
})
