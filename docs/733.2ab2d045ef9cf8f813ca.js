(self.webpackChunkinterview_crack=self.webpackChunkinterview_crack||[]).push([[733],{733:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ProblemsetModule:()=>p});var n=r(1116),c=r(3319),o=r(6304),s=r(4280),a=r(8619);let i=(()=>{class t{constructor(t){this.router=t}canActivate(){var t=this;return(0,o.Z)(function*(){return t.canVisitWebPage()})()}canLoad(){var t=this;return(0,o.Z)(function*(){return t.canVisitWebPage()})()}canVisitWebPage(){var t=this;return(0,o.Z)(function*(){let e;try{return e=yield s.g.currentAuthenticatedUser(),console.log("currentUser",e),!0}catch(r){return console.log("current user not found",r),t.router.navigate(["/login"]),!1}})()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(c.F0))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const u=[{path:"all",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-problemset"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"problemset works!"),a.qZA())},styles:[""]}),t})()},{path:":problemId",component:(()=>{class t{constructor(t){this.router=t,this.loading=!0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-specific-problem"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"specific-problem works!"),a.qZA())},styles:[""]}),t})(),canActivate:[i]},{path:"",redirectTo:"all",pathMatch:"full"}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,l]]}),t})()}}]);