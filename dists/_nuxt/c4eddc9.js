(window.webpackJsonp=window.webpackJsonp||[]).push([[19,13,18],{253:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{text:{type:String,required:!0},background:{type:String,default:"light"}}}),o=(n(261),n(10)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button",class:[t.background],attrs:{type:"button"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"6f383199",null);e.default=component.exports;installComponents(component,{Button:n(254).default})},261:function(t,e,n){"use strict";n(253)},274:function(t,e,n){},292:function(t,e,n){},293:function(t,e,n){"use strict";n(274)},301:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(35),n(1)),l=n(186),c=o.a.extend({data:function(){return{form:{email:"caty@cataline.io",password:""}}},methods:{login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.auth.login(t.form);case 3:t.$router.push("/dashboard"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),m=(n(293),n(10)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form"},[n("Logo"),t._v(" "),t._m(0),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Senha"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("Button",{staticClass:"button",attrs:{type:"submit",text:"Entrar"}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"login-text"},[t._v("\n    Bem-vindo(a) ao Dashboard "),n("br"),t._v(" "),n("strong",[t._v("Entre na sua conta")])])}],!1,null,"7dce0f23",null);e.default=component.exports;installComponents(component,{Logo:n(121).default,Button:n(254).default})},308:function(t,e,n){"use strict";n(292)},315:function(t,e,n){"use strict";n.r(e);n(308);var r=n(10),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-template"},[e("LoginForm")],1)}),[],!1,null,"e31f12c6",null);e.default=component.exports;installComponents(component,{LoginForm:n(301).default})}}]);