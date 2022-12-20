import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent {
  persona: Persona = new Persona('', '', '');

  constructor(public personaService: PersonaService) {
    // El susbscribe es para que se ejecute la llamada al servicio, cuendo detecta que se hizo un cambio en el observer, el mismo provoca un cambio, en este caso se guarda
    this.personaService.getPersona().subscribe((persona) => {
      this.persona = persona;
    });
  }
}
