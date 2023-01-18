import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { LoadScriptsService } from '../../services/load-scripts.service'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  protected ruta_destino = environment.sesion.ruta_destino;
  protected nombre_button = environment.sesion.nombre_button;

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("nav");
  }

  ngOnInit(): void {
  }

}
