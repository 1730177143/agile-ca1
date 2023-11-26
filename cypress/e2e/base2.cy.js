import  '../support/commands';

let movies;
describe("TopRated", () => {
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
        cy.clickMenuitem("MoviesLists",'TopRated',`/topRated`);
    });
    describe("The Top rated Movies page", () => {
        it("displays the page header and 20 movies", () => {
            cy.headerAndMovies("Top Rated Movies");
        });

        it("displays the correct movie titles", () => {
            cy.testMoviesList(movies);
        });
    });
});
describe("Trending", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${Cypress.env(
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
        cy.clickMenuitem("MoviesLists",'Trending',`/trending`);
    });
    describe("The Trending Movies page", () => {
        it("displays the page header and 20 movies", () => {
            cy.headerAndMovies("Trending Movies");
        });

        it("displays the correct movie titles", () => {
            cy.testMoviesList(movies);
        });
    });
});
describe("Popular", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env(
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
        cy.clickMenuitem("MoviesLists",'Popular',`/popular`);
    });
    describe("The popular Movies page", () => {
        it("displays the page header and 20 movies", () => {
            cy.headerAndMovies("Popular Movies");
        });

        it("displays the correct movie titles", () => {
            cy.testMoviesList(movies);
        });
    });
});