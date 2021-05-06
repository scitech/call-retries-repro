const { myBadFunctionReturns5 } = require('./');
it('does something', () => {
  expect(myBadFunctionReturns5()).toBe(5);
});