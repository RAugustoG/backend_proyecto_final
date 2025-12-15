require("dotenv").config();
const app = require("./server/server");
require("./db/config");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en puerto ${PORT}`))
