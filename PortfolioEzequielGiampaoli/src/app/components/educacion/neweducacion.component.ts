import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css'],
})
export class NeweducacionComponent {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('Se creo con exito la educacion');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al crear educacion');
        this.router.navigate(['']);
      }
    );
  }
}
