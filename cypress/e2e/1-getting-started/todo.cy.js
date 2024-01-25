/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    //get the website url 
    cy.visit('https://www.saucedemo.com/v1/')
    //Set the viewport to {1920x1080}
    cy.viewport(1920, 1080)
  })

  it('Smoke: Single Item into Cart', () => {
    cy.Login()
    cy.AddToCart()
  })
  
  it('Reads Singular Data From JSON File', () => {

    //load data from the JSON file using fixture
    cy.fixture('single').then(data => { 
      //Enter lockedout user's credentials
      cy.get('[data-test="username"]').type(data.username)
      cy.get('[data-test="password"]').type(data.password)
      cy.get('#login-button').click()
    })
  })
 
})

describe('Reading Multiple Data Set from Json', () =>{

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/v1/')
  })

  it('Reads multiple set of test-data From JSON File', () => {
    //load data from the JSON file using fixture
    cy.fixture('multi').then(user => {
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
})
