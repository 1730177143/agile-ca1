"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[939],{3054:function(n,e,r){r.d(e,{Z:function(){return j}});var t=r(9439),i=r(2791),o=r(7394),a=r(8264),l=r(5527),s=r(3400),c=r(890),u=r(7689),f=r(184),d=function(n){var e=n.title,r=(0,u.s0)();return(0,f.jsxs)(l.Z,{component:"div",sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginBottom:1.5},children:[(0,f.jsx)(s.Z,{"aria-label":"go back",onClick:function(){return r(-1)},children:(0,f.jsx)(o.Z,{color:"primary",fontSize:"large"})}),(0,f.jsx)(c.Z,{variant:"h4",component:"h3",children:e}),(0,f.jsx)(s.Z,{"aria-label":"go forward",onClick:function(){return r(1)},children:(0,f.jsx)(a.Z,{color:"primary",fontSize:"large"})})]})},x=r(1889),m=(0,i.lazy)((function(){return Promise.all([r.e(391),r.e(113)]).then(r.bind(r,2113))})),h=(0,i.lazy)((function(){return Promise.all([r.e(94),r.e(227)]).then(r.bind(r,1227))}));var j=function(n){var e=n.actors,r=n.title,o=n.action,a=(0,i.useState)(""),l=(0,t.Z)(a,2),s=l[0],c=l[1],u=e.filter((function(n){return n.name&&-1!==n.name.toLowerCase().search(s.toLowerCase())}));return(0,f.jsxs)(x.ZP,{container:!0,sx:{padding:"20px"},children:[(0,f.jsx)(x.ZP,{item:!0,xs:12,children:(0,f.jsx)(d,{title:r})}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)("h1",{children:"Building list"}),children:(0,f.jsxs)(x.ZP,{item:!0,container:!0,spacing:5,children:[(0,f.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,f.jsx)(m,{onUserInput:function(n,e){"name"===n&&c(e)},nameFilter:s})},"find"),(0,f.jsx)(h,{action:o,actors:u})]})})]})}},9939:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(2791),i=r(3054),o=r(1413),a=r(1933),l=r(3030),s=r(5439),c=r(3400),u=r(4294),f=r(184),d=function(n){var e=n.actor,r=(0,t.useContext)(o.m);return(0,f.jsx)(c.Z,{"aria-label":"remove from follows",onClick:function(n){n.preventDefault(),r.removeFromFollows(e)},children:(0,f.jsx)(u.Z,{variant:"outlined",size:"small",color:"primary",children:"Unfollow"})})},x=function(){var n=(0,t.useContext)(o.m).follows,e=(0,a.useQueries)(n.map((function(n){return{queryKey:["actor",{id:n}],queryFn:l.I1}})));if(e.find((function(n){return!0===n.isLoading})))return(0,f.jsx)(s.Z,{});console.log(e);var r=e.map((function(n){return n.data}));return(0,f.jsx)(i.Z,{title:"Following Actors",actors:r,action:function(n){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(d,{actor:n})})}})}}}]);
//# sourceMappingURL=939.f250e22e.chunk.js.map