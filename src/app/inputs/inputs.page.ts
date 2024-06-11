import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor() { }
  public input: String=''
  public resultado:String = ''
  mostrarInput(){
    this.resultado = this.input
  }
  ngOnInit() {
  }

}
