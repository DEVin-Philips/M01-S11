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
import { Slide11Component } from './components/slide11/slide11.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { Slide13Component } from './components/slide13/slide13.component';
import { CardComponent } from './components/card/card.component';
import { Slide06Component } from './components/slide06/slide06.component';
import { Slide09Component } from './components/slide09/slide09.component';
import { NgcontentComponent } from './pages/ngcontent/ngcontent.component';
import { RouterModule } from '@angular/router';

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
    NgForComponent,
    Slide11Component,
    CpfPipe,
    NgSwitchComponent,
    Slide13Component,
    CardComponent,
    Slide06Component,
    Slide09Component,
    NgcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
