import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'mlogin', pathMatch: 'full'},
  {path: 'mlogin', loadChildren: './login/login.module#LoginModule'},
  {path: '**', redirectTo: ''} //otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
