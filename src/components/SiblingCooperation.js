import React, { useState } from 'react'

function SiblingOne({ onDance }) {
    const handleClick = () => {
        // some data that is sent to the parent component
        const data = ["I'm dancing", "I'm coding", "I'm laughing up a storm because we do not care no smore"]
        onDance(data)
    }

    return (
        <div>
            <button onClick={handleClick}>Send Data</button>
        </div>
    )
}

function SiblingTwo({ message }) {
    return (
        <div>
            <p>MESSAGE FROM Sibling A: {message}</p>
        </div>
    )
}

export default function Parent() {
    const [message, setMessage] = useState("")

    const handleDance = (data) => {
        setMessage(data)
    }

    return (
        <div>
            <SiblingOne onDance={handleDance} />
            {message.map && <SiblingTwo message={message} />}
        </div>
    )
}

