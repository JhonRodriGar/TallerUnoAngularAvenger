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
    let maxLike:number=this.personas[0].sumaLike;
    let maxDislikes:number=this.personas[0].sumaDisLike;

    let idMaxLike:number=0;
    let idMaxDislike:number=0;

    for(let i=0; i<this.personas.length;i++){
      if (this.personas[i].sumaLike>maxLike){
        maxLike=this.personas[i].sumaLike;
      }
    }

    for(let i=0; i<this.personas.length;i++){
      if (this.personas[i].sumaDisLike>maxDislikes){
        maxDislikes=this.personas[i].sumaDisLike;
      }
    }

    for (let index = 0; index < this.personas.length; index++) {
      if (this.personas[index].sumaLike==maxLike) {
        idMaxLike= index;
      }
      if (this.personas[index].sumaDisLike==maxDislikes) {
        idMaxDislike= index;
      }
    }

    this.rankingPersonaje.push(this.personas[idMaxLike]);
    this.rankingPersonaje.push(this.personas[idMaxDislike]);

  }

}
