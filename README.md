# Welcome to bamazon grocer!

Bamazon is a “grocery store” (or CLI application) that runs with Node.js and a MySQL database. The app takes orders from customers and depletes stock from the store's inventory. 

This application implements a simple command line based storefront using the npm (https://www.npmjs.com/package/inquirer) inquirer package and the MySQL database backend together with the npm mysql (https://www.npmjs.com/package/mysql) package. The application utilizes a customer interface.

### Technologies used:
JavaScript
Node.js
MySQL

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.


