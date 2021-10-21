import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { TitulosComponent } from './Page/titulos/titulos.component';
import { AboutComponent } from './Page/about/about.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'titulos',component:TitulosComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
