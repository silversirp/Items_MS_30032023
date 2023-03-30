Feature: View a Table of Items
  As a user,
  I want to be able to view a table of items

  Scenario: User views a table of items
    Given I am a user
    When I visit the table of items page
    Then I should see a table of items

  Scenario: Backend retrieves item information
    Given I am a user
    When I view an item page
    Then the backend should retrieve the item information from the database
    And return the information as JSON data

  Scenario: Frontend displays item information
    Given I am a user
    Then the frontend should display the item information on the page