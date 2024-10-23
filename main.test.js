import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main.js";

// capitalize
test('capitalize', () => {
    expect(capitalize('robert')).toBe('Robert');
    expect(capitalize('Jeremy')).toBe('Jeremy');
    expect(capitalize('')).toBe('');
})

// reverseString
test('reverseString', () => {
    expect(reverseString('chris')).toBe('sirhc');
    expect(reverseString('glenelg')).toBe('glenelg');
    expect(reverseString('')).toBe('');
})

test('calculator', () => {
    expect(calculator.add(4, 5)).toBe(9);
    expect(calculator.add(11, -45)).toBe(-34);
    
    expect(calculator.subtract(99, 40)).toBe(59);
    expect(calculator.subtract(11, -45)).toBe(56);

    expect(calculator.multiply(64, 4)).toBe(256);
    expect(calculator.multiply(15, 1)).toBe(15);
    expect(calculator.multiply(9, 0)).toBe(0);
    
    expect(calculator.divide(64, 4)).toBe(16);
    expect(calculator.divide(90, 0)).toBe(undefined);
})

test('caesarCipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )   
})