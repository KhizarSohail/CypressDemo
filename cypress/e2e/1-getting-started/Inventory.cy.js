import BasePage from "../../POM/BasePage"
import Inventory from "../../POM/Inventory"
import LoginPage from "../../POM/LoginPage"


describe('Contains all the testcases for Inventory Module', () => {
    
    const inv = new Inventory
    const log = new LoginPage
    const bs = new BasePage

    beforeEach(() => {
        cy.viewport(1920,1080)
        bs.Visit()
    })

    it('Add the items in the cart', () => {
        log.Login_With_Valid_User()
        inv.Add_to_cart()
    });

}) 

    
