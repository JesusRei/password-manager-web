require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const userRoutes = require("./routes/userRoutes");
const passwordRoutes = require("./routes/passwordRoutes");
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/passwords", passwordRoutes);
sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.error("No se pudo conectar a la base de datos:", err)
  );
