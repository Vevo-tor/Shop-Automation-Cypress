const DocumentListPO = require('./pageObjects/document-list-pages');
const po = new DocumentListPO;
const val = require('./variables/accountInformation');

import 'cypress-wait-until';

Cypress.Commands.add('login', () => {
    po.getEmailLoginField().type(val.email);
    po.getPasswordField().type(val.password);
    po.getLoginBtn().click();
})

Cypress.Commands.add('register', () => {
    cy.url().should('include', "account-creation").then(() => {
        po.getSelectGenderMale().click();
        po.getFirstNameField().type(val.name);
        po.getLastNameField().type(val.surname);
        po.getPasswordField().type(val.password);
        po.getSelectDay().select(val.dd);
        po.getSelectMonth().select(val.mm);
        po.getSelectYear().select(val.yyyy);
        po.getAddressField().type(val.myAddress);
        po.getSelectState().select(val.myState);
        po.getSelectCountry().should('contain', val.myCountry);
        po.getCityField().type(val.myCity);
        po.getPostcodeField().type(val.myPostcode);
        po.getPhoneNumberField().type(val.myPhoneNumber);
        po.getAddressAliasField().type(val.addressAlias);
        po.getRegisterBtn().click();
    })
})

Cypress.Commands.add('addToCart', (n) => {
    po.getAddToCartBtn(n).click().then(() => {
        cy.intercept({
            method: "POST"
        }).as("data");
        cy.wait('@data');
        po.getAddedToCartPopup().should('be.visible');
        po.getModalProceedBtn().click()
    });


    // po.getAddedToCartPopup().should('be.visible');

    po.getModalProceedBtn().click();
})

Cypress.Commands.add('purchaseSuccessful', () => {
    po.getSuccessMessageContainer()
        .should('be.visible')
        .should('contain', 'Your order on My Store is complete');
})