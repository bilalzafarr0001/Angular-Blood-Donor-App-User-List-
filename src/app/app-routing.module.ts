import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'register', component: RegisterComponentComponent },

  //{ path: '**', component: LoginComponent } // If no matching route found, go back to home route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
