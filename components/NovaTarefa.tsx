"use client";
import { useState, useEffect } from 'react';
import useContadorDeTarefas from '../hooks/useContadorDeTarefas';

interface Tarefa {
  id: number;
  texto: string;
}

interface NovaTarefaProps {
  tarefasIniciais: Tarefa[];
}

const STORAGE_KEY = 'tarefas-adicionadas';

export default function NovaTarefa({ tarefasIniciais }: NovaTarefaProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [texto, setTexto] = useState('');
  const contador = useContadorDeTarefas(tarefas);

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const salvas = localStorage.getItem(STORAGE_KEY);
    if (salvas) {
      const adicionadas = JSON.parse(salvas);
      // Mesclar simuladas e adicionadas, evitando duplicidade
      const idsSimuladas = tarefasIniciais.map(t => t.id);
      const filtradas = adicionadas.filter(t => !idsSimuladas.includes(t.id));
      setTarefas([...tarefasIniciais, ...filtradas]);
    } else {
      setTarefas(tarefasIniciais);
    }
  }, [tarefasIniciais]);

  // Salvar tarefas no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!texto.trim()) return;
    setTarefas([...tarefas, { id: Date.now(), texto }]);
    setTexto('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4 items-stretch">
        
        <input
          id="descricao-tarefa"
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Digite a descrição"
          className="border border-[#4F4F4F] text-[#4F4F4F] bg-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4F4F4F] font-medium shadow-sm w-full"
        />
        <button type="submit" className="bg-[#4F4F4F] text-white px-4 py-2 rounded font-semibold shadow-sm w-full sm:w-auto" disabled={!texto.trim()}>
          Adicionar
        </button>
      </form>
      <div className="text-sm text-zinc-600 mb-2">Total de tarefas: {contador}</div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id} className="bg-white border border-black rounded-lg px-4 py-2 mb-2 text-black font-bold shadow-sm flex items-center justify-between">
            <span>{tarefa.texto}</span>
            <button
              onClick={() => setTarefas(tarefas.filter(t => t.id !== tarefa.id))}
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-semibold shadow-sm"
              aria-label={`Remover tarefa: ${tarefa.texto}`}
            >Remover</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
