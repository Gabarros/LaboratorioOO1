import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public pessoa = {
    nome:'',
    matricula:'',
    imagem:''

  }

  constructor(public navCtrl: NavController) {

    this.pessoa.nome = "Gabriel de Almeida Barros";
    this.pessoa.matricula = "201711";
    this.pessoa.imagem = "/assets/imgs/gabriel.jpeg"

  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ContactPage');
  }

}
