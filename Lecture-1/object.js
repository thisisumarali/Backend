// Objects


var obj = {
    name: "Umar Khan",
    age: 30,
    city: "Karachi",
    country: "Pakistan",
}

// Accessing object properties

console.log(obj.name);  // Output: Umar Khan
console.log(obj["age"]);  // Output: 30

// Modifying object properties

obj.name = "Umar Ali";
console.log(obj.name);  // Output: Umar Ali

// Adding new properties

obj.gender = "Male";
console.log(obj.gender);  // Output: Male

// Deleting properties

delete obj.country;
console.log(obj.country);  // Output: undefined (since it has been deleted)

// Nested objects

var person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

console.log(person.address.city);  // Output: New York
