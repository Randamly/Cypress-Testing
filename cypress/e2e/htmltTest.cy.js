///<reference types="cypress" />

const { invoke } = require("lodash");

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
    cy.get('input[placeholder="Type your name"]').should("have.value",'Rand')
    cy.get('input[placeholder="Type your age"]').type('20')
    cy.get('input[placeholder="Type your age"]').should("have.value","20")
   

  });

  
   it("Country", () => {
    cy.get("#country").select("Jordan")
    cy.get("#country").should("contain","Jordan")
   

  });
  it("Google", () => {
    cy.get("a.google").click();
    cy.origin("https://www.google.com/",()=>{
          cy.url().should("eq","https://www.google.com/")
    })
  });

   it("type,click,check", () => {
   cy.get("[name=input_0]").type("something",{force:true}).should("have.value","something")
    cy.get("#btn0").click({force:true})
    cy.get("#checkMe").check({force:true})
    cy.get("#checkMe").should("be.checked")
   

  });
    it("three buttons", () => {
    cy.get("#btn1").click()
    cy.get("#btn1").invoke("text").should("eq","FirstBtn Clicked")
     cy.get("#btn2").click()
     cy.get("#btn2").should("contain","SecondBtn Clicked")
      cy.get("#btn3").click()
      cy.get("#btn3").invoke("text").should("eq","ThirdBtn Clicked")

  });
   it("Snack", () => {
    cy.get("#Banana").check()
    cy.get("#Banana").should("be.checked")
    cy.get("#Nuts").check()
    cy.get("#Nuts").should("be.checked")
    cy.get("#apple").check()
    cy.get("#apple").should("be.checked")
     cy.get("#Banana").uncheck()
     cy.get("#Banana").should("not.be.checked")
    
 
   });
    it("Are you..", () => {
      cy.get("#tester").check()
      cy.get("#tester").should("be.checked")
    

   });
    it("Double Click", () => {
      cy.get('#dbClick').dblclick()
      cy.get('#dbClick').should("contain","Double Click !")
    

   });
    it("Focus And Blur", () => {
      cy.get('#myTextField').focus()
      cy.get('#myTextField').should("be.focused")
      cy.get('#myTextField').should("have.css", "background-color", "rgb(255, 255, 0)");
      cy.get('#myTextField').blur()
      cy.get('#myTextField').should("not.be.focused")
      cy.get('#myTextField').should('have.css', 'background-color', 'rgb(255, 0, 0)');

    

   });

    it("Trigger Playground", () => {
      cy.get('#trigger_btn').trigger('mouseover')
      cy.get('#trigger_btn').should("have.css", "background-color", "rgb(255, 255, 0)");
    
    

   });

});