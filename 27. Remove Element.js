// NAIVE O(n²) dwa zagnieżdżone pętle
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1); // usuwa element
            i--;               // cofamy index, bo tablica zmalała
        }
    }
    return nums.length;
}

// Two Pointers z zachowaniem kolejności elementów, O(n)
function removeElement(nums, val) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }

    return left; // liczba elementów != val
}

// Two Pointers wersja bez zachowania kolejności
function removeElement(nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right]; // przenosimy element z końca
            right--;                  // skracamy prawą część
        } else {
            left++;                   // ten element jest dobry
        }
    }

    return left; // liczba elementów != val
}
