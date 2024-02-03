import editAddress from "../../support/pageObject/editAddress"
const editDataAddress =  require ('../../fixtures/editDataAddress.json')

describe('Edit Address', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('pwd'))
  })

  it('Success Edit Address', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/address/index/')
  })

  it('Success Edit Address - Blank Company', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear()
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/address/index/')
  })



  it('Failed Edit Address - Invalid Phone Number', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["invalid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrPhone()
  })

  it('Failed Edit Address - Blank Firstname', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear()
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrFirst()
  })

  it('Failed Edit Address - Blank Lastname', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear()
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrLast()
  })

  it('Failed Edit Address - Blank Phone Number', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear()
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrPhone()
  })

  it('Failed Edit Address - Blank Street', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear()
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrStreet()
  })

  it('Failed Edit Address - Blank City', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear()
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrCity()
  })

  it('Failed Edit Address - Blank Region', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrRegion()
  })

  it('Failed Edit Address - Blank Region', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear()
    cy.get(editAddress.country).select('United States')
    
    editAddress.clickSave()
    editAddress.verifyErrZip()
  })

  it('Failed Edit Address - Blank Region', () => {
    editAddress.clickEdit()
    cy.get(editAddress.firstname).clear().type(editDataAddress["valid-data"]["first-name"])
    cy.get(editAddress.lastname).clear().type(editDataAddress["valid-data"]["last-name"])
    cy.get(editAddress.company).clear().type(editDataAddress["valid-data"].company)
    cy.get(editAddress.phn_nmbr).clear().type(editDataAddress["valid-data"].phone)
    cy.get(editAddress.street_1).clear().type(editDataAddress["valid-data"].street)
    cy.get(editAddress.city).clear().type(editDataAddress["valid-data"].city)
    cy.get(editAddress.region).select('New York')
    cy.get(editAddress.zip).clear().type(editDataAddress["valid-data"].zip)
    cy.get(editAddress.country).select('')
    
    editAddress.clickSave()
    editAddress.verifyErrCountry()
  })

})