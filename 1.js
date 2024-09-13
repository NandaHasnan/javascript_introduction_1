const biodata = {
    name: "Bagus", // Nama (string)
    age: 25, // Usia (number)
    hobbies: "reading", // Hobi (array of string)
    isMarried: false, // Status pernikahan (boolean)
    schoolList: [ // Daftar sekolah (array of object)
        {
            name: "University of Example", // Nama sekolah (string)
            yearIn: 2015, // Tahun masuk (number)
            yearOut: 2019, // Tahun keluar (number)
            major: "Computer Science" // Jurusan (string)
        },
        {
            name: "High School Example", // Nama sekolah (string)
            yearIn: 2012, // Tahun masuk (number)
            yearOut: 2015, // Tahun keluar (number)
            major: null // Jurusan (null karena tidak ada jurusan spesifik)
        }
    ],
    skills: [ // Daftar keterampilan (array of object)
        {
            skillName: "JavaScript", // Nama keterampilan (string)
            level: "advanced" // Tingkat keterampilan (beginner, advanced, expert)
        },
        {
            skillName: "Python", // Nama keterampilan (string)
            level: "beginner" // Tingkat keterampilan (beginner, advanced, expert)
        }
    ],
    interestInCoding: true // Minat dalam coding (boolean)
};

// Menampilkan biodata
console.log(biodata);
