const sumMultiple = require('./sumMultiple3or5');

describe('sumMultiple', ()=>{
    test('should return error message if \'num\' is not a number', ()=>{
        const num = 'kitty';
        const expected = `Error : ${num} is not a number`;
        const result = sumMultiple(num);

        expect(expected).toBe(result);
    });
    test('should return error message if \'num\' is less or equal than zero', ()=>{
        const num = -1;
        const expected = 'Error : number must be greater than zero';
        const result = sumMultiple(num);

        expect(expected).toBe(result);
    });
    test('should return 0 if there are no number multiple of 3 or 5', ()=>{
        const expected = 0;
        const result = sumMultiple(2);

        expect(expected).toBe(result);
    });
    test('should return sum of all numbers multiple of 3 or 5 into 10', ()=>{
        const expected = 33;
        const result = sumMultiple(10);

        expect(expected).toBe(result);
    });
});