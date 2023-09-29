// const { describe } = require("mocha")f

describe("google",()=>{
    it("google visiting",()=>{
        cy.visit("https://www.google.com")
        cy.title().should("eq","Google")
        // cy.get("#APjFqb").type("applines").click()
        cy.get("#RNNxgb").type("lucky").click()
        cy.get(".A8SBwf")
    })
    // it("google visiting-negative",()=>{
    //     cy.visit("www.google.com")
    //     cy.title().should("eq","google")
        
    // })
})

