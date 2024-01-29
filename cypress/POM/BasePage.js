class BasePage
{

    Visit(link){
        cy.visit(link)
    }

    Action(option, loc, input = "")
    {
        Option.toLowerCase()
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