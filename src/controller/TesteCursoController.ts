import { Curso } from "../model/Curso";
import { CursoController } from "./CursoController";

const controller = new CursoController();

const curso1 = new Curso(
  1,
  "Lógica de Programação",
  "Programação",
  197.9,
  "Iniciante"
);

const curso2 = new Curso(
  2,
  "JavaScript Avançado",
  "Programação",
  299.9,
  "Intermediário"
);

// cadastrar
controller.cadastrar(curso1);
controller.cadastrar(curso2);

// listar todos
controller.listarTodos();

// buscar por id
const encontrado = controller.buscarPorId(2);
if (encontrado) {
  console.log("\nCurso encontrado pelo id 2:");
  encontrado.visualizar();
}

// atualizar
const cursoAtualizado = new Curso(
  2,
  "JavaScript Avançado",
  "Programação",
  259.9,
  "Intermediário"
);
controller.atualizar(cursoAtualizado);

console.log("\nLista após atualizar preço:");
controller.listarTodos();

// excluir
controller.excluir(1);

console.log("\nLista após excluir id 1:");
controller.listarTodos();
