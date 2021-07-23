import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: any;
  currentPerson = null;
  currentIndex = -1;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.readPersons();
  }

  readPersons(): void {
    this.personService.readAll()
      .subscribe(
        persons => {
          this.persons = persons;
          console.log(persons);
        },
        error => {
          console.log(error);
        }
      );
  }

  refresh(): void {
    this.readPersons();
    this.currentPerson = null;
    this.currentIndex = -1;
  }

  setCurrentPerson(person, index): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }

  deleteAllPersons(): void {
    this.personService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readPersons();
        },
        error => {
          console.log(error);
        }
      );
  }

}
