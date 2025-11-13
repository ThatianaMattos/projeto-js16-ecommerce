import { Produto } from "./Produto";

export class ProdutoDigital extends Produto {
  private categoria: string;
  private nivel: string;
  private estoque: number;
  private disponivel: boolean;

  constructor(
    id: number,
    nome: string,
    categoria: string,
    preco: number,
    nivel: string,
    estoque: number,
    disponivel: boolean
  ) {
    // aqui vão somente os 3 que a classe Produto espera
    super(id, nome, preco);

    // estes são da filha
    this.categoria = categoria;
    this.nivel = nivel;
    this.estoque = estoque;
    this.disponivel = disponivel;
  }

  public visualizar(): void {
    console.log("Dados do Curso");
    console.log(`Id: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`Preço: ${this.preco}`);
    console.log(`Nível: ${this.nivel}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
  }
}
