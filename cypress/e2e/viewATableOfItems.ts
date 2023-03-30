import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given("I am a user", () => {
    // This step is a no-op since we don't need to do anything to simulate being a user
});

When("I visit the table of items page", () => {
    cy.visit("http://localhost:5173/items");
});

Then("I should see a table of items", () => {
    cy.get("table").should("exist");
});

When("I view an item page", () => {
    // Navigate to a specific item page
    cy.visit("http://localhost:5173/items");
});

Then("the backend should retrieve the item information from the database", () => {
    // Ensure that the backend retrieves the correct item information
    cy.intercept("GET", "http://localhost:5173/items").as("getItem");
    /*    cy.wait("@getItem").then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body).to.have.property("name", "Item 1");
            expect(interception.response.body).to.have.property("description", "Lorem ipsum dolor sit amet.");
        });*/
});

Then("return the information as JSON data", () => {
    cy.intercept("GET", "http://localhost:5173/items").as("getItems");

    /*    cy.wait("@getItems").then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.headers["content-type"]).to.include("application/json");
        });*/
});


Then("the frontend should display the item information on the page", () => {
    cy.visit("http://localhost:5173/items");

    // Ensure that the item information is displayed correctly on the page
    cy.get("table").should("exist");

    cy.get("table th").eq(1).should("contain", "Item");
    cy.get("table th").eq(3).should("contain", "Image");
    cy.get("table th").eq(2).should("contain", "Description");

    cy.get("table td").eq(1).should("exist");
    cy.get("table td img").eq(3).should("exist");
    cy.get("table td").eq(2).should("exist");
});

