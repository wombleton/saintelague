Sainte-Laguë
============

A module to calculate proportionally how many seats a party will receive under the Sainte-Laguë formula. The defaults are the New Zealand system where 5% or one electorate seat is required for proportionality.

List size is optional, but if included an underhang will be applied as best it's able.

Usage
=====

```js
var lague = require('saintelague'),
  parties,
  results;

parties = [
  { name: 'A', votes: 100, electorates: 1 },
  { name: 'B', votes: 5, electorates: 10 },
  { name: 'C', votes: 5, electorates: 0 },
  { name: 'D', votes: 50, electorates: 1, listSize: 5 }
];

result = lague(parties, { 
  overhang: true, // whether an overhang is allowed
  seats: 120,
  threshold: 0.05, // percentage required for list seats
  tagAlong: true, // whether you can get list seats from winning an electorate seat
  tagAlongSeats: 1 // how many electorate seats are required for list seats
});
//  [
// high votes, low electorates
//    { name: 'A', votes: 100, electorates: 1, allocated: 77, lists: 76 },
// low votes, high electorates
//    { name: 'B', votes: 5, electorates: 10, allocated: 10, lists: 0 },
// under threshold
//    { name: 'C', votes: 5, electorates: 0, allocated: 0, lists: 0 },
// underhang party
//    { name: 'D', votes: 50, electorates: 1, listSize: 5, allocated: 39, lists: 5 },
// no party vote electorate seat
//    { name: 'E', votes: -1, electorates: 5, allocated: 5, lists: 0 }
//  ]
```
