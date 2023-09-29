// const { describe } = require("mocha");

describe("speech pundit home",()=>{
    it("speech pundit home",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(7000)
        cy.get('.nav-item').eq(1).click()
        
    })
})