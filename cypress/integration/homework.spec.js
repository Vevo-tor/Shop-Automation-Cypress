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
        po.getCreateAccountBtn().click();
        cy.get('body').then((el) => {
            if (el.find('.alert')) {
                cy.login();
            } else {
                cy.register();
            }
        })

        po.getProceedToCheckoutBtn().click();
        po.getTermsOfService().click();
        po.getProceedToCheckoutBtn().click();
        po.getBankwireOption().click();
        //po.getPayByCheckOption().click();
        po.getProceedToCheckoutBtn().click();
        cy.purchaseSuccessful();
    });
});