class BasePage
{

    Visit(){
        cy.visit('https://www.saucedemo.com/v1/')
        cy.viewport(1920,1080)
    }

    Verify(option, loc, ev){
        option.toLowerCase()
        try {
           switch (option) {
            case 'checked':
                cy.get(':radio').should('be.checked')
                break;
            case 'have.length' :
                cy.get(loc).should('have.length', ev)
                break;
            case 'include.text':
                cy.get(loc).should('include.text',ev)
                break;            
            case 'href':
                cy.location().should((loc) => {
                    expect(loc.href).to.eq(`${ev}`)})
                break;
            default:
                cy.get(loc).should('have.text',ev)    
                break;
           }
        } catch (error) {
            console.log('enter proper values!!!', error)
        }
    }


    Action(option, loc, input = "")
    {
        option.toLowerCase()
        try {
            if(option == 'write' || option == 'type')
                {
                 try{                
                    cy.get(loc).type(input)
                }
                catch(error){
                    console.log(error, "Please give value 'write' or 'type'")
                    }
                }
            else if(option == 'click'){
                try{                
                    cy.get(loc).click()
                }
                catch(error){
                    console.log(error, "Please give value 'click' to perform click")
                    }
            }
        } catch(error){
            console.log(error ,'Please enter "write" or "click" to perfom the action')
        }
    }


}

export default BasePage