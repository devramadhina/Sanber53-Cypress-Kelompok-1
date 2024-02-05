describe('Choose product', () => {
    it('Choose the size of the product', () => {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
        cy.wait(2000)
        cy.get('#option-label-size-143-item-166').click()
        cy.wait(2000)
        cy.get('#option-label-size-143-item-167').click()
        cy.wait(2000)
        cy.get('#option-label-size-143-item-168').click()
        cy.wait(2000)
        cy.get('#option-label-size-143-item-169').click()
        cy.wait(2000)
        cy.get('#option-label-size-143-item-170').click()
        cy.wait(2000)
    });

    it('Choose the color of the product', () => {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
        cy.wait(2000)
        cy.get('#option-label-color-93-item-50').click()
        cy.wait(2000)
        cy.get('#option-label-color-93-item-56').click()
        cy.wait(2000)
        cy.get('#option-label-color-93-item-57').click()
        cy.wait(2000)
    });
})