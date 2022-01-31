import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-specific-problem',
  templateUrl: './specific-problem.component.html',
  styleUrls: ['./specific-problem.component.css']
})
export class SpecificProblemComponent implements OnInit {

  loading:boolean=true;

  constructor(private router:Router) {
  //   this.router.events.pipe(
  //     filter(e=> e instanceof RouterEvent)
  //  ).subscribe((e) =>{
  //    this.navigationInterceptor(e)
  //  });
   }

  ngOnInit(): void {
  }

  // navigationInterceptor(event:any){
  //   if(event instanceof NavigationStart){
  //     console.log("instanceof NavigationStart");
  //     this.loading=true;
  //   }

  //   if(event instanceof NavigationEnd){
  //     console.log("instanceof NavigationEnd");
  //     this.loading=false;
  //   }

  //   if(event instanceof NavigationCancel){
  //     console.log("instanceof NavigationCancel");
  //     this.loading=false;
  //   }

  //   if(event instanceof NavigationError){
  //     console.log("instanceof NavigationError");
  //     this.loading=false;
  //   }
  // }

}
