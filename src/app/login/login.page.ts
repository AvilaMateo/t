import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { resposeI } from './response.interface'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //lo primero es crear tu variable de tipo FormGroup
  loginForm: FormGroup;
  errormsg: any = '';
  //segundo creas un variable de tipo formbuilder en el contructor, la cual te permite crear los campos del formularios
  constructor(private fb: FormBuilder, private apiLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.definirFormulario();
  }

  // tercero crear el método para definir los campos de tu formulario, en este caso solo son 2, en esta parte puedes agregar validaciones,
  //así como tienes ahí con el  validators, hay varias que trae la propiedad validator, en internet estaán todas, en tu caso, le estás diciendo
  // que esos campos ambos son obligatorios
  definirFormulario() {
    this.loginForm = this.fb.group({
      email: ["eve.holt@reqres.in", Validators.required],
      password: ["cityslicka", Validators.required],
    });
  }

  //por ultimo creas los metodos get asi como en java, para no acceder directamente al atributo sino que sea por medio de un método get
  get user() {
    return this.loginForm.controls.usuario;
  }
  get pass() {
    return this.loginForm.controls.password;
  }

  //esta es la función que ejecuta el submit de tu formularios, aquí tu capturas los datos que te vienen el formulario, y tu decides como organizarlos par mandarlos
  login() {
    if (this.loginForm.invalid) {
      alert("aquí metes algun mesnaje de error acorde a la situación");
      return;
    } else {
      //en caso de que todo esté bien, aquí capturas los datos del formulario
      //esto te arrojará un json, recuerda que esto captura datos en timpo real lo que escriban allá, de unas se reflej acá y biceversa
      // console.log(this.loginForm.value);
      this.apiLogin.onLogin(this.loginForm.value).subscribe(
        (data) => {
          const { token } = data;
          localStorage.setItem('token', token);
          this.router.navigateByUrl('home');
        },
        (err) => {
          const { error } = err;
          this.errormsg = error.error;
        }
      )
    }
  }
}