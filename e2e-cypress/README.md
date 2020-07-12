npm init -y
npm install --save-dev cypress
npx cypress open
npm i react-scripts

Common Assertions 
````
.should('equal', 'some value')

1. Checking length 
.should('have length', 4)

Checking the Number of Items
cy.get('.list-item').should('have length', 3)

Checking Existence 
.should('exist')
.should('not.exist')

And visibility
.should('be.visible')
.should('not.be.visible')

Checking CSS classes 
.should('have.class', 'list-item-selected')

And Specific Styles
.should('have.css', 'background-color', 'blue')

Design CSS changes very frequently

Checking Text Content 
.invoke('text')
.should('contain')
.should('not.contain')

Automatic retrying 
it won't retry interactive commands such as .click() or .type()
it only retries the last failing command 
It will retry a failing command or assertion until it passes or until the timeout is reached.


Debugging 
debugger;
inspect

Environment variables 
export CYPRESS_MY_ENV_VARIABLE="hello"
unset CYPRESS_MY_ENV_VARIABLE="hello"
npx cypress open --env MY_ENV_VARIABLE="hello"

//  "env": {
//    "MY_ENV_VARIABLE": "hello"
//  }

