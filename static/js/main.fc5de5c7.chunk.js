(this["webpackJsonptable-react-app"]=this["webpackJsonptable-react-app"]||[]).push([[0],{39:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(40),i=n.n(s),o=n(22),u=n(5),l=n(7),j=n(41),b=(n(53),j.a.initializeApp({apiKey:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",authDomain:"ukeess-88dce.firebaseapp.com",databaseURL:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"ukeess-88dce",storageBucket:"ukeess-88dce.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_DATABASE:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",REACT_APP_FIREBASE_DOMAIN:"ukeess-88dce.firebaseapp.com",REACT_APP_FIREBASE_KEY:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",REACT_APP_FIREBASE_PROJECT_ID:"ukeess-88dce",REACT_APP_FIREBASE_STORAGE_BUCKET:"ukeess-88dce.appspot.com",REACT_APP_SENDER_ID:"660433207168"}).REACT_APP_FIREBASE_SENDER_ID})),d=(n(39),r.a.createContext()),p=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(!0),u=Object(l.a)(o,2),j=u[0],p=u[1];return Object(c.useEffect)((function(){b.auth().onAuthStateChanged((function(e){i(e),p(!1)}))}),[]),j?Object(a.jsx)("div",{className:"Loading",children:"Loading..."}):Object(a.jsx)(d.Provider,{value:{currentUser:s},children:t})},h=n(29),O=n(44),m=function(e){var t=e.component,n=Object(O.a)(e,["component"]),r=Object(c.useContext)(d).currentUser;return Object(a.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return r?Object(a.jsx)(t,Object(h.a)({},e)):Object(a.jsx)(u.a,{to:"/login"})}}))},f=n(19),x=n.n(f),v=n(23),E=(n(60),n(80)),g=n(81),S=(n(61),function(){return Object(a.jsxs)("div",{className:"Inputs",children:[Object(a.jsx)(g.a,{id:"email",type:"text",name:"email",label:"Standard",placeholder:"e-mail",className:"margin"}),Object(a.jsx)(g.a,{id:"password",name:"password",type:"password",label:"Standard",placeholder:"password",className:"margin"})]})}),A=Object(u.f)((function(e){var t=e.history,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],j=Object(c.useCallback)(function(){var e=Object(v.a)(x.a.mark((function e(n){var a,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.elements,c=a.email,r=a.password,e.prev=2,e.next=5,b.auth().signInWithEmailAndPassword(c.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useContext)(d).currentUser?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)("div",{className:"Auth",children:Object(a.jsxs)("form",{className:"Auth_form",onSubmit:j,autoComplete:"on",children:[Object(a.jsx)("h1",{children:"Please login"}),Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"Error",children:s}),Object(a.jsxs)("div",{className:"Auth_buttons",children:[Object(a.jsx)(E.a,{variant:"contained",color:"primary",type:"submit",children:"Login"}),Object(a.jsx)(E.a,{variant:"contained",color:"secondary",children:Object(a.jsx)(o.b,{to:"/sign-up",className:"Auth_link",children:"Sign up"})})]})]})})})),_=(n(62),Object(u.f)((function(e){var t=e.history,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],u=Object(c.useCallback)(function(){var e=Object(v.a)(x.a.mark((function e(n){var a,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.elements,c=a.email,r=a.password,e.prev=2,e.next=5,b.auth().createUserWithEmailAndPassword(c.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.jsx)("div",{className:"SignUp",children:Object(a.jsxs)("form",{className:"SignUp_form",onSubmit:u,autoComplete:"on",children:[Object(a.jsx)("h1",{children:"Please sign up"}),Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"Error",children:s}),Object(a.jsxs)("div",{className:"SignUp_buttons",children:[Object(a.jsx)(E.a,{variant:"contained",color:"primary",children:Object(a.jsx)(o.b,{to:"/login",className:"SignUp_link",children:"Login"})}),Object(a.jsx)(E.a,{variant:"contained",color:"secondary",type:"submit",children:"Sign up"})]})]})})}))),P=(n(63),Object(u.f)((function(e){var t=e.history,n=Object(c.useCallback)(function(){var e=Object(v.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,b.auth().signOut();case 4:t.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Table here"}),Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:n,children:"Sign out"})]})})));var C=function(){return Object(a.jsx)(p,{children:Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{exact:!0,path:"/",component:P}),Object(a.jsx)(u.b,{path:"/login",component:A}),Object(a.jsx)(u.b,{path:"/sign-up",component:_})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.fc5de5c7.chunk.js.map