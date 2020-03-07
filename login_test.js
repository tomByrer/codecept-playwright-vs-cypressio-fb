const secrets = require('./SECRETS')

Feature('login')

Scenario('Add event', (I) => {
  I.amOnPage('https://facebook.com')
  I.fillField('#email', secrets.email)
  I.fillField(`#pass`, secrets.pass)
  I.click(`#loginbutton`)
  I.click(`Events`)
  I.waitInUrl(`/events`,5)
  I.wait(3)
  I.click(`Create Event`)
  I.click(`Create Private Event`)
  // I.waitForText(`You're creating a private event`, 15)
  I.waitForText(`Event Name`, 15)
  I.fillField(`input[placeholder="Add a short, clear name"]`, `test: ignore`)
  pause()
})
