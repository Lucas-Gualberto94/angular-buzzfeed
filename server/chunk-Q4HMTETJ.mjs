import './polyfills.server.mjs';
import{A as v,B as P,C as k,F,J as Q,M as E,a as p,b as y,c as b,d as l,e as m,f as q,g as s,h as r,i as d,j as S,k as I,l as f,m as c,n as h,o as w,p as u,w as M,y as A,z as O}from"./chunk-O6II2GZX.mjs";import{h as z}from"./chunk-KRLCULJA.mjs";var x={title:"Voc\xEA seria um heroi ou vil\xE3o ?",questions:[{id:1,question:"Qual super poder voc\xEA escolheria ?",options:[{id:1,name:"Raios-Lasers",alias:"A"},{id:2,name:"Voar",alias:"B"},{id:3,name:"Explodir coisas",alias:"A"},{id:4,name:"Curar feridas",alias:"B"},{id:5,name:"Soltar fogo pelas m\xE3os",alias:"A"}]},{id:2,question:"Quem voc\xEA salvaria primeiro ?",options:[{id:1,name:"Crian\xE7as",alias:"A"},{id:2,name:"Idosos",alias:"A"},{id:3,name:"N\xE3o saberia escolher",alias:"B"}]},{id:3,question:"Qual a sua maior preocupa\xE7\xE3o ao enfretar outro super ser ?",options:[{id:1,name:"N\xE3o destruir pr\xE9dios",alias:"B"},{id:2,name:"Socar a cara do inimigo",alias:"A"},{id:3,name:"N\xE3o sujar meu traje",alias:"A"},{id:4,name:"N\xE3o deixar ningu\xE9m se ferir",alias:"B"}]},{id:4,question:"Qual o seu maior foco ?",options:[{id:1,name:"Ficar rico com poderes",alias:"A"},{id:2,name:"Salvar a cidade",alias:"B"}]},{id:5,question:"Qual o seu apelido de super ser ?",options:[{id:1,name:"O Terrivel",alias:"A"},{id:2,name:"Amigo da vizinhan\xE7a",alias:"B"}]}],results:{A:"Voc\xEA muito provavelmente seria um super vil\xE3o!",B:"Voc\xEA muito provavelmente seria um super Her\xF3i!"}};function $(t,e){if(t&1&&(s(0,"div",6)(1,"h3"),c(2),r()()),t&2){let a=f();l(2),h(a.questionSelected.question)}}function L(t,e){if(t&1){let a=S();s(0,"button",9),I("click",function(){let n=y(a).$implicit,g=f(2);return b(g.PlayerChoose(n.alias))}),c(1),r()}if(t&2){let a=e.$implicit;l(1),w(" ",a.name," ")}}function U(t,e){if(t&1&&(s(0,"div",7),q(1,L,2,1,"button",8),r()),t&2){let a=f();l(1),m("ngForOf",a.questionSelected.options)}}function G(t,e){if(t&1&&(s(0,"div",10)(1,"h1"),c(2,"Seu resultado \xE9:"),r(),s(3,"p"),c(4),r()()),t&2){let a=f();l(4),h(a.answerSeletec)}}var B=(()=>{let e=class e{constructor(){this.title="",this.answers=[],this.answerSeletec="",this.questionIndex=0,this.questionMaxIndex=0,this.finished=!1}ngOnInit(){x&&(this.finished=!1,this.title=x.title,this.questions=x.questions,this.questionSelected=this.questions[this.questionIndex],this.questionIndex=0,this.questionMaxIndex=this.questions.length)}PlayerChoose(o){this.answers.push(o),this.nextStep()}nextStep(){return z(this,null,function*(){if(this.questionIndex+=1,this.questionMaxIndex>this.questionIndex)this.questionSelected=this.questions[this.questionIndex];else{let o=yield this.checkResult(this.answers);this.finished=!0,this.answerSeletec=x.results[o]}})}checkResult(o){return z(this,null,function*(){return o.reduce((n,g,W,C)=>C.filter(_=>_===n).length>C.filter(_=>_===g).length?n:g)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-quizz"]],standalone:!0,features:[u],decls:8,vars:4,consts:[[1,"quizz__container"],[1,"quizz_logo"],["src","./assets/imgs/logo.png","alt","","srcset",""],["class","quizz_questions",4,"ngIf"],["class","quizz_options",4,"ngIf"],["class","quizz_results",4,"ngIf"],[1,"quizz_questions"],[1,"quizz_options"],["class","btn-option",3,"click",4,"ngFor","ngForOf"],[1,"btn-option",3,"click"],[1,"quizz_results"]],template:function(i,n){i&1&&(s(0,"div",0)(1,"div",1),d(2,"img",2),s(3,"h3"),c(4),r()(),q(5,$,3,1,"div",3)(6,U,2,1,"div",4)(7,G,5,1,"div",5),r()),i&2&&(l(4),h(n.title),l(1),m("ngIf",!n.finished),l(1),m("ngIf",!n.finished),l(1),m("ngIf",n.finished))},dependencies:[v,A,O],styles:[".quizz__container[_ngcontent-%COMP%]{width:80%;margin:20px auto auto}.quizz_logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:10px}.quizz_logo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:20px}.quizz_questions[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #4224d9;border-radius:8px;background-color:#644ed2;width:100%;height:200px;font-size:20px;font-family:Segoe UI;margin-bottom:20px}.quizz_options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:auto auto 20px}.btn-option[_ngcontent-%COMP%]{background-color:transparent;border-radius:8px;width:50%;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:16px 31px;text-decoration:none;text-shadow:0px 1px 0px #2f6627;border:1px solid #18ab29}.btn-option[_ngcontent-%COMP%]:hover{background-color:#5cbf2a}.btn-option[_ngcontent-%COMP%]:active{position:relative;top:1px}.quizz_results[_ngcontent-%COMP%]{width:100%;height:350px;background-color:#210239;border-radius:10px;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center}"]});let t=e;return t})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[u],decls:2,vars:0,consts:[[1,"home__container"]],template:function(i,n){i&1&&(s(0,"div",0),d(1,"app-quizz"),r())},dependencies:[B]});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.title="angular-buzzfeed"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:2,vars:0,template:function(i,n){i&1&&d(0,"app-home")(1,"router-outlet")},dependencies:[v,Q,V]});let t=e;return t})();var D=[];var N={providers:[E(D),k()]};var J={providers:[F()]},R=M(N,J);var K=()=>P(j,R),qe=K;export{qe as a};