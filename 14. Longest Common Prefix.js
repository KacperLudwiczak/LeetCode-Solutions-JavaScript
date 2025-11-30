// Brute force, O(n^2)
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = "";

    // iterujemy po literach pierwszego słowa
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        // sprawdzamy tę literę w pozostałych słowach
        for (let j = 1; j < strs.length; j++) {
            // jeśli słowo jest za krótkie lub litera inna → kończymy
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }

        // litera pasuje do wszystkich → dodajemy do prefixu
        prefix += char;
    }

    return prefix;
}

// Sortowanie + porównanie pierwszego i ostatniego słowa 
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // sortujemy alfabetycznie
    strs.sort();

    const first = strs[0];
    const last = strs[strs.length - 1];

    let i = 0;

    // porównujemy literki obu słów
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
}
