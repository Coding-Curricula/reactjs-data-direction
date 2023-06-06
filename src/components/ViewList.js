import React from 'react'

export default function ViewList({ list }) {
    return (
        <div>
            <ul>
                {list.map((item, i) => {
                    return (
                        <li key={i}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    )
                })}
            </ul></div>
    )
}
