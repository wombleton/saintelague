const sainteLague = require('../index');

module.exports['test sainte lague calculations'] = (test) => {
  const parties = [
    { name: 'A', votes: 100, electorates: 1 },
    { name: 'B', votes: 5, electorates: 10 },
    { name: 'C', votes: 5, electorates: 0 },
    { name: 'D', votes: 50, electorates: 1, listSize: 5 },
    { name: 'E', votes: -1, electorates: 5 }
  ];

  const result = sainteLague(parties, { seats: 120 });

  // doesn't pollute original array
  test.equals(parties[0].allocated, undefined);

  test.equals(result.length, 5);

  // allocated
  test.equals(result[0].allocated, 74);
  test.equals(result[1].allocated, 10);
  test.equals(result[2].allocated, 0);
  test.equals(result[3].allocated, 37);
  test.equals(result[4].allocated, 5);

  // lists
  test.equals(result[0].lists, 73);
  test.equals(result[1].lists, 0);
  test.equals(result[2].lists, 0);
  test.equals(result[3].lists, 5);
  test.equals(result[4].lists, 0);

  test.done();
};
