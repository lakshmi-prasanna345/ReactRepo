
describe("speech pundit",()=>{
    it("speechpundit login",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get('[name="email"]').type("lakshmi.majjiga+coach123@applines.com")
        cy.get('[name="password"]').type("luckysai")
       cy.get('[style="text-align: center;"] > .btn').type("{Enter}")
       cy.get('.nav-content').trigger('mouseover').click()
       cy.get('.profile').click()
       cy.get('[href="/user-profile"]').click()
    //    cy.get(':nth-child(3) > .btn').click().wait(2000)
    cy.get('.settings-button > span').click()
    cy.get('.blue-light').click()
    cy.get('.btn-close').click()
    })
})