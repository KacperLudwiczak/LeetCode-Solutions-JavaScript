// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Example: 

// Input: nums = [2,7,11,15], target = 9 

// Output: [0,1] 

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 

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
// Najprostszy sposób myślenia (brute force). Zastanawiasz się: „A co gdybym po prostu sprawdził każdą możliwą parę liczb?” 
// Czyli: weź pierwszą liczbę, sprawdź ją z każdą inną, potem drugą liczbę z każdą następną, itd. To działa zawsze, ale jest wolne. 

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
// Zamiast sprawdzać wszystkie pary, możesz zapamiętywać liczby, które widziałeś. Wtedy w jednej chwili możesz sprawdzić, czy istnieje liczba, której potrzebujesz. 
// Myślenie krok po kroku: Idziesz po liczbach od lewej do prawej. Dla każdej liczby x obliczasz, complement = target – x (czyli czego potrzebujesz, żeby stworzyć target). Sprawdzasz: „Czy wcześniej widziałem tę potrzebną liczbę (complement)?” Jeśli tak → masz rozwiązanie! Jeśli nie → zapamiętujesz aktualną liczbę w mapie: klucz = wartość liczby, wartość = indeks. 