# Welcome to bamazon grocer!

bamazon is a “grocery store” [**CLI**](https://en.wikipedia.org/wiki/Command-line_interface) application that runs with [**Node.js**](https://en.wikipedia.org/wiki/Node.js) and a [**MySQL**](https://en.wikipedia.org/wiki/MySQL) database. The app takes orders from customers and depletes stock from the store's inventory. 

This application implements a simple command line based storefront using the [**npm inquirer package**](https://www.npmjs.com/package/inquirer) and the MySQL database backend together with the [**npm mysql package**](https://www.npmjs.com/package/mysql). The application utilizes a customer interface.

### Technologies used:

* JavaScript
* Node.js
* Inquirer
* MySQL
* Command Line

## How it Works:

Firstly, the customer interface allows the user to view the current inventory of store items, including item IDs, descriptions, and price. 

Next, the app will ask you what you'd like to buy, and the user can then "purchase" one of the existing items by entering the item ID, followed by the desired quantity. 

If the selected quantity is currently in stock, the user's order is fulfilled and displays the total grocery bill while simultaneously depleting the selected item's stock quanity in the bamazon store database. If the desired quantity is not available, the user is advised "We're sorry, this product is out of stock" and prompted to select something else.

### Screenshot Example: Database **Before**

Note the quantities of the lettuce (Product ID# 6) and red pepper (Product ID# 7).

![db-before](/Images/bamazonBefore1.png)

### Screenshot Example: Node App **Before**

The user purchased 542 lettuce units.

![db-before2](/Images/bamazonBefore2.png)

The user purchased 2 red peppers.

![db-before3](/Images/beforeRedPepper.png)

### Screenshot Example: **After**

As you can see, the database stock quantities have depleted accordingly.

![after](/Images/bamazonAfter.png)


#### Author: C.D. Gillis

