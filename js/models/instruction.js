H2gb.Instruction = DS.Model.extend({
  instruction: DS.attr('string'),

  address: DS.belongsTo('address'),
});

H2gb.Instruction.FIXTURES = [
];
