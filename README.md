
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

## Test Scenarios in Postman

### shop

- [x] Create Shop:
- Method: POST
- URL: http://localhost:3000/shops
- Body (JSON): { "name": "Shop 1" }

- [x] Update Shop:
- Method: PUT
- URL: http://localhost:3000/shops/`id`
- Body (JSON): { "name": "Updated Shop 1" }

- [x] Get All Shops:
- Method: GET
- URL: http://localhost:3000/shops

- [x] Get Shop by ID:
- Method: GET
- URL: http://localhost:3000/shops/`id`

- [x] Delete Shop:
- Method: DELETE
- URL: http://localhost:3000/shops/`id`

### shop items

- [x] Create Shop Item:
- Method: POST
- URL: http://localhost:3000/shopItems
- Body (JSON): { "name": "Item 1", "price": 10, "shopId": 1 }

- [x] Update Shop Item:
- Method: PUT
- URL: http://localhost:3000/shopItems/`id`
- Body (JSON): { "name": "Updated Item 1", "price": 15 }

- [x] Get All Shop Items
- Method: GET
- URL: http://localhost:3000/shopItems

- [x] Get Shop Item by ID
- Method: GET
- URL: http://localhost:3000/shopItems/`id`

- [x] Prevent Deleting Shop with Items:
- Method: DELETE
- URL: http://localhost:3000/shops/`id`




