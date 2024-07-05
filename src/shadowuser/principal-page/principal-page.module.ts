import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent
  }
];

@NgModule({
  declarations: [PrincipalPageComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [PrincipalPageComponent]
})
export class PrincipalPage { }
