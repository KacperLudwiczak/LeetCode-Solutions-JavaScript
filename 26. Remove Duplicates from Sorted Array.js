// NAIVE O(n²) dwa zagnieżdżone pętle 
function removeDuplicatesNested(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] === nums[i]) {
                nums.splice(j, 1); // usuń duplikat
                n--;               // tablica się skróciła
                j--;               // cofnij j, bo elementy się przesunęły
            }
        }
    }

    return n;
}

// Wersja two pointers, O(n), space O(1) (bez dodatkowej tablicy) 
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let left = 0; // miejsce, gdzie zapisujemy unikalne wartości

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[left]) {
            left++;                // przesuwamy "write pointer"
            nums[left] = nums[right]; // zapisujemy nowy unikalny element
        }
    }

    return left + 1; // liczba unikalnych elementów k
}
