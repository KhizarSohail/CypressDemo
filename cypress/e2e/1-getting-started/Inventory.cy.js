import BasePage from "../../POM/BasePage"
import Inventory from "../../POM/Inventory"
import LoginPage from "../../POM/LoginPage"


describe('Contains all the testcases for Inventory Module', () => {
    
    const inv = new Inventory
    const log = new LoginPage
    const bs = new BasePage

    beforeEach(() => {
        cy.viewport(1920,1080)
    })

    it('Verify Side Menu Items', () => {
        log.Login_With_Valid_User()
        inv.Verify_SideMenu()
    });

}) 

    
