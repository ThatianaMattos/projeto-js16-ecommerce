import readlineSync from "readline-sync";
import { Curso } from "./src/model/Curso";
import { CursoController } from "./src/controller/CursoController";

// cria a instância global do controller
const cursos = new CursoController();

export function main(): void {
  let opcao: number;

  do {
    console.clear();
    console.log("==============================================");
    console.log("           E commerce de Cursos");
    console.log("==============================================");
    console.log("1  Cadastrar Curso");
    console.log("2  Listar Cursos");
    console.log("3  Atualizar Curso");
    console.log("4  Excluir Curso");
    console.log("5  Buscar curso por nome");
    console.log("6  Aplicar desconto em curso");
    console.log("7  Relatório de cursos");
    console.log("0  Sair\n");

    opcao = readlineSync.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
      case 1: {
        console.log("\nCadastro de Curso\n");

        const id = readlineSync.questionInt("Id do curso: ");
        const nome = readlineSync.question("Nome do curso: ");
        const categoria = readlineSync.question("Categoria: ");
        const preco = readlineSync.questionFloat("Preço: ");
        const nivel = readlineSync.question("Nível: ");

        const curso = new Curso(id, nome, categoria, preco, nivel);

        cursos.cadastrar(curso);

        keyPress();
        break;
      }

      case 2: {
        console.log("\nLista de Cursos\n");
        cursos.listarTodos();
        keyPress();
        break;
      }

      case 3: {
        console.log("\nAtualizar Curso\n");

        const id = readlineSync.questionInt(
          "Id do curso que deseja atualizar: "
        );
        const nome = readlineSync.question("Novo nome do curso: ");
        const categoria = readlineSync.question("Nova categoria: ");
        const preco = readlineSync.questionFloat("Novo preço: ");
        const nivel = readlineSync.question("Novo nível: ");

        const cursoAtualizado = new Curso(id, nome, categoria, preco, nivel);

        cursos.atualizar(cursoAtualizado);

        keyPress();
        break;
      }

      case 4: {
        console.log("\nExcluir Curso\n");
        const id = readlineSync.questionInt(
          "Id do curso que deseja excluir: "
        );

        cursos.excluir(id);

        keyPress();
        break;
      }

      case 5: {
        console.log("\nBuscar curso por nome\n");

        const nomeBusca = readlineSync.question(
          "Digite o nome ou parte do nome do curso: "
        );

        const encontrados = cursos.buscarPorNome(nomeBusca);

        if (encontrados.length === 0) {
          console.log("\nNenhum curso encontrado com esse nome.");
        } else {
          console.log("\nCursos encontrados:\n");
          for (const curso of encontrados) {
            curso.visualizar();
          }
        }

        keyPress();
        break;
      }

      case 6: {
        console.log("\nAplicar desconto em curso\n");
        const idDesconto = readlineSync.questionInt("Digite o id do curso: ");
        const percentual = readlineSync.questionFloat(
          "Digite o percentual de desconto: "
        );

        cursos.aplicarDesconto(idDesconto, percentual);

        keyPress();
        break;
      }

      case 7: {
        console.log("\nRelatório de cursos\n");
        cursos.relatorio();
        keyPress();
        break;
      }

      case 0:
        console.log("Saindo...");
        break;

      default:
        console.log("Opcao invalida");
        keyPress();
        break;
    }
  } while (opcao !== 0);
}

function keyPress(): void {
  console.log("\nPressione ENTER para continuar...");
  readlineSync.question();
}

main();
