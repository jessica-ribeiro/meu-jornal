import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: string[] = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3",
    "Noticia 4"];

  mostrarNoticia: boolean = true;
   
  titutlo: string = 'Curso Angular';
  texto: string = "Utilizando String Interpolation";

  caminho_imagem: string ='../../assets/panda.jpg';

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia() {
    this.mostrarNoticia = false;
  }
  public voltarNoticia() {
    this.mostrarNoticia = true;
  }


}
