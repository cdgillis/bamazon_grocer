var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "hellojello",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\nWELCOME TO THE ALL POWERFUL BAMAZON GROCERY APP! Prepare to be mindblown.\n\nBEHOLD, WHAT WE SELL:\n\n")
    // READ THROUGH THE LIST OF PRODUCTS
    for (var i = 0; i < res.length; i++) {
      console.log("Product ID: " + res[i].item_id + "\nName:       " + res[i].product_name +
        "\nPrice:      $" + res[i].price.toFixed(2) + "\n");
    }

    runSearch();

    function runSearch() {
      inquirer
        .prompt([{
            name: "productID",
            type: "input",
            message: "Please enter the product ID you would like to purchase: "
          },
          {
            name: "productQuantity",
            type: "input",
            message: "How many would you like to buy? "
          }
        ])
        .then(function (answer) {

          var input_id = answer.productID;
          var input_quantity = answer.productQuantity;

          connection.query("SELECT stock_quantity, price FROM products WHERE item_id = " + input_id, function (err, result) {
            if (err) throw err;
            var current_quantity = result[0].stock_quantity;
            var price = result[0].price;
            var total = price * input_quantity;
            if (input_quantity < current_quantity) {
              connection.query("UPDATE products SET ? WHERE ?",
                [{
                    stock_quantity: current_quantity - input_quantity
                  },
                  {
                    item_id: input_id
                  }
                ],
              );
              console.log("\nYour grocery bill total = $" + total.toFixed(2) +
              "\n\n* * * Currently only accepting Monopoly money, BTZ, or bear hugs * * *");
            } else {
              console.log("We're sorry, this product is out of stock. Sucks to be you! Try another product...");
            }
          });
        })
    };
  })
});