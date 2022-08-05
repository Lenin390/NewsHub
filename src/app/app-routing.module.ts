import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';

const routes: Routes = [
  {path:'',component: TopHeadlinesComponent},  //home
  {path:'business',component: BusinessComponent},
  {path:'entertainment',component: EntertainmentComponent},
  {path:'health',component: HealthComponent},
  {path:'science',component: ScienceComponent},
  {path:'sports',component: SportsComponent},
  {path:'technology',component: TechnologyComponent},
  // {path:'business',component: TopHeadlinesComponent},
  {path:'**',component: NavigationMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
