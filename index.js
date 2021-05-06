function myBadFunctionReturns5() {
  const rejectPromise = () => new Promise((_, reject) => {
    reject(new Error());
  });
  rejectPromise();
  return 5;
}

module.exports = {
  myBadFunctionReturns5
}