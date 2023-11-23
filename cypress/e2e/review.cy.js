let movies;
let id;
let reviews;
import {expectedExcerpt} from "../support/e2e";

describe("Reviews", () => {
    before(() => {
        cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
            .its("body")
            .then((response) => {
                movies = response.results;
                // 确保在这里执行依赖于 movies 的操作
                cy.visit("/");
                cy.get("button").contains("More Info ...").click();
                // 只有当 movies 已经被赋值后才执行第二个请求
                id = movies[0].id;
                cy.request(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
                    .its("body")
                    .then((response) => {
                        reviews = response.results;
                    });
            });
    });
    beforeEach(() => {
        cy.visit(`/movies/${id}`);
        cy.get(".MuiFab-root").contains("Reviews").click();
    });
    describe("The reviews page", () => {
        it("displays the correct movie authors", () => {
            cy.get("tbody tr").each(($row, index) => {
                cy.wrap($row).find("th").should('contain', reviews[index].author);
            });
        });
        it("displays the correct reviews", () => {
            cy.get("tbody tr").each(($row, index) => {
                cy.wrap($row).find("td").first().should('contain', expectedExcerpt(reviews, index));
            });
        });
        it("displays the correct full reviews", () => {
            cy.get("tbody tr").find("td").contains("Full Review").click();
            cy.get("h3").should('contain', `Review By: ${reviews[0].author}`);
            cy.get("p").should('contain', reviews[0].content);
        });
    });
});
describe("The playlist feature", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
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
        cy.get("button").contains("MoviesLists").click();
        cy.contains('Upcoming').click();
        cy.url().should("include", `/upcoming`);
        cy.get('body').click(0, 0);
    });
    describe("The review form page", () => {
        beforeEach(() => {
            cy.get("button[aria-label='add to playlist']").eq(1).click({});
            cy.get('body').click(0, 0);
            cy.get("button").contains("personal").click();
            cy.contains('Playlist').click();
            cy.url().should("include", `/playlist`);
            cy.get('body').click(0, 0);
            cy.get("button[aria-label='remove from Playlist']").next()
                .get('a[href="/reviews/form"]').eq(0).click();
            cy.get("h2").should('contain', `Write a review`);
        });
        it("submit", () => {
            const authorStr = "asdf";
            const contentStr = "asdfadadafdsfsfgsfsf";
            cy.get(".MuiInputBase-input").get("#author").clear().type(authorStr);
            cy.get(".MuiInputBase-input").get("#review").clear().type(contentStr);
            cy.get(".MuiSelect-select").click();
            cy.get(".MuiMenuItem-root").contains("Excellent").click();
            cy.get(".MuiButtonBase-root").contains("Submit").click();
            cy.get("h4").should('contain', `Thank you for submitting a review`);
        });
        it("reset", () => {
            const authorStr = "asdf";
            const contentStr = "asdfadadafdsfsfgsfsf";
            cy.get(".MuiInputBase-input").get("#author").clear().type(authorStr);
            cy.get(".MuiInputBase-input").get("#review").clear().type(contentStr);
            cy.get(".MuiSelect-select").click();
            cy.get(".MuiMenuItem-root").contains("Excellent").click();
            cy.get(".MuiButtonBase-root").contains("Reset").click();
            cy.get(".MuiInputBase-input").get("#author").should('contain', ``);
            cy.get(".MuiInputBase-input").get("#review").should('contain', ``);
        });
        it("Review is too short", () => {
            const authorStr = "asdf";
            const contentStr = "asdf";
            cy.get(".MuiInputBase-input").get("#author").clear().type(authorStr);
            cy.get(".MuiInputBase-input").get("#review").clear().type(contentStr);
            cy.get(".MuiSelect-select").click();
            cy.get(".MuiMenuItem-root").contains("Excellent").click();
            cy.get(".MuiButtonBase-root").contains("Submit").click();
            cy.get("p").should('contain', `Review is too short`);
        });
        it("Name is required", () => {
            const contentStr = "asdf";
            cy.get(".MuiInputBase-input").get("#author").clear();
            cy.get(".MuiInputBase-input").get("#review").clear().type(contentStr);
            cy.get(".MuiSelect-select").click();
            cy.get(".MuiMenuItem-root").contains("Excellent").click();
            cy.get(".MuiButtonBase-root").contains("Submit").click();
            cy.get("p").should('contain', `Name is required`);
        });
    });
});