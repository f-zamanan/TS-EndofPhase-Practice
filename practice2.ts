/*************************************
 🍽️ TypeScript Practice: Menu Functions
**************************************/

// ✅ Step 1: Create a `MenuItem` interface
/**********
 * The MenuItem interface should contain the following keys:
 * 1. id of type number
 * 2. name of type string
 * 3. category of type string
 * 4. price of type number
 * 5. ingridents of type array of strings
 *
 * *************/
interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  ingredients: string[];
}

// ✅ Step 2: Use this array to test your answers
const menu: MenuItem[] = [
  {
    id: 301,
    name: "Pasta",
    category: "Main Course",
    price: 12.99,
    ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
  },
  {
    id: 302,
    name: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
  },
  {
    id: 303,
    name: "Burger",
    category: "Main Course",
    price: 10.99,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
  },
  {
    id: 304,
    name: "French Fries",
    category: "Side Dish",
    price: 4.99,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 305,
    name: "Cheesecake",
    category: "Dessert",
    price: 6.99,
    ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
  },
];

/*************************************
 ✅ Question 1:
 Create a function `getMenuItemName` that:
 - Accepts a `MenuItem`
 - Returns the name of the item
*************************************/
function getMenuItemName(menuItem: MenuItem): string {
  return menuItem.name;
}
console.log("Question 1");
console.log(getMenuItemName(menu[0])); //Pasta

/*************************************
 ✅ Question 2:
 Create a function `isMenuItemInCategory` that:
 - Accepts a `MenuItem` and a `category` string
 - Returns true if the item belongs to that category
*************************************/
function isMenuItemInCategory(menuItem: MenuItem, category: string): boolean {
  let checker = false;
  if (menuItem.category === category) {
    checker = true;
  }
  return checker;
}
console.log("Question 2");
console.log(isMenuItemInCategory(menu[1], "Salad")); //true

/*************************************
 ✅ Question 3:
 Create a function `addMenuItem` that:
 - Accepts a `MenuItem[]` array and a new `MenuItem`
 - Adds the new item to the array
 - Returns the updated array
*************************************/
function addMenuItem(menuItem: MenuItem[], newMenuItem: MenuItem): MenuItem[] {
  menuItem.push(newMenuItem);
  return menuItem;
}
const newMenuItem: MenuItem = {
  id: 306,
  name: "Pizza",
  category: "Main Course",
  price: 14.99,
  ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};
console.log("Question 3");
console.log(addMenuItem(menu, newMenuItem));

/*************************************
 ✅ Question 4:
 Create a function `countMainCourseItems` that:
 - Accepts a `MenuItem[]` array
 - Returns how many items are in the "Main Course" category
*************************************/
function countMainCourseItems(menuItem: MenuItem[]): number {
  let itemsCount = menuItem.filter((menu) => {
    if (menu.category === "Main Course") {
      return true;
    }
  });
  return itemsCount.length;
}
console.log("Question 4");
console.log(countMainCourseItems(menu)); // 3

/*************************************
 ✅ Question 5:
 Create a function `removeMenuItemById` that:
 - Accepts a `MenuItem[]` and a `menuItemId` number
 - Returns a new array without the item that matches the ID
*************************************/
function removeMenuItemById(
  menuItem: MenuItem[],
  menuItemId: number
): MenuItem[] {
  let updatedWithoutID = menuItem.filter((menu) => {
    if (menu.id !== menuItemId) {
      return true;
    }
  });
  return updatedWithoutID;
}
console.log("Question 5");
console.log(removeMenuItemById(menu, 305));
/*************************************
 ✅ Question 6: 🌶️
 Create a function `listMenuItemNamesByCategory` that:
 - Accepts a `MenuItem[]` and a `category` string
 - Returns an array of item names that belong to that category
*************************************/
function listMenuItemNamesByCategory(
  menuItem: MenuItem[],
  category: string
): string[] {
  let MenuItemNamesByCategory = menuItem
    .filter((menu) => {
      if (menu.category === category) {
        return true;
      }
    })
    .map((menu) => {
      return menu.name;
    });
  return MenuItemNamesByCategory;
}
console.log("Question 6");
console.log(listMenuItemNamesByCategory(menu, "Main Course")); //pizza, burger, pasta

/*************************************
 ✅ Question 7: 🌶️🌶️
 Create a function `getCheapestMenuItem` that:
 - Accepts a `MenuItem[]` array
 - Returns the menu item with the lowest price
*************************************/
function getCheapestMenuItem(menuItem: MenuItem[]): MenuItem {
  let lowestedPricedMenuItem = menuItem.reduce((acc, menu) => {
    if (menu.price < acc.price) {
      return menu;
    } else {
      return acc;
    }
  });
  return lowestedPricedMenuItem;
}
console.log("Question 7");
console.log(getCheapestMenuItem(menu)); // french fries

/*************************************
 ✅ Question 8: 🌶️🌶️🌶️
 Create a function `getMenuItemsByIngredient` that:
 - Accepts a `MenuItem[]` and an `ingredient` string
 - Returns items that include that ingredient
*************************************/
function getMenuItemsByIngredient(
  menuItem: MenuItem[],
  ingredient: string
): MenuItem[] {
  let MenuItemsByIngredient = menuItem.filter((menu) => {
    for (let i = 0; i < menu.ingredients.length; i++) {
      // loop to traverse the ingredients array
      if (menu.ingredients[i] === ingredient) {
        return true;
      }
    }
  });
  return MenuItemsByIngredient;
}
console.log("Question 8");
console.log(getMenuItemsByIngredient(menu, "Parmesan"));
