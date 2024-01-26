class Base
{
    static doAction(type, locator, locatorTxT = '')
    {
        type.toLowerCase()
            if(type == 'type' || type == 'write') {
                try {
                    cy.get(locator).type(locatorTxT,{force:true})
                } catch (error) {
                    console.log(error)
                }
            } else if (type == 'click') {
                try {
                    cy.get(locator).click({force:true})
                } catch (error) {
                    console.log(error)
                }
            } else {
                consle.log('Please use type : "write" or "click"')
            }
    }
}

export default Base; 