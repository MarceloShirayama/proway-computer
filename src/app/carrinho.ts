import { IProduto } from './produtos';

export interface ICarrinho extends IProduto {
  quantidade: number;
}
