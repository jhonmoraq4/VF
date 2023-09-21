class OnboardingExpress {

    getStartedEx() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    settingPasswordEx(){
        cy.get('#vf-new-password').type('secret');
        cy.get('#vf-confirm-password').type('secret');
        cy.contains('button', 'Next').click();
    }
    


}

module.exports = new OnboardingExpress();