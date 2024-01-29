import BasePage from "./BasePage"

class LoginPage
{

    usernameTXT = '[data-test="username"]'
    passwordTXT = '[data-test="password"]'
    submitTXT = '#login-button'
    assertV = '.product_label'
    assertIV = '[data-test="error"]'
    MultiUser = "../fixtures/loginPage/MultiLogin"
    SingleUser = "../fixtures/loginPage/SingleLogin"
 
    Login_With_Valid_User()
    {

        cy.fixture(this.SingleUser).then(data => {
            //Use for-each loop to read all the data from the set
            data.forEach((read) => {

                const username = read.username
                const password = read.password
                const valid_assert = read.valid_assert           
                
                cy.visit('https://www.saucedemo.com/v1/')
                
                cy.get(this.usernameTXT).type(username)
                cy.get(this.passwordTXT).type(password)
                cy.get(this.submitTXT).click()
                cy.get(this.assertV).should('have.text', valid_assert)
            })
        })
    }

    Login_With_Invalid_User(){
        cy.fixture(this.SingleUser).then(data => {
            //Use for-each loop to read all the data from the set
            data.forEach((read) => {

                const username = read.username
                const password = read.password
                const valid_assert = read.valid_assert           
                const invalid_assert = read.invalid_assert           
                
                cy.visit('https://www.saucedemo.com/v1/')
                
                cy.get(this.usernameTXT).type(username)
                cy.get(this.passwordTXT).type(password)
                cy.get(this.submitTXT).click()

                if(username == "standard_user"){                    
                    cy.get(this.assertV).should('have.text', valid_assert)
                }else{
                    cy.get(this.assertIV).should('have.text', invalid_assert)
                }
            
            })
        })
    }

    login_Base_Func(){
        const bs = new BasePage
        bs.Visit('https://www.saucedemo.com/v1/')
        bs.Action("write", this.usernameTXT, "standard_user")
        bs.Action("write", this.passwordTXT, "secret_sauce")
        bs.Action("click", this.submitTXT)
    }

}

export default LoginPage