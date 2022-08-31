import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificacaoService } from '../services/notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ['', [Validators.minLength(4), Validators.required]],
    assunto: ['', [Validators.minLength(10), Validators.required]],
    telefone: [
      '',
      [
        Validators.minLength(11),
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    email: ['', [Validators.email, Validators.required]],
    mensagem: [
      '',
      [
        Validators.minLength(20),
        Validators.maxLength(300),
        Validators.required,
      ],
    ],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly notificacaoService: NotificacaoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.notificacaoService.notificar('Formulário enviado com sucesso!');
    this.formContato.reset();
  }
}
