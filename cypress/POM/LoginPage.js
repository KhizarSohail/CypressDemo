import BasePage from "./BasePage"

// object for BasePage
const bs = new BasePage

class LoginPage
{

    // Class Variables  
    usernameTXT = '[data-test="username"]'
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
                                
                bs.Action("write", this.usernameTXT, username)
                bs.Action("write", this.passwordTXT, password)
                bs.Action("click", this.submitTXT)                
                bs.Verify("include.text", this.assertV, valid_assert)
            })
        })
    }

    Login_With_Invalid_User(){
        cy.fixture(this.MultiUser).then(data => {
            //Use for-each loop to read all the data from the set
            data.forEach((read) => {

                const username = read.username
                const password = read.password
                const valid_assert = read.valid_assert           
                const invalid_assert = read.invalid_assert
                // const errorBtn = read.errorBtn
                
                bs.Visit()

                bs.Action("write", this.usernameTXT, username)
                bs.Action("write", this.passwordTXT, password)
                bs.Action("click", this.submitTXT)    

                if(username == "standard_user"){                    
                    bs.Verify("sd", this.assertV, valid_assert)
                }else{
                    bs.Verify("sd", this.assertIV, invalid_assert)    
                }
            
            })
        })
    }
}

export default LoginPage