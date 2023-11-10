import "../../assets/css/style.css";
import CartProduct from "./CartProduct";
import CartCount from "./CartCount";

import { useState } from "react";

export default function (props) {
    const [products, setProduct] = useState(props.products);
    const [count, setCount] = useState(products.length);

    const deleteProduct = (id) => {
        let updatedProduct = products?.filter((product) => product.id !== id);
        setProduct(updatedProduct);
        setCount(updatedProduct.length);
    };

    let cartProduct = products.map((product, index) => (
        <CartProduct
            key={index}
            product={product}
            deleteProduct={deleteProduct}
        />
    ));
    return (
        <>
            <div align='right'>
                <CartCount count={count} />
            </div>
            <div className='product-container'>{cartProduct}</div>
        </>
    );
}
