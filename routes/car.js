const { Car } = require('../module/car')
const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  const car = await Car.find().sort()
  res.send(car)
})

app.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id)
  if (!car) res.status(400).send('the given id is not found')
  res.send(car)
})

app.post('/', async (req, res) => {
  let car = new Car({
    name: req.body.name,
    model: req.body.model,
    variant: req.body.variant,
    price: req.body.price,
    color: req.body.color,
    fuelType: req.body.fuelType,
    category: req.body.category,
  })
  car = await car.save()
  res.send(car)
})

app.delete('/:id', async (req, res) => {
  const car = await Car.findByIdAndRemove(req.params.id)
  if (!car) res.status(400).send('the given id is not found')
  res.send(car)
})

app.put('/:id', async (req, res) => {
  const car = await Car.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      model: req.body.model,
      variant: req.body.variant,
      price: req.body.price,
      color: req.body.color,
      fuelType: req.body.fuelType,
      category: req.body.category,
    },
    { new: true },
  )
  if (!car) res.status(400).send('the given id is not found')
  res.send(car)
})

module.exports = app
