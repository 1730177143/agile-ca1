import "../support/commands";
let actors;
let actor;
let movies;
let movie;
let id;
describe("Movie credits", () => {
    before(() => {
        cy.request(`https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
            .its("body")
            .then((response) => {
                actors = response.results;
                cy.visit("/");
                cy.get(".MuiButtonBase-root").contains("ActorHome").click();
                cy.url().should("include", `/actors`);
                cy.get("button").contains("More Info ...").click();
                cy.get(".MuiFab-root").contains("relational movies").click();
                cy.url().should("include", `/movieCredits`);
                id = actors[0].id;
                cy.request(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Cypress.env("TMDB_KEY")}`)
                    .its("body")
                    .then((response) => {
                        movies = response.cast;
                    });
            });
    });
    beforeEach(() => {
        cy.visit(`/movieCredits/${id}`);
    });
    describe("The Movie credits page", () => {
        it("displays the page header and movies", () => {
            cy.header("Movie Credits");
        });

        it("displays the correct movies name", () => {
            cy.testMoviesList(movies);
        });
    });
});
describe("credits", () => {
    before(() => {
        cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
            .its("body")
            .then((response) => {
                movies = response.results;
                cy.visit("/");
                cy.get("button").contains("More Info ...").click();
                cy.get(".MuiFab-root").contains("Relational Actors").click();
                cy.url().should("include", `/credits`);
                id = movies[0].id;
                cy.request(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Cypress.env("TMDB_KEY")}`)
                    .its("body")
                    .then((response) => {
                        actors = response.cast;
                    });
            });
    });
    beforeEach(() => {
        cy.visit(`/credits/${id}`);
    });
    describe("The credits page", () => {
        it("displays the page header and actors", () => {
            cy.header("Credits");
        });
        it("displays the correct actors name", () => {
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(actors[index].name);
            });
        });
    });
});