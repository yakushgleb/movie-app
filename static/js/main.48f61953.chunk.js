(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/calendar.17b75e4d.svg"},36:function(e,t,a){e.exports=a.p+"static/media/left.1caaef75.svg"},37:function(e,t,a){e.exports=a.p+"static/media/right.9a9e9d18.svg"},38:function(e,t,a){e.exports=a.p+"static/media/face.9f965a85.svg"},39:function(e,t,a){e.exports=a.p+"static/media/settings_white.5b0cc761.svg"},40:function(e,t,a){e.exports=a.p+"static/media/history.dd742d74.svg"},41:function(e,t,a){e.exports=a.p+"static/media/list.654fd082.svg"},42:function(e,t,a){e.exports=a.p+"static/media/logo.1ae09dda.svg"},45:function(e,t,a){e.exports=a(81)},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=a(10),l=a(9),s=a(3),u=(a(54),function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}),m=(a(55),function(e){var t=e.icon,a=e.title,c=Object(n.useRef)(null);return r.a.createElement("header",{className:"header"},r.a.createElement(u,null,r.a.createElement(o.b,{to:"about",className:"button button_large header__main",activeClassName:"button_selected"},r.a.createElement("img",{src:t,alt:"logo"}),r.a.createElement("span",null,a)),r.a.createElement("nav",{className:"header__nav",ref:c},r.a.createElement(o.b,{exact:!0,to:"",className:"button",activeClassName:"button_selected"},"Search"),r.a.createElement(o.b,{to:"profile",className:"button",activeClassName:"button_selected"},"Profile")),r.a.createElement("span",{className:"header__burger",onClick:function(e){e.currentTarget.classList.toggle("header__burger_open"),c.current.classList.toggle("header__nav_open")}})))}),f=function(e){return{type:"SET_PAGE",page:e}},p=function(e){return{type:"SET_LIST",list:e}},d=function(e){return{type:"SET_PROFILE_NAME",name:e}},E=function(e){return{type:"SET_PROFILE_LIST",list:e}},_=function(e){return{type:"SET_PROFILE_HISTORY",history:e}},b=function(e){return{type:"ADD_PROFILE_HISTORY",history:e}},h=(a(57),function(e){var t=e.className,a=e.id,n=e.children,c=e.onClick;return r.a.createElement("button",{className:"button ".concat(t||""),onClick:c,id:a},n)}),g=(a(58),function(e){var t=e.value,a=e.type,n=e.onChange;return r.a.createElement("input",{className:"input",type:a,value:t,onChange:function(e){n(e.target.value)}})}),y=(a(59),function(e){var t=e.title,a=e.type,n=e.list,c=e.setTitle,i=e.setType,o=e.getList;return r.a.createElement("section",{className:"search"},r.a.createElement(u,null,r.a.createElement("div",{className:"search__block ".concat(n?"":"search__block_middle")},r.a.createElement(g,{value:t,type:"search",onChange:c}),r.a.createElement("select",{className:"select",defaultValue:a,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:"movie"},"Movie"),r.a.createElement("option",{value:"series"},"Series")),r.a.createElement(h,{onClick:function(e){return o(t,a)}},"Search"))))}),v=a(34),O=a.n(v).a.create({baseURL:"https://www.omdbapi.com/"}),N=window.localStorage,j=function(e,t,a){return O.get("?apikey=".concat("dfdae3d4","&s=").concat(e,"&type=").concat(t,"&page=").concat(a)).then((function(e){return e.data}))},P=function(e){return new Promise((function(t,a){N.setItem("name",e),t(e)}))},L=function(){return new Promise((function(e,t){var a=N.getItem("name");a||(a="User"),e(a)}))},T=function(e){return new Promise((function(t,a){N.setItem("list",e),t(e)}))},k=function(){return new Promise((function(e,t){e(N.getItem("list"))}))},S=function(e){return new Promise((function(t,a){N.setItem("history",e),t(e)}))},I=function(){return new Promise((function(e,t){e(N.getItem("history"))}))},C=function(){return new Promise((function(e,t){N.setItem("history",""),e("")}))},w=function(e){return function(t){T(e).catch((function(e){return alert("thunks error:",e)}))}},R=function(e){return function(t){S(JSON.stringify(e)).catch((function(e){return alert("thunks error:",e)}))}},x=Object(l.b)((function(e){return{title:e.options.title,type:e.options.type,page:e.options.page,list:e.data.list}}),{setTitle:function(e){return{type:"SET_TITLE",title:e}},setType:function(e){return{type:"SET_TYPE",searchType:e}},setPage:f,setList:p,getList:function(e,t,a){return function(n){e&&j(e,t,a).then((function(e){"False"!==e.Response?n(p(e.Search)):alert(e.Error)})).then((function(a){return n(b({title:e,type:t}))})).catch((function(e){return alert("thunks error:",e)}))}},addProfileHistoryAC:b})(y),H=a(35),A=a.n(H),F=(a(77),function(e){var t=e.title,a=e.poster,n=e.year;return r.a.createElement("div",{className:"card",tabIndex:"0"},r.a.createElement("img",{src:a,alt:t,className:"card__poster"}),r.a.createElement("div",{className:"card__field"},r.a.createElement("h2",{className:"card__title"},t),r.a.createElement("span",{className:"card__year"},r.a.createElement("img",{src:A.a,alt:"runtime",className:"card__icon"}),n)))}),Y=a(36),D=a.n(Y),M=a(37),W=a.n(M),J=(a(78),function(e){var t=e.title,a=e.type,c=e.page,i=e.list,o=e.setPage,l=e.addList,s=Object(n.useRef)(null),m=function(e){var t=s.current,a=t.clientWidth;"prev"===e.currentTarget.getAttribute("id")&&(a=-a),t.scrollBy({left:a,top:0,behavior:"smooth"}),s.current.scrollWidth-(s.current.scrollLeft+s.current.clientWidth)<t.clientWidth&&(console.log("setPage"),o(c+1))};return Object(n.useEffect)((function(){s.current.scrollTo({left:0,top:0,behavior:"smooth"})}),[t,a]),Object(n.useEffect)((function(){c>1&&l(t,a,c)}),[c]),r.a.createElement("section",{className:"slider ".concat(i?"":"slider_hidden")},r.a.createElement(u,null,r.a.createElement("div",{className:"slider__block"},r.a.createElement("div",{className:"slider__navigation"},r.a.createElement(h,{className:"slider__button",id:"prev",onClick:m},r.a.createElement("img",{className:"header__icon",src:D.a,alt:"logo"}),r.a.createElement("span",{className:"header__title"},"Prev")),r.a.createElement(h,{className:"slider__button",id:"next",onClick:m},r.a.createElement("span",{className:"header__title"},"Next"),r.a.createElement("img",{className:"header__icon",src:W.a,alt:"logo"}))),r.a.createElement("div",{className:"slider__carousel",ref:s},i&&i.map((function(e){return r.a.createElement(F,{title:e.Title,poster:e.Poster,year:e.Year,key:"".concat(e.Title,"-").concat(e.Year)})}))))))}),U=Object(l.b)((function(e){return{title:e.options.title,type:e.options.type,page:e.options.page,list:e.data.list}}),{setPage:f,addList:function(e,t,a){return function(n){j(e,t,a).then((function(e){"False"!==e.Response?n({type:"ADD_LIST",list:e.Search}):alert(e.Error)})).catch((function(e){return alert("thunks error:",e)}))}}})(J),B=a(44),G=(a(79),a(38)),V=a.n(G),$=a(39),q=a.n($),z=a(40),K=a.n(z),Q=a(41),X=a.n(Q),Z=function(e){var t=e.name,a=e.history,c=e.list,i=e.setProfileName,o=(e.setProfileHistory,e.setProfileList,e.clearProfileHistory),l=Object(n.useRef)(null),s=Object(n.useRef)(null),m=Object(n.useRef)(null),f=Object(n.useState)(t),p=Object(B.a)(f,2),d=p[0],E=p[1];Object(n.useEffect)((function(){E(t)}),[t]);var _=function(e){(e.target.classList.contains("settings")||e.target.closest("#settings-button"))&&l.current.classList.toggle("modal_open"),(e.target.classList.contains("history")||e.target.closest("#history-button"))&&s.current.classList.toggle("modal_open"),(e.target.classList.contains("list")||e.target.closest("#list-button"))&&m.current.classList.toggle("modal_open"),e.target.closest("#settings-button-close")&&l.current.classList.remove("modal_open"),e.target.closest("#history-button-close")&&s.current.classList.remove("modal_open"),e.target.closest("#list-button-close")&&m.current.classList.remove("modal_open")};return r.a.createElement("section",{className:"profile"},r.a.createElement(u,null,r.a.createElement("div",{className:"profile__block"},r.a.createElement("div",{className:"userinfo"},r.a.createElement("img",{alt:"avatar",src:V.a,className:"userinfo__avatar"}),r.a.createElement("h1",{className:"userinfo__username"},t),r.a.createElement(h,{className:"button_medium",id:"settings-button",onClick:_},r.a.createElement("img",{src:q.a,alt:"icon"}),r.a.createElement("span",null,"Settings")),r.a.createElement(h,{className:"button_medium",id:"history-button",onClick:_},r.a.createElement("img",{src:K.a,alt:"icon"}),r.a.createElement("span",null,"History")),r.a.createElement(h,{className:"button_medium",id:"list-button",onClick:_},r.a.createElement("img",{src:X.a,alt:"icon"}),r.a.createElement("span",null,"My list"))),r.a.createElement("div",{className:"modal settings",ref:l,onClick:_},r.a.createElement("div",{className:"modal__content"},r.a.createElement("span",{className:"modal__info"},"Username:"),r.a.createElement("div",{className:"modal__panel"},r.a.createElement(g,{type:"text",value:d,onChange:E}),r.a.createElement(h,{className:"button_outlined",onClick:function(e){return i(d)}},"Save")),r.a.createElement("div",{className:"modal__panel"},r.a.createElement(h,{className:"button_outlined",onClick:function(e){return o()}},"Clear history"),r.a.createElement(h,{className:"button_outlined"},"Clear list")),r.a.createElement("div",{className:"modal__panel"},r.a.createElement(h,{id:"settings-button-close",onClick:_},"Okay")))),r.a.createElement("div",{className:"modal history",ref:s,onClick:_},r.a.createElement("div",{className:"modal__content"},r.a.createElement("span",{className:"modal__info"},"Your history:"),r.a.createElement("ul",{className:"modal__list"},a&&a.length?a.map((function(e,t){return r.a.createElement("li",{key:"".concat(e.title,"(").concat(t,")")},e.title,", ",e.type)})):"Your history is empty"),r.a.createElement("div",{className:"modal__panel"},r.a.createElement(h,{id:"history-button-close",onClick:_},"Okay")))),r.a.createElement("div",{className:"modal list",ref:m,onClick:_},r.a.createElement("div",{className:"modal__content"},r.a.createElement("span",{className:"modal__info"},"Your list:"),r.a.createElement("ul",{className:"modal__list"},c&&c.length?c.map((function(e,t){return r.a.createElement("li",{key:"".concat(e.title,"(").concat(t,")")},e.title,", ",e.type)})):"Your list is empty"),r.a.createElement("div",{className:"modal__panel"},r.a.createElement(h,{id:"list-button-close",onClick:_},"Okay")))))))},ee=Object(l.b)((function(e){return{name:e.profile.name,list:e.profile.list,history:e.profile.history}}),{setProfileName:function(e){return function(t){P(e).then((function(e){return t(d(e))})).catch((function(e){return alert("thunks error:",e)}))}},setProfileHistory:R,setProfileList:w,clearProfileHistory:function(){return function(e){C().then((function(t){return e(_(t))})).catch((function(e){return alert("thunks error:",e)}))}}})(Z),te=a(42),ae=a.n(te);var ne=Object(l.b)((function(e){return{name:e.profile.name,list:e.profile.list,history:e.profile.history}}),{getProfileName:function(){return function(e){L().then((function(t){return e(d(t))})).catch((function(e){return alert("thunks error:",e)}))}},getProfileList:function(){return function(e){k().then((function(t){t&&e(E(t))})).catch((function(e){return alert("thunks error:",e)}))}},getProfileHistory:function(){return function(e){I().then((function(t){t&&e(_(JSON.parse(t)))})).catch((function(e){return alert("thunks error:",e)}))}},setProfileList:w,setProfileHistory:R})((function(e){var t=e.getProfileName,a=e.getProfileList,c=e.getProfileHistory,i=e.setProfileList,o=e.setProfileHistory,l=e.list,u=e.history;return Object(n.useEffect)((function(){t(),a(),c()}),[]),Object(n.useEffect)((function(){l&&l.length&&i(l)}),[l]),Object(n.useEffect)((function(){u&&u.length&&o(u)}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{icon:ae.a,title:"Movie App"}),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(x,null),r.a.createElement(U,null)),r.a.createElement(s.a,{path:"/profile"},r.a.createElement(ee,null)))})),re=a(13),ce=a(43),ie=a(15),oe=a(1),le={options:{title:"",type:"movie",page:1},data:{list:null},profile:{name:"User",list:[],history:[]}},se=Object(re.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE":return Object(oe.a)(Object(oe.a)({},e),{},{options:Object(oe.a)(Object(oe.a)({},e.options),{},{title:t.title})});case"SET_TYPE":return Object(oe.a)(Object(oe.a)({},e),{},{options:Object(oe.a)(Object(oe.a)({},e.options),{},{type:t.searchType})});case"SET_PAGE":return Object(oe.a)(Object(oe.a)({},e),{},{options:Object(oe.a)(Object(oe.a)({},e.options),{},{page:t.page})});case"SET_LIST":return Object(oe.a)(Object(oe.a)({},e),{},{data:Object(oe.a)(Object(oe.a)({},e.data),{},{list:t.list})});case"ADD_LIST":return Object(oe.a)(Object(oe.a)({},e),{},{data:Object(oe.a)(Object(oe.a)({},e.data),{},{list:[].concat(Object(ie.a)(e.data.list),Object(ie.a)(t.list))})});case"SET_PROFILE_NAME":return Object(oe.a)(Object(oe.a)({},e),{},{profile:Object(oe.a)(Object(oe.a)({},e.profile),{},{name:t.name})});case"SET_PROFILE_LIST":return Object(oe.a)(Object(oe.a)({},e),{},{profile:Object(oe.a)(Object(oe.a)({},e.profile),{},{list:t.list})});case"ADD_PROFILE_LIST":return Object(oe.a)(Object(oe.a)({},e),{},{profile:Object(oe.a)(Object(oe.a)({},e.profile),{},{list:[].concat(Object(ie.a)(e.profile.list),[t.list])})});case"SET_PROFILE_HISTORY":return Object(oe.a)(Object(oe.a)({},e),{},{profile:Object(oe.a)(Object(oe.a)({},e.profile),{},{history:t.history})});case"ADD_PROFILE_HISTORY":return Object(oe.a)(Object(oe.a)({},e),{},{profile:Object(oe.a)(Object(oe.a)({},e.profile),{},{history:[].concat(Object(ie.a)(e.profile.history),[t.history])})});default:return e}}),Object(re.a)(ce.a));window.store=se;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:se},r.a.createElement(o.a,null,r.a.createElement(ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.48f61953.chunk.js.map