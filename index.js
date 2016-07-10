var _ = require('lodash');

module.exports = function saintLague(parties, options) {
  parties = _.cloneDeep(parties);
  options = _.defaults(options, {
      seats: 120,
      threshold: 0.05,
      overhang: true
  });

  var allocated = 0,
    party,
    quotients = options.quotients || options.seats,
    seats,
    totalVotes;

  totalVotes = _.reduce(parties, function(total, party) {
    return total + party.votes;
  }, 0);

  _.each(parties, function(party) {
    party.allocated = 0;
    if (party.electorates > 0 || (party.votes / totalVotes) >= options.threshold) {
      party.quotient = party.votes;
    }

    // Allows a party to be excluded without messing up results.
    // Useful with early results.
    if (party.votes === -1) {
      quotients -= party.electorates;
      party.allocated = party.electorates;
    }
  });

  while (allocated < quotients) {
    party = _.maxBy(parties, 'quotient');
    party.allocated++;
    party.quotient = party.votes / ((2 * party.allocated) + 1);
    allocated++;
  }

  parties = _.map(parties, function(party) {
    if (party.electorates > party.allocated) {
      party.lists = 0;
    } else {
      party.lists = party.allocated - party.electorates;
      if (!_.isUndefined(party, 'listSize') && party.lists > party.listSize) {
        party.lists = party.listSize;
      }
    }
    if (party.electorates > party.allocated) {
      party.allocated = party.electorates;
    }

    return _.omit(party, 'quotient');
  });

  seats = _.reduce(parties, function(total, party) {
    return total + party.allocated;
  }, 0);

  // If overhang isn't allowed and overhang is detected
  // recalculate with less quotients.
  if (!options.overhang && seats > options.seats) {
    return saintLague(parties, _.assign({ quotients: ((2 * options.seats) - seats)  }, options));
  }

  return parties;
};
