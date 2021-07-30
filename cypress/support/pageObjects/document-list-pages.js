require('../variables/global');
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
            cy.get('#customer_firstname').type('Thor');
            cy.get('#customer_lastname').type('Ber');
            cy.get('#passwd').type('test321');
            cy.get('#days').select('27');
            cy.get('#months').select('1');
            cy.get('#years').select('2000');
            cy.get('#address1').type('S.Staneviciaus g. 15');
            cy.get('#id_state').select('Kansas');
            cy.get('#id_country').should('contain', 'United States');
            cy.get('#city').type('Vilnius');
            cy.get('#postcode').type('12345');
            cy.get('#phone_mobile').type('+37069403143');
            cy.get('#alias').type('test');
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
