export class Curso {
  constructor(
    public id: number,
    public nome: string,
    public categoria: string,
    public preco: number,
    public nivel: string
  ) {}

  visualizar(): void {
    console.log("\nDados do Curso");
    console.log(`Id: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`Preço: ${this.preco}`);
    console.log(`Nível: ${this.nivel}`);
  }
}
