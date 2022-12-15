// Page Object Model file

export class redacre {

    book() {
        return cy.get("li:nth-of-type(1) > .dropdown-toggle.nav-link");
    };
    bookNow() {
        return cy.get("li:nth-of-type(1) > .dropdown-menu.megamenu > .d-flex.justify-content-around > div:nth-of-type(1) > .btn.btn-primary.mega-menu-button");
    };
    fromLocation() {
        return cy.get('#flights-booking-id-1-input');
    };
    fromLocationName() {
        return cy.get("ul[role='listbox'] > .css-orqf19.flex.flex-wrap.relative.w-full");
    };
    toLocation() {
        return cy.get('#flights-booking-id-2-input');
    };
    toLocationName() {
        return cy.get("[class='w-full flex items-center p-2 css-8hmnhb']");
    };
    searchBtn() {
        return cy.get("button[role='button']");
    };
    flexibleDate() {
        return cy.get(".LinkUI__Link-beRZqo.bPsqFM");
    };
    outboundPriceSelection() {
        return cy.get(".jAkRdP.sc-eishCr");
    };
    continueToFlights() {
        return cy.get(".jAkRdP.sc-eishCr");
    };
    selectOutboundFlight() {
        return cy.get("div:nth-of-type(5) > .jXfWJt.sc-bgJKda > .ijTPxW.sc-bgSKsl > div:nth-of-type(1) > .ctUhYs.sc-kdCWOv .dEdBnT.sc-euMpXR");
    };
    selectGoLiveOption() {
        return cy.get(".sc-chCrNI.wYMlq > .kAektU.sc-kwWFPY");
    };
    continueBtn() {
        return cy.get(".ButtonUI__Button-dGNEfA.gtZPug");
    };
}