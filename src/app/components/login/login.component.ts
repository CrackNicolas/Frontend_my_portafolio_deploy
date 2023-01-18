import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Usuario from 'src/app/schema/usuario';
import { LoadScriptsService } from '../../services/load-scripts.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected mensaje_error:any = undefined;
  protected selectedUsuario : Usuario = this.Limpiar();
  protected usuario_valido : boolean = false;

  constructor(private login_service : LoginService, private router:Router, private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
    load_script.load_files("movimiento");
  }

  ngOnInit(): void {}

  protected Autenticar() : void{
    this.login_service.Autenticar(this.selectedUsuario).subscribe(
      {
        next : (response : boolean) => {
          this.Validar_datos(response);
        },
        error:(error:HttpErrorResponse) => {
          console.log("Usuario invalido "+error.message)
        }
      }
    )
  }

  private Validar_datos(response:boolean){
    if(response){
      environment.sesion.edicion_permitida = true;
      environment.sesion.nombre_button = 'CERRAR SESION';
      environment.sesion.ruta_destino = '';
      this.router.navigate(['']);
    }else{
      this.mensaje_error = 'Usuario y/o contraseña incorrectos.';
      this.router.navigate(['login']);
    }
  }

  private Limpiar() : Usuario {
    return {
      id_usuario:1,
      nombre:"",
      password:""
    }
  } 
}