
describe("speech pundit", () => {//part of mocha test framework(testing framework cypress).used for organizing testcases into suites or groups
    it("speechpundit login", () => {//it indicate individual test case
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get(':nth-child(1) > .form-control').type("lakshmi.majjiga+coach1@applines.com")
        cy.get(':nth-child(2) > .form-control').type("luckysai")
        cy.get('[style="text-align: center;"] > .btn').type("{enter}")
        cy.wait(5000)
        cy.get('[href="/pricing/cart/"]').click()
        cy.get('.form-select').select("Monthly")
        cy.get('#value').type("NSF2023")
        cy.get('.flex > .btn-icon > span').click()
        cy.get('.shopping-summary-body > .btn-icon > span').click()
        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get("[href='/user/groups/]").click()
    })
})