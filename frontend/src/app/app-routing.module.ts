import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'persons', component: PersonListComponent },
  { path: 'persons/:id', component: PersonDetailsComponent },
  { path: 'create', component: PersonCreateComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
