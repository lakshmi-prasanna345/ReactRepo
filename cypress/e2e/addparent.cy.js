
describe("speech pundit",()=>{
    it("speechpundit login",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.get('.log').click()
        cy.get('[name="email"]').type("lakshmi.majjiga@applines.com")
        cy.get('[name="password"]').type("luckysai")
       cy.get('[style="text-align: center;"] > .btn').type("{enter}")
       cy.get('.nav-content').trigger('mouseover').click()
       cy.get('.profile').click()
       cy.get('[href="/user-profile"]').click()
       cy.get(':nth-child(3) > .btn').click().wait(2000)
    //    cy.get(":nth-child(3) .col-lg-2").click()
       cy.get('.g-4 > :nth-child(1) > .form-control').type("majjiga")
       cy.get('.g-4 > :nth-child(2) > .form-control').type("bushan reddy")
       cy.get('.mt-3 > :nth-child(1) > .form-control').type("majjigabushan@gmail.com")
    //    cy.get("[name='phone']").type("6281489575")
       cy.get('[type=radio]').check("Female")
       cy.get('#registerForm > .btn').click()
    })
})