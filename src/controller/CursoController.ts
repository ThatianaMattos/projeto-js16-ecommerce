import { Curso } from "../model/Curso";
import { ICursoRepository } from "../repository/ICursoRepository";

export class CursoController implements ICursoRepository {
  private cursos: Array<Curso> = [];

  private proximoId: number = 1;

  listarTodos(): Curso[] {
    if (this.cursos.length === 0) {
      console.log("\nNenhum curso cadastrado.\n");
      return [];
    }

    console.log("\nLista de Cursos:\n");
    for (const curso of this.cursos) {
      curso.visualizar();
    }
    console.log("------------------------------------------");

    return this.cursos;
  }

  buscarPorId(id: number): Curso | null {
    const cursoEncontrado = this.cursos.find((curso) => curso.id === id);

    if (!cursoEncontrado) {
      console.log(`\nCurso com id ${id} não encontrado.\n`);
      return null;
    }

    console.log(`\nCurso encontrado (id ${id}):\n`);
    cursoEncontrado.visualizar();
    return cursoEncontrado;
  }

  cadastrar(curso: Curso): void {
    this.cursos.push(curso);
    console.log("\nCurso cadastrado com sucesso.\n");
  }

  atualizar(cursoAtualizado: Curso): void {
    const indice = this.cursos.findIndex(
      (curso) => curso.id === cursoAtualizado.id
    );

    if (indice === -1) {
      console.log(
        `\nNão foi possível atualizar. Curso com id ${cursoAtualizado.id} não encontrado.\n`
      );
      return;
    }

    this.cursos[indice] = cursoAtualizado;
    console.log(
      `\nCurso com id ${cursoAtualizado.id} atualizado com sucesso.\n`
    );
  }

  excluir(id: number): void {
    const indice = this.cursos.findIndex((curso) => curso.id === id);

    if (indice === -1) {
      console.log(
        `\nNão foi possível excluir. Curso com id ${id} não encontrado.\n`
      );
      return;
    }

    this.cursos.splice(indice, 1);
    console.log(`\nCurso com id ${id} excluído com sucesso.\n`);
  }
}
