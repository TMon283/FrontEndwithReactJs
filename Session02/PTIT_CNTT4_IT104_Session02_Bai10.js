function getOrder(products, minQuantity = 2, extraDiscount = 0.05) {
    const detail = products.map(({name, price, discount, quantity})=>{
        let finalPrice = price * (1 - discount);
        if (quantity >= minQuantity) {
            finalPrice *= (1 - extraDiscount);
        }
        finalPrice = Math.round(finalPrice);
        const subtotal = finalPrice * quantity;
        return {name, finalPrice, quantity, subtotal};
    });
    const totalBeforeDiscount = products.reduce((sum, {price, quantity})=>sum+price*quantity, 0);
    const totalAfterDiscount = detail.reduce((sum, {subtotal})=>sum+subtotal, 0);
    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        detail
    };
};

const products = [
    {name: "product1", price: 100, discount: 0.1, quantity: 2},
    {name: "product2", price: 200, discount: 0.2, quantity: 3},
    {name: "product3", price: 300, discount: 0.3, quantity: 1},
    {name: "product4", price: 400, discount: 0.4, quantity: 2},
    {name: "product5", price: 500, discount: 0.5, quantity: 2},
];

console.log(getOrder(products));
