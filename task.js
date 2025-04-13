function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /[,\n]/;
    let nums = numbers;
    
    // Check for custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd);
        nums = numbers.substring(delimiterEnd + 1);
    }
    
    return nums.split(delimiter)
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

// Step 4
console.log(add("//;\n1;2") === 3, "Custom delimiter ';' should work");
console.log(add("//|\n1|2|3") === 6, "Custom delimiter '|' should work");
console.log(add("//sep\n2sep5") === 7, "Custom delimiter 'sep' should work");
