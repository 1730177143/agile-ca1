"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[148],{6148:function(e,r,s){s.r(r);var i=s(2266),t=s(3030),n=s(5439),u=s(1933),o=s(610),c=s(7689),f=s(2791),a=s(184);r.default=function(e){var r=(0,c.UO)().id,s=(0,u.useQuery)(["movie",{id:r}],t.$K),l=s.data,m=s.error,v=s.isLoading,d=s.isError,h=s.refetch;if((0,f.useEffect)((function(){l&&l.results||h()}),[l,h]),v)return(0,a.jsx)(n.Z,{});if(d)return(0,a.jsx)("h1",{children:m.message});if(!l||!l.results)return(0,a.jsx)(n.Z,{});var j=l.results;return console.log(j),(0,a.jsx)(i.Z,{title:"Recommendations",movies:j,action:function(e){return(0,a.jsx)(o.Z,{movie:e})}})}}}]);
//# sourceMappingURL=148.c323877d.chunk.js.map