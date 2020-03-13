/// <reference types="cypress" />
const secrets = require('../../SECRETS')

context('Add event', ()=>{

  it('start entering Create Private Event form', ()=>{
    cy.visit('https://facebook.com')
      .get('#email').type(secrets.email)
      .get('#pass').type(secrets.pass)
      .get('#loginbutton').click()
      .get('[data-testid="left_nav_item_Events"]').click()
      .url().should('include', '/events')
      .wait(300)
      .get('#entity_sidebar > div').eq(2).click() // ugly, but .contains('Create Event') didn't work
      .get('.uiContextualLayerBelowLeft > div > div > ul > li').eq(0).click()
      .wait(300)
      .get('[aria-labelledby="eventCreateTitle"]').type('test: ignore')
      .pause()
  })
})
