import Login from "../POM/Login"    

class Inventory{
    
    sidemenuBtn = '#menu_button_container > div > div:nth-child(3) > div'
    ItemsBtn = ''
    AboutBtn = ''
    LogoutBtn = ''
    ResetBtn = ''

    Verify_SideMenu(){
        const ln = new Login
        ln.Login_With_Valid_User()
        cy.get() 
    }

}