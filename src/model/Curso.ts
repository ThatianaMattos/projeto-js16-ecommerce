// src/model/Curso.ts

import { Produto } from "./Produto";

export class Curso {
  constructor(
    private id: number,
    private nome: string,
    private categoria: string,
    private preco: number,
    private nivel: string
  ) {}

  public visualizar(): void {
    console.log("\nDados do Curso");
    console.log("Id:", this.id);
    console.log("Nome:", this.nome);
    console.log("Categoria:", this.categoria);
    console.log("Preço:", this.preco);
    console.log("Nível:", this.nivel);
  }
}
