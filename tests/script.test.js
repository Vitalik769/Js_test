const { test, expect, beforeEach, afterEach } = require('@jest/globals');

const testOne  = require('./test.js');

// Фікстури
const fixtures = [
    { par2: 'value1', par3: 47, expected: 47 },
    { par2: 'value2', par3: 100, expected: 91 },
    { par2: 'value3', par3: 68, expected: 68 },
    { par2: 'value4', par3: 90, expected: 90 }
];

// Параметризовані тести
fixtures.forEach((fixture, index) => {
    const { par2, par3, expected } = fixture;

    test(`Test ${index + 1}: par2=${par2}, par3=${par3}`, () => {
        expect(testOne(par2, par3)).toBe(expected);
    });
});

// Обробка виключень
test('Test with invalid arguments', () => {
    expect(testOne(undefined, 68)).toBe(68);
});


// Контроль часу виконання тестів
test('Test execution time', () => {
    const startTime = Date.now();
    testOne('value', 47);
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    expect(executionTime).toBeLessThan(100); // Перевіряємо, що час виконання менше 100 мілісекунд
});

