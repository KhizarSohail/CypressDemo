import BasePage from "../../POM/BasePage";
import LoginPage from "../../POM/LoginPage";

describe('Login Page Testcase', () => {
  
  const ln = new LoginPage
  const bs = new BasePage
  
beforeEach(() => {
  bs.Visit()
})

      it('Valid User Login', () => {
          ln.Login_With_Valid_User()
          console.log("login with valid user : VERIFIED");
        });

        it('Login With Invalid User', () => {
          ln.Login_With_Invalid_User()
          console.log("login with Invalid user : VERIFIED");
        });
})