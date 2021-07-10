import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeHomeComponent } from './employe-home/employe-home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: EmployeHomeComponent }
]

@NgModule({
  declarations: [
    EmployeHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeDashboardModule {
  constructor() {
    console.log("EmployeeDashboardModule - loaded");
  }
}
