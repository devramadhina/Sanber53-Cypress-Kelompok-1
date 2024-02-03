class editAccount{
    firstname = '#firstname'
    lastname = '#lastname'
    btn_save = '#form-validate > .actions-toolbar > div.primary > .action > span'
    err_first = '#firstname-error'
    err_last = '#lastname-error'

    verifyErrFirst(){
        cy.get(this.err_first).should('be.visible')
    }

    verifyErrFirst(){
        cy.get(this.err_last).should('be.visible')
    }

    clickSave(){
        cy.get(this.btn_save).click()

    }
}
export default new editAccount()