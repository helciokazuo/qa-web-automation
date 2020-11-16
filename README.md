# qa-web-automation

Web automated tests using cypress.io and cypress-file-upload plugin


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)


## General info
This project is a simple use case of cypress, implemented by a novice user.

	
## Technologies
Project is created with:
* cypress version: 5.6.0 
* cypress-file-upload plugin 


## Setup

* Install cypress - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

* Install cypress-file-upload plugin - https://github.com/abramenal/cypress-file-upload	



### Tips:

* You must define the following on your "cypress.json"

```
{
        "baseUrl":"https://app.xyz.com",
        "myName":"<name of the user>",
        "creatorEmail":"<inform here a valid e-mail so you can check received forms>"
}

```


* Don't forget to add this below to 'cypress/support/command.js'
``` 
import 'cypress-file-upload';
```

* If you want to suppress uncaught exceptions (from web application) on CLI execution, add this below to 'cypress/support/index.js' 

```
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
```



### How to run


* If you want to use GUI, start cypress (using this below)

```
node_modules/.bin/cypress open
```
      
and select the file "cypress/integration/web_test_form/qa_test_form.js"



* If you want to start it from CLI, just execute (for example): 

```
node_modules/.bin/cypress run --browser chrome -s cypress/integration/web_test_form/qa_test_form.js
```
