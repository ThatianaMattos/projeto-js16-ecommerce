import readlineSync from "readline-sync";

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
    console.log("0  Sair\n");

    opcao = readlineSync.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
      case 1:
        console.log("Opcao cadastrar curso");
        break;
      case 2:
        console.log("Opcao listar cursos");
        break;
      case 3:
        console.log("Opcao atualizar curso");
        break;
      case 4:
        console.log("Opcao excluir curso");
        break;
      case 0:
        console.log("Saindo...");
        break;
      default:
        console.log("Opcao invalida");
        break;
    }

    readlineSync.question("\nPressione Enter para continuar...");

  } while (opcao !== 0);
}

main();
