# 📁 Folder Public

Folder ini untuk menyimpan file-file statis yang bisa diakses langsung via URL.

## 📸 Foto Profile

1. Simpan foto profile Anda di sini dengan nama: `profile.jpg` atau `profile.png`
2. Ukuran disarankan: 800x800px atau lebih besar (format square)
3. Format: JPG atau PNG

**Contoh:**
- `public/profile.jpg` → bisa diakses via `/profile.jpg`

## 📄 File CV

1. Simpan file CV PDF Anda di sini dengan nama: `cv.pdf` atau `resume.pdf`
2. File akan bisa diakses via `/cv.pdf`

**Contoh:**
- `public/cv.pdf` → bisa diakses via `/cv.pdf`

## 🖼️ File Lain

Anda juga bisa menambahkan:
- Logo
- Screenshot project
- File lainnya yang perlu diakses via URL

**Cara menggunakan di komponen:**
```tsx
// Di komponen React/Next.js
<img src="/profile.jpg" alt="Profile" />
<a href="/cv.pdf" download>Download CV</a>
```

**Catatan:** 
- Path selalu dimulai dengan `/` (slash)
- Tidak perlu menulis `public/` di path
- Next.js otomatis mencari file di folder `public/`

