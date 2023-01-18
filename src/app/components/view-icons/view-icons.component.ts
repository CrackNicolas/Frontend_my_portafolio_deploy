import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-icons',
  templateUrl: './view-icons.component.html',
  styleUrls: ['./view-icons.component.css']
})
export class ViewIconsComponent implements OnInit {
  @Output('icono') icono = new EventEmitter<string>();
  @Input('modal_peticion') modal_peticion:any = "";

  constructor() { }

  ngOnInit(): void {}

  protected Enviar_icono(name_icon:string){
    this.icono.emit(name_icon);
  }
}