// const { describe } = require("mocha");

describe("pricing", () => {
    it("monthly pricing", () => {
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get('[name="email"]').type("lakshmi.majjiga+student9@applines.com")
        cy.get('[name="password"]').type("luckysai")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.get('[href="/pricing/cart/"]').click()
        cy.get('select').select("Monthly")
        cy.get('#value').type("NSF2023")
        // cy.visit("https://dev02.speechpundit.com/userAssessment")
        // cy.wait(10000)
        cy.get('.flex > .btn-icon > span').click()
        cy.get('.shopping-summary-body > .btn-icon > span').click()

        cy.get('.input').type("lakshmi")
        // cy.get('[type=button]').click()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(1) > .radio-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(4) > .radio-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(1) > .radio-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(4) > .radio-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(4) > .radio-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(3) > .checkbox-input').check()
    cy.get(':nth-child(4) > .checkbox-input').check()
    cy.get(':nth-child(5) > .checkbox-input').check()
        cy.get('.next-sub-btn').click()

        cy.get(':nth-child(4) > .radio-input').check()
        cy.get('.next-sub-btn').click()


        cy.get(".text-area").type("I am very curious to gain knowledge.")
        cy.get('.next-sub-btn').click()

        cy.get(".text-area").type("***************************")
        cy.get('.next-sub-btn').click()

        cy.get('.start-practice > a').click()
    })
    it("yearly pricing", () => {
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get('[name="email"]').type("lakshmi.majjiga+student8@applines.com")
        cy.get('[name="password"]').type("luckysai")
        cy.get('[style="text-align: center;"] > .btn').click()
        // cy.get('[href="/pricing/cart/"]').click()
        cy.get('select').select("Yearly")
        // cy.get('.btn-icon').click()

    })
})