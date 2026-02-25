import { fetchTarefas } from './tarefas';
import NovaTarefa from '../components/NovaTarefa';
import { Suspense } from 'react';

export default async function Page() {
  const tarefas = await fetchTarefas();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-start py-6 sm:py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-4 sm:p-8 mx-2">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#4F4F4F] text-center">Lista de Tarefas</h1>
        <div className="mb-2 sm:mb-4 text-center text-xs sm:text-sm text-[#4F4F4F] bg-yellow-100 border border-yellow-300 rounded-lg py-1 sm:py-2 px-2 sm:px-4">
          <strong>Origem dos dados:</strong> tarefas simuladas do arquivo <span className="font-mono bg-yellow-200 px-1 rounded text-[#4F4F4F]">app/tarefas.ts</span>
        </div>
        <ul className="mb-6 sm:mb-8">
          {tarefas.map(tarefa => (
            <li key={tarefa.id} className="bg-white border border-black rounded-lg px-2 sm:px-4 py-2 mb-2 text-black font-bold shadow-sm">
              {tarefa.texto}
            </li>
          ))}
        </ul>
        <div className="bg-gray-100 rounded-lg p-2 sm:p-4 shadow-md">
          <Suspense fallback={<div>Carregando...</div>}>
            <NovaTarefa tarefasIniciais={tarefas} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
