import LoginPage from "./LoginPage"
import BasePage from "./BasePage"    

const ln = new LoginPage
const bs = new BasePage


class Inventory{
    
    sidemenuBtn = '#menu_button_container > div > div:nth-child(3) > div'
    ItemsBtn = ''
    AboutBtn = ''
    LogoutBtn = ''
    ResetBtn = ''

    hrefSideMenu = ''

    Verify_SideMenu(){
        ln.Login_With_Valid_User()
        bs.Action(click, this.sidemenuBtn)
        bs.SVerify('link', this.sidemenuBtn, )
        bs.Action(click, this.ItemsBtn)
        bs.Action(click, this.AboutBtn)
        bs.Action(click, this.LogoutBtn)
        bs.Action(click, this.ResetBtn)
    }

}

export default Inventory