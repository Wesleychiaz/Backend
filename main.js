const database = require("./database");

//var name = "Dixant";
//var balance = 10000;

database.connection.query(
    //"select customer_name, customer_wallet from customer where customer_type = 0",
    //`insert into seller (seller_name, seller_wallet) values ('${name}','${balance}')`,
    "insert into seller (seller_name, seller_wallet) values ('Dixant Mattal','88888888')",
    (errors, results) => {
        if (errors){
            console.log("Errors: " + errors);
      } else {
          console.log(results);
      }
    }
);

// query(what query to run, what to do with the results -> callback function)
