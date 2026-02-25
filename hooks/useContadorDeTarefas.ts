import { useMemo } from 'react';

interface Tarefa {
  id: number;
  texto: string;
}

export default function useContadorDeTarefas(tarefas: Tarefa[]) {
  return useMemo(() => tarefas.length, [tarefas]);
}
