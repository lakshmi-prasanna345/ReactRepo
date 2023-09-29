describe("speech pundit about",()=>{
    it("speech pundit about",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get(':nth-child(4) > .nav-link').click()
        
    })
})