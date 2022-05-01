import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RoutingComponent } from './components/routing/routing.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {path: '', component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
