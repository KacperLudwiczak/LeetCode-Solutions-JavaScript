// Brute Force Solution, O(n²): 
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// Hash Table Solution, O(n): 
function twoSum(nums, target) {
    const map = {};  // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement already stored
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        // Store current value with its index
        map[nums[i]] = i;
    }
}
