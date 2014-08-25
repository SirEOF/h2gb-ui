H2gb.Appfunction = DS.Model.extend({
  name: DS.attr('string'),

  binary: DS.belongsTo('binary'),
});

H2gb.Appfunction.FIXTURS = [
  {
    id: 1,
    name: 'VerifyCdKey',
    blocks: [1, 2, 3],
  },
];
