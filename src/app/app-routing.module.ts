import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserhomeComponent } from './user/userhome/userhome.component';

const routes: Routes = [{path:'Registration',component:RegistrationComponent},
{path:'Login',component:LoginComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'userhome',component:UserhomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
