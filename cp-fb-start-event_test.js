// CodeceptJS example
const secrets = require('./SECRETS')

Feature('Add event')

Scenario('start entering Create Private Event form', (I) => {
  I.amOnPage('https://facebook.com')
  I.fillField('#email', secrets.email)
  I.fillField(`#pass`, secrets.pass)
  I.click(`#loginbutton`)
  I.wait(1)
  I.click(`Events`)  // or data-testid="left_nav_item_Events"
  I.waitInUrl(`/events`,2)
  I.wait(1)
  I.click(`Create Event`)
  I.click(`Create Private Event`)
  // I.waitForText(`You're creating a private event`, 15)
  I.waitForText(`Event Name`, 15)
  I.fillField(`input[placeholder="Add a short, clear name"]`, `test: ignore`)
  pause()
})
