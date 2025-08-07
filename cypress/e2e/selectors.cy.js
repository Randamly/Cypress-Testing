///<reference types="cypress" />

describe("Selectors", () => {
  beforeEach(() => {
    //hooks --> before, beforeEach, after, afterEach
    cy.visit("/#/register");
    cy.log("Hi !!");
  });

  it("Logo", () => {
    cy.get(".navbar-brand");
  });

  it("Home", () => {
    //cy.get('.navbar-nav >li').children('a').contains('Home')
    cy.get(".nav-link").contains("Home");
  });

  it("Sign in", () => {
    //cy.get('.navbar-nav >li').children('a').contains('Sign in')
    cy.get(".nav-link").contains("Sign in");
  });

  it("Sign up", () => {
    //cy.get('.navbar-nav >li').children('a').contains('Sign up')
    cy.get(".nav-link").contains("Sign up");
  });

  it("Sign up large text", () => {
    cy.get("h1");
  });

  it("Have an account?", () => {
    // cy.get('.text-xs-center >')
    cy.contains("a", "Have an account?");
    //cy.get("input")
  });

  it("name text field", () => {
    cy.get('input[placeholder="Username"]');
  });

  it("email text field", () => {
    cy.get('[type="email"]');
  });

  it("password text field", () => {
    cy.get('input[placeholder="Password"]');
  });

  it("sign up button", () => {
    cy.get(".btn-lg");
  });

  it("conduit", () => {
    cy.contains("footer a", "conduit");
  });

  it("footer text ", () => {
    // cy.get('footer').children('div').children('span')
    cy.get(".attribution");
  });
  
  it("link in the footer", () => {
    cy.get(".attribution a");
  });

  afterEach(() => {
    cy.log("Rand");
  });
});
