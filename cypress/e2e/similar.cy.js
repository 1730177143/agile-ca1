let movies;
let id;
describe("Similar", () => {
    before(() => {
        cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
            .its("body")
            .then((response) => {
                movies = response.results;
                // 确保在这里执行依赖于 movies 的操作
                cy.visit("/");
                cy.get("button").contains("More Info ...").click();
                cy.get(".MuiFab-root").contains("Similar").click();
                cy.url().should("include", `/similar`);
                // 只有当 movies 已经被赋值后才执行第二个请求
                id = movies[0].id;
                cy.request(`https://api.themoviedb.org/3/movie/${movies[0].id}/similar?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
                    .its("body")
                    .then((response) => {
                        movies = response.results;
                    });
            });
    });
    beforeEach(() => {
        cy.visit(`/similar/${id}`);
    });
    describe("The Similar Movies page", () => {
        it("displays the page header", () => {
            cy.get("h3").contains("Similar");
        });
        it("displays the correct movie titles", () => {
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(movies[index].title);
            });
        });
    });
});