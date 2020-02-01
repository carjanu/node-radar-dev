const { Router } = require('express');

// Import controllers
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Create routes
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/dev/:github_username', DevController.update);

routes.get('/search', SearchController.index);


module.exports = routes;
