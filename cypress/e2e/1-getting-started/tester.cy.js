describe('Testing code...',() => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('logins', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
    });
})