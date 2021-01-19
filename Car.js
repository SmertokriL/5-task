class Car {
  #brand
  #model
  #yearOfManufacturing
  #maxSpeed
  #maxFuelVolume
  #fuelConsumption
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.brand = brand
    this.model = model
    this.yearOfManufacturing = yearOfManufacturing
    this.maxSpeed = maxSpeed
    this.maxFuelVolume = maxFuelVolume
    this.fuelConsumption = fuelConsumption
  }

  get brand() {
    return this.#brand
  }

  set brand(value) {
    if (value.length < 1 || value.length > 50) {
      throw Error('Not correct brand')
    }
    this.#brand = value
  }

  get model() {
    return this.#model
  }
  set model(value) {
    if (value.length < 1 || value.length > 50) {
      throw Error('Not correct model')
    }
    this.#model = value
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing
  }
  set yearOfManufacturing(value) {
    if (value < 1900 || value > new Date().getFullYear()) {
      throw Error('Not correct date')
    }
    this.#yearOfManufacturing = value
  }

  get maxSpeed() {
    return this.#maxSpeed
  }
  set maxSpeed(value) {
    if (value < 100 || value > 300) {
      throw Error('Not correct maxSpeed')
    }
    this.#maxSpeed = value
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume
  }
  set maxFuelVolume(value) {
    if (value < 10 || value > 50) {
      throw Error('Not correct maxFuelVolume')
    }
    this.#maxFuelVolume = value
  }

  get fuelConsumption() {
    return this.#fuelConsumption
  }
  set fuelConsumption(value) {
    this.#fuelConsumption = value
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume
  }

  get isStarted() {
    return this.#isStarted
  }

  get mileage() {
    return this.#mileage
  }

  start() {
    if (this.#isStarted === true) {
      throw Error('Машина уже заведена')
    }
    this.#isStarted = true
  }

  shutDownEngine() {
    if (this.#isStarted === false) {
      throw Error('Машина еще не заведена')
    }
    this.#isStarted = false
  }

  fillUpGasTank(value) {
    if (typeof value != 'number' || value <= 0) {
      throw Error('Неверное количество топлива для заправки')
    }
    if (value > this.#maxFuelVolume - this.#currentFuelVolume) {
      throw Error('Топливный бак переполнен')
    }
    this.#currentFuelVolume += value
  }

  drive(speed, hours) {
    if (typeof speed != 'number' || speed <= 0) {
      throw Error('Неверная скорость')
    }
    if (typeof hours != 'number' || hours <= 0) {
      throw Error('Неверное количество часов')
    }
    if (speed > this.#maxSpeed) {
      throw Error('Машина не может ехать так быстро')
    }
    if (this.#isStarted === false) {
      throw Error('Машина должна быть заведена, чтобы ехать')
    }
    if (
      this.#currentFuelVolume <
      hours * speed * (this.#fuelConsumption / 100)
    ) {
      throw Error('Недостаточно топлива')
    }
    this.#currentFuelVolume -= hours * speed * (this.#fuelConsumption / 100)
    this.#mileage += hours * speed
  }
}
