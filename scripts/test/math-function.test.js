const mathFunction = require('../math-function')

describe('Add two numbers', () => {
  test('Basic addition result', () => {
    expect(mathFunction.add(1, 4)).toEqual(5);
  });
  test('Works with one negative number', () => {
    expect(mathFunction.add(5, -4)).toEqual(1);
  });
  test('Works with two negative numbers', () => {
    expect(mathFunction.add(-10, -4)).toEqual(-14);
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.add(10, "90")).toEqual('ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.add(10, [90, 1])).toEqual('ERROR');
  });
});

describe('Subtract two numbers', () => {
  test('Basic subtraction result', () => {
    expect(mathFunction.subtract(4, 1)).toEqual(3);
  });
  test('Works with one negative number', () => {
    expect(mathFunction.subtract(5, -4)).toEqual(9);
  });
  test('Works with two negative numbers', () => {
    expect(mathFunction.subtract(-10, -4)).toEqual(-6);
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.subtract(2, "90")).toEqual('ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.subtract(5, [90, 1])).toEqual('ERROR');
  });
});

describe('Multiply two numbers', () => {
  test('Basic multiplication result', () => {
    expect(mathFunction.multiply(3, 2)).toEqual(6);
  });
  test('Works with one negative number', () => {
    expect(mathFunction.multiply(8, -5)).toEqual(-40);
  });
  test('Works with two negative numbers', () => {
    expect(mathFunction.multiply(-6, -7)).toEqual(42);
  });
  test('Works with zero', () => {
    expect(mathFunction.multiply(0, 3)).toEqual(0);
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.multiply(7, "90")).toEqual('ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.multiply([-2, 1], 2)).toEqual('ERROR');
  });
});

describe('Divide two numbers', () => {
  test('Basic division result, and rounds to two decimal points max', () => {
    expect(mathFunction.divide(2, 3)).toEqual(0.67);
  });
  test('Works with one negative number', () => {
    expect(mathFunction.divide(8, -5)).toEqual(-1.6);
  });
  test('Works with two negative numbers', () => {
    expect(mathFunction.divide(-5, -10)).toEqual(0.5);
  });
  test('Works with first parameter equals to zero', () => {
    expect(mathFunction.divide(0, 5)).toEqual(0);
  });
  test('Returns DIV_BY_ZERO_ERROR if second parameter is zero', () => {
    expect(mathFunction.divide(12, 0)).toEqual('DIV_BY_ZERO_ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.divide("A", -2)).toEqual('ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.divide(9, [90, 1])).toEqual('ERROR');
  });
});

describe('Find percentage of a number', () => {
  test('Basic percentage result, and rounds to two decimal points max', () => {
    expect(mathFunction.percent(2)).toEqual(0.02);
  });
  test('Works with zero', () => {
    expect(mathFunction.percent(0)).toEqual(0);
  });
  test('Works with negative number', () => {
    expect(mathFunction.percent(-4)).toEqual(-0.04);
  });
  test('Works with decimal number, and rounds to two decimal points max', () => {
    expect(mathFunction.percent(1.15)).toEqual(0.01);
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.percent("A")).toEqual('ERROR');
  });
  test('Returns ERROR with non-number parameters', () => {
    expect(mathFunction.percent([1, 2])).toEqual('ERROR');
  });
});