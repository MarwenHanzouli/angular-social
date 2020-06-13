import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

const homeRoutes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'signup',component:InscriptionComponent
    }
];
  
@NgModule({
imports: [RouterModule.forChild(homeRoutes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
  