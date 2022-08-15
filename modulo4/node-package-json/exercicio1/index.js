// 1)a) Para acesar parâmetros la linha de comando utilizamos o "process.argv[]" com o parâmetro desejado.

// b)
// console.log(
//   'Olá',
//   process.argv[2],
//   '! Você tem',
//   process.argv[3],
//   'anos.'
// );
// // c)
console.log(
  'Olá',
  process.argv[2],
  '! Você tem',
  process.argv[3],
  'anos. Em sete anos você terá',
  Number(process.argv[3]) + 7,
);
