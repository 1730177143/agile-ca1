"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[748],{6649:function(e,r,n){n(2791);var t=n(5776),i=n(1087),o=n(184);r.Z=function(e){var r=e.movie;return(0,o.jsx)(i.rU,{to:"/reviews/form",state:{movieId:r.id},children:(0,o.jsx)(t.Z,{color:"primary",fontSize:"large"})})}},8748:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(2791),i=n(2266),o=n(1413),a=n(1933),u=n(3030),v=n(5439),s=n(3400),c=n(7247),f=n(184),l=function(e){var r=e.movie,n=(0,t.useContext)(o.m);return(0,f.jsx)(s.Z,{"aria-label":"remove from favorites",onClick:function(e){e.preventDefault(),n.removeFromFavorites(r)},children:(0,f.jsx)(c.Z,{color:"primary",fontSize:"large"})})},m=n(6649),d=function(){var e=(0,t.useContext)(o.m).favorites;console.log(e);var r=(0,a.useQueries)(e.map((function(e){return{queryKey:["movie",{id:e}],queryFn:u.HI}})));if(r.find((function(e){return!0===e.isLoading})))return(0,f.jsx)(v.Z,{});var n=r.map((function(e){return e.data.genre_ids=e.data.genres.map((function(e){return e.id})),e.data}));return(0,f.jsx)(i.Z,{title:"Favorite Movies",movies:n,action:function(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{movie:e}),(0,f.jsx)(m.Z,{movie:e})]})}})}},7247:function(e,r,n){var t=n(4836);r.Z=void 0;var i=t(n(5649)),o=n(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=a},5776:function(e,r,n){var t=n(4836);r.Z=void 0;var i=t(n(5649)),o=n(184),a=(0,i.default)((0,o.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"}),"RateReview");r.Z=a}}]);
//# sourceMappingURL=748.280c19b1.chunk.js.map