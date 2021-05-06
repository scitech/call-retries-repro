We noticed test failures related to unhandled promise rejections on Node 15.5. 

This works on 14.16, but fails on at least 15.5 and 16.1:
```
npm i && npm test
```

Example passing output:
```
$ fnm use v14.16.0
Using v14.16.0

$ npm run test

> call-retries-repro@1.0.0 test /Users/tylergould/codes/github.com/scitech/call-retries-repro
> jest

(node:45457) UnhandledPromiseRejectionWarning: Error
(Use `node --trace-warnings ...` to show where the warning was created)
(node:45457) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:45457) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
 PASS  ./index.test.js
  ✓ does something (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.388 s
Ran all test suites.
```

Example failing output:
```
$ fnm use v16.1.0
Using v16.1.0

$ npm run test

> call-retries-repro@1.0.0 test
> jest


 RUNS  ./index.test.js
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```