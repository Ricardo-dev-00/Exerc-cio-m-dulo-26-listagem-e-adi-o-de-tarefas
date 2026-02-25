import { renderHook } from '@testing-library/react';
import useContadorDeTarefas from '../hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
  it('retorna a quantidade correta de tarefas', () => {
    const tarefas = [
      { id: 1, texto: 'A' },
      { id: 2, texto: 'B' }
    ];
    const { result, rerender } = renderHook(({ tarefas }) => useContadorDeTarefas(tarefas), {
      initialProps: { tarefas }
    });
    expect(result.current).toBe(2);
    rerender({ tarefas: [...tarefas, { id: 3, texto: 'C' }] });
    expect(result.current).toBe(3);
  });
});
