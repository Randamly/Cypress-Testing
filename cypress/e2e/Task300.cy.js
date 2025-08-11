///<reference types="cypress" />

describe("Selectors", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Create an Account").click()
  });

  it("A) Create an Account", () => {
  //cy.get('a[href ^="https://magento"][href $="create/"]')
 
  cy.contains(".page-title","Create New Customer Account").should("be.visible")
  cy.contains("Personal Information").should("be.visible")
  cy.contains('[for="firstname"]','First Name').should("be.visible")
  cy.get('#firstname').should("be.visible")
  cy.contains('[for="lastname"]','Last Name').should("be.visible")
  cy.get('#lastname').should("be.visible")
  
 // cy.contains('Last Name').next("div").should("be.visible")
  cy.contains('Sign-in Information').should("be.visible")
  cy.contains('[for="email_address"]','Email').should("be.visible")
  cy.get('[type="email"]').should("be.visible")
  cy.contains('[for="password"]',"Password").should("be.visible")
  cy.get("#password").should("be.visible")
  cy.get("#password-strength-meter").should("be.visible")
  cy.contains("[for=password-confirmation]","Confirm Password").should("be.visible")
  cy.get("#password-confirmation").should("be.visible")
  cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
  cy.get('[type="submit"]').should("be.visible")
  });


  it.only("B)", () => {
  cy.get('#firstname').type("not")
  cy.get('#lastname').type("me")
  const randomNum = Math.floor(Math.random() * 1000000);
  const uniqueEmail = `user${randomNum}@test.com`;
  cy.get('#email_address').type(uniqueEmail);
  cy.get("#password").type("noT$123P78DD")
  cy.get("#password-confirmation").type("noT$123P78DD")
  //cy.get('.primary').children('button').contains("Create an Account").click({force:true})
  cy.contains('[type="submit"]',"Create an Account").click();
  cy.contains("h1","My Account").should("be.visible")
  //cy.get('#maincontent').find('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]') .should('have.css', 'color', 'rgb(0, 100, 0)')
  cy.get("[role=alert]")
  .should('contain', 'Thank you for registering with Main Website Store.');
  
  cy.get("[role=alert]").should("be.visible")

  cy.get(".logged-in").should("include.text","not me")
  cy.get(".welcome").should("be.visible").and("contain","Welcome")

});
});