import { Loja } from "./loja.model";

export interface Filial {
  id?: number | string;
  nome: string;
  lojas: Loja[];
}