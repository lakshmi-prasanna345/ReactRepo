// const { describe } = require("mocha");

describe("trynow",()=>{
    it("trynow",()=>{
        // cy.clock(0)
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(9000)
        cy.get('.d-grid > .btn-secondary').should("be.visible").wait(5000)
        cy.get('.d-grid > .btn-secondary').wait(3000).click()
        cy.wait(5000)
        // cy.tick(1000)
        cy.get('.dcard').eq(5).should('be.visible').wait(5000)  
        // cy.wait(5000)
        cy.get('[style="margin-top: 5%;"] > .g-2 > :nth-child(1)').click()
        cy.wait(5000) 
        cy.get('[style="margin-right: 1%;"]').should('be.visible').wait(5000)
        cy.get('[style="margin-right: 1%;"]').click()
        cy.wait(5000)
        cy.go('back').wait(2000)
        cy.go('back')
        // cy.go('forward')
        // cy.get('.progressbar > :nth-child(5)').type("{Enter}")
        // cy.get('.progressbar > :nth-child(5)').click()
        // cy.go('/trynow')

    })
})