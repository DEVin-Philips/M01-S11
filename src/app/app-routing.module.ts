import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgcontentComponent } from './pages/ngcontent/ngcontent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'info-pipe', component: InfoComponent },
  { path: 'info-ngfor', component: NgForComponent },
  { path: 'info-ngswitch', component: NgSwitchComponent },
  { path: 'info-ngcontent', component: NgcontentComponent },
  { path: 'exercicios', component: ExerciciosComponent },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
