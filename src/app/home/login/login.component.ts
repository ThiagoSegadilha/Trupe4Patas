import {Component, OnInit} from '@angular/core';
import {AutenticacaoService} from "../../autenticacao/autenticacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;
  senha!: string;

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => this.router.navigateByUrl('animais'),
      error: (err) => {
        alert('Usuário ou senha inválido');
        console.log(err);
      }
    })
  }
}

