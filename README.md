## Testing the test systems: CodeceptJS + Playwright vs Cypress

[CodeceptJS](https://codecept.io/) & [Playwright](https://github.com/microsoft/playwright) seems like a good, though newer, combo for automation testing.  [Cypress](https://github.com/cypress-io/cypress) is mature and has a slick GUI.  I used this repo to test the testers, then wrote about on [Dev.to](https://dev.to/tombyrer/testing-testers-codeceptjs-playwright-vs-cypressio-28pc).

### Usage

```bash
git clone https://github.com/tomByrer/codecept-playwright-vs-cypressio-fb.git
cd codecept-playwright-vs-cypressio-fb
```

Then copy `SECRETS-template.js` to `SECRETS.js`, and edit the new file with your information. 

```bash
npm i
```

#### Run Cypress test

`npm run test-cypress`

After a few seconds, you should see a small window.   Change the browser in the uupper-right, close the `examples` folder, & click to run the `fb-start-event_test`:

![cypress boot window](/pic/cypress-start-test-directions.png)

Wait a few more seconds.  After the test runs, you should see something like this:

![cypress test ran](/pic/cypress-test-ran-smaller.png)

If so, you're sucessful!   If you did not get that far, close the windows and try to re-run; using a busy production website may have lag.

#### Run Codecept test

`npm run test-codecept`

This will run the test, fill the first field of the event entry form, then pause with an `I.` prompt.  Here you can enter more tests; read the `cp-fb-start-event_test.js` for some ideas, or [read the docs](https://codecept.io/helpers/Playwright/#configuration).  Here is my output with VSCode CLI:

![CodeceptJS running with Playwright](/pic/codecept-test.png)