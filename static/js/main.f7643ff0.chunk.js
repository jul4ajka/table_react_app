(this["webpackJsonptable-react-app"]=this["webpackJsonptable-react-app"]||[]).push([[0],{82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),r=a(27),s=a.n(r),l=a(28),o=a(10),p=a(9),m=a(58),u=(a(75),m.a.initializeApp({apiKey:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",authDomain:"ukeess-88dce.firebaseapp.com",databaseURL:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"ukeess-88dce",storageBucket:"ukeess-88dce.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/table_react_app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_DATABASE:"https://ukeess-88dce-default-rtdb.europe-west1.firebasedatabase.app/",REACT_APP_FIREBASE_DOMAIN:"ukeess-88dce.firebaseapp.com",REACT_APP_FIREBASE_KEY:"AIzaSyAjWQhFIZ54yhHFUGF87sTPVEztoMbDgzw",REACT_APP_FIREBASE_PROJECT_ID:"ukeess-88dce",REACT_APP_FIREBASE_STORAGE_BUCKET:"ukeess-88dce.appspot.com",REACT_APP_SENDER_ID:"660433207168"}).REACT_APP_FIREBASE_SENDER_ID})),j=i.a.createContext(),d=function(e){var t=e.children,a=Object(c.useState)(null),i=Object(p.a)(a,2),r=i[0],s=i[1],l=Object(c.useState)(!0),o=Object(p.a)(l,2),m=o[0],d=o[1];return Object(c.useEffect)((function(){u.auth().onAuthStateChanged((function(e){s(e),d(!1)}))}),[]),m?Object(n.jsx)("div",{className:"Loading",children:"Loading..."}):Object(n.jsx)(j.Provider,{value:{currentUser:r},children:t})},b=a(45),h=a(62),O=function(e){var t=e.component,a=Object(h.a)(e,["component"]),i=Object(c.useContext)(j).currentUser;return Object(n.jsx)(o.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return i?Object(n.jsx)(t,Object(b.a)({},e)):Object(n.jsx)(o.a,{to:"/login"})}}))},v=a(24),x=a.n(v),f=a(30),D=(a(82),a(130)),g=a(126),A=(a(83),function(){return Object(n.jsxs)("div",{className:"Inputs",children:[Object(n.jsx)(g.a,{id:"email",type:"text",name:"email",label:"Standard",placeholder:"e-mail",className:"margin"}),Object(n.jsx)(g.a,{id:"password",name:"password",type:"password",label:"Standard",placeholder:"password",className:"margin"})]})}),S=Object(o.g)((function(e){var t=e.history,a=Object(c.useState)(null),i=Object(p.a)(a,2),r=i[0],s=i[1],m=Object(c.useCallback)(function(){var e=Object(f.a)(x.a.mark((function e(a){var n,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,c=n.email,i=n.password,e.prev=2,e.next=5,u.auth().signInWithEmailAndPassword(c.value,i.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),s(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useContext)(j).currentUser?Object(n.jsx)(o.a,{to:"/"}):Object(n.jsx)("div",{className:"Auth",children:Object(n.jsxs)("form",{className:"Auth_form",onSubmit:m,autoComplete:"on",children:[Object(n.jsx)("h1",{children:"Please login"}),Object(n.jsx)(A,{}),Object(n.jsx)("div",{className:"Error",children:r}),Object(n.jsxs)("div",{className:"Auth_buttons",children:[Object(n.jsx)(D.a,{variant:"contained",color:"secondary",children:Object(n.jsx)(l.b,{to:"/sign-up",className:"Auth_link",children:"Sign up"})}),Object(n.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})]})]})})})),E=(a(84),Object(o.g)((function(e){var t=e.history,a=Object(c.useState)(null),i=Object(p.a)(a,2),r=i[0],s=i[1],o=Object(c.useCallback)(function(){var e=Object(f.a)(x.a.mark((function e(a){var n,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,c=n.email,i=n.password,e.prev=2,e.next=5,u.auth().createUserWithEmailAndPassword(c.value,i.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),s(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsx)("div",{className:"SignUp",children:Object(n.jsxs)("form",{className:"SignUp_form",onSubmit:o,autoComplete:"on",children:[Object(n.jsx)("h1",{children:"Please sign up"}),Object(n.jsx)(A,{}),Object(n.jsx)("div",{className:"Error",children:r}),Object(n.jsxs)("div",{className:"SignUp_buttons",children:[Object(n.jsx)(D.a,{variant:"contained",color:"primary",children:Object(n.jsx)(l.b,{to:"/login",className:"SignUp_link",children:"Login"})}),Object(n.jsx)(D.a,{variant:"contained",color:"secondary",type:"submit",children:"Sign up"})]})]})})}))),_=(a(85),a(131)),I=a(132),N=a(134),P=a(138),C=a(137),k=a(133),y=a(135),w=a(139),R=a(136),T=[{id:"view",label:"",minWidth:120},{id:"edit",label:"",minWidth:150},{id:"empID",label:"empID",minWidth:170,align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"empName",label:"empName",minWidth:170,align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"empActive",label:"empActive",minWidth:170,align:"left",format:function(e){return e.toFixed(2)}},{id:"empDepartment",label:"empDepartment",minWidth:170,align:"left",format:function(e){return e.toFixed(2)}},{id:"delete",label:"",minWidth:100}],F=[{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"},{empID:1,empName:"Julia",empActive:"Yes",empDepartment:"Development"}],J=Object(_.a)({root:{width:"100%"},container:{maxHeight:440}}),U=Object(o.g)((function(e){var t=e.history,a=Object(c.useCallback)(function(){var e=Object(f.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,u.auth().signOut();case 4:t.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]),i=function(){},r=function(){},s=function(){},l=J(),o=Object(c.useState)(0),m=Object(p.a)(o,2),j=m[0],d=m[1],b=Object(c.useState)(10),h=Object(p.a)(b,2),O=h[0],v=h[1],g=O-Math.min(O,F.length-j*O);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"Button_container",children:Object(n.jsx)(D.a,{variant:"contained",color:"primary",onClick:a,children:"Logout"})}),Object(n.jsxs)(I.a,{className:l.root,children:[Object(n.jsx)(k.a,{className:l.container,children:Object(n.jsxs)(N.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(R.a,{children:T.map((function(e){return Object(n.jsx)(C.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(n.jsxs)(P.a,{children:[F.slice(j*O,j*O+O).map((function(e){return Object(n.jsxs)(R.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Object(n.jsx)(C.a,{children:Object(n.jsx)(D.a,{variant:"contained",color:"primary",onclick:i,children:"View"})}),Object(n.jsx)(C.a,{children:Object(n.jsx)(D.a,{variant:"contained",color:"secondary",onClick:r,children:"Edit"})}),Object(n.jsx)(C.a,{children:e.empID}),Object(n.jsx)(C.a,{children:e.empName}),Object(n.jsx)(C.a,{children:e.empActive}),Object(n.jsx)(C.a,{children:e.empDepartment}),Object(n.jsx)(C.a,{children:Object(n.jsx)(D.a,{variant:"contained",color:"default",onClick:s,children:"Delete"})})]},e.code)})),g>0&&Object(n.jsx)(R.a,{style:{height:53*g},children:Object(n.jsx)(C.a,{colSpan:6})})]})]})}),Object(n.jsx)(w.a,{rowsPerPageOptions:[5,10,25],component:"div",count:F.length,rowsPerPage:O,page:j,onChangePage:function(e,t){d(t)},onChangeRowsPerPage:function(e){v(parseInt(e.target.value,10)),d(0)}})]})]})}));var W=function(){return Object(n.jsx)(d,{children:Object(n.jsx)(l.a,{basename:"/table_react_app",children:Object(n.jsx)("div",{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(O,{exact:!0,path:"/",component:U}),Object(n.jsx)(o.b,{path:"/login",component:S}),Object(n.jsx)(o.b,{path:"/sign-up",component:E}),Object(n.jsx)(o.b,{component:function(){return Object(n.jsx)("div",{children:"404 Not found "})}})]})})})})},Y=(a(86),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))});s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),Y()}},[[87,1,2]]]);
//# sourceMappingURL=main.f7643ff0.chunk.js.map