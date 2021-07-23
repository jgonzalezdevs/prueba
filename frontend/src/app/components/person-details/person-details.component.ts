import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  currentPerson = null;
  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPerson(this.route.snapshot.paramMap.get('id'));
  }

  getPerson(id): void {
    this.personService.read(id)
      .subscribe(
        person => {
          this.currentPerson = person;
          console.log(person);
        },
        error => {
          console.log(error);
        }
      );
  }

  setAvailableStatus(status): void {
    const data = {
      name: this.currentPerson.name,
      last_name: this.currentPerson.last_name,
      paternal_last_name: this.currentPerson.paternal_last_name,
      maternal_last_name: this.currentPerson.maternal_last_name,
      age: this.currentPerson.age,
      rfc: this.currentPerson.rfc,
      date_of_birth: this.currentPerson.date_of_birth
    };

    this.personService.update(this.currentPerson.id, data)
      .subscribe(
        response => {
          this.currentPerson.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePerson(): void {
    this.personService.update(this.currentPerson.id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La persona fue actualizada';
        },
        error => {
          console.log(error);
        });
  }

  deletePerson(): void {
    this.personService.delete(this.currentPerson.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }

}
