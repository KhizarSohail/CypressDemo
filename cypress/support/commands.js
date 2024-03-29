Cypress.Commands.add('OrangeLogin', () => {
  cy.visit()
})

Cypress.Commands.add('ValidLogin', () => {
    cy.fixture('SingleLogin').then(data => {
        cy.get('[data-test="username"]').type(data.username)
        cy.get('[data-test="password"]').type(data.password)
        cy.get('#login-button').click()
    })
})

Cypress.Commands.add('doAssert', (locator, assertTxt) => {
  cy.get(locator).should('have.text',assertTxt)
})

Cypress.Commands.add('MultiUserLogin', () => {
  //load data from the JSON file using fixture
  cy.fixture('Multilogin').then(user => {
      //Use for-each loop to read all the data from the set
      user.forEach((data) => {
        cy.visit('https://www.saucedemo.com/v1/')
          //Enter lockedout user's credentials
          cy.get('[data-test="username"]').type(data.username)
          cy.get('[data-test="password"]').type(data.password)
          cy.get('#login-button').click()
      })
  })
})

Cypress.Commands.add('Login', ()=>{
    //Enter the credentials and click login
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()

    //Assertion for Login 
    cy.get('.product_label').should("have.text","Products")
})

Cypress.Commands.add('AddToCart', () => {
  //Add item to Inventory
  cy.get('#item_4_title_link > .inventory_item_name')
  .should("have.text","Sauce Labs Backpack")
  .click()
  cy.get('.btn_primary').click()
  cy.get('#shopping_cart_container').click()
  cy.get('.btn_action').click()
  //Add form details
  cy.get('[data-test="firstName"]').type('Tester')
  cy.get('[data-test="lastName"]').type('isnew')
  cy.get('[data-test="postalCode"]').type('78946')
  cy.get('.btn_primary').click()
  cy.get('.btn_action').click()
  
  //Assert the order completion message
  cy.get('.complete-header')
  .should('have.text','THANK YOU FOR YOUR ORDER')
})