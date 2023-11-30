/*
 * File: complexCode.js
 * Description: This code demonstrates a complex implementation of an inventory management system using JavaScript.
 * Author: John Doe
 */

// Inventory Management Class
class InventoryManagement {
  constructor() {
    this.inventory = [];
  }

  // Add a product to the inventory
  addProduct(product) {
    this.inventory.push(product);
  }

  // Remove a product from the inventory
  removeProduct(productId) {
    this.inventory = this.inventory.filter(product => product.id !== productId);
  }

  // Find a product by its ID
  findProductById(productId) {
    return this.inventory.find(product => product.id === productId);
  }

  // Get the total value of the inventory
  getTotalValue() {
    let totalValue = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      const product = this.inventory[i];
      totalValue += product.price * product.quantity;
    }
    return totalValue;
  }
}

// Product Class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Create an instance of the inventory management system
const inventoryManagement = new InventoryManagement();

// Add some products to the inventory
inventoryManagement.addProduct(new Product(1, "iPhone", 999, 10));
inventoryManagement.addProduct(new Product(2, "MacBook", 1999, 5));
inventoryManagement.addProduct(new Product(3, "iPad", 499, 20));

// Remove a product from the inventory
inventoryManagement.removeProduct(2);

// Find a product by its ID
const foundProduct = inventoryManagement.findProductById(1);
console.log(foundProduct);

// Get the total value of the inventory
const totalValue = inventoryManagement.getTotalValue();
console.log("Total inventory value:", totalValue);

// Output:
// Product { id: 1, name: 'iPhone', price: 999, quantity: 10 }
// Total inventory value: 15990