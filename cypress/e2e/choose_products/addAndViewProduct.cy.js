describe('Add to cart', () => {
    it('Add to cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
        cy.wait(2000)
        cy.get('#option-label-size-143-item-166').click()
        cy.wait(2000)
        cy.get('#option-label-color-93-item-56').click()
        cy.wait(2000)
        cy.get("[name = 'qty'] ").type('2')
        cy.wait(2000)
        cy.get('#product-addtocart-button').click()
        cy.wait(3000)
    });

    it('view the product', () => {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
        cy.wait(2000)
        cy.get('#option-label-size-143-item-166').click()
        cy.wait(2000)
        cy.get('#option-label-color-93-item-56').click()
        cy.wait(2000)
        cy.get("[name = 'qty'] ").type('2')
        cy.wait(2000)
        cy.get('#product-addtocart-button').click()
        cy.wait(3000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        cy.wait(1000)
    });
})