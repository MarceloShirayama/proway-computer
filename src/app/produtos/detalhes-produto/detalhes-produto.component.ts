import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICarrinho } from 'src/app/carrinho';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto } from 'src/app/produtos';

import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private readonly produtoService: ProdutosService,
    private readonly route: ActivatedRoute,
    private readonly notificacao: NotificacaoService,
    private readonly carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacao.notificar('O Produto foi adicionado ao carrinho!');
    const item: ICarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(item);
  }
}
