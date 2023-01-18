import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-icon',
  templateUrl: './selected-icon.component.html',
  styleUrls: ['./selected-icon.component.css']
})
export class SelectedIconComponent implements OnInit {
  @Input('name_icon') name_icon:any;
  @Input('size_icon') size_icon:any;
   
  constructor() { }

  ngOnInit(): void {
  }

  protected Verify_icon(name_icon_selected:string, name_predeterminado:string) : boolean{
    return (name_icon_selected == name_predeterminado);
  }
}
