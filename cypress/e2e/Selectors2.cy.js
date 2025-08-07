///<reference types="cypress" />
describe("Selectors", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
   
  });

  it("Cart", () => {
  cy.get('a[href $="_cart"]')
  cy.contains("ul.navbar-nav li","Cart" )
  });

  it("Women", () => {
  cy.get('.panel-title').contains("Women")
  });

   it("Features items", () => {
  cy.contains('.text-center',"Features Items")
  });

   it.only("View product", () => {
  //cy.get('a[href ^="/product"][href $="/1"]')
  //cy.contains("View Product")
  //cy.contains("div.product-image-wrapper ul.nav-justified li","View Product")
  //cy.contains("p","Men Tshirt").parent("div").parent("div").next("div").children("ul").children("li").children("a")
  cy.contains("p","Men Tshirt").parentsUntil(".product-image-wrapper").parent().contains("a","View Product")
  });
});
