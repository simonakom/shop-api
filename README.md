
# CRUD API for shops and their items!

## Welcome!

This application is built using Express and Node.js. It provides CRUD API for managing shops and shops items. All data is stored in memory, meaning it will be lost when the application restarts.
 
## Task

Create Postman requests/tests which cover the following scenarios:

- You are able to create and update a shop
- You are able to create and delete a shop
- You are able to assign a shopItem to a shop
- You are able to rename a shopItem
- You are not able to delete a shop if it has items available

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download here](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation

## Set up

- Clone this repository to your local machine
- Navigate to the project directory
- Initialize a new Node.js project by running `npm init -y` in your terminal. This will create a package.json file.
- Install Express by running `npm install express`
- Run the API Server Locally `node app.js`. You should see a message: `Server is running on http://localhost:3000`

## Tests

Test scenarios are available in `test.txt`, or you can run them using Postman.

### Importing Postman Collection

- From this repository download `shop-shopItems-api.postman_collection.json` file to your local machine.
- In Postman, click on the "Import" button located at the top left and drop `shop-shopItems-api.postman_collection.json` file.
- Postman will automatically add the collection, and you will see all predefined API requests.
