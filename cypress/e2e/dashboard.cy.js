// const { describe } = require("mocha");

describe("dashboard", () => {
    it("dashboard", () => {
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get(':nth-child(1) > .form-control').type("lakshmi.majjiga+coach123@applines.com")
        cy.get(':nth-child(2) > .form-control').type("luckysai")
        cy.get('[style="text-align: center;"] > .btn').type("{enter}").wait(3000)
        cy.get('#menu > :nth-child(1) > a').trigger('mouseover').wait(2000).click().trigger('mouseout').wait(5000)
        cy.get('#menu > :nth-child(2) > a').trigger('mouseover').wait(2000).click().trigger('mouseout').wait(5000)
        cy.get('#menu > :nth-child(3) > a').trigger('mouseover').wait(2000).click().trigger('mouseout').wait(5000)
        cy.get('#menu > :nth-child(4) > a').trigger('mouseover').wait(2000).click().trigger('mouseout').wait(5000)
        cy.get('#menu > :nth-child(5) > a').trigger('mouseover').wait(2000).click().trigger('mouseout').wait(5000)
        cy.get('[href="/user"]').click()
        cy.get('[href="/user/groups"]').click().wait(3000)
        // cy.get('#menu > :nth-child(7) > a').click().wait(2000)
        cy.get('[href="/pricing"]').click().wait(3000)
        cy.get('[href="/pricing/all"]').click().wait(3000)
        cy.get('[href="/pricing/usersubscriptions"]').click().wait(3000)
    })
})