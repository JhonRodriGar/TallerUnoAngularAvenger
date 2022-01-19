import {Injectable} from "@angular/core";

@Injectable()
export class inicioService {

  private personajes: Personaje[] = [
    {
      nombre: 'Anthony Edward Stark',
      img: 'assets/img/personajes/IronMan.webp',
      alias: 'Iron Man',
      especie: 'Human',
      nacionalidad: 'American',
      fecha_nacimiento: 'May 29, 1970',
      frase: 'My armor, it was never a distraction or a hobby, it was a cocoon. And now, Im a changed man. You can take away my house, all my tricks and toys. But one thing you can´t take away... I am Iron Man.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Steven Grant Rogers',
      img: 'assets/img/personajes/CapAmerica.webp',
      alias: 'Captain America',
      especie: 'Human',
      nacionalidad: 'American',
      fecha_nacimiento: 'July 4, 1918',
      frase: 'For as long as I can remember, I just wanted to do what was right. I guess Im not quite sure what that is anymore. And I thought I could throw myself back in and follow orders, serve. Its just not the same.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Thor Odinson',
      img: 'assets/img/personajes/Thor.webp',
      alias: 'Thor',
      especie: 'Asgardian',
      nacionalidad: 'Asgardian',
      fecha_nacimiento: '964 A.D.–965 A.D.',
      frase: 'It´s time for me to be who I am, rather than who Im supposed to be.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Bruce Banner',
      img: 'assets/img/personajes/Hulk.webp',
      alias: 'Hulk',
      especie: 'Human',
      nacionalidad: 'American Sakaaran',
      fecha_nacimiento: 'December 18, 1969',
      frase: 'For years, Ive been treating the Hulk like hes some kind of disease... something to get rid of. But then, I start looking at him as the cure. Eighteen months in a gamma lab, I put the brains and the brawn together. And now, look at me. Best of both worlds.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Scott Edward Harris Lang',
      img: 'assets/img/personajes/AntMan.webp',
      alias: 'Ant Man',
      especie: 'Human',
      nacionalidad: 'American',
      fecha_nacimiento: 'NA',
      frase: 'For years, Ive been treating the Hulk like hes some kind of disease... something to get rid ',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Peter Benjamin Parker',
      img: 'assets/img/personajes/SpiderMan.webp',
      alias: 'Spider Man',
      especie: 'Human',
      nacionalidad: 'American',
      fecha_nacimiento: 'August 10, 2001',
      frase: 'Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could\'ve killed you. At any given moment, but I didn\'t. Because my Aunt May taught me that everyone deserves a second chance.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Stephen Vincent Strange',
      img: 'assets/img/personajes/DoctorStrange.webp',
      alias: 'Doctor Strange',
      especie: 'Human',
      nacionalidad: 'American',
      fecha_nacimiento: 'NA',
      frase: 'What is your job exactly, besides making balloon animals?" "Protecting your reality, douchebag.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Carol Susan Jane Danvers',
      img: 'assets/img/personajes/CapMarvel.webp',
      alias: 'Captain Marvel',
      especie: 'Human/Kree Hybrid',
      nacionalidad: 'American Kree Imperial',
      fecha_nacimiento: 'Mid-1960s',
      frase: 'Im coming to end it. The war, the lies, all of it.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'TChalla',
      img: 'assets/img/personajes/BlackPanther.webp',
      alias: 'Black Panther',
      especie: 'Human',
      nacionalidad: 'Wakandan',
      fecha_nacimiento: 'NA',
      frase: 'My name is King TChalla, son of King TChaka. I am the sovereign ruler of the nation of Wakanda. And for the first time in our history, we will be sharing our knowledge and resources with the outside world.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Loki Laufeyson',
      img: 'assets/img/personajes/Loki.webp',
      alias: 'Loki',
      especie: 'Frost Giant',
      nacionalidad: 'Asgardian Jotun',
      fecha_nacimiento: '965 A.D.',
      frase: 'I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.',
      sumaLike : 0,
      sumaDisLike : 0
    },
    {
      nombre: 'Natalia Alianovna Romanoff',
      img: 'assets/img/personajes/BlackWidow.webp',
      alias: 'Black Widow',
      especie: 'Human',
      nacionalidad: 'Russian',
      fecha_nacimiento: 'December 3, 1984',
      frase: 'I used to have nothing. And then I got this. This job. This family. And I was better because of it. And even though theyre gone... Im still trying to be better.',
      sumaLike : 0,
      sumaDisLike : 0
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse.')
  }

  getPersonajes(): Personaje[] {
    return this.personajes;
  }

  getPersonaje(idx: number) {
    return this.personajes[idx];
  }

  buscarPersonaje(termino: string): Personaje[] {
    let personajesArr: Personaje[] = [];

    for (let personaje of this.personajes){
      Math.max(personaje.sumaLike);
      personajesArr.push( personaje );
    }
    return personajesArr;
  }

}

  export interface Personaje {
  nombre: string;
  img: string;
  alias: string;
  especie: string;
  nacionalidad : string;
  fecha_nacimiento : string;
  frase  : string;
  sumaLike: number;
  sumaDisLike: number;
}


  /*

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0){
        videojuegosArr.push( videojuego );
      }
    }
    return videojuegosArr;
  }
}

   */



