(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026c":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"1aed":function(t,e,n){},"23e5":function(t,e,n){"use strict";var a=n("45d3"),o=n.n(a);o.a},"2d5a":function(t,e,n){"use strict";var a=n("e64d"),o=n.n(a);o.a},"45d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[n("span",[t._v("Buxearn © 2020 | ")]),t._v(" We are not affiliated with Roblox or any other entity.")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Nav",[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.push("/")}}},[t._v(" Buxearn ")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"links"},[n("router-link",{staticClass:"Navbar__Link",attrs:{to:"/earn"}},[n("font-awesome-icon",{attrs:{icon:"money-bill"}}),t._v(" Earn")],1),n("router-link",{staticClass:"Navbar__Link",attrs:{to:"/daily"}},[n("font-awesome-icon",{attrs:{icon:"clock"}}),t._v(" Daily Reward")],1),n("a",{staticClass:"Navbar__Link"},[n("font-awesome-icon",{attrs:{icon:["fab","discord"]}}),t._v(" Discord")],1),n("router-link",{staticClass:"Navbar__Link",attrs:{to:"/giveaway"}},[n("font-awesome-icon",{attrs:{icon:"gift"}}),t._v(" Giveaway")],1),n("router-link",{staticClass:"Navbar__Link",attrs:{to:"/payout"}},[n("font-awesome-icon",{attrs:{icon:"money-check-alt"}}),t._v(" Payout")],1),n("router-link",{staticClass:"Navbar__Link",attrs:{to:"/account"}},[n("font-awesome-icon",{attrs:{icon:"user"}}),t._v(" Account")],1)],1),n("div",{staticClass:"avatar"},[t.getAccount.loggedin?n("div",{staticClass:"loggedIn"},[n("li",{staticStyle:{top:"0px"}},[t._v(t._s(t.getAccount.name)+" ")]),n("li",{staticStyle:{bottom:"0px"},on:{click:function(e){return t.getBalance()}}},[t._v("R$ "+t._s(t.balance)+" | "),n("a",{on:{click:t.logout}},[t._v("Logout")])])]):n("div",[n("router-link",{staticStyle:{color:"white"},attrs:{to:"/signin"}},[t._v("Sign In")])],1)]),n("div",{staticClass:"toggleNav"},[n("div",[n("font-awesome-icon",{attrs:{icon:"bars"},on:{click:function(e){t.showMenu=!t.showMenu}}})],1)])])]),n("div",{staticClass:"NavMobile"},[n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"mobileMenu"},[n("router-link",{attrs:{to:"/earn"}},[n("font-awesome-icon",{attrs:{icon:"money-bill"}}),t._v(" Earn")],1),n("router-link",{attrs:{to:"/daily"}},[n("font-awesome-icon",{attrs:{icon:"clock"}}),t._v(" Daily Reward")],1),n("a",[n("font-awesome-icon",{attrs:{icon:["fab","discord"]}}),t._v(" Discord")],1),n("router-link",{attrs:{to:"/giveaway"}},[n("font-awesome-icon",{attrs:{icon:"gift"}}),t._v(" Giveaway")],1),n("router-link",{attrs:{to:"/payout"}},[n("font-awesome-icon",{attrs:{icon:"money-check-alt"}}),t._v(" Payout")],1),n("router-link",{attrs:{to:"/account"}},[n("font-awesome-icon",{attrs:{icon:"user"}}),t._v(" Account")],1)],1)])],1)],1)},s=[],c=(n("99af"),n("d3b7"),{name:"NavBar",data:function(){return{showMenu:!1,account:this.updateAccount(),balance:0}},methods:{logout:function(){localStorage.removeItem("account"),this.$router.push("/")},updateAccount:function(){return localStorage.account?{loggedin:!0,name:localStorage.account}:{loggedin:!1}},getBalance:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/account?name=").concat(localStorage.account)).then((function(t){return t.json()})).then((function(e){t.balance=JSON.parse(e).balance}))}},watch:{$route:function(){this.account=this.updateAccount()}},computed:{getAccount:function(){return this.account}},mounted:function(){var t=this;this.getBalance(),setInterval((function(){return t.getBalance()}),15e3)}}),u=c,l=(n("d1cf"),n("2877")),d=Object(l["a"])(u,i,s,!1,null,"bfc41ffa",null),p=d.exports,m={name:"app",components:{NavBar:p}},v=m,h=(n("034f"),Object(l["a"])(v,o,r,!1,null,null,null)),f=h.exports,g=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("h1",[t._v("Welcome to Buxearn")]),n("Stats"),n("br"),n("div",{staticStyle:{"text-align":"center",margin:"auto"}},[n("panel",{staticStyle:{display:"inline-block",margin:"10px",padding:"20px"}},[n("p",[n("font-awesome-icon",{staticStyle:{color:"black","font-size":"65px"},attrs:{icon:"user"}})],1),n("p",[t._v("Signin with your Roblox account")])]),n("panel",{staticStyle:{display:"inline-block",margin:"10px",padding:"20px"}},[n("p",[n("font-awesome-icon",{staticStyle:{color:"black","font-size":"65px"},attrs:{icon:"tasks"}})],1),n("p",[t._v("Watch videos and complete tasks")])]),n("panel",{staticStyle:{display:"inline-block",margin:"10px",padding:"20px"}},[n("p",[n("font-awesome-icon",{staticStyle:{color:"black","font-size":"65px"},attrs:{icon:"money-bill"}})],1),t._v(" Instantly withdraw Robux! ")])],1),n("br"),n("panel",{staticStyle:{margin:"auto","text-align":"center",padding:"20px"}},[n("h2",[t._v("Signin to start earning Robux!")]),n("p",[t._v("Login with your Roblox Account")]),n("button",{on:{click:function(e){return t.$router.push("/signin")}}},[n("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),t._v(" Signin")],1)])],1)},y=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"rewarded box"},[n("p",[t._v("123,456")]),n("span",[t._v("Robux Rewarded")])]),n("div",{staticClass:"completed box"},[n("p",[t._v("123,456")]),n("span",[t._v("Offers Completed")])]),n("div",{staticClass:"online box"},[n("p",[t._v("123,456")]),n("span",[t._v("Users")])])])}],S={name:"Stats"},P=S,x=(n("23e5"),Object(l["a"])(P,b,_,!1,null,"40a12e75",null)),O=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[t._t("default")],2)},k=[],R={name:"panel"},A=R,j=(n("c5b5"),Object(l["a"])(A,C,k,!1,null,"a778414e",null)),$=j.exports,N={name:"Home",components:{Stats:O,panel:$}},E=N,I=(n("e7de"),Object(l["a"])(E,w,y,!1,null,"b91ccda8",null)),U=I.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Earn Robux")]),n("Stats"),n("panel",{staticStyle:{padding:"auto",margin:"auto"}},[n("p",[t._v("Choose an offer provider to get started.")])])],1)},T=[],B={name:"Earn",components:{panel:$,Stats:O}},H=B,L=(n("876c"),Object(l["a"])(H,D,T,!1,null,"03289ff1",null)),M=L.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{staticStyle:{margin:"auto","margin-top":"35px","text-align":"center"}},[n("h3",[t._v("Claim Your Daily Reward")]),n("br"),n("div",{staticStyle:{margin:"auto"}},[n("h1",[t._v(t._s(t.countdown))]),n("button",{directives:[{name:"show",rawName:"v-show",value:"Ready"===t.countdown,expression:"countdown === 'Ready'"}],staticStyle:{"text-align":"center"},on:{click:function(e){return t.claim()}}},[t._v("Claim")])])])},G=[],Y={name:"Daily",components:{panel:$},data:function(){return{account:"",countdown:"00:00:00"}},methods:{getCountdown:function(){var t=this,e=this.account.lastDailyClaim+864e5,n=setInterval((function(){var a=(new Date).getTime(),o=e-a,r=Math.floor(o%864e5/36e5),i=Math.floor(o%36e5/6e4),s=Math.floor(o%6e4/1e3);t.countdown=r+":"+i+":"+s,o<0&&(clearInterval(n),t.countdown="Ready")}),1e3)},claim:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/claimdaily"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({account:localStorage.account}),mode:"cors"}).then((function(){fetch("".concat(t.$apiHostname,"/api/account?name=").concat(localStorage.account)).then((function(t){return t.json()})).then((function(e){t.account=JSON.parse(e),t.getCountdown()}))}))}},mounted:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/account?name=").concat(localStorage.account)).then((function(t){return t.json()})).then((function(e){t.account=JSON.parse(e),t.getCountdown()}))}},z=Y,V=Object(l["a"])(z,J,G,!1,null,null,null),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticStyle:{margin:"auto","text-align":"center",padding:"50px"}},[t._v("Comming soon!")])},q=[],F={name:"Giveaway"},K=F,Q=Object(l["a"])(K,X,q,!1,null,null,null),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{staticStyle:{margin:"35px auto","text-align":"center",padding:"20px"}},[n("h3",[t._v("Withdraw ROBUX!")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawAmount,expression:"withdrawAmount"}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:t.withdrawAmount},on:{input:function(e){e.target.composing||(t.withdrawAmount=e.target.value)}}}),n("button",{on:{click:function(e){return t.withdraw()}}},[t._v("Withdraw")])])},et=[],nt={name:"Payout",components:{panel:$},data:function(){return{withdrawAmount:void 0}},methods:{withdraw:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/payout"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:localStorage.account,amount:this.withdrawAmount}),mode:"cors"}).then((function(){t.withdrawAmount=void 0}))}}},at=nt,ot=Object(l["a"])(at,tt,et,!1,null,null,null),rt=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",[t._v("Your account")]),n("br"),n("panel",{staticStyle:{margin:"auto"}},[n("div",{staticClass:"inline"},[n("h4",[t._v("Account")]),n("p",[t._v(t._s(t.name))]),n("br")]),n("div",{staticClass:"inline"},[n("h4",[t._v("Balance")]),n("p",[t._v(t._s(t.account.balance))]),n("br")]),n("div",{staticClass:"inline"},[n("h4",[t._v("Total Earned")]),n("p",[t._v(t._s(t.account.totalEarned))]),n("br")]),n("div",{staticClass:"inline"},[n("h4",[t._v("Offers Completed")]),n("p",[t._v(t._s(t.account.offersComplete))]),n("br")]),n("button",{on:{click:function(e){return t.$router.push("/payout")}}},[t._v("Payout")])]),n("panel",{staticStyle:{margin:"20px auto",padding:"30px"}},[n("h4",[t._v("Redeem Promo Code")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.promoInput,expression:"promoInput"}],attrs:{type:"text",placeholder:"Code"},domProps:{value:t.promoInput},on:{input:function(e){e.target.composing||(t.promoInput=e.target.value)}}}),n("button",{on:{click:function(e){return t.redeemPromo()}}},[t._v("Redeem")])])],1)},st=[],ct={name:"Account",components:{panel:$},data:function(){return{name:localStorage.account,account:"",promoInput:void 0}},mounted:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/account?name=").concat(localStorage.account)).then((function(t){return t.json()})).then((function(e){t.account=JSON.parse(e)}))},methods:{redeemPromo:function(){var t=this;fetch("".concat(this.$apiHostname,"/api/redeem/promo"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:this.promoInput,user:localStorage.account}),mode:"cors"}).then((function(){return t.promoInput=void 0}))}}},ut=ct,lt=(n("2d5a"),Object(l["a"])(ut,it,st,!1,null,"033769ce",null)),dt=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{staticStyle:{margin:"auto",padding:"25px","margin-top":"35px"}},[n("h2",[t._v("Signin With Your Roblox Account")]),n("p",[t._v("Enter your Roblox Username")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return t.signin(t.username)}}},[t._v("Signin")])])])},mt=[],vt={name:"Signin",components:{panel:$},methods:{signin:function(t){var e=this;t&&fetch("".concat(this.$apiHostname,"/api/account?name=").concat(t)).then((function(){localStorage.account=t,e.$router.push("/earn")}))}}},ht=vt,ft=Object(l["a"])(ht,pt,mt,!1,null,null,null),gt=ft.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{staticStyle:{margin:"auto",padding:"25px","margin-top":"35px"}},[n("h2",[t._v("Admin Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),n("button",{on:{click:function(e){return t.signin(t.username,t.password)}}},[t._v("Signin")])])},yt=[],bt={name:"AdminLogin",components:{panel:$},data:function(){return{username:"",password:""}},methods:{signin:function(t,e){var n=this;fetch("".concat(this.$apiHostname,"/admin/auth"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e}),mode:"cors"}).then((function(t){return t.json()})).then((function(t){t.auth?(localStorage.adminAuth=t.auth,n.$router.push("/admin")):alert("Error")}))}}},_t=bt,St=Object(l["a"])(_t,wt,yt,!1,null,null,null),Pt=St.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"30px","text-align":"center"}},[n("panel",{staticStyle:{padding:"25px",margin:"20px",display:"inline-block"}},[n("h2",[t._v("General Management")]),n("h3",[t._v("Give Points")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.givePointsAmount,expression:"givePointsAmount"}],attrs:{type:"number",placeholder:"Points"},domProps:{value:t.givePointsAmount},on:{input:function(e){e.target.composing||(t.givePointsAmount=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.givePointsUser,expression:"givePointsUser"}],attrs:{type:"text",placeholder:"User"},domProps:{value:t.givePointsUser},on:{input:function(e){e.target.composing||(t.givePointsUser=e.target.value)}}}),n("br"),n("button",{on:{click:function(e){return t.givePoints(t.givePointsUser,t.givePointsAmount)}}},[t._v("Give")]),n("br"),n("hr"),n("br"),n("h3",[t._v("Promo Codes")]),n("h4",[t._v("Create")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.createPromoCode,expression:"createPromoCode"}],attrs:{type:"text",placeholder:"Code"},domProps:{value:t.createPromoCode},on:{input:function(e){e.target.composing||(t.createPromoCode=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.createPromoValue,expression:"createPromoValue"}],attrs:{type:"number",placeholder:"Value"},domProps:{value:t.createPromoValue},on:{input:function(e){e.target.composing||(t.createPromoValue=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.createPromoUses,expression:"createPromoUses"}],attrs:{type:"number",placeholder:"Uses"},domProps:{value:t.createPromoUses},on:{input:function(e){e.target.composing||(t.createPromoUses=e.target.value)}}}),n("br"),n("button",{on:{click:function(e){return t.createPromo()}}},[t._v("Create")]),n("hr"),n("br"),n("h3",[t._v("Daily Reward: "+t._s(t.dailyReward))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDailyReward,expression:"setDailyReward"}],attrs:{type:"number",placeholder:"Set reward"},domProps:{value:t.setDailyReward},on:{input:function(e){e.target.composing||(t.setDailyReward=e.target.value)}}}),n("button",{on:{click:function(e){return t.changeDailyReward(t.setDailyReward)}}},[t._v("Set")]),n("hr"),n("br"),n("h3",[t._v("Set Banner Message")]),n("input",{attrs:{type:"text",placeholder:"Message"}}),n("button",[t._v("Set")])]),n("panel",{staticStyle:{padding:"25px",margin:"20px",display:"inline-block"}},[n("h2",[t._v("Resller Account Management")]),n("p",[t._v("Not implemented")]),n("hr"),n("br"),n("p",[t._v(".ROBLOSECURITY Cookie:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.setROBLOSECURITY,expression:"setROBLOSECURITY"}],attrs:{id:"",cols:"30",rows:"10"},domProps:{value:t.setROBLOSECURITY},on:{input:function(e){e.target.composing||(t.setROBLOSECURITY=e.target.value)}}}),n("p",[t._v("Group ID:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setGroupID,expression:"setGroupID"}],attrs:{type:"text"},domProps:{value:t.setGroupID},on:{input:function(e){e.target.composing||(t.setGroupID=e.target.value)}}}),n("br"),n("button",{on:{click:function(e){return t.setPayoutConfig(t.setROBLOSECURITY,t.setGroupID)}}},[t._v("Save")])]),n("panel",{staticStyle:{padding:"25px",margin:"20px",display:"inline-block"}},[n("h2",[t._v("Admin Account")]),n("h3",[t._v("Change Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{type:"password",placeholder:"Repeat Password"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),n("br"),n("br"),n("button",{on:{click:function(e){return t.changePassword(t.password,t.repeatPassword)}}},[t._v("Change Password")]),n("br"),n("br"),n("hr"),n("br"),n("button",{on:{click:function(e){return t.signout()}}},[t._v("Signout")])])],1)},Ot=[],Ct={name:"Admin",components:{panel:$},data:function(){return{password:"",repeatPassword:"",givePointsUser:"",givePointsAmount:void 0,dailyReward:void 0,setDailyReward:void 0,setGroupID:"",setROBLOSECURITY:"",showPromoDetails:!1,createPromoCode:void 0,createPromoValue:void 0,createPromoUses:void 0}},methods:{signin:function(t,e){var n=this;fetch("".concat(this.$apiHostname,"/admin/auth"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e}),mode:"cors"}).then((function(t){return t.json()})).then((function(t){t.auth?(localStorage.adminAuth=t.auth,n.$router.push("/admin")):alert("Error")}))},signout:function(){localStorage.removeItem("adminAuth"),this.$router.push("/admin/login")},givePoints:function(t,e){var n=this;fetch("".concat(this.$apiHostname,"/api/givepoints"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({user:t,amount:e}),mode:"cors"}).then((function(t){return t.json()})).then((function(a){"sucess"===a.stauts?alert("Sent ".concat(t," ").concat(e," Robux!")):alert("Error, Robux not sent"),n.givePointsUser="",n.givePointsAmount=""}))},changePassword:function(t,e){var n=this;t===e?fetch("".concat(this.$apiHostname,"/admin/setpassword"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({pass:t}),mode:"cors"}).then((function(t){return t.json()})).then((function(t){void 0!==t.auth?(localStorage.adminAuth=t.auth,alert("Changed Password.")):alert("Error, password not changed."),n.password="",n.repeatPassword=""})):(alert("Passwords do not match."),this.password="",this.repeatPassword="")},changeDailyReward:function(t){var e=this;fetch("".concat(this.$apiHostname,"/admin/setdailyreward"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({value:t}),mode:"cors"}).then((function(t){return t.json()})).then((function(n){"sucess"===n.status?(alert("Changed daily reward."),e.dailyReward=t):alert("Error, daily reward not changed."),e.setDailyReward=""}))},setPayoutConfig:function(t,e){fetch("".concat(this.$apiHostname,"/admin/setpayoutconfig"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({cookie:t,id:e}),mode:"cors"}).then((function(t){return t.json()})).then((function(t){"success"===t.status?alert("Saved Config."):alert("Error, not changed!")}))},createPromo:function(){fetch("".concat(this.$apiHostname,"/api/create/promo"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({name:this.createPromoCode,value:this.createPromoValue,uses:this.createPromoUses}),mode:"cors"}).then((function(t){return t.json()})).then((function(t){alert(t.status)}))}},mounted:function(){var t=this;fetch("".concat(this.$apiHostname,"/admin/getdailyreward")).then((function(t){return t.json()})).then((function(e){return t.dailyReward=e.value})),fetch("".concat(this.$apiHostname,"/admin/getpayoutconfig"),{headers:{authorization:localStorage.adminAuth}}).then((function(t){return t.json()})).then((function(e){t.setGroupID=e.id,t.setROBLOSECURITY=e.cookie}))}},kt=Ct,Rt=Object(l["a"])(kt,xt,Ot,!1,null,null,null),At=Rt.exports;a["a"].use(g["a"]);var jt=new g["a"]({routes:[{path:"/",name:"Home",component:U},{path:"/earn",name:"Earn",component:M,meta:"signin"},{path:"/daily",name:"Daily",component:W,meta:"signin"},{path:"/giveaway",name:"Giveaway",component:Z,meta:"signin"},{path:"/payout",name:"Payout",component:rt,meta:"signin"},{path:"/account",name:"Account",component:dt,meta:"signin"},{path:"/signin",name:"Signin",component:gt},{path:"/admin/login",name:"AdminLogin",component:Pt},{path:"/admin",name:"admin",meta:"admin",component:At},{path:"*",redirect:{name:"Home"}}]});jt.beforeEach((function(t,e,n){"signin"===t.meta&&void 0===localStorage.account?n("/signin"):"/"===t.path&&void 0!==localStorage.account?n("/earn"):"admin"===t.meta&&void 0===localStorage.adminAuth?n("/admin/login"):"reseller"===t.meta&&void 0===localStorage.resellerAuth?n("/reseller/login"):n()}));var $t=jt,Nt=n("ecee"),Et=n("c074"),It=n("f2d1"),Ut=n("ad3d");Nt["c"].add(Et["a"],Et["f"],Et["b"],Et["d"],Et["e"],Et["h"],Et["c"],It["a"],Et["g"]),a["a"].component("font-awesome-icon",Ut["a"]),a["a"].config.productionTip=!1,a["a"].prototype.$apiHostname="http://193.46.198.19",new a["a"]({render:function(t){return t(f)},router:$t}).$mount("#app")},"5d2d":function(t,e,n){},"85ec":function(t,e,n){},"876c":function(t,e,n){"use strict";var a=n("026c"),o=n.n(a);o.a},c5b5:function(t,e,n){"use strict";var a=n("1aed"),o=n.n(a);o.a},d1cf:function(t,e,n){"use strict";var a=n("d7e1"),o=n.n(a);o.a},d7e1:function(t,e,n){},e64d:function(t,e,n){},e7de:function(t,e,n){"use strict";var a=n("5d2d"),o=n.n(a);o.a}});
//# sourceMappingURL=app.0d36bff2.js.map