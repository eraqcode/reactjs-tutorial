import React, { Fragment, useState, useEffect } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })
    const {x, y} = coords
    const moveMouse = (e) => {
        const coords = {
            x: e.x,
            y: e.x
        }
        setCoords( coords )
    }

    useEffect(() => {
        //effect
        document.addEventListener('mouseover', moveMouse)
        window.log("Componente montado")
        return () => {
            //cleanup or distumountcomponent
            window.removeEventListener('mouseover', moveMouse)
            console.log("Componente desmontado")
        }
      }, [])  
    return (
        <Fragment>
            <p className="text-white text-lg">
                x: { x } - y: { y }
            </p>
        </Fragment>
    )
}
