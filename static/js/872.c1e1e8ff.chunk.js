"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[872],{4872:function(e,t,r){r.r(t);var i=r(2791),s=r(3030),n=r(2266),a=r(1933),o=r(5439),u=r(610),f=r(7689),c=r(184);t.default=function(e){var t=(0,f.UO)().id,r=(0,a.useQuery)(["movie",{id:t}],s.zv),v=r.data,l=r.refetch,d=r.error,m=r.isLoading,h=r.isError;if((0,i.useEffect)((function(){v&&v.cast[0]&&v.cast[0].title||l()}),[v,l]),m)return(0,c.jsx)(o.Z,{});if(h)return(0,c.jsx)("h1",{children:d.message});if(!v||!v.cast[0].title)return(0,c.jsx)(o.Z,{});var j=v.cast,x=j.filter((function(e){return e.favorite}));return localStorage.setItem("favorites",JSON.stringify(x)),(0,c.jsx)(n.Z,{title:"Movie Credits",movies:j,action:function(e){return(0,c.jsx)(u.Z,{movie:e})}})}}}]);
//# sourceMappingURL=872.c1e1e8ff.chunk.js.map