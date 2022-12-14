import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateComponent } from './pages/create/create.component';
import { InfoComponent } from './pages/info/info.component';
import { FormsModule } from '@angular/forms';
import { SoletrandoPipe } from './pipes/soletrando.pipe';
import { HomeComponent } from './pages/home/home.component';
import { Slide8Component } from './components/slide8/slide8.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateComponent,
    InfoComponent,
    SoletrandoPipe,
    HomeComponent,
    Slide8Component,
    ExerciciosComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
