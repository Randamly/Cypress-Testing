///<reference types="cypress" />
describe("Selectors", () => {
const prodName="Breathe-Easy Tank"
before(() => {
cy.visit("https://magento.softwaretestingboard.com/");
cy.contains(".product-item",prodName).click()
cy.get("#option-label-size-143-item-168").click()
cy.get("#option-label-color-93-item-60").click()
cy.get("#product-addtocart-button").click()
cy.wait(2000)
});

it("Delete", () => {
 cy.get(".action.showcart").click()
 cy.get('[title="Remove item"]').click()
 cy.contains("span","OK").click()
 cy.get(".subtitle.empty").should("have.text","You have no items in your shopping cart.")
 cy.get(".counter.qty").should("be.hidden")
  });
});