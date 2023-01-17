import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewusersComponent } from './user/viewusers/viewusers.component';

const routes: Routes = [{path:'Registration',component:RegistrationComponent},
{path:'Login',component:LoginComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'userhome',component:UserhomeComponent},
{path:'uploadVideo',component:UploadVideoComponent},
{path:'ContactUs',component:ContactUsComponent},
{path:'Complaint',component:ComplaintComponent},
{path:'viewusers',component:ViewusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
