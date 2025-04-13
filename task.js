function add(numbers) {
    if (!numbers) return 0;
    return numbers.split(/[,\n]/)
                 .map(num => parseInt(num, 10))
                 .reduce((sum, num) => sum + num, 0);
}

// Tests

// Step 1
console.log(add("") === 0, "Empty string should return 0");
console.log(add("1") === 1, "'1' should return 1");
console.log(add("5") === 5, "'5' should return 5");

// Step 2
console.log(add("1,2") === 3, "'1,2' should return 3");
console.log(add("10,20,5") === 35, "'10,20,5' should return 35");

// Step 3
console.log(add("1\n2,3") === 6, "'1\\n2,3' should return 6");
console.log(add("10\n20\n5") === 35, "'10\\n20\\n5' should return 35");
