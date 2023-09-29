describe("speech pundit contact",()=>{
    it("speech pundit contact",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get(':nth-child(5) > .nav-link').click()
        
    })
})