import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ReusableHeadlinesComponent } from './components/reusable-headlines/reusable-headlines.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';

const routes: Routes = [
  {path:'',component: ReusableHeadlinesComponent},  //home
  {path:'home',component: ReusableHeadlinesComponent},
  {path:'business',component: ReusableHeadlinesComponent},
  {path:'entertainment',component: ReusableHeadlinesComponent},
  {path:'health',component: ReusableHeadlinesComponent},
  {path:'science',component: ReusableHeadlinesComponent},
  {path:'sports',component: ReusableHeadlinesComponent},
  {path:'technology',component: ReusableHeadlinesComponent},
  {path:'**',component: NavigationMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
