import BasePage from "./BasePage"    

const bs = new BasePage


class Inventory{
    
    //CLASS VARIABLE 
    Inventory = "../fixtures/Inventory/Inventory.json"
    

    //CLICK ON THE CART ICON
    Access_Cart(){ 
        this.Adding_items_to_Cart()
        cy.fixture(this.Inventory).then(data => {
            data.forEach((read)=>{
                const scart = read.shopping_cart
                const checkout = read.checkout_btn
                cy.log(scart) 
                bs.Action('click',scart)
                bs.Action('click',checkout)
            })
        })

    }

    //ADD ITEMS/PRODUCTS IN THE CART
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