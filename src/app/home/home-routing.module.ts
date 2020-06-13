import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';

const homeRoutes: Routes = [
    {
        path:'accueil',component:AccueilComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'signup',component:InscriptionComponent
    },
    {
        path:'forget-password',component:ForgetPasswordComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
  
@NgModule({
imports: [RouterModule.forChild(homeRoutes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
  