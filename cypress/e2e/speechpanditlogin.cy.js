
describe("speech pundit",()=>{
    it("speechpundit login",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get('[name="email"]').type("lakshmi.majjiga+coach123@applines.com")
        cy.get('[name="password"]').type("luckysai")
       cy.get('[type="submit"]').type("{enter}")
    })
})