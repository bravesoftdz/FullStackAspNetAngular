import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      Tema: 'Angular',
      Local: 'Jundiaí'
    },
    {
      EventoId: 2,
      Tema: '.Net Core 2.2',
      Local: 'Jundiaí'
    },
    {
      EventoId: 3,
      Tema: 'React Native',
      Local: 'Jundiaí'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
