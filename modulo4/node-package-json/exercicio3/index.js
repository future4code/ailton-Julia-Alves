// 3)
const tarefa = ['lavar louça'];

const novaTarefa = () => {
  tarefa.push(process.argv[2]);
  return tarefa;
};
console.log(novaTarefa());
