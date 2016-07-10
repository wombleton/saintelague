var _ = require('lodash');
var lague = require('../index');

// All figures are as provided by the 2012 MMP Review Report
// http://www.elections.org.nz/sites/default/files/bulk-upload/documents/Final_Report_2012_Review_of_MMP.pdf

// 1.61 - Table 4 (Page 21)

module.exports['2011 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  // allocated
  test.equals(result[7].allocated, 1);
  test.equals(result[2].allocated, 14);
  test.equals(result[1].allocated, 34);
  test.equals(result[6].allocated, 1);
  test.equals(result[5].allocated, 3);
  test.equals(result[0].allocated, 59);
  test.equals(result[3].allocated, 8);
  test.equals(result[8].allocated, 1);

  test.equals(total, 121);

  test.done();
};

module.exports['2011 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  // allocated
  test.equals(result[7].allocated, 1);
  test.equals(result[2].allocated, 14);
  test.equals(result[1].allocated, 34);
  test.equals(result[6].allocated, 1);
  test.equals(result[5].allocated, 3);
  test.equals(result[0].allocated, 58);
  test.equals(result[3].allocated, 8);
  test.equals(result[8].allocated, 1);

  test.equals(total, 120);

  test.done();
};

module.exports['2011 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  // allocated
  test.equals(result[7].allocated, 1);
  test.equals(result[2].allocated, 14);
  test.equals(result[1].allocated, 36);
  test.equals(result[6].allocated, 1);
  test.equals(result[5].allocated, 3);
  test.equals(result[0].allocated, 61);
  test.equals(result[3].allocated, 9);
  test.equals(result[8].allocated, 1);

  test.equals(total, 126);

  test.done();
};

// 1.69 - Table 6 (Page 23)

module.exports['2008 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[4].allocated + result[5].allocated + result[7].allocated, 69);
  test.equals(total, 122);

  test.done();
};

module.exports['2008 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[4].allocated + result[5].allocated + result[7].allocated, 63);
  test.equals(total, 120);

  test.done();
};

module.exports['2008 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[4].allocated + result[5].allocated + result[7].allocated, 67);
  test.equals(total, 128);

  test.done();
};

module.exports['2005 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[7].allocated + result[2].allocated + result[5].allocated, 61);
  test.equals(total, 121);

  test.done();
};

module.exports['2005 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[7].allocated + result[2].allocated + result[5].allocated, 60);
  test.equals(total, 120);

  test.done();
};

module.exports['2005 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[7].allocated + result[2].allocated + result[5].allocated, 64);
  test.equals(total, 127);

  test.done();
};

module.exports['2002 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[6].allocated + result[5].allocated, 62);
  test.equals(total, 120);

  test.done();
};

module.exports['2002 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[6].allocated + result[5].allocated, 62);
  test.equals(total, 120);

  test.done();
};

module.exports['2002 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[6].allocated + result[5].allocated, 63);
  test.equals(total, 121);

  test.done();
};

module.exports['1999 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 59);
  test.equals(total, 120);

  test.done();
};

module.exports['1999 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 59);
  test.equals(total, 120);

  test.done();
};

module.exports['1999 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 60);
  test.equals(total, 121);

  test.done();
};

module.exports['1996 NZ election - 5% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 61);
  test.equals(total, 120);

  test.done();
};

module.exports['1996 NZ election - 4% threshold, without overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: false,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 59);
  test.equals(total, 120);

  test.done();
};

module.exports['1996 NZ election - 4% threshold, with overhangs'] = function(test) {
  var parties,
    result,
    total;

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

  result = lague(parties, {
    seats: 120,
    threshold: 0.04,
    overhang: true,
    tagAlong: false
  });

  total = _.reduce(result, function(total, party) {
      return total + party.allocated;
  }, 0);

  test.equals(result[0].allocated + result[2].allocated, 59);
  test.equals(total, 121);

  test.done();
};
