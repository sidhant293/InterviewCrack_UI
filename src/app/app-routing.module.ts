import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:LoginComponent},
  {path:'reset-password',component:LoginComponent},
  {path: 'problemset', loadChildren: () => import('./problemset/problemset.module').then(m => m.ProblemsetModule) },
  {path:'',component:HomeComponent,pathMatch:'full'}
  // {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
