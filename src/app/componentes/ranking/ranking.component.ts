import {Component} from '@angular/core';
import {inicioService, Personaje} from "../../services/inicio.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  personas:Personaje []=[];
  rankingPersonaje:Personaje []=[];

  constructor(private _inicioService:inicioService) {}

  ngOnInit(): void {
    this.personas=this._inicioService.getPersonajes();
    this.rankingLikes();
  }

  private rankingLikes(){
    let maxLike:number= 0;
    let maxDislikes:number=0;
    let idMaxLike:number=0;
    let idMaxDislike:number=0;
    let hayVotos:number=0;

    //Identifica cuál es le personaje con más me gusta
    for(let i=0; i<this.personas.length;i++){
      if (this.personas[i].sumaLike>maxLike){
        maxLike=this.personas[i].sumaLike;
      }
    }

    //Identifica cuál es le personaje con más no me gusta
    for(let i=0; i<this.personas.length;i++){
      if (this.personas[i].sumaDisLike>maxDislikes){
        maxDislikes=this.personas[i].sumaDisLike;
      }
    }

    for (let id = 0; id < this.personas.length; id++) {
      if (this.personas[id].sumaLike==maxLike) {
        idMaxLike= id;
      }
      if (this.personas[id].sumaDisLike==maxDislikes) {
        idMaxDislike= id;
      }
    }

    this.rankingPersonaje.push(this.personas[idMaxLike]);
    this.rankingPersonaje.push(this.personas[idMaxDislike]);
  }
}
