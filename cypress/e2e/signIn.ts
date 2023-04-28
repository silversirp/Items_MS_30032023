import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
const And = Given;

Given('the user is on the website', () => {
    cy.visit('http://localhost:5173/');
});

/*And('the user is not logged in (no sessionId in local storage)', () => {
    cy.clearLocalStorage();
    cy.window().then(window => window.localStorage.removeItem('sessionId'));
});*/

When('the user clicks on the {string} button', (buttonText) => {
    cy.contains(buttonText).click();
});

And('the user enters their login credentials {string}, {string}', (email: string, password: string) => {
        cy.get("input[name=email]").type(email);
        cy.get("input[name=password]").type(password);
});

And('clicks the "Sign In" button with id sign-in', () => {
    cy.get("button#sign-in").click();
});

And('the user is redirected to the website\'s items page', () => {
    cy.visit('http://localhost:5173/items');
});

// wait for the response from the server
And('the user waits for the response from the server', () => {
        cy.wait(500);
    }
);

And("the user refreshes the page", () => {
    cy.reload();
});

// Check if Test is saving sessionId to LS

And('the user can see Sign Out button', () => {
    cy.contains('Sign Out').should('be.visible');
});

And("the user can see List of items link", () => {
    cy.get("a#listOfItems").should("be.visible");
});

And('the user can see Add Item button', () => {
    cy.contains('Add Item').should('be.visible');
});



And('user cannot see Sign in and Sign out buttons', () => {
    cy.get('#sign-in-button').should('not.exist');
    cy.get('#sign-out-button').should('not.exist');
});

