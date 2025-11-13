// src/repository/ICursoRepository.ts

import { Curso } from "../model/Curso";

export interface ICursoRepository {
  listarTodos(): Curso[];
  buscarPorId(id: number): Curso | null;
  cadastrar(curso: Curso): void;
  atualizar(curso: Curso): void;
  excluir(id: number): void;
}

