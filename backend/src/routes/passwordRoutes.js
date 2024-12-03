const express = require("express");
const passwordController = require("../controllers/passwordController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/", authMiddleware, passwordController.addPassword);
router.get("/", authMiddleware, passwordController.getPasswords);
router.put("/:id", authMiddleware, passwordController.updatePassword);
router.delete("/:id", authMiddleware, passwordController.deletePassword);
module.exports = router;
