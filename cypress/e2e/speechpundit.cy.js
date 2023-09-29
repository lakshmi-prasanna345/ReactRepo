// const { describe } = Require("mocha");

// const { describe } = require("mocha");

describe("speech pandit login", () => {
    it("speech pundit testcases", () => {
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('[placeholder="First Name"]').type("majjiga")
        cy.get('[placeholder="Last Name"]').type("Lakshmi")
        cy.get('[name="email"]').type("lakshmi.majjiga+student9@applines.com")
        cy.get('[name="password"]').type("luckysai")
        cy.wait(5000)
        cy.get('[type=radio]').check("Student")
        cy.get('[type=checkbox').check()
        // cy.get('[style="text-align: center;"] > .btn').click() other way of geting register button
        cy.get('[type="submit"]').click()
    })
})