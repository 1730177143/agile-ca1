# Assignment 1 - Agile Software Practice.

__Name:__ Long Liu

This repository contains the implementation of a React App, its associated Cypress tests and the GitLab CI pipeline.

## React App Features.

[ Provide a bullet-point list of the __new features__ you added to the React Movies app, as well as any modifications to existing features).] e.g.
 
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

### Unique functionality testing (if relevant).

[Briefly explain the parts of your app's  functionality that are unique and state the associated test file name.] 

e.g.

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

### Error/Exception testing (if relevant).

[State the cases that demonstrate error and/or exception testing.]

1. Display the Favourite Movies page when no movies have been tagged.
2. Submitting a Movie Review form when the user's name is blank.
3. Submitting a Movie Review form when the review is too short.

### Cypress Custom commands (if relevant).

[ Specify the test file(s) that use a custom Cypress command(s) that you implemented.]

e.g.
+ cypress/e2e/filtering.cy.js
+ cypress/e2e/favourites.cy.js

## Code Splitting.

[Specify the pathname of each source code file that contains evidence of code splitting in your React app.]

e.g.
+ src/index.js
+ src/pages/favouriteMoviesPage.js
+ src/components/movieCard/index.js

## Pull Requests.

[ Specify the URL of the GitHub repository that contains a record of the Pull Requests made during this assignment's code (source code or test code). If you used GitLab Merge Requests instead, then simply state this.]

## Independent learning (If relevant).

[ Briefly explain the work you did to satisfy the requirements of the Outstanding grade category, and include proof (e.g. screenshots) of its success. Also, mention the files that contain evidence of this work.

![](./images/sample.png)

State any other evidence of independent learning achieved while completing this assignment.

