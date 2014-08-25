H2gb.Appstring = DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),

  binary: DS.belongsTo('binary'),
});

H2gb.Appstring.FIXTURES = [
];
