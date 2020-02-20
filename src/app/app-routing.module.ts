import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { CreateCountryComponent } from './country/create-country/create-country.component';


const routes: Routes = [
  {path: 'list', component: ListCountryComponent},
  {path: 'create', component: CreateCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
