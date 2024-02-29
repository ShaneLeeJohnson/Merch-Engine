# Merch-Engine

## Description

The Merch Engine is an Ecommerce app that stores related data such as products, the categories the products belong too, and any relevant tags the products might have. One example of this would be the Plain T-shirt product belonging to the shirts category and having a tag of blue representing the color of the shirt.

## Installation

This application requires node.js to run. The user will also have to install all dependencies as well including express, dotenv, mysql2, and sequelize.

## Usage

To use this application, the user will need to open their command line terminal (bash for windows). After ensuring that they have node.js and all dependencies installed, they can start the application by running node server.js. Once the get the message saying the server is listening then they can test out the different routes using an application such as postman, hoppscotch, or insomnia. The user can make get requests to http://localhost:3001/api and then chain on whatever endpoint they would like to see data for such as /products /categories or /tags. The user can also select just one product, tag or category by referencing an id using api/tags/1 for example. If the id exists the user will see the data for that specific item or they will receive an error letting them know that the id doesn't exist. The user can create new products, tags or categories by typing in json to the body when using the post request method in the application of their choice. To create a new product they would need to have a json object like the following example:
![Screen shot of the json object for a new product](/assets/images/product-Json.PNG)

The user can also update any existing product, tag, or category by referencing its id in the route just like they would when using the get request for a specific id. The last thing the user can do is delete a product, tag or category that exists by selecting the delete route and referencing the id of what they want to delete. If the user wanted to delete a product with an id of 4 then the route would be http://localhost:3001/api/products/4

To see the application in action, please watch the following video: 



## Credits

UTSA Full Stack Flex Online Starter Code: https://github.com/coding-boot-camp/fantastic-umbrella

## License

Please refer to the LICENSE in the repo.