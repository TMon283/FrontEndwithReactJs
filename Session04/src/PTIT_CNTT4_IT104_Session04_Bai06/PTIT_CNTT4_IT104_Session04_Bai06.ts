interface Product {
    id: string,
    name: string,
    price: number,
    category: {
        id: string,
        name: string;
    };
    discount ?: number;
}

let product1: Product = {
    id: "001",
    name: "Áo sơ mi",
    price: 300000,
    category: {
        id: "01",
        name: "Thời trang nam"
    },
    discount: 0.2
}

let product2: Product = {
    id: "001",
    name: "Áo phông",
    price: 100000,
    category: {
        id: "01",
        name: "Thời trang nam"
    },
}

let product3: Product = {
    id: "001",
    name: "Áo khoác",
    price: 300000,
    category: {
        id: "01",
        name: "Thời trang nam"
    },
    discount: 0.1
}

let array: Product[] = [product1, product2, product3];

function getFinalPrice(product: Product):number {
   if(typeof product.discount === "number" && !isNaN(product.discount)) {
       return product.price = (1 - product.discount) * product.price;
   }
   return product.price;
}

function printProductInfo(product: Product): void{
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price}`);
    console.log(`Giá sau khi giảm: ${getFinalPrice(product)}`);
    console.log(`Danh mục: ${product.category.name}`);
}

array.forEach(element => {
    printProductInfo(element);
});

