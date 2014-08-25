H2gb.Xref = DS.Model.extend({
  xref: DS.attr('integer'),

  address: DS.belongsTo('address'),
});

H2gb.Xref.FIXTURES = [
];
