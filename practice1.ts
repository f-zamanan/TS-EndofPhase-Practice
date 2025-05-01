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

// ✅ Sample data to test your functions
const products: Product[] = [
    { id: 201, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 202, name: "T-shirt", category: "Clothing", price: 19.99 },
    { id: 203, name: "Coffee Maker", category: "Kitchen Appliances", price: 79.99 },
    { id: 204, name: "Running Shoes", category: "Footwear", price: 59.99 },
    { id: 205, name: "Bookshelf", category: "Furniture", price: 149.99 },
];

/**************************************************************
✅ Question 1:
Create a function `getProductName` that:
- Accepts a `product` of type `Product`
- Returns the name of the product
**************************************************************/

// console.log(getProductName(products[0])); // "Laptop"

/**************************************************************
✅ Question 2:
Create a function `isProductCategoryMatching` that:
- Accepts a `product` of type `Product` and a `category` (string)
- Returns `true` if the product’s category matches the given category
**************************************************************/

// console.log(isProductCategoryMatching(products[1], "Clothing")); // true

/**************************************************************
✅ Question 3:
Create a function `addProduct` that:
- Accepts an array of `Product` and a new `Product`
- Adds the product to the array and returns the updated array
**************************************************************/

// const newProduct: Product = { id: 206, name: "Headphones", category: "Electronics", price: 149.99 };
// console.log(addProduct(products, newProduct));

/**************************************************************
✅ Question 4:
Create a function `countElectronicsProducts` that:
- Accepts an array of products
- Returns the number of products in the "Electronics" category
**************************************************************/

// console.log(countElectronicsProducts(products));

/**************************************************************
✅ Question 5: 🌶️
Create a function `listProductNamesByCategory` that:
- Accepts an array of products and a category
- Returns an array of product names that match the category
**************************************************************/

// console.log(listProductNamesByCategory(products, "Electronics"));

/**************************************************************
✅ Question 6: 🌶️🌶️
Create a function `getCheapestProduct` that:
- Accepts an array of products
- Returns the product object with the lowest price
**************************************************************/

// console.log(getCheapestProduct(products));

/**************************************************************
✅ Question 7:
Create a function `removeProductById` that:
- Accepts an array of products and a product ID
- Removes the product with that ID
- Returns the updated array
**************************************************************/

// console.log(removeProductById(products, 202));

/**************************************************************
✅ Question 8: 🌶️🌶️🌶️
Create a function `getProductsByPriceRange` that:
- Accepts an array of products, a min price, and a max price
- Returns an array of products within that price range (inclusive)
**************************************************************/

// console.log(getProductsByPriceRange(products, 19.99, 59.99));