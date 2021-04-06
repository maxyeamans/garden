const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

// Server setup
const app = express();
const PORT = process.env.PORT || 8888;

// Helpers setup
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Specify routes
app.use(routes);

// Uncomment the try/catch block below to test your database connection
/* try {
  sequelize.authenticate();
  console.log(`Connection successfully established!`)
}
catch (err) {
  console.error(`Unable to connect to the database. 😞`)
} */

sequelize
  // ! If you changed an attribute's datatype, alter: true can delete existing values in that column.
  .sync({ force: true })
  .then( () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}. It's finally happening! *dun-dun dun dun-dunnnnn*`) );
  });
