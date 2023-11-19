let movies;
const movieId = 497582; // Enola Holmes movie id

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
  });

  describe("Selecting playlist", () => {
    it("selected movie card shows the playlist add icon", () => {
      cy.get("button").contains("Upcoming").click();
      cy.url().should("include", `/upcoming`);
      cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
      cy.get("button[aria-label='add to playlist']").eq(1).click();
      cy.get(".MuiCardHeader-root").eq(1).find("svg");
    });
  });

  describe("The playlist page", () => {
    beforeEach(() => {
      // Add two movies to playlist and navigate to Playlist page
      cy.get("button").contains("Upcoming").click();
      cy.url().should("include", `/upcoming`);
      cy.get("button[aria-label='add to playlist']").eq(1).click();
      cy.get("button[aria-label='add to playlist']").eq(3).click();
      cy.get("button").contains("Playlist").click();
    });
    it("only the tagged movies are listed", () => {
      cy.get(".MuiCardHeader-content").should("have.length", 2);
      cy.get(".MuiCardHeader-content")
        .eq(0)
        .find("p")
        .contains(movies[1].title);
      cy.get(".MuiCardHeader-content")
        .eq(1)
        .find("p")
        .contains(movies[3].title);
    });
    it("removes movies from playlist", () => {
      cy.get("button[aria-label='remove from Playlist']").eq(0).click();
      // 断言播放列表中只剩下一个电影
      cy.get(".MuiCardHeader-content").should("have.length", 1);
      // 验证被删除的电影不再列表中
      cy.get(".MuiCardHeader-content")
          .find("p")
          .should("not.contain", movies[1].title);
    });
  });
});