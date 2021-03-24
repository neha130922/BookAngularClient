import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListBookComponent} from './list-book/list-book.component';
import{CreateBookComponent} from './create-book/create-book.component';


const routes: Routes = [
  { path: 'books', component: ListBookComponent },
  { path: 'addBook', component: CreateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
