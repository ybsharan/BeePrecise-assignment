import express from 'express';

const app = express();
const PORT = 3000;

const pets = [
  {
    name: 'Charlie',
    age: 3,
  },
  {
    name: 'Bella',
    age: 4,
  },
  {
    name: 'Harley',
    age: 5,
  },
  {
    name: 'Milo',
    age: 6,
  },
  {
    name: 'Bear',
    age: 2,
  },
  {
    name: 'Scout',
    age: 1,
  },
];

app.get('/pets', (req, res) => {
  // Sorting the query parameter
  const sortType = req.query.sort || 'ASC';

  // creating a copy of the pets
  let sortedPets = [...pets];

  if (sortType.toUpperCase() === 'DESC') {
    sortedPets.sort((a, b) => b.age - a.age); // sorting in Descending order
  } else {
    sortedPets.sort((a, b) => a.age - b.age); // sorting in Ascending order
  }

  res.status(200).json({
    sortedPets,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is Running on port : ${PORT}`);
});
