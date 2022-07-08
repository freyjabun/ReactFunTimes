import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import './Alex.css'

interface IAlexProps {

}

const Alex: React.FC<IAlexProps> = ({ }) => {
    const defaultName = 'Lars'
    const [displayTextField, setTextFieldVisible] = useState(false)
    const [name, setName] = useState(defaultName);
    const [hiddenName, setHiddenName] = useState(defaultName);

    const myFunction = () => {
        if (!displayTextField) setTextFieldVisible(true)
        else {
            setName(hiddenName);
            setTextFieldVisible(false);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHiddenName(event.target.value);
    }

    return (
        <>
            <h1>{name}</h1>
            <div className='coolField'>
                {displayTextField ? <input className='coolInputField' type="text" onChange={handleChange}></input> : null}
                <button className='skrrt' onClick={() => myFunction()}></button>
            </div>
        </>
    )
}


export default Alex;
