We noticed test failures related to unhandled promise rejections on Node 15.5, but really the "Call retries were exceeded" message could involve any Node exception.

The test suites in this repo are all duplicates; there are 20+ of them to get Jest to run in parallel rather than sequentially.

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

 PASS  ./index19.test.js
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 19)
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 20)
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 21)
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 22)
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 23)
(node:48343) UnhandledPromiseRejectionWarning: Error
(node:48343) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 24)
 PASS  ./index10.test.js

Test Suites: 21 passed, 21 total
Tests:       126 passed, 126 total
Snapshots:   0 total
Time:        8.669 s
Ran all test suites.
```

Example failing output:
```
$ fnm use v16.1.0
Using v16.1.0

$ npm run test

 FAIL  ./index9.test.js
  ● Test suite failed to run

    Call retries were exceeded

      at ChildProcessWorker.initialize (node_modules/jest-worker/build/workers/ChildProcessWorker.js:193:21)

node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
 FAIL  ./index17.test.js
  ● Test suite failed to run

    Call retries were exceeded

      at ChildProcessWorker.initialize (node_modules/jest-worker/build/workers/ChildProcessWorker.js:193:21)


 RUNS  ./index3.test.js
 RUNS  ./index13.test.js
 RUNS  ./index2.test.js
 RUNS  ./index8.test.js
 RUNS  ./index10.test.js
 RUNS  ./index18.test.js
 RUNS  ./index19.test.js

Test Suites: 14 failed, 14 of 21 total
```
