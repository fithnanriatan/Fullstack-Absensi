# 📘 Absensi Mahasiswa

**Absensi Mahasiswa** adalah aplikasi absensi sederhana yang menerapkan konsep pemisahan antara **backend** dan **frontend** dalam pengembangan aplikasi **Fullstack**. Aplikasi ini ditujukan sebagai **demo atau pengenalan konsep Fullstack Web Development**.

---

## ✨ Fitur Utama

- 🔐 Login dan Logout
- 📝 Registrasi pengguna
- ⏱️ Absensi Masuk dan Keluar (Realtime)
- 📊 Dashboard pengguna
- ✏️ Edit profil

---

## 🛠️ Teknologi yang Digunakan

- **Backend:**
  - Node.js
  - Express.js
  - Sequelize ORM
  - MySQL

- **Frontend:**
  - React.js
  - React-Bootstrap
  - Axios
  - React Router DOM

---

## ⚙️ Instalasi & Menjalankan Proyek

Berikut adalah langkah-langkah untuk menjalankan proyek ini di lingkungan lokal Anda:

### 1. Clone Repository
```bash
git clone https://github.com/username/absensi-mahasiswa.git
```

### 2. Siapkan Database
- Import file `absensi.sql` ke MySQL Anda (gunakan tools seperti phpMyAdmin atau MySQL CLI).

### 3. Jalankan Backend
```bash
cd express-api
npm install
npm run api
```

### 4. Jalankan Frontend
Buka terminal baru:
```bash
cd react-client
npm install
npm start
```

### 5. Akses Aplikasi
Buka browser dan akses:
```
http://localhost:3000
```

---

## 🧪 Catatan Tambahan

- Pastikan environment Anda telah terinstal:
  - Node.js dan npm
  - MySQL server
- Project ini tidak menggunakan sistem lisensi apa pun dan **hanya untuk keperluan demo atau pembelajaran**.

---

## 🧠 Tentang Proyek

Proyek ini dibuat untuk membantu memahami bagaimana **client dan server saling berinteraksi**, termasuk:
- Penyimpanan data dengan ORM Sequelize
- Otentikasi sederhana tanpa token
- Penggunaan `localStorage` untuk menyimpan sesi pengguna
- Komunikasi frontend-backend menggunakan **Axios**
