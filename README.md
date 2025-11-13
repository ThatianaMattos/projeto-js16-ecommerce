# Projeto Final JavaScript 16 - E commerce de Cursos

Sistema de console em TypeScript para gerenciar um pequeno e commerce de cursos.

O projeto foi desenvolvido seguindo as etapas do bloco:

- Menu
- Model e Repository
- Controller e Collections
- Features extras

---

## Funcionalidades

- Cadastrar curso
- Listar cursos
- Atualizar curso
- Excluir curso
- Buscar curso por nome
- Aplicar desconto em um curso pelo id
- Gerar relatório de cursos

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- readline-sync
- Paradigma de programação orientada a objetos
- Collections com array

---

## Como executar o projeto

1. Clonar o repositório:

```bash
git clone https://github.com/ThatianaMattos/projeto-js16-ecommerce.git
cd projeto-js16-ecommerce
Instalar as dependências:

npm install


Executar o menu principal:

npx ts-node src/Menu.ts

Estrutura principal do projeto
src/
  model/
    Curso.ts
    Produto.ts
    ProdutoDigital.ts

  repository/
    ICursoRepository.ts

  controller/
    CursoController.ts

  Menu.ts

Fluxo do sistema

O usuário executa o arquivo Menu.ts.

O menu exibe as opções disponíveis.

Cada opção chama um método da classe CursoController.

O controller gerencia a lista de cursos em memória, aplicando as operações de CRUD.

A interface ICursoRepository define o contrato das operações do repositório de cursos.

Funcionalidades extras implementadas

Buscar curso por parte do nome.

Aplicar desconto em um curso a partir do id.

Gerar relatório contendo:

Quantidade total de cursos.

Soma dos preços.

Média dos preços.

Autora

Projeto desenvolvido por Thatiana Mattos, Desenvolvedora Full-Stack em formação.

GitHub: ThatianaMattos

LinkedIn: Thatiana Mattos
