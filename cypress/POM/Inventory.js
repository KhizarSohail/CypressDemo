import LoginPage from "./LoginPage"
import BasePage from "./BasePage"    

const ln = new LoginPage
const bs = new BasePage


class Inventory{
    
    sidemenuBtn = '#menu_button_container > div > div:nth-child(3) > div'
    itemsBtn = '#inventory_sidebar_link'
    aboutBtn = '#about_sidebar_link'
    logoutBtn = '#logout_sidebar_link'
    resetBtn = '#reset_sidebar_link'

    hrefSideMenu = 'https://www.saucedemo.com/v1/inventory.html'
    hrefitem = 'https://saucelabs.com/'
    hrefSideMenu = 'https://www.saucedemo.com/v1/index.html'
    
    Verify_SideMenu(){
        
        const menuItems = new Set()
        menuItems.add(this.itemsBtn)
        menuItems.add(this.aboutBtn)
        menuItems.add(this.logoutBtn)
        //menuItems.add(this.resetBtn)

        console.log(menuItems)

        menuItems.forEach(function(value){
            console.log(value)
            ln.Login_With_Valid_User()
            bs.Action('click', value)
            // bs.Verify('href', value, )
        }
        )
        // ln.Login_With_Valid_User()
        // bs.Action('click', this.sidemenuBtn)
        // bs.Action('click', this.itemsBtn)
        // bs.Verify('href', this.itemsBtn, this.hrefSideMenu)
        // cy.go(-1)
        // bs.Action('click', this.aboutBtn)
        // cy.go(-1)
        // bs.Action('click', this.logoutBtn)
        // cy.go(-1)
        // bs.Action('click', this.resetBtn)
        // cy.go(-1)
    }

}

export default Inventory