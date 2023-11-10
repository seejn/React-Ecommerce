import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

let array = [];

for (let index = 0; index < 10; index++) {
    array.push({
        id: index,
        productName: "ProductName",
        price: 10,
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App products={array} />
    </React.StrictMode>
);
