import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './Page/titulos/titulos.component';
import { HomeComponent } from './Page/home/home.component';
import { AboutComponent } from './Page/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
