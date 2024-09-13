
# JavaScript Introduction Project

## Introduction
This project contains basic JavaScript examples to demonstrate object manipulation and simple conditional logic. It is designed as an introduction to JavaScript for beginners and covers the following topics:
- Creating and using objects
- Basic validation and conditional statements
- Calculating averages and assigning grades based on scores

## Installation
To run this project, you need to have Node.js installed. You can download and install it from [here](https://nodejs.org).

Once Node.js is installed, you can execute the scripts in your terminal or command prompt.

## Usage
1. Download or clone the project files to your local machine.
2. Open a terminal and navigate to the project directory.
3. Use the following commands to run each JavaScript file:
    - To run `1.js`:
      ```bash
      node 1.js
      ```
    - To run `2.js`:
      ```bash
      node 2.js
    - To run `3.js`:
      ```bash
      node 3.js
    - To run `4.js`:
      ```bash
      node 4.js


## Features
### 1. Biodata Display (`1.js`)
This script defines a JavaScript object to represent personal biodata and outputs the contents to the console. The biodata includes:
- Name
- Age
- Hobbies
- Marital status
- List of educational background
- Skills and their proficiency levels
- Interest in coding

You can view and modify this data directly within the script. Example output from this script:
```javascript
{
  name: "Bagus",
  age: 25,
  hobbies: "reading",
  isMarried: false,
  schoolList: [...],
  skills: [...],
  interestInCoding: true
}
```

### 2. Grade Calculation (`2.js`)
This script calculates the average of four subject scores (Math, Indonesian, English, and Science) and assigns a grade based on the average:
- A: 90 and above
- B: 80 to 89
- C: 70 to 79
- D: 60 to 69
- E: Below 60

It validates that all scores are present and outputs both the calculated average and the assigned grade.

Example output:
```bash
Rata-rata nilai: 82
Grade: B
```
### Triangle Print (`3.js`)
This script prints an inverted triangle pattern based on a specified number (`printSegitiga`).

#### Example:
```javascript
const printSegitiga = 5; // You can change this value
```
When you run this script, it will output the following pattern if `printSegitiga` is set to 5:
```
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

### Modify data and retrieve data (`4.js`)
This script manages a user's data and updates specific fields like `name`, `email`, and `hobbies` using the spread operator.

#### Example:
The script defines an object `data` with user details. It then creates an `updatedData` object with modified fields.

```javascript
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
```

The output will be the updated object:

```json
{
  id: 1,
  name: "nanda",
  username: "Bret",
  email: "nanda@gmail.com",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874"
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  hobbies: "main game"
}
{
  street: "Kulas Light",
  city: "Gwenborough"
}
```
## Files
- `1.js`: Contains the biodata object and displays the information in the console.
- `2.js`: Contains the grade calculation logic based on subject scores.
- `3.js`: change the `printSegitiga` variable to print different patterns.
- `4.js`: modify the `data` and retrieve data object to use different user information.

## Contributors
- **NandaHasnan**: Initial script development.

## License
This project is licensed under the MIT License.
```

This README provides an overview of the two scripts, instructions on how to run them, and examples of their usage. Let me know if you need any adjustments or additional sections!