///<reference types="cypress" />
describe("Selectors", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
   
  });

  it("Water , Tea", () => {
    cy.get(".water")
    cy.get(".tea")

  });
   it("name , age", () => {
    cy.get('input[placeholder="Type your name"]').type('Rand')
    cy.get('input[placeholder="Type your age"]').type('20')
   

  });
   it("Country", () => {
    cy.get("#country").select("Jordan")
   

  });
  it("Google", () => {
    cy.get("a.google").click()
  });

   it("type,click,check", () => {
   cy.get("[name=input_0]").type("something",{force:true})
    cy.get("#btn0").click({force:true})
    cy.get("#checkMe").check({force:true})
   

  });
    it("three buttons", () => {
    cy.get("#btn1").click({force:true})
     cy.get("#btn2").click({force:true})
      cy.get("#btn3").click({force:true})

  });
   it("Snack", () => {
    cy.get("#Banana").check()
    cy.get("#Nuts").check()
    cy.get("#apple").check()
     cy.get("#Banana").uncheck()
    
 
   });
    it("Are you..", () => {
      cy.get("#tester").check()
    

   });
    it("Double Click", () => {
      cy.get('#dbClick').dblclick()
    

   });
    it("Focus And Blur", () => {
      cy.get('#myTextField').focus()
      cy.get('#myTextField').blur()
    

   });

    it("Trigger Playground", () => {
      cy.get('#trigger_btn').trigger('mouseover')
    
    

   });

});