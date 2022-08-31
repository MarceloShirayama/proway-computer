import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduto } from '../produtos';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private readonly service: ProdutosService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtos = this.service.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(descricao)
        );
      } else {
        this.produtos = produtos;
      }
    });
  }
}
