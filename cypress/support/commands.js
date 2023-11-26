Cypress.Commands.add('testMoviesList', (movies) => {
    cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").should('contain',movies[index].title);
    });
});
Cypress.Commands.add('headerAndMovies', (header) => {
    cy.get("h3").should('contain',header);
    cy.get(".MuiCardHeader-root").should("have.length", 20);
});
Cypress.Commands.add('header', (header) => {
    cy.get("h3").should('contain', header);
});
Cypress.Commands.add('clickMenuitem', (menu,menuitem,url) => {
    cy.get('body').click(0,0);
    cy.get("button").contains(menu).click();
    cy.contains( menuitem).click();
    cy.url().should("include", url);
    cy.get('body').click(0,0);
});