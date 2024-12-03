const PasswordEntry = require("../models/PasswordEntry");
const { encryptPassword } = require("../utils/encryption");
const { decryptPassword } = require("../utils/encryption");

exports.addPassword = async (req, res) => {
  try {
    const { title, username, password, url, notes, user_id } = req.body;
    const { iv, encryptedData, key } = encryptPassword(password);
    const passwordEntry = await PasswordEntry.create({
      title,
      username,
      encrypted_password: encryptedData,
      iv,
      key,
      url,
      notes,
      user_id,
    });
    res.status(201).json(passwordEntry);
  } catch (err) {
    res.status(500).json({ error: "Error añadiendo la contraseña" });
  }
};

exports.getPasswords = async (req, res) => {
  try {
    const passwords = await PasswordEntry.findAll();
    const decryptedPasswords = passwords.map((password) => {
      const decryptedPassword = decryptPassword(
        password.encrypted_password,
        password.iv,
        password.key
      );
      return { ...password.toJSON(), password: decryptedPassword };
    });
    res.status(200).json(decryptedPasswords);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo las contraseñas" });
  }
};

exports.deletePassword = async (req, res) => {
  try {
    const { id } = req.params;
    await PasswordEntry.destroy({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Error eliminando la contraseña" });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, username, encrypted_password, url, notes } = req.body;
    await PasswordEntry.update(
      { title, username, encrypted_password, url, notes },
      { where: { id } }
    );
    res.status(200).json({ message: "Contraseña actualizada" });
  } catch (err) {
    res.status(500).json({ error: "Error actualizando la contraseña" });
  }
};
