H2gb.Address = DS.Model.extend({
  address: DS.attr('integer'),
  label:   DS.attr('string'),
  instruction: DS.attr('string'),

  block: DS.belongsTo('block'),
  xref: DS.hasMany('xref'),
});

H2gb.Address.FIXTURES = [
  { id: 1,  address: 0x00, instruction: 'mov eax, 3',                     block: 1, label: 'start', },
  { id: 2,  address: 0x05, instruction: 'mov esi, ecx',                   block: 1, label: '', },
  { id: 3,  address: 0x07, instruction: 'xor ecx, ecx',                   block: 1, label: '', },
  { id: 4,  address: 0x09, instruction: 'movsx edx, byte ptr [ecx+esi]',  block: 2, label: 'block_2', },
  { id: 5,  address: 0x0d, instruction: 'sub edx, 0x30',                  block: 2, label: '', },
  { id: 6,  address: 0x10, instruction: 'lea edi, [eax+eax]',             block: 2, label: '', },
  { id: 7,  address: 0x13, instruction: 'xor edx, edi',                   block: 2, label: '', },
  { id: 8,  address: 0x15, instruction: 'add eax, edx',                   block: 2, label: '', },
  { id: 9,  address: 0x17, instruction: 'inc ecx',                        block: 2, label: '', },
  { id: 10, address: 0x18, instruction: 'cmp ecx, 0x0c',                  block: 2, label: '', },
  { id: 11, address: 0x1b, instruction: 'jl short 0x09',                  block: 2, label: '', },
  { id: 12, address: 0x1d, instruction: 'xor edx, edx',                   block: 2, label: '', },
  { id: 13, address: 0x1f, instruction: 'mov ecx, 0x0a',                  block: 2, label: '', },
  { id: 14, address: 0x24, instruction: 'div ecx',                        block: 2, label: '', },
  { id: 15, address: 0x26, instruction: 'movsx eax, byte ptr [esi+0x0c]', block: 2, label: '', },
  { id: 16, address: 0x2a, instruction: 'add edx, 0x30',                  block: 2, label: '', },
  { id: 17, address: 0x2d, instruction: 'cmp eax, edx',                   block: 2, label: '', },
  { id: 18, address: 0x2f, instruction: 'jnz short 0x37',                 block: 2, label: '', },
  { id: 19, address: 0x31, instruction: 'mov eax, 1',                     block: 2, label: '', },
  { id: 20, address: 0x36, instruction: 'retn',                           block: 3, label: 'block_3', },
  { id: 21, address: 0x37, instruction: 'xor eax, eax',                   block: 3, label: '', },
  { id: 22, address: 0x39, instruction: 'retn',                           block: 3, label: '', },
];
