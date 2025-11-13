// src/model/Produto.ts

export abstract class Produto {
  protected id: number;
  protected nome: string;
  protected preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  public get Id(): number {
    return this.id;
  }

  public set Id(id: number) {
    this.id = id;
  }

  public get Nome(): string {
    return this.nome;
  }

  public set Nome(nome: string) {
    this.nome = nome;
  }

  public get Preco(): number {
    return this.preco;
  }

  public set Preco(preco: number) {
    this.preco = preco;
  }

  public abstract visualizar(): void;
}
