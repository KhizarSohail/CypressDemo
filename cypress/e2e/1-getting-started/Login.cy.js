/// <reference types="cypress" />

describe('Loging in with valid user and checking Add to cart', () => {
  beforeEach(() => {
    //get the website url 
    cy.visit('https://www.saucedemo.com/v1/')
    //Set the viewport to {1920x1080}
    cy.viewport(1920, 1080)
  })

  it('Smoke: Single Item into Cart', () => {
    //reading single user data from the Json file
    cy.SingleUserLogin()  
    cy.AddToCart()
  })
  
  it('Reads Singular Data From JSON File', () => {
      cy.SingleUserLogin()
    })
  })

describe('Reading Multiple Data Set from Json', () =>{

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.viewport(1920, 1080)
  })

  it('Reads multiple set of test-data From JSON File', () => {
      cy.MultiUserLogin()  
  })
})
