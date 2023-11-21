import {filterByName, filterByTitle} from "../support/e2e";

let actors;
let actor;
describe("Actor Home", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                actors = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/");
        cy.get(".MuiButtonBase-root").contains("ActorHome").click();
        cy.url().should("include", `/actors`);
    });
    describe("The popular actors page", () => {
        it("displays the page header and 20 actors", () => {
            cy.get("h3").contains("Discover Actors");
            cy.get(".MuiCardHeader-root").should("have.length", 20);
        });

        it("displays the correct actors name", () => {
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(actors[index].name);
            });
        });
    });
    describe("By actor name", () => {
        it("only display actors with 'm' in the name", () => {
            const searchString = "m";
            const matchingActors = filterByName(actors, searchString);
            cy.get("#filled-search").clear().type(searchString);
            cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingActors.length
            );
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingActors[index].name);
            });
        });
        it("handles case when there are no matches", () => {
            const searchString = "xyxxzyyzz";
            cy.get("#filled-search").clear().type(searchString);
            cy.get(".MuiCardHeader-content").should("have.length", 0);
        });
    });
    describe("The Actor Details page", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/person/${
                    actors[0].id
                }?api_key=${Cypress.env("TMDB_KEY")}`
            )
                .its("body")
                .then((actorDetails) => {
                    actor = actorDetails;
                });
        });
        beforeEach(() => {
            cy.visit(`/actors/${actors[0].id}`);
        });
        it(" displays the actor name, biography and birthday and place of birth", () => {
            cy.get("h3").contains(actor.name);
            cy.get("h3").get(".MuiTypography-root").contains("Biography");
            cy.get(".MuiTypography-root").next().contains(actor.biography);
            cy.get(".MuiChip-root").contains(actor.birthday);
            cy.get(".MuiChip-root").contains(actor.place_of_birth.toLocaleString());
            cy.get(".MuiChip-root").contains(actor.known_for_department);
        });
    });
});