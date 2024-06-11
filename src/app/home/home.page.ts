import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private navegacao:NavController) {}
  public saudacao: String = 'oi tudo bem ?'
  public titulo: String = 'este é meu titulo'
  public linkImg: String = 'https://docs-demo.ionic.io/assets/madison.jpg'
  public imgLocal: String = '../assets/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo.jpg'
  public clicou(){
    this.saudacao = "acabei de clicar para fazer um input"
  }
  public clicouBotao(){
    this.titulo = 'Clicou no botão'
  }
  public botao(){
    this.navegacao.navigateForward('botao')
  }
  public listas(){
    this.navegacao.navigateForward('listas')
  }
  public input(){
    this.navegacao.navigateForward('inputs')
  }
  ngOnInit(): void {
    
  }

}
