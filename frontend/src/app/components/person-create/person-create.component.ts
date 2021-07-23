import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  person = {
    name: '',
    last_name: '',
    paternal_last_name: '',
    maternal_last_name: '',
    age: '',
    rfc: '',
    date_of_birth: ''
  }

  submitted = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  createPerson(): void {
    const data = {
      name: this.person.name,
      last_name: this.person.last_name,
      maternal_last_name: this.person.maternal_last_name,
      paternal_last_name: this.person.paternal_last_name,
      age: this.person.age,
      rfc: this.person.rfc,
      date_of_birth: this.person.date_of_birth
    };

    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }
  
  newPerson(): void {
    this.submitted = false;
    this.person = {
      name: '',
      last_name: '',
      paternal_last_name: '',
      maternal_last_name: '',
      age: '',
      rfc: '',
      date_of_birth: ''
    }
  }

}
