const biodata = {
    name: "Nanda", // Nama (string)
    age: 24, // Usia (number)
    hobbies: "reading", // Hobi (array of string)
    isMarried: false, // Status pernikahan (boolean)
    schoolList: [ // Daftar sekolah (array of object)
        {
            name: "University Teknologi Yogyakarta", // Nama sekolah (string)
            yearIn: 2019, // Tahun masuk (number)
            yearOut: 2023, // Tahun keluar (number)
            major: "Informatic" // Jurusan (string)
        }
    ],
    skills: [ // Daftar keterampilan (array of object)
        {
            skillName: "JavaScript", // Nama keterampilan (string)
            level: "Beginner" // Tingkat keterampilan (beginner, advanced, expert)
        }
    ],
    interestInCoding: true // Minat dalam coding (boolean)
};

// Menampilkan biodata
console.log(biodata);
