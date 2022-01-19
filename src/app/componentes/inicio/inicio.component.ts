import { Component, OnInit } from '@angular/core';
import {inicioService, Personaje} from "../../services/inicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  inicio: Personaje[] = [];

  contarlike(idx: number) {
    this.inicio[idx].sumaLike = this.inicio[idx].sumaLike+1;
  }

  contarDislike(idx: number) {
    this.inicio[idx].sumaDisLike = this.inicio[idx].sumaDisLike+1;
  }

  constructor( private _inicioService: inicioService,
               private router: Router) { }

  ngOnInit() {
    this.inicio = this._inicioService.getPersonajes();
  }
}
