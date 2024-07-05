import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/Dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../shadowuser/principal-page/principal-page.module').then(m => m.PrincipalPage)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
