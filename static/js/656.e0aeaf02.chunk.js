"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[656],{9741:function(e,t,n){n.d(t,{n2:function(){return v},sU:function(){return p},Ap:function(){return g}});var r=n(2982),c=n(5861),a=n(885),o=n(4687),i=n.n(o),u=n(409),s=n(2791),p=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],o=t[1],p=(0,s.useState)(!0),f=(0,a.Z)(p,2),l=f[0],v=f[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.lm)();case 3:t=e.sent,o((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:l}},f=n(2007),l=n.n(f),v=function(e,t){var n=(0,s.useState)({}),r=(0,a.Z)(n,2),o=r[0],u=r[1],p=(0,s.useState)(!0),f=(0,a.Z)(p,2),l=f[0],v=f[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t(e);case 3:r=n.sent,u(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),{movieInfo:o,isLoading:l}};v.propTypes=(l().string.isRequired,l().func.isRequired);var h=n(6731),d=n(5264),g=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],p=(0,s.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("movies")))&&void 0!==e?e:[]})),f=(0,a.Z)(p,2),l=f[0],v=f[1],g=(0,s.useState)(!1),m=(0,a.Z)(g,2),b=m[0],w=m[1],y=(0,h.lr)(),x=(0,a.Z)(y,2),Z=x[0],O=x[1];(0,s.useEffect)((function(){window.localStorage.setItem("movies",JSON.stringify(l))}),[l]),(0,s.useEffect)((function(){if(n){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,u.y_)(n);case 4:0===(t=e.sent).length?d.Notify.failure("Sorry! There is no photo with this name. Try something else!"):v((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,O({query:n}),w(!1),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n,O]);return{isLoading:b,movies:l,searchParams:Z,addValue:function(e){var t=e.inputValue;t!==n?(o(t),v([])):o(t)}}}},1656:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r,c,a,o,i,u,s,p=n(8683),f=n(4925),l=n(7689),v=n(3888),h=n(9741),d=n(409),g=n(168),m=n(5397),b=m.Z.ul(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),w=m.Z.li(c||(c=(0,g.Z)(["\n  flex-basis: calc((100% - 40px) / 2);\n  text-align: center;\n"]))),y=m.Z.img(a||(a=(0,g.Z)(["\n  display: block;\n  width: 100%;\n"]))),x=m.Z.h4(o||(o=(0,g.Z)(["\n  font-size: 22px;\n  font-weight: 400;\n"]))),Z=m.Z.p(i||(i=(0,g.Z)(["\n  font-size: 26px;\n  font-weight: 700;\n"]))),O=n(184),j=function(e){var t=e.name,n=e.character,r=e.profile_path;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y,{src:"https://www.themoviedb.org/t/p/w500".concat(r),alt:n}),(0,O.jsxs)(b,{children:[(0,O.jsxs)(w,{children:[(0,O.jsx)(x,{children:"Name"}),(0,O.jsx)(Z,{children:t})]}),(0,O.jsxs)(w,{children:[(0,O.jsx)(x,{children:"Character"}),(0,O.jsx)(Z,{children:n})]})]})]})},k=m.Z.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  margin-top: 20px;\n"]))),S=m.Z.li(s||(s=(0,g.Z)(["\n  flex-basis: calc((100% - 80px) / 3);\n"]))),_=["id"],P=function(){var e=(0,l.UO)().id,t=(0,h.n2)(e,d.OX),n=t.movieInfo,r=t.isLoading,c=n.cast;return r&&n!=={}?(0,O.jsx)(v.Z,{}):(0,O.jsx)(k,{children:c.map((function(e){var t=e.id,n=(0,f.Z)(e,_);return(0,O.jsx)(S,{children:(0,O.jsx)(j,(0,p.Z)({},n))},t)})).filter((function(e,t){return t<=8}))})}},409:function(e,t,n){n.d(t,{GZ:function(){return p},OX:function(){return f},lm:function(){return u},u9:function(){return l},y_:function(){return s}});var r=n(5861),c=n(4687),a=n.n(c),o=n(1044),i="fd7341fdf0f2e94a335192ece09ea376",u=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/week",e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/week","?api_key=").concat(i,"&page=1"));case 4:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1),console.error("Something wrong! Can not get full trends"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(i,"&query=").concat(t,"&page=1"));case 4:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1),console.error("Something wrong! Can not search films"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(i));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.error("Something wrong! Can not search films by ID"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat(i));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.error("Something wrong! Can not search films by ID"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat(i));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.error("Something wrong! Can not search films by ID"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},8683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return a}})},4925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=656.e0aeaf02.chunk.js.map