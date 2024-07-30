import { MessageService } from 'primeng/api';

import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  loginCard = true;
  private destroy$ = new Subject<void>();


  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  signupForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onSubmitLoginForm(): void {
    if (this.loginForm.valid && this.loginForm.value) {
      try {
        this.userService.authUser(this.loginForm.value as AuthRequest)
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe({
          next:(Response) => {
            if(Response) {
              this.cookieService.set('USER_INFO', Response?.token);
              this.loginForm.reset();

              this.router.navigate(['/dashboard']);

              this.messageService.add({
                severity:'success',
                summary:'Sucesso',
                detail:`Bem vindo! ${Response.name}`,
                life: 2000
              });

            }
          }
          ,error:(error) => {
            this.messageService.add({
              severity:'erro',
              summary:'Erro',
              detail:'Erro ao fazer o login!' ,
              life: 2000
            });
            console.error('Erro ao fazer o login', error);
          }
        })
      } catch (error) {
        console.error('Ocorreu um erro inesperado', error);
      }
    } else {
      console.warn('Formulário inválido');
    }
  }
  onSubmitSignupForm(): void {
    if (this.signupForm.valid && this.signupForm.value) {
      try {
       this.userService.signupUser(this.signupForm.value as SignupUserRequest)
       .pipe(
        takeUntil(this.destroy$)
      )
       .subscribe({
       next:(Response) => {
         if(Response) {
          this.signupForm.reset();
          this.loginCard = true;
          this.messageService.add({
            severity:'success',
            summary:'Sucesso',
            detail:'Usuário criado com sucesso!',
            life: 2000
          });
         }
       }
       ,error:(error) => {
        this.messageService.add({
          severity:'erro',
          summary:'Erro',
          detail:"Erro ao criar o usuário!" ,
          life: 2000
        });
         console.error('Erro ao criar o usuário', error);
       }
       })

      } catch (error) {
        console.error('Ocorreu um erro inesperado', error);
      }
    } else {
      console.warn('Formulário inválido');
    }
  }

  // Operação assíncrona simulada
  private simulateAsyncOperation(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Resposta simulada');
        // Ou reject('Erro simulado');
      }, 1000);
    });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

}
