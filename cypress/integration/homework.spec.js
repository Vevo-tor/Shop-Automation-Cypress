require('../support/variables/global');
const DocumentListPO = require('../support/pageObjects/document-list-pages');
const po = new DocumentListPO;
beforeEach(() => {
    cy.clearCookies();    
});

describe('automation practice eshop', () => {
    it('places an order', () => {
        cy.visit("/");
        po.addItems(3);
        po.proceedToCheckout();
    });
});