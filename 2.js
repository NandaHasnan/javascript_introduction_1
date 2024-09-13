// Deklarasi nilai-nilai untuk mata pelajaran
const mtk = 80;
const bindo = 90;
const b_inggris = 89;
const ipa = 69;

// Validasi input nilai, pastikan semua nilai diisi
if (mtk == null || bindo == null || b_inggris == null || ipa == null) {
    console.log("Error: Semua nilai harus diisi.");
} else {
    // Menghitung nilai rata-rata
    const average = (mtk + bindo + b_inggris + ipa) / 4;

    // Menentukan grade berdasarkan nilai rata-rata
    let grade;

    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Menampilkan hasil
    console.log("Rata-rata nilai: " + average.toFixed());
    console.log("Grade: " + grade);
}
