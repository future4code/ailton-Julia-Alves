// 2)
const math = () => {
  const operacao = process.argv[2];

  switch (operacao) {
    case 'soma':
      return Number(process.argv[3]) + Number(process.argv[4]);
    case 'sub':
      return Number(process.argv[3]) - Number(process.argv[4]);
    case 'mult':
      return Number(process.argv[3]) * Number(process.argv[4]);
    case 'div':
      return Number(process.argv[3]) / Number(process.argv[4]);
    default:
      return 'Argumentos faltando';
  }
};

console.log(math());
