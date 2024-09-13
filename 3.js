const printSegitiga = 5; // Ubah nilai ini untuk mencoba input lain

// Mengecek apakah printSegitiga adalah tipe data number
if (typeof printSegitiga !== "number") {
    console.log("Data harus number");
} else {
    // Loop untuk membuat baris segitiga terbalik
    for (let i = printSegitiga; i >= 1; i--) {
        let row = '';
        // Loop untuk membuat isi setiap baris
        for (let j = 1; j <= i; j++) {
            row += row + j + ' ';
        }
        console.log(row.trim());
    }
}