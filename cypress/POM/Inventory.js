import LoginPage from "./LoginPage"
import BasePage from "./BasePage"    

const bs = new BasePage


class Inventory{
    
    Inventory = "../fixtures/Inventory/Inventory.json"
    

    Access_Cart(){
        this.Adding_items_to_Cart()
        cy.fixture(this.Inventory).then(data => {
            data.forEach((read)=>{
                const scart = read.shopping_cart
                cy.log(scart) 
                bs.Action('click',scart)
            })

        })
    }

    Adding_items_to_Cart(){
        
        cy.fixture(this.Inventory).then(data => {
            data.forEach((read) => {
                const products = [
                {x : read.backpack},
                {x : read.light},
                {x : read.kidT},
                {x : read.childT},
                {x : read.jacket},
                {x : read.manT}
                ]
                console.log(products)
                products.forEach(x => {
                    console.log(x.x)
                    bs.Action('click', x.x)
                })
            })
            
        })
        
    }

}

export default Inventory