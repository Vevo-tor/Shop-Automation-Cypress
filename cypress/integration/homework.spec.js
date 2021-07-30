const DocumentListPO = require('../support/pageObjects/document-list-pages');
const po = new DocumentListPO;
const SupportFunctions = require('../support/functions/supportFunctions');
const fu = new SupportFunctions;
beforeEach(() => {
    cy.clearCookies();    
});

describe('automation practice eshop', () => {
    it('places an order', () => {
        cy.visit("/");
        fu.addItemsToCart(3);
        po.getProceedToCheckoutBtn().click();
        po.getCreateEmailField().type(email);
        po.getCreateAccountBtn().click();
        cy.wait(3000);
        cy.get('body').then((el) => {
            if (el.find('.alert')) {
                fu.login();
            } else {
                fu.register()
            }
        })

        po.getProceedToCheckoutBtn().click();
        po.getTermsOfService().click();
        po.getProceedToCheckoutBtn().click();
        po.getBankwireOption().click();
        //po. getPayByCheckOption().click();
        po.getProceedToCheckoutBtn().click();
        cy.wait(3000);
        fu.purchaseSuccessful();
    });
});