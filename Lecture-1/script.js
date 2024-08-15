// Fundamentals Of JavaScript
// arrays and objects
// functions return
// async js coding

var arr = [1, 2, 3, 4];
// foreach, map, filter, find, indexOf


// 1. for Each
arr.forEach(function (val) {
    console.log(val)
})

// 2. Map
let ans = arr.map(function (val) {
    return val;
})
console.log(ans)

// 3. Filter
let filter = arr.filter(function (val) {
    if (val >= 3) { return true; }
    else return false;
})
console.log(filter)

// 4. Find
let find = arr.find(function (val) {
    if (val === 2) return val;
})
console.log(find)

// 5. IndexOf
console.log(arr.indexOf(2))