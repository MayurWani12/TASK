import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"" , component:LoginComponent},
    {path:"login" , component:LoginComponent},

    {path:"signup" , component:SignupComponent},
    {
        path:"home",component:HomeComponent
    }
];