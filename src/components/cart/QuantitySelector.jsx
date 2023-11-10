import { useState } from "react";

export default function QuantitySelector(props) {
    const handleChange = (e) => {
        props.setQuantity(parseInt(e.target.value));
    };

    const quantityChange = (e) => {
        let id = e.target.id;
        id === `decreaseQuantity-${props.id}`
            ? props.setQuantity((prevQuantity) => prevQuantity - 1)
            : props.setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const IncrementButton = () => (
        <button id={`increaseQuantity-${props.id}`} onClick={quantityChange}>
            +
        </button>
    );

    const DecrementButton = () =>
        props.quantity > 0 ? (
            <button
                id={`decreaseQuantity-${props.id}`}
                onClick={quantityChange}>
                -
            </button>
        ) : null;

    return (
        <div className='quantity'>
            <DecrementButton />
            <input
                type='number'
                id={`quantity-${props.id}`}
                value={props.quantity}
                onChange={handleChange}
            />
            <IncrementButton />
        </div>
    );
}
