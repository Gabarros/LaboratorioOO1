import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public numero1: number;
  public numero2: number;
  public operacao: string;
  public resultado: number;
  private calc: FormGroup;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.calc = this.formBuilder.group({
      numero1: ['', Validators.required],
      numero2: ['', Validators.required],
      operacao: ['', Validators.required],
      resultado: ['']
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
}

  logForm(form){
    this.numero1 = parseFloat(form.value.numero1);
    this.numero2 = parseFloat(form.value.numero2);
    this.operacao = form.value.operacao;
  }

  public calcular(){

    switch (this.operacao){
      case "+":
      this.resultado = this.numero1 + this.numero2;
      break;

      case "-":
      this.resultado = this.numero1 - this.numero2;
      break;

      case "*":
      this.resultado = this.numero1 * this.numero2;
      break;

      case "/":
        if(this.numero2 == 0.0){
          console.log("Valor inválido para divisão");
        } else{
          this.resultado = this.numero1 / this.numero2;
        }
break;

    }

    return this.resultado;




  }

}
