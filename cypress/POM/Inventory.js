import LoginPage from "./LoginPage"
import BasePage from "./BasePage"    

const ln = new LoginPage
const bs = new BasePage


class Inventory{
    
    Inventory = "../fixtures/Inventory/Inventory.json"
    
    Add_to_cart(){
        
        cy.fixture(this.Inventory).then(data => {
            data.forEach((read) => {

                const products = [{x : read.backpack},
    
                {x : read.light},
                {x : read.kidT},
                {x : read.childT},
                {x : read.jacket},
                {x : read.manT}
                ]
                // const backpack = data.backpack
                // const light = data.light
                // const kidtshirt = data.kidT
                // const childtshirt = data.childT
                // const jacket = data.jacket
                // const mantshirt = data.manT
    
                // const products = [backpack, light, kidtshirt, 
                //     childtshirt, jacket, mantshirt]
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