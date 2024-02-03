class editAccount{
    btn_edit = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    firstname = '#firstname'
    lastname = '#lastname'
    btn_save = '#form-validate > .actions-toolbar > div.primary > .action > span'
    err_first = '#firstname-error'
    err_last = '#lastname-error'

    clickEdit(){
        cy.get(this.btn_edit).click()
    }

    clickSave(){
        cy.get(this.btn_save).click()
    }

    verifyErrFirst(){
        cy.get(this.err_first).should('be.visible')
    }

    verifyErrLast(){
        cy.get(this.err_last).should('be.visible')
    }

    
}
export default new editAccount()