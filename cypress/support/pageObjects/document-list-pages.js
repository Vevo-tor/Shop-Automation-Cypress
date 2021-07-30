module.exports = class DocumentListPO {
    getAddToCartBtn(n) {
        return cy.get('#homefeatured > :nth-child(' + n + ')').contains("Add to cart");
    }
    
    getAddedToCartPopup() {
        return cy.get('#layer_cart');
    }

    getModalProceedBtn() {
        return cy.get('.button-medium > span');
    }

    getProceedToCheckoutBtn() {
        return cy.get('.cart_navigation > .button > span');
    }

    getCreateEmailField() {
        return cy.get('#email_create');
    }

    getCreateAccountBtn() {
        return cy.get('#SubmitCreate > span')
    }

    getTermsOfService() {
        return cy.get('#cgv')
    }

    getBankwireOption() {
        return cy.get('.bankwire');
    }

    getPayByCheckOption() {
        return cy.get('.cheque');
    }

    getPurchaseSuccessfulMessage() {
        return cy.get('.box').contains('Your order on my store is complete', { matchCase: false });
    }

    getSelectGenderMale() {
        return cy.get('#id_gender1');
    }

    getSelectGenderFemale() {
        return cy.get('#id_gender2')
    }

    getFirstNameField() {
        return cy.get('#customer_firstname');
    }

    getLastNameField() {
        return cy.get('#customer_lastname');
    }

    getPasswordField() {
        return cy.get('#passwd');
    }

    getSelectDay() {
        return cy.get('#days');
    }

    getSelectMonth() {
        return cy.get('#months');
    }

    getSelectYear() {
        return cy.get('#years');
    }

    getAddressField() {
        return cy.get('#address1');
    }

    getSelectState() {
        return cy.get('#id_state')
    }

    getSelectCountry() {
        return cy.get('#id_country');
    }

    getCityField() {
        return cy.get('#city')
    }

    getPostcodeField() {
        return cy.get('#postcode')
    }

    getPhoneNumberField() {
        return cy.get('#phone_mobile')
    }

    getAddressAliasField() {
        return cy.get('#alias')
    }

    getRegisterBtn() {
        return cy.get('#submitAccount > span')
    }
    getEmailLoginField(){
        return cy.get('#email');
    }
    getLoginBtn(){
        return cy.get('#SubmitLogin > span');
    }
}
