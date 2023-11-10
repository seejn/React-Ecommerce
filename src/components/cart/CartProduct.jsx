import QuantitySelector from "./QuantitySelector";

import { useState } from "react";

export default function (props) {
    let product = props.product;
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    let amount = price * quantity;
    return (
        <>
            <div className='product'>
                <h2>Product Name</h2>
                <QuantitySelector
                    id={product.id}
                    price={product.price}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setPrice={setPrice}
                />
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "10px 0",
                    }}>
                    <span>
                        Price: $
                        <span id={`price-${product.id}`}>{product.price}</span>
                    </span>
                    <span>
                        Amount: $
                        <span id={`amount-${product.id}`}>{amount}</span>
                    </span>
                </div>
                <button
                    className='delete-button'
                    onClick={() => props.deleteProduct(product.id)}>
                    &#128465; Delete
                </button>
            </div>
        </>
    );
}
