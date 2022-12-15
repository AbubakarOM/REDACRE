// Step definition file

/// <reference types="cypress" />

import {Given, When, And,Then} from "cypress-cucumber-preprocessor/steps";
import { redacre } from "../../support/page_object_model/redAcre";

const redacreFeature = new redacre();

Given('I launch airmalta website', () => {
    cy.visit("/");
    cy.reload();
});

When("I click on book", () => {
    redacreFeature.book().click().trigger('mouseover').wait(1000);
});

And("I clicked on find best fear book now button", () => {
    redacreFeature.bookNow().click();
});

And("I input from and to location", () => {
    redacreFeature.fromLocation().type("Vienna, Vienna International Airport (VIE), Austria").wait(1500);
    //redacreFeature.fromLocationName().click({force: true});
    redacreFeature.toLocation().click().type("Malta, Luqa Airport (MLA), Malta").wait(1000);
    redacreFeature.toLocationName().click({multiple: true}).wait(500);
});

And("I clicked on search button", () => {
    redacreFeature.searchBtn().eq(1).click().wait(1000);
});

And("I clicked on flexible date", () => {
    redacreFeature.flexibleDate().click({force:true});
});

And("I select lowest price", () => {
   redacreFeature.outboundPriceSelection().click({force: true});
   redacreFeature.continueToFlights().click(); 
});

And("I select plan type", () => {
    redacreFeature.selectOutboundFlight().click();
    cy.contains("Selected").should("be.visible"); 
});

Then("I click on either go light or go smart or go flect select button", () => {
    redacreFeature.selectGoLiveOption().click();
    redacreFeature.continueBtn().click();
    cy.contains("Continue").should("be.visible"); 
});