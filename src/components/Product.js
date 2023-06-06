import React, { useState } from 'react'

import ViewList from './ViewList'

export default function Product(props) {
    // LOGIC GOES HERE
    const [list, setList] = useState([
        {
            name: "Apple",
            price: 1.99,
            quantity: 1
        },
        {
            name: "Banana",
            price: 0.99,
            quantity: 1
        },
        {
            name: "Orange",
            price: 1.49,
            quantity: 1
        }
    ])

    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const handleAddProduct = () => {
        const newItem = {
            name: itemName,
            price: price,
            quantity: quantity
        }
        const newList = [...list, newItem]
        setList(newList)
    }

    return (
        // JSX GOES HERE
        <div>
            <h1>Product List</h1>

            <ViewList list={list} />

            <h2>Add a Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    )
}
