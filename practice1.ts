/**************************************************************
📦 TypeScript Practice: Working with Products

You’re working with a list of products in a store. Each product has:
- id (number)
- name (string)
- category (string)
- price (number)

Your goal is to write functions that interact with this data.
**************************************************************/
// ✅ Step 1: Create a `Product` interface
/**********
 * The Product interface should contain the following keys:
 * 1. id of type number
 * 2. name of type string
 * 3. category of type string
 * 4. price of type number
 *
 * *************/

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

// ✅ Sample data to test your functions
const products: Product[] = [
  { id: 201, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 202, name: "T-shirt", category: "Clothing", price: 19.99 },
  {
    id: 203,
    name: "Coffee Maker",
    category: "Kitchen Appliances",
    price: 79.99,
  },
  { id: 204, name: "Running Shoes", category: "Footwear", price: 59.99 },
  { id: 205, name: "Bookshelf", category: "Furniture", price: 149.99 },
];

/**************************************************************
✅ Question 1:
Create a function `getProductName` that:
- Accepts a `product` of type `Product`
- Returns the name of the product
**************************************************************/
function getProductName(product: Product): string {
  return product.name;
}
console.log("Question 1");
console.log(getProductName(products[0])); // "Laptop"

/**************************************************************
✅ Question 2:
Create a function `isProductCategoryMatching` that:
- Accepts a `product` of type `Product` and a `category` (string)
- Returns `true` if the product’s category matches the given category
**************************************************************/
function isProductCategoryMatching(
  product: Product,
  category: string
): boolean {
  let checker: boolean = false;
  if (product.category === category) {
    checker = true;
  }
  return checker;
}
console.log("Question 2");
console.log(isProductCategoryMatching(products[1], "Clothing")); // true

/**************************************************************
✅ Question 3:
Create a function `addProduct` that:
- Accepts an array of `Product` and a new `Product`
- Adds the product to the array and returns the updated array
**************************************************************/
function addProduct(product: Product[], newProduct: Product): Product[] {
  product.push(newProduct);
  return product;
}
const newProduct: Product = {
  id: 206,
  name: "Headphones",
  category: "Electronics",
  price: 149.99,
};
console.log("Question 3");
console.log(addProduct(products, newProduct));

/**************************************************************
✅ Question 4:
Create a function `countElectronicsProducts` that:
- Accepts an array of products
- Returns the number of products in the "Electronics" category
**************************************************************/
function countElectronicsProducts(products: Product[]): number {
  let NumberOfElectronics = products.filter((product) => {
    if (product.category === "Electronics") {
      return true;
    }
  });
  return NumberOfElectronics.length;
}
console.log("Question 4");
console.log(countElectronicsProducts(products)); //2

/**************************************************************
✅ Question 5: 🌶️
Create a function `listProductNamesByCategory` that:
- Accepts an array of products and a category
- Returns an array of product names that match the category
**************************************************************/
function listProductNamesByCategory(
  products: Product[],
  category: string
): string[] {
  let ProductNameByCategory = products
    .filter((products) => {
      if (products.category === category) {
        return true;
      }
    })
    .map((products) => {
      return products.name;
    });
  return ProductNameByCategory;
}
console.log("Question 5");
console.log(listProductNamesByCategory(products, "Electronics")); // Headphones, Laptop

/**************************************************************
✅ Question 6: 🌶️🌶️
Create a function `getCheapestProduct` that:
- Accepts an array of products
- Returns the product object with the lowest price
**************************************************************/
function getCheapestProduct(products: Product[]): Product {
  //   let cheapestProduct = products.map((product) => { // product = { id: 201, name: "Laptop", category: "Electronics", price: 999.99 }
  //     if (Math.min(product.price)) { // Math.min(999.99) => 999.99 which is truthy value => which is true
  //       return product; // { id: 201, name: "Laptop", category: "Electronics", price: 999.99 }
  //     }
  //   });
  // [800, 500, 300, 700, 500, 300]
  // step 1 loop over array
  // step 2 add condition current price < min price (equal to 1000) 800 < 1000
  // step 3 if true new min equal current price min => 800 => 500 => 300
  // step 4 loop again to find the object with the price equal to min price
  // step 5 price === min
  //   let min = 1000;
  //   products.forEach((product) => {
  //     if (product.price < min) {
  //       min = product.price;
  //     }
  //   });
  //   let cheapestProduct = products.find((product) => {
  //     if (product.price === min) {
  //       return product;
  //     }
  //   });
  //   return cheapestProduct as Product;

  return products.reduce((acc, product) =>
    product.price < acc.price ? product : acc
  );
}
console.log("Question 6");
console.log(getCheapestProduct(products)); // t-shirt

/**************************************************************
✅ Question 7:
Create a function `removeProductById` that:
- Accepts an array of products and a product ID
- Removes the product with that ID
- Returns the updated array
**************************************************************/
function removeProductById(products: Product[], id: number): Product[] {
  let ProductById = products.filter((products) => {
    if (products.id !== id) {
      return products;
    }
  });
  return ProductById;
}
console.log("Question 7");
console.log(removeProductById(products, 202));

/**************************************************************
✅ Question 8: 🌶️🌶️🌶️
Create a function `getProductsByPriceRange` that:
- Accepts an array of products, a min price, and a max price
- Returns an array of products within that price range (inclusive)
**************************************************************/
function getProductsByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  let withinRangeProducts = products.filter((products) => {
    if (products.price <= max && products.price >= min) {
      return true;
    }
  });
  return withinRangeProducts;
}
console.log("Question 8");
console.log(getProductsByPriceRange(products, 19.99, 59.99)); //t-shirt, running shoes
