import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsetRoutingModule } from './problemset-routing.module';
import { ProblemsetComponent } from './allProblems/problemset.component';
import { SpecificProblemComponent } from './specific-problem/specific-problem.component';


@NgModule({
  declarations: [
    ProblemsetComponent,
    SpecificProblemComponent
  ],
  imports: [
    CommonModule,
    ProblemsetRoutingModule
  ]
})
export class ProblemsetModule { }
