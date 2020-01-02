import { Given, Then } from "cypress-cucumber-preprocessor/steps"

const url = "localhost:9009"
Given("I open the Design System", () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})