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

  buscarPorNome(nome: string): Curso[] {
    return this.cursos.filter((curso) =>
      curso.nome.toLowerCase().includes(nome.toLowerCase())
    );
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

  aplicarDesconto(id: number, percentual: number): void {
    const curso = this.buscarPorId(id);

    if (!curso) {
      console.log("Curso não encontrado.");
      return;
    }

    if (percentual <= 0 || percentual >= 100) {
      console.log("Percentual de desconto inválido.");
      return;
    }

    const valorDesconto = (curso.preco * percentual) / 100;
    curso.preco = curso.preco - valorDesconto;

    console.log(`Desconto de ${percentual}% aplicado com sucesso.`);
    curso.visualizar();
  }

  relatorio(): void {
    console.log("\nRelatório de cursos\n");

    console.log(`Quantidade de cursos: ${this.cursos.length}`);

    if (this.cursos.length === 0) {
      return;
    }

    const somaPrecos = this.cursos.reduce(
      (total, curso) => total + curso.preco,
      0
    );

    console.log(`Soma dos preços: R$ ${somaPrecos.toFixed(2)}`);
    console.log(
      `Preço médio: R$ ${(somaPrecos / this.cursos.length).toFixed(2)}`
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
