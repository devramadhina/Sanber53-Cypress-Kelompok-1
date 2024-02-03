class editAccount{
    btn_address = '.box-billing-address > .box-actions > .action > span'
    firstname = '#firstname'
    lastname = '#lastname'
    company = '#company'
    phn_nmbr = '#telephone'

    street_1 = '#street_1'
    city = '#city'
    region = '#region_id'
    zip = '#zip'
    country = '#country'

    btn_save = '#form-validate > .actions-toolbar > div.primary > .action > span'
    err_first = '#firstname-error'
    err_last = '#lastname-error'
    err_phone = '#telephone-error'
    err_street = '#street_1-error'
    err_city = '#city-error'
    err_region = '#region_id-error'
    err_zip = '#zip-error'
    err_country = '#country-error'

    clickEdit(){
        cy.get(this.btn_address).click()
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

    verifyErrPhone(){
        cy.get(this.err_phone).should('be.visible')
    }

    verifyErrStreet(){
        cy.get(this.err_street).should('be.visible')
    }

    verifyErrCity(){
        cy.get(this.err_city).should('be.visible')
    }

    verifyErrRegion(){
        cy.get(this.err_region).should('be.visible')
    }

    verifyErrZip(){
        cy.get(this.err_zip).should('be.visible')
    }

    verifyErrCountry(){
        cy.get(this.err_country).should('be.visible')
    }

    
}
export default new editAccount()