import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
  // {path:'login/registro/login',component:LoginComponent},
  // {path:'login/registro/login/registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
