const { divide, multiply, subtract, add} = require("./math");

test('add 2+3 to eaqual 5',()=>{
    expect(add(2,3)).toBe(5);
});

test('subtract 4-2 to eaqual 2',()=>{
    expect(subtract(4,2)).toBe(2);
});

test('multiply 2*3 to eaqual 6',()=>{
    expect(multiply(2,3)).toBe(6);
});

test('divide 4//2 to eaqual 2',()=>{
    expect(divide(4,2)).toBe(2);
});