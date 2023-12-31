# Assignment 1 - Agile Software Practice.

__Name:__ Long Liu

This repository contains the implementation of a React App, its associated Cypress tests and the GitLab CI pipeline.

## React App Features.

+ Playlist page
+ Top-rated page
+ expand site header
+ trending page
+ recommendations page
+ popular movies page
+ similar page
+ actor home page
+ actor details page
+ movie credits page
+ credits page
+ actor filter function
+ follow actor function

## Automated Tests.


__Top-rated page__ - The user can know that movies sorted by rating are on a separate page.

+ cypress/e2e/base2.cy.js

__Trending page__ - The user can know that movies sorted by daily trends are on a separate page.

+ cypress/e2e/base2.cy.js

__Popular page__ - The user can know that popular movies are on a separate page.

+ cypress/e2e/base2.cy.js

__Waiting to watch Movies tagging__ - The user can add movies to their playlist, and those selected are listed on a separate page.

+ cypress/e2e/playlist.cy.js

__Give some recommendation movies__ - The user can get some recommended movies based on the movies they have chosen.

+ cypress/e2e/recommendations.cy.js

__Give some similar movies__ - The user can get some similar movies based on the movies they have chosen.

+ cypress/e2e/similar.cy.js

__Actor home page__ - The user can know that popular actors are on a separate page.

+ cypress/e2e/actor.cy.js

__Follow actor tagging__ - The user can tag actors as their follow, and those selected are listed on a separate page.

+ cypress/e2e/actor.cy.js

__Search actor by name__ - The user can search actor by input actor's name into filter card.

+ cypress/e2e/actor.cy.js

__Know actor's details__ - The user can access the actor's details by clicking 'more info' on the actor card on a separate page, such as biography, birthday, place of birth, and known department.

+ cypress/e2e/actor.cy.js

__Know movies about the actor__ - The user can know movies about the actor by clicking 'relational movies' on the actor details page.

+ cypress/e2e/credits.cy.js

__Know actors about the movie__ - The user can know actors about the movie by clicking 'relational actors' on the movie details page.

+ cypress/e2e/credits.cy.js

### Error/Exception testing 

1. Display the Favourite Movies page when no movies have been tagged.
2. Submitting a Movie Review form when the user's name is blank.
3. Submitting a Movie Review form when the review is too short.

### Cypress Custom commands 

+ cypress/e2e/actor.cy.js
+ cypress/e2e/base2.cy.js
+ cypress/e2e/playlist.cy.js
+ cypress/e2e/recommendations.cy.js
+ cypress/e2e/similar.cy.js
+ cypress/e2e/review.cy.js
+ cypress/e2e/credits.cy.js

## Code Splitting.


+ src/index.js
+ src/components/movieDetails/index.js
+ src/components/templateMovieListPage/index.js
+ src/components/templateActorListPage/index.js

![codeSpliting](./imgs/codeSpliting.png)

## Pull Requests.

https://gitlab.com/longliu1/agile-ca1.git

https://github.com/1730177143/agile-ca1.git

![pull](./imgs/pull.png)

## Independent learning (If relevant).

https://1730177143.github.io/agile-ca1

![delopy](./imgs/delopy.png)

![deploy](./imgs/deploy.png)
