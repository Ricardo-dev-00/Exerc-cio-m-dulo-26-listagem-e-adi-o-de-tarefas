// Simulação de tarefas como se fosse uma API
export const tarefasSimuladas = [
  { id: 1, texto: 'Estudar Next.js' },
  { id: 2, texto: 'Implementar testes unitários' },
  { id: 3, texto: 'Criar hook personalizado' }
];

export function fetchTarefas() {
  return Promise.resolve(tarefasSimuladas);
}
