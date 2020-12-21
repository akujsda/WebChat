(this.webpackJsonpclientchat=this.webpackJsonpclientchat||[]).push([[0],{278:function(e,n,t){},279:function(e,n,t){},386:function(e,n){},388:function(e,n){},400:function(e,n){},402:function(e,n){},427:function(e,n){},429:function(e,n){},430:function(e,n){},435:function(e,n){},437:function(e,n){},456:function(e,n){},468:function(e,n){},471:function(e,n){},493:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),i=t.n(r),c=t(18),s=t.n(c),o=(t(278),t(279),t(31)),u=t(34),l=t(66),d=t(20),p="/",j="/login",b="/register",m="/chat",f=t(46),x=t.n(f),h=t(69),O=t(533),g=t(532),v=t(527),w=t(530),I=t(529),y=t(528),S=t(125),k=t.n(S),C=t(497),N=t(523),T=t(525),q=t(43),B=t(72),F=t.n(B);function M(){var e=Object(q.a)(["\n  mutation userSignIn($input: UserSignInInput!){\n    userSignIn(input: $input){\n      id\n      userName\n      token\n    }\n  }\n"]);return M=function(){return e},e}function E(){var e=Object(q.a)(["\n  mutation createUser($input: NewUser!){\n    createUser(input: $input){\n      name\n      email\n      id\n    }\n  }\n"]);return E=function(){return e},e}var W=F()(E()),$=F()(M()),V=t(49),P=t(71),A=t(38),R=t(62),U=t.n(R),D=t(28),L=t.n(D),G=t(52),H=(t(191),t(160));(function(){var e=Object(h.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.genSalt(10);case 2:return e.sent,"1234123",e.next=6,H.hash("1234123","$2a$10$Fv476yh.Mf5w4qGAzB1MwO");case 6:n=e.sent,console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var z={email:"",password:""},_=A.a().shape({email:A.b().required().test("err","err",(function(e){return!!e&&e.includes("@")})),password:A.b().required().min(6)}),J=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function K(e){var n=e.setUserId,t=(e.userId,J()),i=Object(d.e)(),c=Object(V.a)($),s=Object(u.a)(c,1)[0],o=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.errors.email||t.errors.password){e.next=11;break}return console.log(t.values),e.prev=2,e.next=5,s({variables:{input:{email:t.values.email,password:t.values.password}}}).then((function(e){U()(e,"data.userSignIn")?(n(U()(e,"data.userSignIn")),L.a.set("userId",U()(e,"data.userSignIn.id")),L.a.set("userName",U()(e,"data.userSignIn.userName")),L.a.set("token",U()(e,"data.userSignIn.token")),i.push(m)):(G.b.error("Email or password entered incorrect",{position:G.b.POSITION.BOTTOM_RIGHT}),console.log(e)),console.log(U()(e,"data.userSignIn"))}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:e.next=12;break;case 11:G.b.error("Email or password entered incorrect",{position:G.b.POSITION.BOTTOM_RIGHT});case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(P.b,{onSubmit:function(e){return console.log(e)},initialValues:z,validationSchema:_,component:function(e){return Object(a.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(v.a,{}),Object(a.jsxs)("div",{className:t.paper,children:[Object(a.jsx)(O.a,{className:t.avatar,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(a.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"new-password",inputProps:{form:{autocomplete:"off"}},onChange:function(){return function(e){var n=document.getElementById("email");n&&e.setFieldValue("email",n.value)}(e)},autoFocus:!0}),Object(a.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(){return function(e){var n=document.getElementById("password");n&&e.setFieldValue("password",n.value)}(e)},autoComplete:"new-password"}),Object(a.jsx)(g.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){return o(e)},children:"Sign In"}),Object(a.jsx)(y.a,{container:!0,children:Object(a.jsx)(y.a,{item:!0,children:Object(a.jsx)(I.a,{href:b,variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})}}),Object(a.jsx)(G.a,{})]})}var Q={email:"",password:"",name:""},X=A.a().shape({email:A.b().required(),password:A.b().required().min(6),name:A.b().required()}),Y=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Z(){var e=Y(),n=Object(r.useRef)(null),t=Object(r.useRef)(null),i=Object(r.useRef)(null),c=Object(V.a)(W),s=Object(u.a)(c,1)[0],o=Object(d.e)(),l=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s({variables:{input:{email:n.email,name:n.name,password:n.password}}});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,o.push(j),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[0,5,7,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsx)(P.b,{onSubmit:function(e){return console.log(e)},initialValues:Q,validationSchema:X,component:function(r){return Object(a.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(v.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(O.a,{className:e.avatar,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(a.jsxs)(P.a,{id:"test",className:e.form,children:[Object(a.jsxs)(y.a,{container:!0,spacing:2,children:[Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,ref:n,onBlur:function(){return function(e){var n=document.getElementById("name");n&&(e.setFieldValue("name",n.value),console.log(n.value))}(r)},autoComplete:"new-password"})}),Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",ref:t,onBlur:function(){return function(e){var n=document.getElementById("email");n&&e.setFieldValue("email",n.value)}(r)},autoComplete:"new-password"})}),Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",ref:i,onBlur:function(){return function(e){var n=document.getElementById("password");n&&e.setFieldValue("password",n.value)}(r)},autoComplete:"new-password"})})]}),Object(a.jsx)(g.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return l(r.values)},children:"Sign Up"}),Object(a.jsx)(y.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(y.a,{item:!0,children:Object(a.jsx)(I.a,{href:j,variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}})}var ee=t(531),ne=t(36);function te(){var e=Object(q.a)(["\n  subscription{\n    newMessage {\n    text\n    date\n    senderName\n  }\n  }\n\n"]);return te=function(){return e},e}function ae(){var e=Object(q.a)(["\n  query getMessages($senderId: String){\n    getMessages(senderId: $senderId){\n      text\n      senderName\n      date\n    }\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(q.a)(["\n  mutation sendMessage($input: NewMessage!){\n    sendMessage(input: $input){\n      text\n    }\n  }\n"]);return re=function(){return e},e}var ie=F()(re()),ce=F()(ae()),se=F()(te()),oe=t(102);function ue(){var e=Object(q.a)(["\n  padding-bottom: 10px;\n  padding-top: 10px;\n  border: 1px solid rgb(63, 81, 181);\n  border-radius: 10px;\n  margin-top:10px;\n  margin-bottom:10px;\n"]);return ue=function(){return e},e}function le(){var e=Object(q.a)(["\n  padding-left:10px;\n  padding-right:10px;\n  list-style:none;\n"]);return le=function(){return e},e}var de=oe.a.ul(le()),pe=oe.a.li(ue()),je=function(){var e=L.a.get("userId"),n=Object(r.useState)([""]),t=Object(u.a)(n,2),i=t[0],c=t[1],s=Object(V.b)(ce,{variables:{senderId:e}}),o=s.data,l=s.loading;Object(r.useEffect)((function(){console.log(o),c(o.getMessages)}),[l,o]);var d=Object(V.c)(se),p=d.data,j=d.loading;return console.log(o,p),Object(r.useEffect)((function(){var e=document.getElementById("messageList");if(p&&e){var n=[].concat(Object(ne.a)(i),[p.newMessage]);c(n),e.scrollTop=e.scrollHeight}}),[j,p]),Object(a.jsx)(ee.a,{width:"100vw",height:"70vh",id:"messageList",overflow:"scroll",children:Object(a.jsx)(de,{children:!l&&i&&i.map((function(e,n){return Object(a.jsxs)(pe,{children:[Object(a.jsxs)(ee.a,{textAlign:"left",marginLeft:"10px",children:[e.senderName,": "]}),Object(a.jsx)(ee.a,{marginTop:"20px",children:e.text})]},n)}))})})};function be(){var e=Object(q.a)(["\n  width:300px;\n  border:1px solid #3f51b5;\n  border-radius:5px;\n"]);return be=function(){return e},e}var me=Object(oe.a)(w.a)(be()),fe={senderId:"",text:""},xe=A.a().shape({text:A.b().required().max(500),senderId:A.b().required()}),he=function(e){e.userId;var n=Object(V.a)(ie),t=Object(u.a)(n,1)[0],i=(Object(d.e)(),L.a.get("userId")),c=L.a.get("userName"),s=function(){var e=Object(h.a)(x.a.mark((function e(n,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),console.log(n.errors.text),!n.values.text||n.errors.text){e.next=15;break}return e.prev=3,e.next=6,t({variables:{input:{senderId:i,text:n.values.text,senderName:c}}});case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:return e.prev=10,n.resetForm(),e.finish(10);case 13:e.next=17;break;case 15:G.b.error("Max lenght 500 simbols",{position:G.b.POSITION.BOTTOM_RIGHT}),n.resetForm();case 17:case"end":return e.stop()}}),e,null,[[3,8,10,13]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(P.b,{onSubmit:function(e){return console.log(e)},initialValues:fe,validationSchema:xe,component:function(e){return Object(a.jsxs)(ee.a,{width:"300px",height:"150px",children:[Object(a.jsx)(me,{id:"sendMessageInput",required:!0,variant:"outlined",autoComplete:"off",onChange:function(){return function(e){var n=document.getElementById("sendMessageInput");n&&e.setFieldValue("text",n.value)}(e)},inputProps:{autoComplete:"none"}}),Object(a.jsx)(ee.a,{marginTop:"10px",children:Object(a.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(n){return s(e,n)},children:"send "})})]})}}),Object(a.jsx)(G.a,{})]})},Oe=function(e){var n=e.userId;L.a.get("userId"),Object(d.e)();return Object(a.jsxs)(ee.a,{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",children:[Object(a.jsx)(ee.a,{children:Object(a.jsx)(je,{})}),Object(a.jsx)(ee.a,{position:"fixed",bottom:"0",children:Object(a.jsx)(he,{userId:n})})]})},ge=function(){var e=Object(d.e)();return Object(a.jsxs)(ee.a,{width:"100vw",height:"50px",bgcolor:"#3f51b5",display:"flex",justifyContent:"center",alignItems:"center",children:[Object(a.jsx)(ee.a,{width:"50vw",display:"flex",justifyContent:"flex-start",marginLeft:"10px",fontSize:"32px",color:"white",fontWeight:"500",children:" WebChat "}),Object(a.jsx)(ee.a,{display:"flex",justifyContent:"flex-end",width:"50vw",children:L.a.get("userId")?Object(a.jsx)(ee.a,{bgcolor:"white",border:"1px solid white",borderRadius:"10px",margin:"5px 10px",height:"40px",textAlign:"center",children:Object(a.jsx)(g.a,{onClick:function(){L.a.remove("userId"),L.a.remove("userName"),e.push(j)},color:"primary",children:"logout"})}):Object(a.jsx)(ee.a,{bgcolor:"white",border:"1px solid white",borderRadius:"10px",margin:"5px 10px",height:"40px",textAlign:"center",children:Object(a.jsx)(g.a,{onClick:function(){e.push(j)},color:"primary",children:"login"})})})]})},ve=function(){var e=Object(r.useState)(null),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(d.a,{path:p,children:Object(a.jsx)(ge,{})}),Object(a.jsx)(d.a,{path:j,exact:!0,children:Object(a.jsx)(K,{setUserId:i,userId:t})}),Object(a.jsx)(d.a,{path:b,exact:!0,children:Object(a.jsx)(Z,{})}),Object(a.jsx)(d.a,{path:m,exact:!0,children:Object(a.jsx)(Oe,{userId:t})})]})},we=t(164),Ie=t(33),ye=t(257),Se=t(63),ke=t(254),Ce=t(8),Ne=t(256),Te=t(255),qe=new ke.a({uri:"ws://localhost:5000/graphql",options:{reconnect:!0}}),Be=new ye.a({uri:"http://localhost:5000/graphql"}),Fe=Object(Te.a)((function(e,n){var t=n.headers,a=L.a.get("token");return{headers:Object(we.a)(Object(we.a)({},t),{},{autorization:a?"Bearer ".concat(a):""})}})),Me=Object(Ie.d)((function(e){var n=e.query,t=Object(Ce.j)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),qe,Fe.concat(Be)),Ee=new Se.a({cache:new Ne.a,link:Me});var We=function(){return Object(a.jsx)(o.a,{client:Ee,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(ve,{})})})},$e=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,536)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(We,{})}),document.getElementById("root")),$e()}},[[493,1,2]]]);
//# sourceMappingURL=main.5c3d44ea.chunk.js.map