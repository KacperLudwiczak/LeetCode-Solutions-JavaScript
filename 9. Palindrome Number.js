// Najprostsze rozwiązanie (zamiana liczby na string). 
function isPalindrome(x) {
    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Rozwiązanie bez stringów, tylko matematycznie
function isPalindrome(x) {
    if (x < 0) return false;

    let divider = 1;
    while (x / divider >= 10) {
        divider *= 10;
    }

    while (x > 0) {
        const left = Math.floor(x / divider);
        const right = x % 10;

        if (left !== right) return false;

        // usuń lewą pierwszą cyfrę
        x = x % divider;
        // usuń prawą ostatnią cyfrę
        x = Math.floor(x / 10);

        // zmniejsz divider o dwa miejsca (bo usuwamy 2 cyfry)
        divider = divider / 100;
    }

    return true;
}
