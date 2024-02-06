describe('Test Scenario', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    })

  it('Create new account', () => {
    cy.get('#firstname').type('ramadhina') //element id pake "#"
    cy.get('#lastname').type('trie')
    cy.get('[name="email"]').type('ramadhinatrieananda@gmail.com') //element name pake "[]" diluar tanda kutip single
    cy.get('#password').type('admin@123')
    cy.get('#password-confirmation').type('admin@123')
    cy.get('.action.submit.primary').click({ multiple: true })
    cy.get('.message-error').should('be.visible')
  })
  it('invalid email format', () => {
    cy.get('#firstname').type('ramadhina') //element id pake "#"
    cy.get('#lastname').type('trie')
    cy.get('[name="email"]').type('ramadhinatrieanandagmail.com') //element name pake "[]" diluar tanda kutip single
    cy.get('#password').type('admin@123')
    cy.get('#password-confirmation').type('admin@123')
    cy.get('.action.submit.primary').click({ multiple: true })
    cy.get('#email_address-error').should('be.visible')
  })
  it('Invalid password confirmation', () => {
    cy.get('#firstname').type('ramadhina') //element id pake "#"
    cy.get('#lastname').type('trie')
    cy.get('[name="email"]').type('testing@gmail.com') //element name pake "[]" diluar tanda kutip single
    cy.get('#password').type('admin@123')
    cy.get('#password-confirmation').type('admin@')
    cy.get('.action.submit.primary').click({ multiple: true })
    cy.get('#password-confirmation-error').should('be.visible')
  })
  it('Password strength: Weak', () => {
    cy.get('#firstname').type('ramadhina') //element id pake "#"
    cy.get('#lastname').type('trie')
    cy.get('[name="email"]').type('testing@gmail.com') //element name pake "[]" diluar tanda kutip single
    cy.get('#password').type('admin')
    cy.get('#password-confirmation').type('admin')
    cy.get('.action.submit.primary').click({ multiple: true })
    cy.get('#password-strength-meter').should('be.visible')
    cy.get('#password-error').should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
   
  })
})


//untuk skip test case
/*it.skip('Invalid password confirmation', () => {
  cy.get('#firstname').type('ramadhina') //element id pake "#"
  cy.get('#lastname').type('trie')
  cy.get('[name="email"]').type('testing@gmail.com') //element name pake "[]" diluar tanda kutip single
  cy.get('#password').type('admin@123')
  cy.get('#password-confirmation').type('admin@')
  cy.get('.action.submit.primary').click({ multiple: true })
  cy.get('#password-confirmation-error').should('be.visible')*/  

 //untuk hanya menjalankan salah satu test case
/*it.only('Invalid password confirmation', () => {
  cy.get('#firstname').type('ramadhina') //element id pake "#"
  cy.get('#lastname').type('trie')
  cy.get('[name="email"]').type('testing@gmail.com') //element name pake "[]" diluar tanda kutip single
  cy.get('#password').type('admin@123')
  cy.get('#password-confirmation').type('admin@')
  cy.get('.action.submit.primary').click({ multiple: true })
  cy.get('#password-confirmation-error').should('be.visible')*/  