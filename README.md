
# CRUD API for shops and their items!

## Welcome!

This application is built using Node.js and Express. It provides CRUD API for managing shops and shop items. All data is stored in memory, meaning it will be lost when the application restarts. Also, there are simple postman tests to test the functionality of application.
 
## Task

Create Postman requests/tests which cover the following scenarios:

- You are able to create, update, delete a shop.
- You are able to assign a shop item to a shop.
- You are able to create, update, delete a shop item.
- You are not able to delete a shop if it has items available.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js.
- npm (Node Package Manager): Comes with Node.js installation.

## Set up

- Clone this repository to your local machine.
- Navigate to the project directory.
- Run the following command to install all the required modules listed in the "package.json" file: `npm install`.
- Run the API server locally `node app.js`. You should see a message: `Server is running on http://localhost:3000`.

## Tests

Test scenarios are available in `test.txt`, or you can run them using Postman.

### Importing Postman Collection

- From this repository download `shop-shopItems-api.postman_collection.json` file to your local machine.
- In Postman, click on the "Import" button located at the top left and drop `shop-shopItems-api.postman_collection.json` file.
- Postman will automatically add the collection, and you will see all predefined API requests.


