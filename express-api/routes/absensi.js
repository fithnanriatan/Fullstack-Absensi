const express = require("express");
const router = express.Router();
const AbsenModel = require("../models/absensi");

// routing endpoint absensi utama
router.get("/", async (req, res) => {
  const absensi = await AbsenModel.findAll();

  res.status(200).json({
    absensi,
    metadata: "test absensi endpoint",
  });
});

router.post("/checkin", async (req, res) => {

  const { nim } = req.body;

  const users = await AbsenModel.create({
    users_nim: nim,
    status: 'in'
  });

  res.status(200).json({
    data: users,
    metadata: "berhasil checkin!",
  });
});

router.post("/checkout", async (req, res) => {

  const { nim } = req.body;

  const users = await AbsenModel.create({
    users_nim: nim,
    status: 'out'
  });

  res.status(200).json({
    data: users,
    metadata: "berhasil checkout!",
  });
});


module.exports = router;
