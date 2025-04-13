function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /[,\n]/;
    let nums = numbers;
    
    // Check for custom delimiter (Step 4)
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd);
        nums = numbers.substring(delimiterEnd + 1);
    }
    
    const numberArray = nums.split(delimiter).map(num => {
        const parsed = parseInt(num, 10);
        return isNaN(parsed) ? 0 : parsed; // Handle invalid numbers gracefully
    });
    
    // Check for negatives (Step 5)
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    return numberArray.reduce((sum, num) => sum + num, 0);
}

// Test cases
function runTests() {
    // Step 1 tests
   	console.log(add("") === 0, "Empty string should return 0");
    console.log(add("1") === 1, "'1' should return 1");
    console.log(add("5") === 5, "'5' should return 5");
    
    // Step 2 tests
    console.log(add("1,2") === 3, "Test 3: '1,2' should return 3");
    console.log(add("10,20,5") === 35, "Test 4: '10,20,5' should return 35");
    
    // Step 3 tests
    console.log(add("1\n2,3") === 6, "Test 5: '1\\n2,3' should return 6");
    console.log(add("10\n20\n5") === 35, "Test 6: '10\\n20\\n5' should return 35");
    
    // Step 4 tests
    console.log(add("//;\n1;2") === 3, "Test 7: Custom delimiter ';' should work");
    console.log(add("//|\n1|2|3") === 6, "Test 8: Custom delimiter '|' should work");
    console.log(add("//sep\n2sep5") === 7, "Test 9: Custom delimiter 'sep' should work");
    
    // Step 5 tests
    try {
        add("1,-2,3");
        console.error("Test 10 failed: should throw error for negative numbers");
    } catch (e) {
        console.log(e.message === "negative numbers not allowed -2", 
                      "Test 10: Should detect single negative number");
    }
    
    try {
        add("//|\n-1|2|-3");
        console.error("Test 11 failed: should throw error for negative numbers");
    } catch (e) {
        console.log(e.message === "negative numbers not allowed -1,-3", 
                      "Test 11: Should detect multiple negative numbers");
    }
    
    console.log("All tests completed");
}

runTests();
