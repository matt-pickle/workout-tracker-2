(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(59),o=n.n(c),u=(n(4),n(2)),l=n(1),i=r.a.createContext();function s(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)([]),s=Object(l.a)(u,2),m=s[0],f=s[1],d=Object(a.useState)([]),E=Object(l.a)(d,2),b=E[0],v=E[1],h=Object(a.useState)(!0),p=Object(l.a)(h,2),g=p[0],O=p[1];return Object(a.useEffect)((function(){fetch("/user/getUser").then((function(e){e.ok?e.text().then((function(e){o(e),fetch("/workout/getHistory?user=".concat(e)).then((function(e){e.ok?e.text().then((function(e){f(JSON.parse(e))})):e.text().then((function(e){console.error(e)}))})),fetch("/weight/getHistory?user=".concat(e)).then((function(e){e.ok?e.text().then((function(e){v(JSON.parse(e))})):e.text().then((function(e){console.error(e)}))}))})):e.text().then((function(e){console.error(e)}))}))}),[g]),r.a.createElement(i.Provider,{value:{user:c,workoutHistory:m,weightHistory:b,updateContext:function(){O((function(e){return!e}))}}},e.children)}var m=n(8);var f=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement(m.b,{to:e.link,className:"button nav-button ".concat(c),onMouseEnter:function(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")},onMouseLeave:function(){o("")},onTouchStart:function(){o("hovered")},onTouchEnd:function(){o("")}},e.text)};var d=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(f,{text:"HISTORY",link:"/user/history"}),r.a.createElement(f,{text:"CURRENT",link:"/user/current"}),r.a.createElement(f,{text:"WEIGHT",link:"/user/weight"}))},E=n(12),b=n(20),v=n(40);var h=r.a.forwardRef((function(e,t){var n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){e.addToLift(e.name,o)}),[o]),r.a.createElement("div",{className:"input-box",id:e.name+"-input-box"},r.a.createElement("label",{htmlFor:e.name},e.name),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"text",id:e.name,value:o,onChange:function(e){u(e.target.value)},ref:t})))}));var p=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("button",{className:"button ".concat(c),id:e.id,onMouseEnter:function(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")},onMouseLeave:function(){o("")},onTouchStart:function(){o("hovered")},onTouchEnd:function(){o("")},onClick:e.onClick},e.text)};var g=r.a.forwardRef((function(e,t){var n=Object(a.useState)([1]),c=Object(l.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)({id:e.id}),s=Object(l.a)(i,2),m=s[0],f=s[1],d=Object(a.useRef)(null);function g(e,t){f(Object(v.a)(Object(v.a)({},m),{},Object(E.a)({},e,t)))}Object(a.useEffect)((function(){d.current.focus()}),[o]),Object(a.useEffect)((function(){e.addToWorkout(m)}),[m]);var O=o.map((function(e){return r.a.createElement(h,{name:"Set ".concat(e),key:e,ref:d,addToLift:g})}));return r.a.createElement("div",{className:"lift-box"},r.a.createElement(h,{name:"Lift",addToLift:g,ref:t}),r.a.createElement(h,{name:"Weight",addToLift:g}),O,r.a.createElement(p,{text:"ADD SET",id:"add-set-button",onClick:function(){var e=o.length+1;u((function(t){return[].concat(Object(b.a)(t),[e])}))}}))}));var O=function(e){function t(e){return e<10?"0".concat(e):e}for(var n=[],a=0;a<=59;a++)n.push(a);for(var c=n.map((function(e){return r.a.createElement("option",{key:e},t(e))})),o=[],u=0;u<=59;u++)o.push(u);var l=o.map((function(e){return r.a.createElement("option",{key:e},t(e))}));return r.a.createElement("form",{className:"timer-inputs"},r.a.createElement("select",{id:"minutes-input",value:e.minutes,onChange:function(t){e.setMinutes(t.target.value)}},c),r.a.createElement("select",{id:"seconds-input",value:e.seconds,onChange:function(t){e.setSeconds(t.target.value)}},l))};var j=function(e){var t=Object(a.useState)(e.minutes),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(e.seconds),i=Object(l.a)(u,2),s=i[0],m=i[1],f=Date.now()+(6e4*e.minutes+1e3*e.seconds);function d(e){return e<10&&e>=0?"0".concat(e):e}function E(){m(d(Math.floor((f-Date.now())/1e3%60))),o(d(Math.floor((f-Date.now())/6e4%60)))}return Object(a.useEffect)((function(){var e;return E(),e=setInterval(E,1e3),function(){return clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement("p",{className:"timer-display"},"".concat(c," : ").concat(s)),void("00"===c&&"00"===s&&(alert("Times Up!"),e.setTimerIsRunning(!1))))};var x=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("00"),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)("00"),f=Object(l.a)(m,2),d=f[0],E=f[1],b=r.a.createElement(p,{text:"START",id:"start-button",onClick:function(){c(!0)}}),v=r.a.createElement(p,{text:"STOP",id:"stop-button",onClick:function(){c(!1)}});return r.a.createElement("div",{className:"timer"},n?r.a.createElement(j,{minutes:i,seconds:d,setTimerIsRunning:c}):r.a.createElement(O,{minutes:i,setMinutes:s,seconds:d,setSeconds:E}),n?v:b)};var k=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{id:e.id},r.a.createElement(p,{text:"LOGOUT",onClick:function(){fetch("/user/logout").then((function(e){e.ok?o(!0):console.error("Logout failed")}))}}),c?r.a.createElement(u.a,{to:"/login"}):null)};var S=function(){var e=Object(a.useState)([1]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(l.a)(o,2),s=u[0],m=u[1],f=Object(a.useState)(""),d=Object(l.a)(f,2),v=d[0],h=d[1],O=Object(a.useRef)(null),j=Object(a.useContext)(i),S=j.user,w=j.updateContext;function N(e){s.some((function(t){return t.id===e.id}))?m(s.map((function(t){return t.id===e.id?e:t}))):m([].concat(Object(b.a)(s),[e]))}Object(a.useEffect)((function(){O.current.focus()}),[n]);var y=n.map((function(e){return r.a.createElement(g,{key:e,id:e,ref:O,addToWorkout:N})}));return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"lifts-container"},y,r.a.createElement(p,{text:"ADD LIFT",onClick:function(){var e=n.length+1;c((function(t){return[].concat(Object(b.a)(t),[e])}))}})),r.a.createElement(p,{text:"SAVE WORKOUT",id:"save-button",onClick:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),a=e.getFullYear(),r="".concat(t,"-").concat(n,"-").concat(a),c=Object(E.a)({},r,s);fetch("/workout/addWorkout?user=".concat(S,"&workoutObj=").concat(JSON.stringify(c)),{method:"POST"}).then((function(e){e.ok?(h("Workout saved to your history!"),w()):e.text().then((function(e){h("Error: Workout was not saved successfully."),console.error(e)}))}))}}),r.a.createElement("p",{className:"message"},v),r.a.createElement(x,null),r.a.createElement(k,{id:"logout-button-current"}))};var w=function(e){return r.a.createElement("div",{className:"past-lift"},r.a.createElement("p",{className:"past-lift-text"},r.a.createElement("span",{className:"bold-text"},"LIFT:\xa0"),e.lift,r.a.createElement("span",{className:"bold-text"},"\xa0\xa0\xa0WEIGHT:\xa0"),e.weight,"lbs"),r.a.createElement("p",{className:"past-reps-text"},e.reps))};var N=function(e){var t=e.workoutArr.map((function(e){var t,n=[],a=Object.keys(e).length-2;for(t=1;t<a;t++)n.push(r.a.createElement("span",null,r.a.createElement("span",{className:"bold-text"},"SET ",t,":")," ",e["Set ".concat(t)]," reps\xa0\xa0\xa0"));return r.a.createElement(w,{lift:e.Lift,weight:e.Weight,reps:n,key:e.id})}));return r.a.createElement("div",{className:"past-workout"},r.a.createElement("p",{className:"date-text"},e.date),t,r.a.createElement(p,{text:"REMOVE",id:"remove-button",onClick:function(){return e.removeWorkout(e.id)}}))};var y=function(){var e=Object(a.useContext)(i),t=e.user,n=e.workoutHistory,c=e.updateContext;function o(e){var a=n,r=a.filter((function(t){return a.indexOf(t)+1!==e}));fetch("/workout/updateHistory?user=".concat(t,"&workoutHistory=").concat(JSON.stringify(r)),{method:"PUT"}).then((function(e){e.ok?c():e.text().then((function(e){console.error(e)}))}))}var u=n?n.map((function(e){var t=e,a=Object.keys(t);return r.a.createElement(N,{date:a,workoutArr:t[a],removeWorkout:o,id:n.indexOf(e)+1,key:n.indexOf(e)+1})})):null;return r.a.createElement("div",{className:"history"},u,r.a.createElement(k,{id:"logout-button-history"}))};var T=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(i),u=o.user,s=o.updateContext;return r.a.createElement("div",{className:"input-box"},r.a.createElement("label",{htmlFor:"weight"},"Current Weight"),r.a.createElement("div",{className:"input-container",id:"weight-input-container"},r.a.createElement("input",{type:"text",id:"weight",value:n,onChange:function(e){c(e.target.value)}})),r.a.createElement(p,{text:"SAVE",onClick:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate(),r=e.getFullYear(),o="".concat(t,"-").concat(a,"-").concat(r),l=Object(E.a)({},o,n);fetch("/weight/addWeight?user=".concat(u,"&weightObj=").concat(JSON.stringify(l)),{method:"POST"}).then((function(e){e.ok?(c(""),s()):e.text().then((function(e){console.error(e)}))}))}}))},C=n(61);var W=function(){var e=Object(a.useContext)(i).weightHistory,t={labels:e?e.map((function(e){return Object.keys(e)[0]})):null,datasets:[{label:"Weight",data:e?e.map((function(e){return Object.values(e)[0]})):null,borderColor:"rgb(100, 100, 100)",borderWidth:3,pointBackgroundColor:"rgb(100, 100, 100)"}]};return r.a.createElement("div",{className:"weight-chart"},r.a.createElement(C.a,{data:t,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{lineWidth:1,color:"rgb(0, 0, 0)"},ticks:{fontColor:"rgb(100, 100, 100)",fontSize:16,fontStyle:"bold"}}],yAxes:[{gridLines:{lineWidth:1,color:"rgb(0, 0, 0)"},ticks:{fontColor:"rgb(100, 100, 100)",fontSize:16,fontStyle:"bold",lineHeight:2}}]}}}))};var R=function(){return r.a.createElement("div",{className:"weight-container"},r.a.createElement(T,null),r.a.createElement(W,null),r.a.createElement(k,null))};var L=function(){return r.a.createElement("div",{className:"user-container"},r.a.createElement(d,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/user/current"},r.a.createElement(S,null)),r.a.createElement(u.b,{path:"/user/history"},r.a.createElement(y,null)),r.a.createElement(u.b,{path:"/user/weight"},r.a.createElement(R,null))))};var I=function(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("/user/getUser").then((function(e){e.ok?o(!0):e.text().then((function(e){console.error(e),o(!1)}))}))}),[]),c?r.a.createElement(u.b,e):r.a.createElement(u.a,{to:"/login"})};var P=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],f=i[1],d=Object(a.useState)(),E=Object(l.a)(d,2),b=E[0],v=E[1];return r.a.createElement("div",{className:"register"},r.a.createElement("p",{className:"reg-title"},"Register new user"),b?r.a.createElement("p",null,"***",b,"***"):null,r.a.createElement("div",{className:"input-box reg-input-box"},r.a.createElement("label",{htmlFor:"reg-username"},"Username"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"text",id:"reg-username",value:c,onChange:function(e){o(e.target.value)}}))),r.a.createElement("div",{className:"input-box reg-input-box"},r.a.createElement("label",{htmlFor:"reg-password"},"Password"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"password",id:"reg-password",value:s,onChange:function(e){f(e.target.value)}}))),r.a.createElement(p,{text:"REGISTER",onClick:function(){fetch("/user/register?username=".concat(c,"&password=").concat(s),{method:"POST"}).then((function(t){t.ok?e.history.push("/"):t.text().then((function(e){v(e),console.error(e)}))})),o(""),f("")}}),r.a.createElement("p",{className:"reg-text"},"Already have an account?"),r.a.createElement(m.b,{to:"/login"},r.a.createElement(p,{text:"GO TO LOGIN PAGE"})))};var M=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],f=i[1],d=Object(a.useState)(),E=Object(l.a)(d,2),b=E[0],v=E[1];return r.a.createElement("div",{className:"register"},b?r.a.createElement("p",null,"***",b,"***"):null,r.a.createElement("div",{className:"input-box reg-input-box"},r.a.createElement("label",{htmlFor:"reg-username"},"Username"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"text",id:"reg-username",value:c,onChange:function(e){o(e.target.value)}}))),r.a.createElement("div",{className:"input-box reg-input-box"},r.a.createElement("label",{htmlFor:"reg-password"},"Password"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"password",id:"reg-password",value:s,onChange:function(e){f(e.target.value)}}))),r.a.createElement(p,{text:"LOGIN",onClick:function(){fetch("/user/login?username=".concat(c,"&password=").concat(s),{method:"POST"}).then((function(t){t.ok?e.history.push("/user/current"):t.text().then((function(e){v(e),console.error(e)}))})),o(""),f("")}}),r.a.createElement("p",{className:"reg-text"},"Don't have an account?"),r.a.createElement(m.b,{to:"/register"},r.a.createElement(p,{text:"REGISTER NEW USER"})),r.a.createElement("p",{className:"reg-text"}," or enter ",r.a.createElement("span",{className:"lowercase"},'"guest"'),r.a.createElement("br",null),"as username and pwd"))};var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(u.a,{to:"/user"})),r.a.createElement(I,{path:"/user"},r.a.createElement(s,null,r.a.createElement(L,null))),r.a.createElement(u.b,{path:"/register",component:P}),r.a.createElement(u.b,{path:"/login",component:M})))};o.a.render(r.a.createElement(m.a,null,r.a.createElement(A,null)),document.getElementById("root"))},4:function(e,t,n){},63:function(e,t,n){e.exports=n(164)}},[[63,1,2]]]);
//# sourceMappingURL=main.35caeef7.chunk.js.map