    import React, { useContext } from 'react'
    import H from './H'

    import { colorContext } from './A'

    function E() {
        const { color, updateColor } = useContext(colorContext)

    return (
        <div>
            <h1>E : {color} </h1>
            <button onClick={updateColor} >Update Color</button>
            <H />
        </div>
    )
    }

    export default E