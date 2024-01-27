import LoginPage from "../../POM/Login";

describe('Login Page Testcase', () => {
    beforeEach(() => {
        //get the website url 
        cy.visit('https://www.saucedemo.com/v1/')
        //Set the viewport to {1920x1080}
        cy.viewport(1920, 1080)
      })

      it('Valid User Login', () => {
          const ln = new LoginPage
          ln.Login_With_Valid_User()

          console.log("login with valid user : VERIFIED")
         
          ln.Login_With_Invalid_User()

          console.log("login with Invalid user : VERIFIED")

        });
})