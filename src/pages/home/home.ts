import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private person: FormGroup;
  private apagar: FormGroup;
  private list = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, public formBuilder: FormBuilder) {

    this.person = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required]
    });
    this.apagar = this.formBuilder.group({
      id: ['', Validators.required]
});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
}

logApagar(person) {
  console.log("ID PERSON: " + person.id)
  this.list.forEach(element => {
    if (element.id == person.id) {
      console.log("O elemento " + element.nome + " precisa ser excluído!");
      this.list.splice(this.list.indexOf(person), 1);
      console.log(this.list);
    }
  });
}

logForm(form) {
  console.log("FORM RECEBIDO:   " + form.value.nome);

  this.person.value.nome = form.value.nome;
  this.person.value.id = 1;
  if (this.list.indexOf(this.person.value) >= 0) {
    console.log("Objeto já existe na lista");
    const alerta = this.alertController.create({
      title: 'Nome já existe!',
      subTitle: "O nome "+ this.person.value.nome+" já foi cadastrado...",
      buttons: ['Ok']

    });
    alerta.present();
  } else {
    console.log("Objeto não existe na lista");
    console.log(this.person.value);
    this.list.push(this.person.value);
    console.log(this.list);
  }

}

}
