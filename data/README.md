# 📁 Folder Data

Folder ini berisi file JSON untuk data portfolio yang mudah di-edit.

## 📄 File yang Tersedia

### `experience.json`
Berisi data pengalaman kerja/professional experience.

**Struktur:**
```json
[
  {
    "title": "Job Title",
    "company": "Nama Perusahaan",
    "period": "2020 - 2022",
    "responsibilities": [
      "Tugas 1",
      "Tugas 2"
    ],
    "achievements": [
      "Pencapaian 1",
      "Pencapaian 2"
    ],
    "skills": ["Skill 1", "Skill 2"]
  }
]
```

## ✏️ Cara Mengubah

1. Buka file `experience.json`
2. Edit sesuai data CV Anda
3. Simpan file
4. Refresh browser (atau restart dev server jika perlu)

**Tidak perlu edit file code!** Cukup edit file JSON ini.

## 📝 Tips

- **Period**: Format bebas, contoh: "2022 - Present", "Jan 2020 - Dec 2022", "2020-2022"
- **Achievements**: Bisa dikosongkan dengan `[]` jika tidak ada
- **Skills**: Array string, tambah/kurangi sesuai kebutuhan
- **Urutan**: Experience terbaru di atas (index 0), yang lama di bawah

## 🔄 Menambah Experience Baru

Copy salah satu object, paste, dan edit:

```json
{
  "title": "Job Title Baru",
  "company": "Nama Perusahaan Baru",
  "period": "2023 - Present",
  "responsibilities": [
    "Tugas baru 1",
    "Tugas baru 2"
  ],
  "achievements": [
    "Pencapaian baru"
  ],
  "skills": ["Skill Baru"]
}
```

## ❌ Menghapus Experience

Hapus object yang tidak diperlukan dari array.

