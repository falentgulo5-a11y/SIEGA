# 🎓 SIEGA Website - Program Studi Teknologi & Bisnis Digital

Website promosi untuk Program Studi SIEGA (Sistem Informasi, E-Commerce, Game Teknologi, dan Akuntansi Sistem Informasi).

## 📁 Struktur File

```
siega-website/
│
├── index.html          # Halaman utama
├── style.css           # File styling
├── script.js           # File JavaScript
├── README.md           # File ini
│
├── assets/             # Folder untuk gambar (opsional)
│   ├── images/
│   └── icons/
│
└── docs/               # Folder untuk dokumen (opsional)
    └── brosur.pdf
```

## 🚀 Cara Membuat File ZIP

### Opsi 1: Manual (Paling Mudah)

1. **Buat folder baru** bernama `siega-website`
2. **Copy 3 file** dari Claude.ai:
   - `index.html` (dari artifact pertama)
   - `style.css` (dari artifact kedua)
   - `script.js` (dari artifact ketiga)
3. **Paste** ketiga file tersebut ke dalam folder `siega-website`
4. **Klik kanan** pada folder `siega-website`
5. Pilih **"Compress"** atau **"Send to > Compressed (zipped) folder"**
6. File ZIP siap! 🎉

### Opsi 2: Via Command Line

```bash
# Buat folder
mkdir siega-website
cd siega-website

# Buat file-file (paste konten dari Claude.ai)
# Windows: notepad index.html
# Mac/Linux: nano index.html

# Setelah semua file dibuat, kembali ke parent folder
cd ..

# Buat ZIP
# Windows PowerShell:
Compress-Archive -Path siega-website -DestinationPath siega-website.zip

# Mac/Linux:
zip -r siega-website.zip siega-website
```

## 📤 Upload ke GitHub

### Langkah 1: Buat Repository Baru

1. Buka [GitHub.com](https://github.com)
2. Klik tombol **"+"** di pojok kanan atas
3. Pilih **"New repository"**
4. Isi detail:
   - **Repository name**: `siega-website`
   - **Description**: "Website Promosi Program Studi SIEGA"
   - Pilih **Public**
   - ✅ Add a README file
5. Klik **"Create repository"**

### Langkah 2: Upload File

**Via Web Interface (Paling Mudah):**

1. Di halaman repository, klik **"Add file"** > **"Upload files"**
2. Drag & drop ketiga file (`index.html`, `style.css`, `script.js`)
3. Atau klik **"choose your files"** dan pilih file
4. Tulis commit message: "Initial commit - SIEGA website"
5. Klik **"Commit changes"**

**Via Git Command Line:**

```bash
# Clone repository
git clone https://github.com/username/siega-website.git
cd siega-website

# Copy file-file ke folder ini

# Add, commit, dan push
git add .
git commit -m "Initial commit - SIEGA website"
git push origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Di repository, klik **"Settings"**
2. Scroll ke bawah ke bagian **"Pages"** (menu kiri)
3. Di **"Source"**, pilih:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
4. Klik **"Save"**
5. Tunggu 1-2 menit
6. Refresh halaman, akan muncul link website:
   ```
   https://username.github.io/siega-website/
   ```

## ✨ Fitur Website

- ✅ **Responsive Design** - Mobile, tablet, desktop friendly
- ✅ **Dark Mode** - Toggle light/dark theme
- ✅ **Smooth Scrolling** - Navigasi yang halus
- ✅ **Animated Sections** - Fade-in saat scroll
- ✅ **Image Slider** - Gallery otomatis
- ✅ **WhatsApp Button** - Float button untuk kontak
- ✅ **Modern UI** - Gradient, shadows, hover effects

## 🎨 Customisasi

### Ganti Nomor WhatsApp

Edit `index.html` baris 257:
```html
<a href="https://wa.me/6281234567890" class="whatsapp-float" target="_blank">
```
Ganti `6281234567890` dengan nomor WhatsApp Anda.

### Ganti Warna Tema

Edit `style.css` baris 9-14:
```css
:root {
    --primary: #2563eb;      /* Warna utama */
    --secondary: #7c3aed;    /* Warna sekunder */
    --accent: #06b6d4;       /* Warna aksen */
    --dark: #1e293b;         /* Warna gelap */
    --light: #f8fafc;        /* Warna terang */
}
```

### Ganti Gambar Slider

Edit `index.html` bagian slider (baris 196-215):
- Upload gambar ke folder `assets/images/`
- Ganti URL gambar di setiap `<div class="slide">`

### Tambah Link Brosur

Edit `index.html` baris 250:
```html
<a href="docs/brosur-siega.pdf" class="btn btn-primary" download>
```

## 📱 Kontak & Social Media

Ubah informasi kontak di `index.html` bagian kontak (baris 220-246):

```html
<p>info@siega.ac.id</p>          <!-- Email -->
<p>+62 812-3456-7890</p>         <!-- Telepon -->
<p>@siega_official</p>           <!-- Instagram -->
```

## 🔧 Troubleshooting

### Website tidak muncul setelah upload?
- Pastikan file `index.html` ada di root folder (bukan di subfolder)
- Tunggu 5-10 menit untuk GitHub Pages deploy
- Cek di Settings > Pages apakah sudah aktif

### CSS/JS tidak bekerja?
- Pastikan nama file PERSIS: `style.css` dan `script.js`
- Cek di `index.html` baris 6 dan 263 apakah path sudah benar
- Refresh browser dengan Ctrl+F5 (hard refresh)

### Dark mode tidak berfungsi?
- Buka browser Console (F12)
- Cek apakah ada error JavaScript
- Pastikan file `script.js` sudah terupload

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: info@siega.ac.id
- WhatsApp: +62 812-3456-7890

## 📄 Lisensi

© 2024 SIEGA - Program Studi Teknologi & Bisnis Digital

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**