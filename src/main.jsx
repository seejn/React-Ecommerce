import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chance from "chance";

const chance = new Chance();

let array = [];

let num_products = Math.random() * (20 - 10) + 10;
for (let index = 0; index < num_products; index++) {
    let price = Math.floor(Math.random() * (1000 - 500) + 500);
    array.push({
        id: index,
        name: `Product - ${index + 1}`,
        price: price,
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App products={array} />
    </React.StrictMode>
);
