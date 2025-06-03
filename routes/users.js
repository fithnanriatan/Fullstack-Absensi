const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UsersModel = require("../models/users");
const cekPass = require('../utils/cekPassword')

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
    data: users,
    metadata: "test post",
  });
});

router.put("/", async (req, res) => {

  const { nim, nama, password, newPassword, email, telp } = req.body;
  const compare = await cekPass(nim, password)
  const newPassHash = await bcrypt.hash(newPassword, 10);

  if (compare) {
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
  const check = await cekPass(nim, password)
  if (check.compare) {
    res.status(200).json({
      users: check.userData,
      metadata: 'berhasil login!'
    })
  } else {
    res.status(400).json({
      error: 'nim / password salah!'
    })
  }
});

module.exports = router;
