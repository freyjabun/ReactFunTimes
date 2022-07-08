import React, { useState } from 'react'
import './Alex.css'

interface IAlexProps {
    
}

const Alex: React.FC<IAlexProps>  = ({ }) => {
    const [name, setName] = useState('Lars'); 
    return (
        <>
        <h1>{name}</h1>
        <button className='skrrt' onClick={() => setName(updateName(name))}></button>
        </>    
    )
}

const updateName = (name: string) => {
    if (name == 'Lars' ) name = 'Mads'
    else name = 'Lars'

    return name
}
export default Alex;
