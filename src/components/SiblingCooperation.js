import React, { useState } from 'react'

function ChildComponent({ onAction }) {
    const handleClick = () => {
        // some data that is sent to the parent component
        const data = 'CAN YOU BELIEVE IT?'
        onAction(data)
    }

    return (
        <div>
            <button onClick={handleClick}>Send Data</button>
        </div>
    )
}


export default function SiblingCooperation() {
    const [message, setMessage] = useState('')

    const handleAction = (dataFromChild) => {
        setMessage(dataFromChild)
    }

    return (
        <div>
            <p>MESSAGE FROM CHILD</p>
            <ChildComponent onAction={handleAction} />
            <p>{message}</p>
        </div>
    )
}

