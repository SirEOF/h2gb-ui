H2gb.Block = DS.Model.extend({
  start_address: DS.attr('integer'),

  addresses: DS.hasMany('address'),

  binary: DS.belongsTo('binary'),
});

H2gb.Block.FIXTURES = [
  {
    id: 1,
    start_address: 1,
    addresses: [1, 2, 3],
    binary: 1,
  },
  {
    id: 2,
    start_address: 4,
    addresses: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    binary: 1,
  },
  {
    id: 3,
    start_address: 21,
    addresses: [21, 22],
    binary: 1,
  },
];
