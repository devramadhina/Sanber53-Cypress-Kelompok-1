import editAccount from "../../support/pageObject/editAccount"
const editData = require('../../fixtures/editData.json')

describe('Edit Account Information', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('pwd'))
  })

  it('Success Edit Account Information', () => {
    editAccount.clickEdit()
    cy.get(editAccount.firstname).clear().type(editData["valid-data"]["first-name"])
    cy.get(editAccount.lastname).clear().type(editData["valid-data"]["last-name"])
    editAccount.clickSave()
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
  })

  it.only('Failed Edit Account Information - Blank All Input Field', () => {
    editAccount.clickEdit()
    cy.get(editAccount.firstname).clear()
    cy.get(editAccount.lastname).clear()
    editAccount.clickSave()
    editAccount.verifyErrFirst()
    editAccount.verifyErrLast()
  })

  it('Failed Edit Account Information - Blank Fisrtname', () => {
    editAccount.clickEdit()
    cy.get(editAccount.firstname).clear()
    cy.get(editAccount.lastname).clear().type(editData["valid-data"]["last-name"])
    editAccount.clickSave()
    editAccount.verifyErrFirst()
  })

  it('Failed Edit Account Information - Blank LastName', () => {
    editAccount.clickEdit()
    cy.get(editAccount.firstname).clear().type(editData["valid-data"]["first-name"])
    cy.get(editAccount.lastname).clear()
    editAccount.clickSave()
    editAccount.verifyErrLast()
  })
})