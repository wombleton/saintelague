var _ = require('lodash');

module.exports = function(parties, options) {
  options = options || {};
  parties = _.clone(parties, true);

  var allocated = 0,
    party,
    seats = options.seats || 120,
    totalVotes;

  totalVotes = _.reduce(_.map(parties, 'votes'), function(total, votes) {
    return total + votes;
  }, 0);

  _.each(parties, function(party) {
    party.allocated = 0;
    if (party.electorates > 0 || (party.votes / totalVotes) > 0.05) {
      party.quotient = party.votes;
    }

    if (party.votes === -1) {
      seats -= party.electorates;
      party.allocated = party.electorates;
    }
  });

  while (allocated < seats) {
    party = _.max(parties, 'quotient');
    party.allocated++;
    party.quotient = party.votes / ((2 * party.allocated) + 1);
    allocated++;
  }

  return _.map(parties, function(party) {
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
};
