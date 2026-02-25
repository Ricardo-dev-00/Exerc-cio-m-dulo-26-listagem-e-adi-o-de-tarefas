
# Aplicação de Tarefas Next.js 15

## Descrição

Este projeto é um exercício do curso da EBAC, onde o objetivo é colocar em prática os conceitos aprendidos sobre testes unitários em Next.js 15. Nesta atividade, foi necessário implementar e testar funcionalidades reais com foco em componentes reutilizáveis, server components e hooks personalizados, usando o modelo do App Router.

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
