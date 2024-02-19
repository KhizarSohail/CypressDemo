describe('API | HTTP Request ', ()=>{
    it('Get Call', () => {
        
    });

    it('Post : Signup', () => {
        cy.request('Get', '')
        .its('status').should('equal', 201);
    })
});
