const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { username, master_password } = req.body;
    const hashedPassword = await bcrypt.hash(master_password, 10);
    const user = await User.create({
      username,
      master_password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error registrando el usuario" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, master_password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(master_password, user.master_password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (err) {
    res.status(500).json({ error: "Error iniciando sesión" });
  }
};
