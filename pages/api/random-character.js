import Change from "chance";

const chance = new Change();

function getRandomCharacter() {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twittername: chance.twitter(),
    geohash: chance.geohash(),
  };
  return character;
}

export default function handler(request, response) {
  response.status(200).json(getRandomCharacter());
}
