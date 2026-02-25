
# Aplicação de Tarefas Next.js 15

## Instalação

1. Instale as dependências:

```
npm install
```

2. Rode o servidor de desenvolvimento:

```
npm run dev
```

## Testes

Execute os testes unitários:

```
npm test
```

## Estrutura

- `app/page.tsx`: Server Component para listagem de tarefas
- `components/NovaTarefa.tsx`: Componente para adicionar tarefas
- `hooks/useContadorDeTarefas.ts`: Hook personalizado para contar tarefas
- `tests/`: Testes unitários com Jest e Testing Library

## Dicas
- Os dados são simulados em `app/tarefas.ts`
- Use o formulário para adicionar novas tarefas
- Os testes cobrem os principais fluxos da aplicação
