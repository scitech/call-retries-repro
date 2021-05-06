const { myBadFunctionReturns5 } = require('./');
it('does something', () => {
  expect(myBadFunctionReturns5()).toBe(5);
});
it('does something2', () => {
  expect(myBadFunctionReturns5()).not.toBe(6);
});

it('does something3', () => {
  expect(myBadFunctionReturns5()).not.toBe(1);
});

it('does something4', () => {
  expect(myBadFunctionReturns5()).not.toBe(2);
});

it('does something5', () => {
  expect(myBadFunctionReturns5()).not.toBe(3);
});

it('does something6', () => {
  expect(myBadFunctionReturns5()).not.toBe(4);
});
