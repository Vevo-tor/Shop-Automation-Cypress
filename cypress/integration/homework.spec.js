const DocumentListPO = require('../support/pageObjects/document-list-pages');
const po = new DocumentListPO;
const SupportFunctions = require('../support/functions/supportFunctions');
const fu = new SupportFunctions;
const val = require ('../support/variables/accountInformation');
require('../support/variables/accountInformation');
beforeEach(() => {
    cy.clearCookies();    
});

describe('automation practice eshop', () => {
    it('places an order', () => {
        cy.visit("/");
        fu.addItemsToCart(2);
        po.getProceedToCheckoutBtn().click();
        po.getCreateEmailField().type(val.email);
        po.getCreateAccountBtn().click();
        cy.get('body').then((el) => {
            if (el.find('.alert')) {
                cy.login();
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
        fu.purchaseSuccessful();
    });
});