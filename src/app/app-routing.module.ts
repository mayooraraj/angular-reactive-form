import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttprequestComponent } from './httprequest/httprequest.component';

const routes: Routes = [
  {path:'httprequest',component:HttprequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
 }
