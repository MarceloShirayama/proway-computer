import { Injectable } from '@angular/core';
import { ICarrinho } from './carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: ICarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho') || '');
  }

  adicionarAoCarrinho(produto: ICarrinho) {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
