const fizzBuzz = require("./fizzbuzz");

test("",()=>{
    expect(fizzBuzz(45)).toBe('FizzBuzz');
});
test("",()=>{
    expect(fizzBuzz(9)).toBe('Fizz');
});
test("",()=>{
    expect(fizzBuzz(5)).toBe('Buzz')
});