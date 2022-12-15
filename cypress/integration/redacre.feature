# This is a cucumber feature files that explain each senerios functionality on step definition file

Feature:  Redacre booking

    Feature user should be able to select best day on calendar with lower price
   Background: On booking module
        Given  I launch airmalta website

    Scenario: User should be able to book lowest price
        When I click on book
        And I clicked on find best fear book now button
        And I input from and to location
        And I clicked on search button
        And I clicked on flexible date
        And I select lowest price
        And I select plan type 
        Then I click on either go light and i clicked on continue button