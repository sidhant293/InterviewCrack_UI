(self.webpackChunkinterview_crack=self.webpackChunkinterview_crack||[]).push([[708],{9708:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ProblemsetModule:()=>f});var n=r(1116),c=r(3319);function o(t,e,r,n,c,o,i){try{var s=t[o](i),a=s.value}catch(u){return void r(u)}s.done?e(a):Promise.resolve(a).then(n,c)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,c){var i=t.apply(e,r);function s(t){o(i,n,c,s,a,"next",t)}function a(t){o(i,n,c,s,a,"throw",t)}s(void 0)})}}var s=r(4856),a=r(8619);let u=(()=>{class t{constructor(t){this.router=t}canActivate(){var t=this;return i(function*(){return t.canVisitWebPage()})()}canLoad(){var t=this;return i(function*(){return t.canVisitWebPage()})()}canVisitWebPage(){var t=this;return i(function*(){let e;try{return e=yield s.g.currentAuthenticatedUser(),console.log("currentUser",e),!0}catch(r){return console.log("current user not found",r),t.router.navigate(["/login"]),!1}})()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(c.F0))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const l=[{path:"all",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-problemset"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"problemset works!"),a.qZA())},styles:[""]}),t})()},{path:":problemId",component:(()=>{class t{constructor(t){this.router=t,this.loading=!0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-specific-problem"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"specific-problem works!"),a.qZA())},styles:[""]}),t})(),canActivate:[u]},{path:"",redirectTo:"all",pathMatch:"full"}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,p]]}),t})()}}]);