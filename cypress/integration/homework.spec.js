const DocumentListPO = require('../support/pageObjects/document-list-pages');
const po = new DocumentListPO;
const val = require('../support/variables/accountInformation');
beforeEach(() => {
    cy.clearCookies();
});

describe('automation practice eshop', () => {
    it('places an order', () => {
        cy.visit("/");
        cy.addToCart(val.nth);
        po.getProceedToCheckoutBtn().click();
        po.getCreateEmailField().type(val.email);
        cy.checkIfEmailTaken();
        po.getProceedToCheckoutBtn().click();
        po.getTermsOfService().click();
        po.getProceedToCheckoutBtn().click();
        po.getBankwireOption().click();
        //po.getPayByCheckOption().click();
        po.getProceedToCheckoutBtn().click();
        cy.purchaseSuccessful();
    });
});