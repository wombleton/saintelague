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

module.exports['2014 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1010464, electorates: 41 },
    { votes: 519146, electorates: 27 },
    { votes: 210764, electorates: 0 },
    { votes: 186031, electorates: 0 },
    { votes: 86616, electorates: 0 },
    { votes: 27074, electorates: 1 },
    { votes: 26539, electorates: 0 },
    { votes: 14510, electorates: 1 },
    { votes: 8539, electorates: 0 },
    { votes: 4533, electorates: 1 },
    { votes: 4368, electorates: 0 },
    { votes: 1609, electorates: 0 },
    { votes: 906, electorates: 0 },
    { votes: 895, electorates: 0 },
    { votes: 677, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 61);
  test.equals(result[1].allocated, 32);
  test.equals(result[2].allocated, 13);
  test.equals(result[3].allocated, 11);
  test.equals(result[4].allocated, 0);
  test.equals(result[5].allocated, 2);
  test.equals(result[6].allocated, 0);
  test.equals(result[7].allocated, 1);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 1);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);
  test.equals(result[14].allocated, 0);

  test.done();
};

module.exports['2011 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1058636, electorates: 42 },
    { votes: 614937, electorates: 22 },
    { votes: 247372, electorates: 0 },
    { votes: 147544, electorates: 0 },
    { votes: 59237, electorates: 0 },
    { votes: 31982, electorates: 3 },
    { votes: 24168, electorates: 1 },
    { votes: 23889, electorates: 1 },
    { votes: 13443, electorates: 1 },
    { votes: 11738, electorates: 0 },
    { votes: 1714, electorates: 0 },
    { votes: 1595, electorates: 0 },
    { votes: 1209, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 59);
  test.equals(result[1].allocated, 34);
  test.equals(result[2].allocated, 14);
  test.equals(result[3].allocated, 8);
  test.equals(result[4].allocated, 0);
  test.equals(result[5].allocated, 3);
  test.equals(result[6].allocated, 1);
  test.equals(result[7].allocated, 1);
  test.equals(result[8].allocated, 1);
  test.equals(result[9].allocated, 0);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);

  test.done();
};

module.exports['2008 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1053398, electorates: 41 },
    { votes: 796880, electorates: 21 },
    { votes: 157613, electorates: 0 },
    { votes: 95356, electorates: 0 },
    { votes: 85496, electorates: 1 },
    { votes: 55980, electorates: 5 },
    { votes: 21241, electorates: 1 },
    { votes: 20497, electorates: 1 },
    { votes: 13016, electorates: 0 },
    { votes: 12755, electorates: 0 },
    { votes: 9515, electorates: 0 },
    { votes: 9640, electorates: 0 },
    { votes: 8176, electorates: 0 },
    { votes: 1909, electorates: 0 },
    { votes: 1208, electorates: 0 },
    { votes: 1176, electorates: 0 },
    { votes: 932, electorates: 0 },
    { votes: 465, electorates: 0 },
    { votes: 313, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 58);
  test.equals(result[1].allocated, 43);
  test.equals(result[2].allocated, 9);
  test.equals(result[3].allocated, 0);
  test.equals(result[4].allocated, 5);
  test.equals(result[5].allocated, 5);
  test.equals(result[6].allocated, 1);
  test.equals(result[7].allocated, 1);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 0);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);
  test.equals(result[14].allocated, 0);
  test.equals(result[15].allocated, 0);
  test.equals(result[16].allocated, 0);
  test.equals(result[17].allocated, 0);
  test.equals(result[18].allocated, 0);

  test.done();
};

module.exports['2005 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 935319, electorates: 31 },
    { votes: 889813, electorates: 31 },
    { votes: 130115, electorates: 0 },
    { votes: 120521, electorates: 0 },
    { votes: 48263, electorates: 4 },
    { votes: 60860, electorates: 1 },
    { votes: 34469, electorates: 1 },
    { votes: 26441, electorates: 1 },
    { votes: 14210, electorates: 0 },
    { votes: 5748, electorates: 0 },
    { votes: 2821, electorates: 0 },
    { votes: 1641, electorates: 0 },
    { votes: 1178, electorates: 0 },
    { votes: 1079, electorates: 0 },
    { votes: 946, electorates: 0 },
    { votes: 782, electorates: 0 },
    { votes: 601, electorates: 0 },
    { votes: 478, electorates: 0 },
    { votes: 344, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 50);
  test.equals(result[1].allocated, 48);
  test.equals(result[2].allocated, 7);
  test.equals(result[3].allocated, 6);
  test.equals(result[4].allocated, 4);
  test.equals(result[5].allocated, 3);
  test.equals(result[6].allocated, 2);
  test.equals(result[7].allocated, 1);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 0);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);
  test.equals(result[14].allocated, 0);
  test.equals(result[15].allocated, 0);
  test.equals(result[16].allocated, 0);
  test.equals(result[17].allocated, 0);
  test.equals(result[18].allocated, 0);

  test.done();
};

module.exports['2002 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 838219, electorates: 45 },
    { votes: 425310, electorates: 21 },
    { votes: 210912, electorates: 1 },
    { votes: 145078, electorates: 0 },
    { votes: 142250, electorates: 0 },
    { votes: 135918, electorates: 1 },
    { votes: 34542, electorates: 1 },
    { votes: 27492, electorates: 0 },
    { votes: 25985, electorates: 0 },
    { votes: 25888, electorates: 0 },
    { votes: 12987, electorates: 0 },
    { votes: 4980, electorates: 0 },
    { votes: 1782, electorates: 0 },
    { votes: 274, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 52);
  test.equals(result[1].allocated, 27);
  test.equals(result[2].allocated, 13);
  test.equals(result[3].allocated, 9);
  test.equals(result[4].allocated, 9);
  test.equals(result[5].allocated, 8);
  test.equals(result[6].allocated, 2);
  test.equals(result[7].allocated, 0);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 0);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);

  test.done();
};

module.exports['1999 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 800199, electorates: 41 },
    { votes: 629932, electorates: 22 },
    { votes: 159859, electorates: 1 },
    { votes: 145493, electorates: 0 },
    { votes: 106560, electorates: 1 },
    { votes: 87926, electorates: 1 },
    { votes: 49154, electorates: 0 },
    { votes: 23033, electorates: 0 },
    { votes: 22687, electorates: 0 },
    { votes: 11065, electorates: 1 },
    { votes: 5949, electorates: 0 },
    { votes: 5190, electorates: 0 },
    { votes: 4008, electorates: 0 },
    { votes: 3244, electorates: 0 },
    { votes: 3191, electorates: 0 },
    { votes: 2912, electorates: 0 },
    { votes: 1712, electorates: 0 },
    { votes: 1311, electorates: 0 },
    { votes: 936, electorates: 0 },
    { votes: 454, electorates: 0 },
    { votes: 387, electorates: 0 },
    { votes: 292, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 49);
  test.equals(result[1].allocated, 39);
  test.equals(result[2].allocated, 10);
  test.equals(result[3].allocated, 9);
  test.equals(result[4].allocated, 7);
  test.equals(result[5].allocated, 5);
  test.equals(result[6].allocated, 0);
  test.equals(result[7].allocated, 0);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 1);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);
  test.equals(result[14].allocated, 0);
  test.equals(result[15].allocated, 0);
  test.equals(result[16].allocated, 0);
  test.equals(result[17].allocated, 0);
  test.equals(result[18].allocated, 0);
  test.equals(result[19].allocated, 0);
  test.equals(result[20].allocated, 0);
  test.equals(result[21].allocated, 0);

  test.done();
};

module.exports['1996 NZ election'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 701315, electorates: 30 },
    { votes: 584159, electorates: 26 },
    { votes: 276603, electorates: 6 },
    { votes: 209347, electorates: 1 },
    { votes: 126442, electorates: 1 },
    { votes: 89716, electorates: 0 },
    { votes: 34398, electorates: 0 },
    { votes: 18245, electorates: 1 },
    { votes: 5990, electorates: 0 },
    { votes: 5288, electorates: 0 },
    { votes: 4070, electorates: 0 },
    { votes: 3543, electorates: 0 },
    { votes: 3189, electorates: 0 },
    { votes: 2514, electorates: 0 },
    { votes: 2363, electorates: 0 },
    { votes: 1431, electorates: 0 },
    { votes: 1244, electorates: 0 },
    { votes: 949, electorates: 0 },
    { votes: 671, electorates: 0 },
    { votes: 478, electorates: 0 },
    { votes: 404, electorates: 0 }
  ];

  result = lague(parties, { seats: 120, threshold: 0.05 });

  // allocated
  test.equals(result[0].allocated, 44);
  test.equals(result[1].allocated, 37);
  test.equals(result[2].allocated, 17);
  test.equals(result[3].allocated, 13);
  test.equals(result[4].allocated, 8);
  test.equals(result[5].allocated, 0);
  test.equals(result[6].allocated, 0);
  test.equals(result[7].allocated, 1);
  test.equals(result[8].allocated, 0);
  test.equals(result[9].allocated, 0);
  test.equals(result[10].allocated, 0);
  test.equals(result[11].allocated, 0);
  test.equals(result[12].allocated, 0);
  test.equals(result[13].allocated, 0);
  test.equals(result[14].allocated, 0);
  test.equals(result[15].allocated, 0);
  test.equals(result[16].allocated, 0);
  test.equals(result[17].allocated, 0);
  test.equals(result[18].allocated, 0);
  test.equals(result[19].allocated, 0);
  test.equals(result[20].allocated, 0);

  test.done();
};
