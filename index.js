const omit = require('object.omit');

/**
 * 
 * @param {*} parties 
 * @param {*} options 
 */
function saintLague (parties, options) {
  options = Object.assign({
    seats: 120,
    threshold: 0.05,
    overhang: true,
    tagAlong: true,
    tagAlongSeats: 1
  }, options);

  let allocated = 0;
  let quotients = options.quotients || options.seats;

  const totalVotes = parties.reduce((total, party) => total + party.votes, 0);

  parties = parties.map((row) => {
    const party = Object.assign({}, row);

    party.allocated = 0;
    party.quotient = 0;

    if (
      (options.tagAlong && party.electorates >= options.tagAlongSeats) ||
      (party.votes / totalVotes) >= options.threshold
    ) {
      party.quotient = party.votes;
    }

    // Allows a party to be excluded without messing up results.
    // Useful with early results.
    if (party.votes === -1) {
      quotients = quotients - party.electorates;
      party.allocated = party.electorates;
    }

    return party;
  });

  while (allocated < quotients) {
    let party = parties.reduce((a, b) => a.quotient > b.quotient ? a : b, { quotient: 0 });
    party.allocated = party.allocated + 1;
    party.quotient = party.votes / ((2 * party.allocated) + 1);
    allocated = allocated + 1;
  }

  parties = parties.map((party) => {
    if (party.electorates > party.allocated) {
      party.lists = 0;
    } else {
      party.lists = party.allocated - party.electorates;

      if (party.listSize !== undefined && party.lists > party.listSize) {
        party.lists = party.listSize;
      }
    }

    if (party.electorates > party.allocated) {
      party.allocated = party.electorates;
    }

    return omit(party, 'quotient');
  });

  const seats = parties.reduce((total, party) => total + party.allocated, 0);

  // If overhang isn't allowed and overhang is detected
  // recalculate with less quotients.
  if (!options.overhang && seats > options.seats) {
    return saintLague(parties, Object.assign({ quotients: ((2 * options.seats) - seats)  }, options));
  }

  return parties;
};

module.exports = saintLague;
