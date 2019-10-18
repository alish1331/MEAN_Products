const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    getAll: (req, res) => {
        Product.find()
            .then(data => res.json({ success: "Successfully found products", data: data }))
            .catch(err => res.json({ errorMsg: "fail", err: err }));
    },
    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ message: 'fail', err: err }))
    },
    getById: (req, res) => {
        Product.findOne({ _id: req.params._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true, new: false })
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ errorMsg: 'fail', err: err }))
    },
    delete: (req, res) => {
        Product.remove({ _id: req.params._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}