# Welcome to bamazon grocer!

bamazon is a “grocery store” [**CLI**](https://en.wikipedia.org/wiki/Command-line_interface) application that runs with [**Node.js**](https://en.wikipedia.org/wiki/Node.js) and a [**MySQL**](https://en.wikipedia.org/wiki/MySQL) database. The app takes orders from customers and depletes stock from the store's inventory. 

This application implements a simple command line based storefront using the [**npm inquirer package**](https://www.npmjs.com/package/inquirer) and the MySQL database backend together with the [**npm mysql package**](https://www.npmjs.com/package/mysql). The application utilizes a customer interface.

### Technologies used:

* JavaScript
* Node.js
* Inquirer
* MySQL
* Command Line

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

### Screenshot: Database **Before**

![db-before](/Images/bamazonBefore1.png)

### Screenshot: Node App **Before**

![db-before2](/Images/bamazonBefore2.png)

### Screenshot: **After**

As you can see, the database stock quantities have depleted accordingly.

![after](/Images/bamazonAfter.png)


#### Author: C.D. Gillis

