import { Component, OnInit } from '@angular/core';
import Persona from '../../schema/persona';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  protected mensaje : any = undefined;
  protected persona : Persona = this.Limpiar_datos_persona();
  protected selectedForm = this.Limpiar_form();
  
  constructor() { }

  ngOnInit(): void {
    this.Instanciar_datos_persona();
  }

  private Instanciar_datos_persona() : void {
    this.persona = {
      id_persona : 1,
      nombre : "Ricardo Nicolas Alejo",
      apellido : "Beltran",
      telefono : "386567XXXX",
      correo : "ricardonicolasxxxxxxx@gmail.com",
      link_perfil : "../../../assets/images/perfil.jpg",
      direccion : "Simoca - Tucumán (Argentina)",
      presentacion : "Hola mi nombre es Alejo y me apasiona crear aplicaciones ya sean para la web o aplicaciones deskatop. Mi interes en la programacion surgio cuando comence una carrera universitaria donde pude adentrarme a este mundo tan increible donde dejas que tu imaginacion te diga como programar.",
      regla : "Algunas de mis reglas al momento de realizar cualquier tipo de sistema es tener muy en cuenta el rendimiento la escalabilidad y la personalizacion entre otros parametros que influyen en la optencion de un sistema de calidad. La calidad esta en el detalle.",
      profesion : "Programador Web Full Stack"
    }
  }

  protected Enviar_mensaje() : void{
    this.mensaje = "Mensaje enviado con exito!!!";
    this.selectedForm = this.Limpiar_form();
  }

  private Limpiar_datos_persona() : Persona{
    return {
      id_persona: 0,
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      link_perfil: '',
      direccion: '',
      presentacion: '',
      regla: '',
      profesion: ''
    }
  }
  
  private Limpiar_form(){
    return {
      nombre:"",
      email:"",
      asunto:"",
      mensaje:""
    }
  }
}