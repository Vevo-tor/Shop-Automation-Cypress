const val = require('../variables/values');
module.exports = class DocumentListPO {

    addItems(n) {
        cy.get('#homefeatured > :nth-child(' + n + ')').contains("Add to cart").click();
        cy.wait(4000);
        cy.get('.layer_cart_product > h2').should('be.visible');
        cy.get('.button-medium > span').click();
    }
    
    proceedToCheckout() {
        cy.get('.cart_navigation > .button > span').click();
        cy.get('#email_create').type('randomBoyTestingEmail23213@gmail.com');
        cy.get('#SubmitCreate > span').click();
        cy.wait(3000);
        cy.get('body').then((el) => {
            if (el.find('.alert')) {
                this.login();
            } else {
                this.register()
            }
        })

        cy.get('.cart_navigation > .button > span').click();
        cy.get('#cgv').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.bankwire').click();
        cy.get('#cart_navigation > .button > span').click();
        cy.wait(3000);
        this.purchaseSuccessful();
    }

    register() {
        cy.url().should('include', "account-creation").then(() => {
            cy.get('#id_gender1').click();
            cy.get('#customer_firstname').type(val.name);
            cy.get('#customer_lastname').type(val.surname);
            cy.get('#passwd').type(val.password);
            cy.get('#days').select(val.dd);
            cy.get('#months').select(val.mm);
            cy.get('#years').select(val.yyyy);
            cy.get('#address1').type(val.myAddress);
            cy.get('#id_state').select(val.myState);
            cy.get('#id_country').should('contain', val.myCountry);
            cy.get('#city').type(val.myCity);
            cy.get('#postcode').type(val.myPostcode);
            cy.get('#phone_mobile').type(val.myPhoneNumber);
            cy.get('#alias').type(val.addressName);
            cy.get('#submitAccount > span').click();
        })
    }

    login() {
        cy.get('#email').type('randomTestingEmail@gmail.com');
        cy.get('#passwd').type('test321');
        cy.get('#SubmitLogin > span').click();
    }

    purchaseSuccessful(){
        cy.get('.box').contains('Your order on my store is complete', {matchCase: false}).should('be.visible');
    }
}
