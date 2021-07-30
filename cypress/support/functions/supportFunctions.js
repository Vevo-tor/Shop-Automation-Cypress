const DocumentListPO = require('../pageObjects/document-list-pages');
const po = new DocumentListPO;
module.exports = class supportFunctions {
    
    // Passes parameter of nth product
    addItemsToCart(n) {
        po.getAddToCartBtn(n).click();
        cy.wait(4000);
        po.getAddedToCartPopup().should('be.visible');
        po.getModalProceedBtn().click();
    }

    // proceedToCheckout() {
        
    // }

    register() {
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
    }

    login() {
        po.getEmailLoginField().type('randomTestingEmail@gmail.com');
        po.getPasswordField().type('test321');
        po.getLoginBtn().click();
    }

    purchaseSuccessful() {
        po.getPurchaseSuccessfulMessage().should('be.visible');
    }
}