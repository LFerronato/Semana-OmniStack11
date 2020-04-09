const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT || 3333);
// console.log(process.env.CNN_JSON);
// console.log("backend rodando na porta: " + (process.env.PORT || 3333));
/** Interessante::
 * quando rodamos 'npm start' estamos chamando a config dentro do package.json/scripts:start
 * agora posso chamar 'npm dev' que executará via Nodemon
 */
