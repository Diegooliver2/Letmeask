(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),s=n(27),c=n.n(s),i=n(14),o=n(6),u=n(5),l=n.n(u),d=n(8),j=n(9),b=n.p+"static/media/illustration.ae7276f0.svg",h=n.p+"static/media/logo.a88331cb.svg",p=n.p+"static/media/google-icon.df15d8e5.svg",m=n(30),f=n(31),x=(n(37),n(1));function O(e){var t=e.isOutlined,n=void 0!==t&&t,r=Object(f.a)(e,["isOutlined"]);return Object(x.jsx)("button",Object(m.a)({className:"button ".concat(n?"outlined":""," ")},r))}var v=n(18);n(39),n(41);v.a.initializeApp({apiKey:"AIzaSyAUeAvQpsNZT3ftZVtrKrWq9lG7hAmc3-w",authDomain:"letmeask-6ccb9.firebaseapp.com",databaseURL:"https://letmeask-6ccb9-default-rtdb.firebaseio.com",projectId:"letmeask-6ccb9",storageBucket:"letmeask-6ccb9.appspot.com",messagingSenderId:"394563289364",appId:"1:394563289364:web:1df31be1c33278d6c18201"});var g=v.a.auth(),k=v.a.database(),w=Object(r.createContext)({});function y(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a.auth.GoogleAuthProvider,e.next=3,g.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,a=r.displayName,c=r.photoURL,i=r.uid,a&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:a,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=g.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");s({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(x.jsx)(w.Provider,{value:{user:a,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function C(){return Object(r.useContext)(w)}n(24);function A(){var e=Object(o.f)(),t=C(),n=t.user,a=t.signInWithGoogle,s=Object(r.useState)(""),c=Object(j.a)(s,2),i=c[0],u=c[1];function m(){return(m=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,a();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,k.ref("rooms/".concat(i)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(x.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(x.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-content",children:[Object(x.jsx)("img",{src:h,alt:"Letmeask"}),Object(x.jsxs)("button",{onClick:function(){return m.apply(this,arguments)},className:"create-room",children:[Object(x.jsx)("img",{src:p,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(x.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(x.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(x.jsx)(O,{type:"submit",children:"Entrar na sala"})]})]})})]})}function N(){var e=C().user,t=Object(o.f)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1];function u(){return(u=Object(d.a)(l.a.mark((function n(r){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==s.trim()){n.next=3;break}return n.abrupt("return");case 3:return a=k.ref("rooms"),n.next=6,a.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:c=n.sent,t.push("/rooms/".concat(c.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(x.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(x.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-content",children:[Object(x.jsx)("img",{src:h,alt:"Letmeask"}),Object(x.jsx)("h2",{children:"Criar uma nova sala"}),Object(x.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsx)(O,{type:"submit",children:"Criar sala"})]}),Object(x.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(x.jsx)(i.b,{to:"/",children:"Clique aqui"}),";"]})]})})]})}var q=n(29),I=n.n(q);n(49);function S(e){var t=e.content,n=e.author,r=e.isAnswered,a=void 0!==r&&r,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(x.jsxs)("div",{className:I()("question",{answered:a},{highlighted:c&&!a}),children:[Object(x.jsx)("p",{children:t}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{src:n.avatar,alt:n.name}),Object(x.jsx)("span",{children:n.name})]}),Object(x.jsx)("div",{children:i})]})]})}var H=n.p+"static/media/copy.2f36f99e.svg";n(50);function L(e){return Object(x.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:H,alt:"Copy room code"})}),Object(x.jsxs)("span",{children:["Sala #",e.code]})]})}function E(e){var t=C().user,n=Object(r.useState)([]),a=Object(j.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){var n=k.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),a=null!==(n=r.questions)&&void 0!==n?n:{},s=Object.entries(a).map((function(e){var n,r,a,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(a=i.likes)&&void 0!==a?a:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));l(r.title),c(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{title:u,questions:s}}n(26);function G(){var e=C().user,t=Object(o.g)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1],i=t.id,u=E(i),b=u.title,p=u.questions;function m(){return(m=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return r={content:s,author:{name:e.name,avatar:e.avatar},isHighLighted:!1,isAnswered:!1},t.next=8,k.ref("rooms/".concat(i,"/questions")).push(r);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function t(n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,k.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).remove();case 3:t.next=7;break;case 5:return t.next=7,k.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("img",{src:h,alt:"Lemeask"}),Object(x.jsx)(L,{code:i})]})}),Object(x.jsxs)("main",{className:"content",children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",b]}),p.length>0&&Object(x.jsxs)("span",{children:[p.length," Pergunta(s)"]})]}),Object(x.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(x.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsxs)("div",{className:"form-footer",children:[e?Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{src:e.avatar,alt:e.name}),Object(x.jsx)("span",{children:e.name})]}):Object(x.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(x.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(x.jsx)(O,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),Object(x.jsx)("div",{className:"question-list",children:p.map((function(e){return Object(x.jsx)(S,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(x.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return f.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(x.jsx)("span",{children:e.likeCount}),Object(x.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var D=n.p+"static/media/delete.22ba6e00.svg",M=n.p+"static/media/check.5dfa6ed6.svg",P=n.p+"static/media/answer.4502a8d5.svg";function R(){var e=Object(o.f)(),t=Object(o.g)().id,n=E(t),r=n.title,a=n.questions;function s(){return(s=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que deseja excluir essa pergunta?")){e.next=3;break}return e.next=3,k.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("img",{src:h,alt:"Lemeask"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(L,{code:t}),Object(x.jsx)(O,{isOutlined:!0,onClick:function(){return s.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(x.jsxs)("main",{className:"content",children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",r]}),a.length>0&&Object(x.jsxs)("span",{children:[a.length," Pergunta(s)"]})]}),Object(x.jsx)("div",{className:"question-list",children:a.map((function(e){return Object(x.jsxs)(S,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:[!e.isAnswered&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:P,alt:"Marca pergunta como respondida"})}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:M,alt:"Dar destaque \xe0 pergunta"})})]}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return c.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:D,alt:"Remover pergunta"})})]},e.id)}))})]})]})}var z=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(y,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,component:A}),Object(x.jsx)(o.a,{path:"/rooms/new",component:N}),Object(x.jsx)(o.a,{path:"/rooms/:id",component:G}),Object(x.jsx)(o.a,{path:"/admin/rooms/:id",component:R})]})})})};n(51);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9de91b77.chunk.js.map