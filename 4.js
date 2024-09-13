let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    hobbies: "football"
};

// Menggunakan spread operator untuk memperbarui objek
const updatedData = {
    ...data, // Salin semua properti dari objek data
    name: "nanda", // Update nama
    email: "nanda@gmail.com", // Update email
    hobbies: "main game" // Update hobbies (perhatikan perubahan dari "hobbies" menjadi "hobby")
};

// Menampilkan hasil
console.log(updatedData);

  // Menampilkan street dan city di data address
  const { street, city } = data.address;
  console.log(street);
  console.log(city);