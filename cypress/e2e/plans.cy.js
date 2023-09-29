
describe("speech pundit plans",()=>{
    it("speech pundit plans",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(5000)
        cy.get('.nav-item').eq(2).click()
        
    })
})