(this["webpackJsonptable-react-app"]=this["webpackJsonptable-react-app"]||[]).push([[0],{39:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(40),i=a.n(s),o=a(22),u=a(5),l=a(7),j=a(41),b=(a(53),j.a.initializeApp({apiKey:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",authDomain:"ukeess-88dce.firebaseapp.com",databaseURL:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"ukeess-88dce",storageBucket:"ukeess-88dce.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/table_react_app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_DATABASE:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",REACT_APP_FIREBASE_DOMAIN:"ukeess-88dce.firebaseapp.com",REACT_APP_FIREBASE_KEY:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",REACT_APP_FIREBASE_PROJECT_ID:"ukeess-88dce",REACT_APP_FIREBASE_STORAGE_BUCKET:"ukeess-88dce.appspot.com",REACT_APP_SENDER_ID:"660433207168"}).REACT_APP_FIREBASE_SENDER_ID})),d=(a(39),r.a.createContext()),p=function(e){var t=e.children,a=Object(c.useState)(null),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!0),u=Object(l.a)(o,2),j=u[0],p=u[1];return Object(c.useEffect)((function(){b.auth().onAuthStateChanged((function(e){i(e),p(!1)}))}),[]),j?Object(n.jsx)("div",{className:"Loading",children:"Loading..."}):Object(n.jsx)(d.Provider,{value:{currentUser:s},children:t})},h=a(29),O=a(44),m=function(e){var t=e.component,a=Object(O.a)(e,["component"]),r=Object(c.useContext)(d).currentUser;return Object(n.jsx)(u.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return r?Object(n.jsx)(t,Object(h.a)({},e)):Object(n.jsx)(u.a,{to:"/login"})}}))},x=a(19),f=a.n(x),v=a(23),E=(a(60),a(80)),_=a(81),S=(a(61),function(){return Object(n.jsxs)("div",{className:"Inputs",children:[Object(n.jsx)(_.a,{id:"email",type:"text",name:"email",label:"Standard",placeholder:"e-mail",className:"margin"}),Object(n.jsx)(_.a,{id:"password",name:"password",type:"password",label:"Standard",placeholder:"password",className:"margin"})]})}),g=Object(u.f)((function(e){var t=e.history,a=Object(c.useState)(null),r=Object(l.a)(a,2),s=r[0],i=r[1],j=Object(c.useCallback)(function(){var e=Object(v.a)(f.a.mark((function e(a){var n,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,c=n.email,r=n.password,e.prev=2,e.next=5,b.auth().signInWithEmailAndPassword(c.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useContext)(d).currentUser?Object(n.jsx)(u.a,{to:"/"}):Object(n.jsx)("div",{className:"Auth",children:Object(n.jsxs)("form",{className:"Auth_form",onSubmit:j,autoComplete:"on",children:[Object(n.jsx)("h1",{children:"Please login"}),Object(n.jsx)(S,{}),Object(n.jsx)("div",{className:"Error",children:s}),Object(n.jsxs)("div",{className:"Auth_buttons",children:[Object(n.jsx)(E.a,{variant:"contained",color:"primary",type:"submit",children:"Login"}),Object(n.jsx)(E.a,{variant:"contained",color:"secondary",children:Object(n.jsx)(o.b,{to:"/sign-up",className:"Auth_link",children:"Sign up"})})]})]})})})),A=(a(62),Object(u.f)((function(e){var t=e.history,a=Object(c.useState)(null),r=Object(l.a)(a,2),s=r[0],i=r[1],u=Object(c.useCallback)(function(){var e=Object(v.a)(f.a.mark((function e(a){var n,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,c=n.email,r=n.password,e.prev=2,e.next=5,b.auth().createUserWithEmailAndPassword(c.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsx)("div",{className:"SignUp",children:Object(n.jsxs)("form",{className:"SignUp_form",onSubmit:u,autoComplete:"on",children:[Object(n.jsx)("h1",{children:"Please sign up"}),Object(n.jsx)(S,{}),Object(n.jsx)("div",{className:"Error",children:s}),Object(n.jsxs)("div",{className:"SignUp_buttons",children:[Object(n.jsx)(E.a,{variant:"contained",color:"primary",children:Object(n.jsx)(o.b,{to:"/login",className:"SignUp_link",children:"Login"})}),Object(n.jsx)(E.a,{variant:"contained",color:"secondary",type:"submit",children:"Sign up"})]})]})})}))),P=(a(63),Object(u.f)((function(e){var t=e.history,a=Object(c.useCallback)(function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b.auth().signOut();case 4:t.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Table here"}),Object(n.jsx)(E.a,{variant:"contained",color:"primary",onClick:a,children:"Sign out"})]})})));var C=function(){return Object(n.jsx)(p,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{exact:!0,path:"/",component:P}),Object(n.jsx)(u.b,{exact:!0,path:"/login",component:g}),Object(n.jsx)(u.b,{exact:!0,path:"/sign-up",component:A})]})})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.0107fe04.chunk.js.map