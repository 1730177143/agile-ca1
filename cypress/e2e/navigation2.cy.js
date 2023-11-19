let movies;

describe("Navigation", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/");
        cy.get("button").contains("TopRated").click();
        cy.url().should("include", `/topRated`);
    });
    describe("The Top rated Movies page", () => {
        it("displays the page header and 20 movies", () => {
            cy.get("h3").contains("Top Rated Movies");
            cy.get(".MuiCardHeader-root").should("have.length", 20);
        });

        it("displays the correct movie titles", () => {
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(movies[index].title);
            });
        });
    });
});