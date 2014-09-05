var lague = require('../index');

module.exports['test lague calculations'] = function(test) {
  var parties,
    result;

  parties = [
      { name: 'A', votes: 100, electorates: 1 },
      { name: 'B', votes: 5, electorates: 10 },
      { name: 'C', votes: 5, electorates: 0 },
      { name: 'D', votes: 50, electorates: 1, listSize: 5 },
      { name: 'E', votes: -1, electorates: 5 }
    ];

  result = lague(parties, { seats: 120 });

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

module.exports['2005 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { name: 'Labour', votes: 935319, electorates: 31 },
    { name: 'National', votes: 889813, electorates: 31 },
    { name: 'NZ First', votes: 130115, electorates: 0 },
    { name: 'ACT', votes: 34469, electorates: 1 },
    { name: 'Green', votes: 120521, electorates: 0 },
    { name: 'UF', votes: 60860, electorates: 1 },
    { name: 'Progressives', votes: 26441, electorates: 1 },
    { name: 'Maori Party', votes: 48263, electorates: 4 },
    { name: 'Other', votes: 29828, electorates: 0 }
  ];

  result = lague(parties, { seats: 120 });

  // allocated
  test.equals(result[0].allocated, 50);
  test.equals(result[1].allocated, 48);
  test.equals(result[2].allocated, 7);
  test.equals(result[3].allocated, 2);
  test.equals(result[4].allocated, 6);
  test.equals(result[5].allocated, 3);
  test.equals(result[6].allocated, 1);
  test.equals(result[7].allocated, 4);
  test.equals(result[8].allocated, 0);

  test.done();
};

module.exports['handles undefined votes'] = function(test) {
  var parties,
    result;

  parties = [
    { name: 'A', votes: 1, electorates: 1 },
    { name: 'B', votes: undefined, electorates: undefined }
  ];

  result = lague(parties, { seats: 120 });

  test.equals(result[0].allocated, 120);
  test.equals(result[1].allocated, 0);

  test.equals(result[0].lists, 119);
  test.equals(result[1].lists, 0);
  test.done();
};
