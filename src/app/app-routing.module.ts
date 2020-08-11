import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }   from './landing/landing.component';
import { EmplistComponent }      from './emplist/emplist.component';
import { EmpdetailComponent }  from './empdetail/empdetail.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LandingComponent },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  { path: 'detail/:id', component: EmpdetailComponent },
  { path: 'emps', component: EmplistComponent },
  { path: 'first', component: FirstComponent },
  {path: 'newreg', component:RegistrationComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
