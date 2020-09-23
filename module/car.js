const mongoose = require('mongoose')

const Car = mongoose.model(
  'Car',
  new mongoose.Schema({
    name: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    model: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    variant: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    price: {
      type: Number,
      minlength: 1,
      maxlength: 10,
      required: true,
    },
    color: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    fuelType: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    category: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
  }),
)

exports.Car = Car
