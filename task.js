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
    
    const numberArray = nums.split(delimiter).map(num => parseInt(num, 10));
    
    // Check for negatives
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    return numberArray.reduce((sum, num) => sum + num, 0);
}

// Tests
try {
    add("1,-2,3");
    console.error("Test failed: should throw error for negative numbers");
} catch (e) {
    console.log(e.message === "negative numbers not allowed -2", 
                  "Should detect single negative number");
}

try {
    add("//|\n-1|2|-3");
    console.error("Test failed: should throw error for negative numbers");
} catch (e) {
    console.log(e.message === "negative numbers not allowed -1,-3", 
                  "Should detect multiple negative numbers");
}
