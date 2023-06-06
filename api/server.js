const { S_PORT } = require("./utilities/secret.js");
const colors = require("colors");
const app = require("./app.js");
const mongodbConnection = require("./config/Database.js");

//server listening
app.listen(S_PORT, async () => {
  console.log(`server listening on port ${S_PORT}`.bgCyan.black);
  await mongodbConnection();
});
