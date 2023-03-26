import { DodashComponent } from './pages/admin/dodash/dodash.component';
import { FlimComponent } from './pages/admin/flim/flim.component';
import { UserComponent } from './pages/admin/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DatveComponent } from './pages/datve/datve.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from '../app/core/guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'datve/:iddatve', component: DatveComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'user', component: UserComponent },
      { path: 'flim', component: FlimComponent },
      { path: 'dodash', component: DodashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
