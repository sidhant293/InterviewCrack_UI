import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProblemsetComponent } from './allProblems/problemset.component';
import { SpecificProblemComponent } from './specific-problem/specific-problem.component';

const routes: Routes = [
  {path:'all',component: ProblemsetComponent},
  {path:':problemId',component:SpecificProblemComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo:'all',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsetRoutingModule { }
