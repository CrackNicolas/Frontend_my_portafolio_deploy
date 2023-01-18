import { RedSocialService } from './../../services/red-social.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import Red_social from '../../schema/red_social';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected redes_sociales : Red_social[] = [];
  protected mensaje : any = undefined;
  protected selectedRed_social : Red_social = this.Limpiar_red_social();

  protected modal_peticion = "add-red-social";

  constructor(private red_social_service : RedSocialService) { }

  ngOnInit(): void {
    this.Instanciar_redes_sociales();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedRed_social.nombre_logo = name_icon;
  }

  private Instanciar_redes_sociales() : void {
    this.red_social_service.Get_redes_sociales().subscribe(
      {
        next : (response : Red_social[]) => {
          this.redes_sociales = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Add_red_social() : void{
    this.red_social_service.Add_red_social(this.selectedRed_social);
    this.mensaje = 'Red social añadida';
    this.selectedRed_social = this.Limpiar_red_social();
    this.Instanciar_redes_sociales();
  }

  protected Delete_item_red_social(id_red_social:number) : void{
    this.red_social_service.Delete_red_social(id_red_social);
  }

  private Limpiar_red_social() : Red_social{
    return {
      id_red_social : 0,
      link : '',
      nombre : '',
      nombre_logo : ''
    }
  }

  protected Reiniciar() : void{
    this.Instanciar_redes_sociales();
    this.selectedRed_social = this.Limpiar_red_social();
    this.mensaje  = undefined;
  }
}