const products = require('../controllers/products');

module.exports = (app) => {

    app.get('/api/products', products.getAll);
    app.post('/api/products/new', products.create);
    app.get('/api/show/:_id', products.getById);
    app.put('/api/:_id/edit', products.update);
    app.delete('/api/products/:_id', products.delete);
};