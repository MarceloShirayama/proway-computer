import { Component, OnInit } from '@angular/core';

import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(private readonly service: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.service.getAll();
  }
}
