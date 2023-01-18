import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from '../../services/load-scripts.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("movimiento");
  }

  ngOnInit(): void {
  }

}
