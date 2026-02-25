import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '../components/NovaTarefa';

const tarefasIniciais = [
  { id: 1, texto: 'Estudar Next.js' },
  { id: 2, texto: 'Implementar testes unitários' }
];

describe('<NovaTarefa />', () => {
  it('renderiza input, botão e lista', () => {
    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);
    expect(screen.getByPlaceholderText('Nova tarefa')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar/i })).toBeInTheDocument();
    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument();
    expect(screen.getByText('Implementar testes unitários')).toBeInTheDocument();
  });

  it('desabilita botão se input vazio', () => {
    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('adiciona nova tarefa ao submeter', () => {
    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);
    const input = screen.getByPlaceholderText('Nova tarefa');
    fireEvent.change(input, { target: { value: 'Nova tarefa teste' } });
    expect(screen.getByRole('button')).toBeEnabled();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Nova tarefa teste')).toBeInTheDocument();
  });
});
