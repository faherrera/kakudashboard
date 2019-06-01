import Faker from 'faker';

const FakerData = {
  products: [
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
    {
      id: Faker.random.number(999),
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      imageCode: Faker.random.image(),
      text: Faker.random.words(),
    },
  ]
}

export default FakerData;