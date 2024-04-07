const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    const randomName = faker.person.firstName() + ' ' + faker.person.lastName();
    const jobTitle = faker.person.jobTitle();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number()
    const imageUrl = faker.image.avatar();

  const employee = {
    name: randomName,
    jobTitle,
    email,
    phoneNumber,
    imageUrl
  };

  res.json(employee);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
