function add(numbers) {
    if (!numbers) return 0;
    return parseInt(numbers, 10);
}

// Tests
console.log(add("") === 0, "Empty string should return 0");
console.log(add("1") === 1, "'1' should return 1");
console.log(add("5") === 5, "'5' should return 5");
