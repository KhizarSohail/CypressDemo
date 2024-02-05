import LoginPage from "../../POM/LoginPage";

describe('Login Page Testcase', () => {
  
  const ln = new LoginPage
  
  beforeEach(() => {
        //get the website url 
        cy.visit('https://www.saucedemo.com/v1/')
        //Set the viewport to {1920x1080}
        cy.viewport(1920, 1080)
      })

      it('Valid User Login', () => {
          ln.Login_With_Valid_User()
          console.log("login with valid user : VERIFIED");
        });

        it('Login With Invalid User', () => {
          ln.Login_With_Invalid_User
          console.log("login with Invalid user : VERIFIED");
        });

        it('Login With Base Method', () => {
          ln.login_Base_Func();
        });
})