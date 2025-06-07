const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UsersModel = require("../models/users");
const cekPass = require("../utils/cekPassword");

// routing endpoint users utama
router.get("/", async (req, res) => {
  const users = await UsersModel.findAll();
  console.log(users);

  res.status(200).json({
    data: users,
    metadata: "test user endpoint",
  });
});

router.post("/", async (req, res) => {
  const { nim, nama, password, email, telp } = req.body;

  const encryptedPass = await bcrypt.hash(password, 10);

  const users = await UsersModel.create({
    nim,
    nama,
    password: encryptedPass,
    email,
    telp,
  });

  res.status(200).json({
    registered: users,
    metadata: "test post",
  });
});

router.put("/", async (req, res) => {
  const { nim, nama, password, newPassword, email, telp } = req.body;
  const check = await cekPass(nim, password);
  const newPassHash = await bcrypt.hash(newPassword, 10);
  
  if (check.compare) {
    const users = await UsersModel.update(
      {
        nama,
        password: newPassHash,
        email,
        telp,
      },
      {
        where: { nim: nim },
      }
    );
    res.status(200).json({
      data: { updated: users[0] },
      metadata: "Data Updated!",
    });
  } else {
    res.status(400).json({
      error: "data invalid!",
    });
  }
});

router.post("/login", async (req, res) => {
  const { nim, password } = req.body;

  try {
    const check = await cekPass(nim, password);

    // Jika user tidak ditemukan atau password salah
    if (!check.compare || !check.userData) {
      return res.status(400).json({
        error: "NIM atau password salah!",
      });
    }

    // Jika berhasil login
    res.status(200).json({
      users: check.userData,
      metadata: "Berhasil login!",
    });

  } catch (e) {
    console.error("Login error:", e); // untuk keperluan debug
    res.status(500).json({
      error: "Terjadi kesalahan server.",
    });
  }
});

module.exports = router;
