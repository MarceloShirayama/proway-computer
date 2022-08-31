import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICarrinho } from '../carrinho';
import { CarrinhoService } from '../services/carrinho.service';
import { NotificacaoService } from '../services/notificacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itemsCarrinho: ICarrinho[] = [];

  constructor(
    private readonly carrinhoService: CarrinhoService,
    private readonly notificacaoService: NotificacaoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.itemsCarrinho = this.carrinhoService.obtemCarrinho();
  }

  removerItemDoCarrinho(produtoId: number) {
    this.itemsCarrinho = this.itemsCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerItemDoCarrinho(produtoId);
  }

  calculoTotalCarrinho() {
    return this.itemsCarrinho.reduce(
      (acc, value) => acc + value.preco * value.quantidade,
      0
    );
  }

  comprar() {
    this.itemsCarrinho = [];
    this.carrinhoService.limparCarrinho();
    this.notificacaoService.notificar('Compra efetuada com sucesso!');
    this.router.navigate(['produtos']);
  }
}
