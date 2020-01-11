(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,a,t){e.exports=t(81)},49:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(22),l=t.n(s),c=(t(49),t(5)),i=t(6),o=t(8),m=t(7),u=t(9),h=t(18),d=t(17),p=t(24),f=t.n(p),E=t(20),v=t.n(E),b=function(e){e?v.a.defaults.headers.common.Authorization="Token "+e:delete v.a.defaults.headers.common.Authorization},g=Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||5e3,N="http://0.0.0.0:"+g,y={LOGIN:(N="http://0.0.0.0:"+g)+"/api/users/login",REGISTER:N+"/api/users"},O=function(e){return{type:"SET_CURRENT_USER",payload:e}},j=function(){return function(e){localStorage.removeItem("jwtToken"),b(!1),e(O({}))}},C=t(12),k=t(16),w=t(40),R=t(41),S=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},T={isAuthenticated:!1,user:{}},U={},A=Object(k.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(R.a)({},e,{isAuthenticated:!S(a.payload),user:a.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ERRORS":return a.payload.errors;case"CLEAR_ERRORS":return{};default:return e}}}),x=[w.a],L=Object(k.e)(A,{},Object(k.d)(k.a.apply(void 0,x))),_=t(42),I=Object(C.b)((function(e){return{auth:e.auth}}))((function(e){var a=e.component,t=e.auth,n=Object(_.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===t.isAuthenticated?r.a.createElement(a,e):r.a.createElement(d.a,{to:"/login"})}}))})),P=t(19),G=t(15),D=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.errors;return e?r.a.createElement("ul",{className:"error-messages help is-danger"},Object.keys(e).map((function(a){return r.a.createElement("li",{key:a},a," ",e[a])}))):null}}]),a}(r.a.Component),W=(t(75),t(76),function(){return r.a.createElement("div",{className:"logo"},"Login App")}),z=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={redirectToReferrer:!1,email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.auth&&this.props.auth.isAuthenticated&&this.setState({redirectToReferrer:!0})}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.setState({redirectToReferrer:!0}),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={user:{email:this.state.email,password:this.state.password}};this.props.loginUser(a)}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,a=this.state.redirectToReferrer,t=this.state,n=t.email,s=t.password;return a?r.a.createElement(d.a,{to:e}):r.a.createElement("section",{className:"hero is-fullheight landing"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered",id:"login-form"},r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement(W,null)),r.a.createElement("h3",{className:"title"},"Login"),r.a.createElement(D,{errors:this.props.errors}),r.a.createElement("form",null,r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",name:"email",placeholder:"Email",value:n,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"Password",value:s,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("button",{className:"button is-block is-info is-large is-fullwidth",onClick:this.onSubmit},"Submit")),r.a.createElement("div",null,r.a.createElement("p",{className:"has-text-grey sub-menu"},r.a.createElement(h.b,{to:"/register"},"Sign Up")," \xa0\xb7\xa0",r.a.createElement("a",{href:"../"},"Forgot Password")," \xa0\xb7\xa0",r.a.createElement("a",{href:"../"},"Need Help?")))))))}}]),a}(n.Component),B=Object(C.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(a){v.a.post(y.LOGIN,e).then((function(e){var t=e.data.user.token;localStorage.setItem("jwtToken",t),b(t);var n=f()(t);a(O(n))})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(z),F=(t(77),["India","US","UK","China"]),H=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={redirectToReferrer:!1,username:"",email:"",password:"",firstname:"",lastname:"",gender:"male",country:F[0],errors:{}},e.onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.auth&&this.props.auth.isAuthenticated&&this.setState({redirectToReferrer:!0})}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.setState({redirectToReferrer:!0}),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var a=this.state,t={user:{username:a.username,email:a.email,password:a.password,firstname:a.firstname,lastname:a.lastname,gender:a.gender,country:a.country}};this.props.registerUser(t,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,a=this.state.redirectToReferrer,t=this.state,n=t.username,s=t.email,l=t.password,c=t.firstname,i=t.lastname,o=t.gender,m=t.country;return a?r.a.createElement(d.a,{to:e}):r.a.createElement("section",{className:"hero is-fullheight landing"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered",id:"login-form"},r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement(W,null)),r.a.createElement("h3",{className:"title"},"Register"),r.a.createElement(D,{errors:this.props.errors}),r.a.createElement("form",null,r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"Username",value:n,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-user"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"text",name:"firstname",placeholder:"firstname",value:c,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-user"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"text",name:"lastname",placeholder:"lastname",value:i,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-user"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",name:"email",placeholder:"Email",value:s,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field is-horizontal is-pulled-left"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Gender")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field radio-field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:"gender",value:"male",checked:"male"===o,onChange:this.onChange}),"Male"),r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:"gender",value:"female",checked:"female"===o,onChange:this.onChange}),"Female"))))),r.a.createElement("div",{className:"field is-horizontal is-pulled-right"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Country")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field is-narrow"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{value:m,name:"country",onChange:this.onChange},F.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))))))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"Password",value:l,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("button",{className:"button is-block is-info is-large is-fullwidth",onClick:this.onSubmit},"Submit")),r.a.createElement("div",null,r.a.createElement("p",{className:"has-text-grey sub-menu"},r.a.createElement(h.b,{to:"/login"},"Login")," \xa0\xb7\xa0",r.a.createElement("a",{href:"../"},"Forgot Password")," \xa0\xb7\xa0",r.a.createElement("a",{href:"../"},"Need Help?")))))))}}]),a}(n.Component),M=Object(C.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,a){return function(t){v.a.post(y.REGISTER,e).then((function(e){return a.push("/login")})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(H),J=(t(78),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).onLogoutClick=function(){t.props.logoutUser()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"#"},r.a.createElement("div",{className:"logo"},"Login App"))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{className:"navbar-item",onClick:this.onLogoutClick},"Log out")))))}}]),a}(n.Component)),q=Object(C.b)((function(e){return{auth:e.auth,errors:e.errors}}),{logoutUser:j})(J),K=(t(79),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container is-two-quarters"},r.a.createElement(q,null),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title"},"Welcome to Home Page"),r.a.createElement("p",{className:"subtitle"},"Coded by Anish Dhamodaran"))))}}]),a}(n.Component));t(80);if(localStorage.jwtToken){b(localStorage.jwtToken);var V=f()(localStorage.jwtToken);L.dispatch(O(V));var $=Date.now()/1e3;V.exp<$&&(L.dispatch(j()),window.location.href="/login")}var Q=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{store:L},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.b,{path:"/login",component:B}),r.a.createElement(d.b,{path:"/register",component:M}),r.a.createElement(I,{exact:!0,path:"/",component:K}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.fb89801c.chunk.js.map