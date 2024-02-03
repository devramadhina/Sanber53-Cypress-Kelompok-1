import editAccount from "../../support/pageObject/editAccount"
const editData = require('../../fixtures/editData.json')

describe('Edit Account Information', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('pwd'))
  })

  it('Success Edit Account Information', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAccount.firstname).clear().type(editData["valid-data"]["first-name"])
    cy.get(editAccount.lastname).clear().type(editData["valid-data"]["last-name"])
    editAccount.clickSave()
  })
})