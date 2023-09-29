describe("coach",()=>{
    it("coach",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get('.d-none > .btn').click()
        cy.get(':nth-child(1) > .form-control').type("majjiga")
        cy.get(':nth-child(2) > .form-control').type("lakshmi")
        cy.get(':nth-child(3) > .form-control').type("lakshmi.majjiga+coach1@applines.com")
        cy.get(':nth-child(4) > .form-control').type("luckysai")
        cy.get("[type=radio]").check("Coach")
        cy.get("[type=checkbox]").check()
        cy.get('[style="text-align: center;"] > .btn').click()
    })
})