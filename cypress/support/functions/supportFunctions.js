const DocumentListPO = require('../pageObjects/document-list-pages');
const po = new DocumentListPO;
module.exports = class supportFunctions {

    addItemsToCart(n) {
        po.getAddToCartBtn(n).click();
        cy.wait(4000);
        po.getAddedToCartPopup().should('be.visible');
        po.getModalProceedBtn().click();
    }

    proceedToCheckout() {
        po.getProceedToCheckoutBtn().click();
        po.getCreateEmailField().type('randomBoyTestingEmail23213@gmail.com');
        po.getCreateAccountBtn().click();
        cy.wait(3000);
        cy.get('body').then((el) => {
            if (el.find('.alert')) {
                this.login();
            } else {
                this.register()
            }
        })

        po.getProceedToCheckoutBtn().click();
        po.getTermsOfService().click();
        po.getProceedToCheckoutBtn().click();
        po.getBankwireOption().click();
        //po. getPayByCheckOption().click();
        po.getProceedToCheckoutBtn().click();
        cy.wait(3000);
        this.purchaseSuccessful();
    }

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
        cy.get('#email').type('randomTestingEmail@gmail.com');
        cy.get('#passwd').type('test321');
        cy.get('#SubmitLogin > span').click();
    }

    purchaseSuccessful() {
        po.getPurchaseSuccessfulMessage().should('be.visible');
    }
}