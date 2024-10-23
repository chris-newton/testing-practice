export function capitalize(s) {
    if (s === "") return "";
    return s.charAt(0).toUpperCase()  + s.slice(1);
}

export function reverseString(s) {
    let ret = "";
    for (let i = s.length - 1; i >= 0; i--) {
        ret += s[i];
    }
    return ret;
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return undefined;
        return a / b;
    }
}

export function caesarCipher(s, x) {
    let ret = "";

    for (let i = 0; i < s.length; i++) {
        ret += encodeChar(s[i], x)
    }
    return ret;
}

// returns the encoding of char c shifted x times
function encodeChar(c, x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const idx = alphabet.indexOf(c.toLowerCase());
    
    if (idx === -1) return c; // if not a-z or A-Z, don't encode
    const ret = alphabet[(idx + x) % alphabet.length];

    if (c === c.toUpperCase()) {
        return ret.toUpperCase();
    }
    return ret; 
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
        min: arr.reduce((prev, curr) => Math.min(prev, curr)),
        max: arr.reduce((prev, curr) => Math.max(prev, curr)),
        length: arr.length
    }
}
