(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/calendar.17b75e4d.svg"},25:function(e,t,a){e.exports=a.p+"static/media/left.1caaef75.svg"},26:function(e,t,a){e.exports=a.p+"static/media/right.9a9e9d18.svg"},27:function(e,t,a){e.exports=a.p+"static/media/logo.1ae09dda.svg"},29:function(e,t,a){e.exports=a(65)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),i=(a(34),function(e){var t=e.children;return c.a.createElement("div",{className:"container"},t)}),o=(a(35),function(e){var t=e.className,a=e.id,n=e.children,r=e.onClick;return c.a.createElement("button",{className:"button ".concat(t||""),onClick:r,id:a},n)}),s=(a(36),function(e){var t=e.icon,a=e.title,r=Object(n.useRef)(null);return c.a.createElement("header",{className:"header"},c.a.createElement(i,null,c.a.createElement("a",{href:"https://yakushgleb.github.io/movie-app/",className:"header__main"},c.a.createElement(o,null,t&&c.a.createElement("img",{className:"header__icon",src:t,alt:"logo"}),a&&c.a.createElement("span",{className:"header__title"},a))),c.a.createElement("nav",{className:"header__nav",ref:r},c.a.createElement(o,null,"My List"),c.a.createElement(o,null,"Search")),c.a.createElement("span",{className:"header__burger",onClick:function(e){e.currentTarget.classList.toggle("header__burger_open"),r.current.classList.toggle("header__nav_open")}})))}),u=a(3),m=function(e){return{type:"SET_PAGE",page:e}},d=function(e){return{type:"SET_LIST",list:e}},p=a(12),f=(a(43),function(e){var t=e.title,a=e.onChange;return c.a.createElement("input",{className:"input",value:t,onChange:function(e){a(e.target.value)}})}),E=(a(44),function(e){var t=e.title,a=e.type,r=e.list,l=e.setTitle,s=e.setType,u=e.setPage,m=e.getList,d=Object(n.useState)(t),E=Object(p.a)(d,2),h=E[0],_=E[1],g=Object(n.useState)(a),b=Object(p.a)(g,2),v=b[0],j=b[1];return Object(n.useEffect)((function(){m(t,a)}),[t,a,m]),c.a.createElement("section",{className:"search"},c.a.createElement(i,null,c.a.createElement("div",{className:"search__block ".concat(r?"":"search__block_middle")},c.a.createElement(f,{title:h,onChange:_}),c.a.createElement("select",{className:"select",defaultValue:v,onChange:function(e){j(e.target.value)}},c.a.createElement("option",{value:"movie"},"Movie"),c.a.createElement("option",{value:"series"},"Series")),c.a.createElement(o,{onClick:function(){l(h),s(v),u(1)}},"Search"))))}),h=a(23),_=a.n(h).a.create({baseURL:"https://www.omdbapi.com/"}),g=function(e,t,a){return _.get("?apikey=".concat("dfdae3d4","&s=").concat(e,"&type=").concat(t,"&page=").concat(a)).then((function(e){return e.data}))},b=Object(u.b)((function(e){return{title:e.options.title,type:e.options.type,page:e.options.page,list:e.data.list}}),{setTitle:function(e){return{type:"SET_TITLE",title:e}},setType:function(e){return{type:"SET_TYPE",searchType:e}},setPage:m,setList:d,getList:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(n){g(e,t,a).then((function(e){return n(d(e.Search))}))}}})(E),v=a(24),j=a.n(v),O=(a(62),function(e){var t=e.title,a=e.poster,n=e.year;return c.a.createElement("div",{className:"card",tabIndex:"0"},c.a.createElement("img",{src:a,alt:t,className:"card__poster"}),c.a.createElement("div",{className:"card__field"},c.a.createElement("h2",{className:"card__title"},t),c.a.createElement("span",{className:"card__year"},c.a.createElement("img",{src:j.a,alt:"runtime",className:"card__icon"}),n)))}),N=a(25),y=a.n(N),T=a(26),S=a.n(T),k=(a(63),function(e){var t=e.title,a=e.type,r=e.page,l=e.list,s=e.setPage,u=e.addList,m=Object(n.useRef)(null),d=function(e){var t=m.current,a=t.clientWidth;"prev"===e.currentTarget.getAttribute("id")&&(a=-a),t.scrollBy({left:a,top:0,behavior:"smooth"})};return Object(n.useEffect)((function(){m.current.scrollTo({left:0,top:0,behavior:"smooth"})}),[t,a]),Object(n.useEffect)((function(){r>1&&u(t,a,r)}),[r]),c.a.createElement("section",{className:"slider ".concat(l?"":"slider_hidden")},c.a.createElement(i,null,c.a.createElement("div",{className:"slider__block"},c.a.createElement("div",{className:"slider__navigation"},c.a.createElement(o,{className:"slider__button",id:"prev",onClick:d},c.a.createElement("img",{className:"header__icon",src:y.a,alt:"logo"}),c.a.createElement("span",{className:"header__title"},"Prev")),c.a.createElement(o,{className:"slider__button",id:"next",onClick:d},c.a.createElement("span",{className:"header__title"},"Next"),c.a.createElement("img",{className:"header__icon",src:S.a,alt:"logo"}))),c.a.createElement("div",{className:"slider__carousel",ref:m,onScroll:function(){m.current.scrollWidth-(m.current.scrollLeft+m.current.clientWidth)===0&&s(r+1)}},l&&l.map((function(e){return c.a.createElement(O,{title:e.Title,poster:e.Poster,year:e.Year,key:"".concat(e.Title,"-").concat(e.Year)})}))))))}),L=Object(u.b)((function(e){return{title:e.options.title,type:e.options.type,page:e.options.page,list:e.data.list}}),{setPage:m,addList:function(e,t,a){return function(n){g(e,t,a).then((function(e){"False"!==e.Response?n({type:"ADD_LIST",list:e.Search}):alert(e.Error)})).catch((function(e){return alert(e)}))}}})(k),w=a(27),C=a.n(w);var P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{icon:C.a,title:"Movie App"}),c.a.createElement(b,null),c.a.createElement(L,null))},x=a(4),I=a(28),A=a(11),W=a(1),D={options:{title:"",type:"movie",page:1},data:{list:null}},M=Object(x.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE":return Object(W.a)(Object(W.a)({},e),{},{options:Object(W.a)(Object(W.a)({},e.options),{},{title:t.title})});case"SET_TYPE":return Object(W.a)(Object(W.a)({},e),{},{options:Object(W.a)(Object(W.a)({},e.options),{},{type:t.searchType})});case"SET_PAGE":return Object(W.a)(Object(W.a)({},e),{},{options:Object(W.a)(Object(W.a)({},e.options),{},{page:t.page})});case"SET_LIST":return Object(W.a)(Object(W.a)({},e),{},{data:Object(W.a)(Object(W.a)({},e.data),{},{list:t.list})});case"ADD_LIST":return Object(W.a)(Object(W.a)({},e),{},{data:Object(W.a)(Object(W.a)({},e.data),{},{list:[].concat(Object(A.a)(e.data.list),Object(A.a)(t.list))})});default:return e}}),Object(x.a)(I.a));window.store=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:M},c.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.39e01837.chunk.js.map