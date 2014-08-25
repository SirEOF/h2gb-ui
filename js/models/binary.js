H2gb.Binary = DS.Model.extend({
  name: DS.attr('string'),

  blocks: DS.hasMany('block'),
  strings: DS.hasMany('appstring'),
  functions: DS.hasMany('appfunction')
});

H2gb.Binary.FIXTURES = [
  {
    id: 1,
    name: 'binary 1',
  },
  {
    id: 2,
    name: 'binary 2',
  },
  {
    id: 3,
    name: 'binary 3',
  },
];
