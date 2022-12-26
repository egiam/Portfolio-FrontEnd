import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  skill: Skill[] = [];
  
    constructor(private skillS: SkillService, private tokenService: TokenService) { }

    isLogged = false;
  
    ngOnInit(): void {
      this.cargarSkill();
  
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

    cargarSkill(): void {
      this.skillS.lista().subscribe(
        (data) => {
          this.skill = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }

    delete(id?: number) {
      if (id != undefined) {
        this.skillS.delete(id).subscribe(
          (data) => {
            this.cargarSkill();
          },
          (err) => {
            alert('No se pudo borrar la skill');
          }
        );
      }
    }

}
