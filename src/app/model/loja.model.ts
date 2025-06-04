export interface Loja {
  id?: number | string;  // se quiser incluir id, pode ser number ou string
  nome: string;
  consistencia: boolean;  // agora booleano
  encerramento: boolean;  // agora booleano
}