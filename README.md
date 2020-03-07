## Testing the test system: CodeceptJS & Playwrite

[CodeceptJS](https://codecept.io/) & [Playwrite](https://github.com/microsoft/playwright) seems like a good combo for automation testing.  Here we'll log into Facebook & start the process to enter a new event.

### Usage

First, edit `SECRETS-template.js` to add your log in information, then save as `SECRETS.js`.  Run the following:

```bash
npm i
npx codeceptjs run --steps
```

This will run the test, fill the first field of the event entry form, then pause with an `I.` prompt.  Here you can enter more tests; read the `login_test.js` for some ideas, or [read the docs](https://codecept.io/helpers/Playwright/#configuration).  When you want to quit the prompt, hit `CTRL-C` 2 times.
