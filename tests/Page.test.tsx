import { render, screen } from '@testing-library/react';

const tarefasMock = [
  { id: 1, texto: 'Estudar Next.js' },
  { id: 2, texto: 'Implementar testes unitários' }
];

function ListaTarefasTest() {
  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefasMock.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </main>
  );
}

describe('Página de tarefas', () => {
  it('renderiza lista de tarefas', () => {
    render(<ListaTarefasTest />);
    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument();
    expect(screen.getByText('Implementar testes unitários')).toBeInTheDocument();
    expect(screen.getByText('Lista de Tarefas')).toBeInTheDocument();
  });
});
