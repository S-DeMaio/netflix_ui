(this["webpackJsonpnetflix-ui"]=this["webpackJsonpnetflix-ui"]||[]).push([[0],{26:function(t,e,n){},45:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var i,a,r,o,c=n(0),s=n.n(c),d=n(19),m=n.n(d),l=(n(26),n(5)),u=n(6),g=n.n(u),b=(n.p,n(45),n(3)),j=n(4),p=j.a.div(i||(i=Object(b.a)(["\n    ",";\n"])),{marginTop:"2rem",marginBottom:"2rem"}),h=j.a.h2(a||(a=Object(b.a)(["\n    ",";\n"])),{fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700",textTransform:"uppercase",marginLeft:"2rem",marginRight:"2rem"}),v=j.a.div(r||(r=Object(b.a)(["\n    ",";\n\n    &::-webkit-scrollbar {\n        display: none;\n    };\n"])),{display:"flex",overflowX:"auto",marginTop:"1rem",padding:"1rem"}),f=j.a.img(o||(o=Object(b.a)(["\n    ",";\n\n    // Scale the movie img when the user hover on it \n    transition: all 0.2s;\n    &:hover {\n        transform: scale(1.09);\n    }\n"])),{margin:"0.5rem",width:"10rem"}),O=n(1);var x,w,k,y,S=function(t){var e=t.title,n=t.movies;return Object(O.jsxs)(p,{children:[Object(O.jsx)(h,{children:e}),Object(O.jsx)(v,{children:n.map((function(t){return Object(O.jsx)(f,{src:"https://image.tmdb.org/t/p/w300"+t.poster_path,alt:t.name},t.id)}))})]})},_=j.a.div(x||(x=Object(b.a)(["\n  ","\n  height: 80vh;\n  background-size: cover !important;\n\n  ","\n"])),{padding:"2rem"},(function(t){return"background: url('https://image.tmdb.org/t/p/original".concat(t.background,"');")})),T=j.a.h1(w||(w=Object(b.a)(["\n    ","\n    width: 45rem;\n    max-width: 80vw;\n    margin-top: 40vh;\n"])),{fontSize:"3rem",lineHeight:"1",fontWeight:"700",marginBottom:"1rem"}),L=j.a.p(k||(k=Object(b.a)(["\n    ","\n    background-color: rgba(51, 51, 51, 0.6);\n    width: 45rem;\n    max-width: 80vw;\n    line-height: 1.3;\n"])),{fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"500",marginBottom:"1rem"}),z=j.a.button(y||(y=Object(b.a)(["\n    ","\n\n    background-color: rgba(51, 51, 51, 0.6);\n    color: white;\n\n    &:hover{\n        background-color: #e6e6e6;\n        color: black;\n        transition: all 0.2s;\n    }\n"])),{cursor:"pointer",fontWeight:"700",borderRadius:"0.25rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",marginRight:"0.5rem"});function B(t){var e=t.movie;return console.log(e),Object(O.jsxs)(_,{background:null===e||void 0===e?void 0:e.backdrop_path,children:[Object(O.jsx)(T,{children:null===e||void 0===e?void 0:e.name}),Object(O.jsx)(L,{children:null===e||void 0===e?void 0:e.overview}),Object(O.jsx)(z,{children:"Play"}),Object(O.jsx)(z,{children:"My List"})]})}var C,F=n(10),P=j.a.div(C||(C=Object(b.a)(["\n    ","\n\n    ","\n\n    img {\n        ","\n    }\n"])),{display:"flex",justifyContent:"space-between",padding:"1rem",position:"fixed",top:"0px",width:"100%",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",zIndex:"10"},(function(t){return t.dark?{"--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))"}:{backgroundColor:"rgba(0, 0, 0, 0)"}}),{height:"2rem"});function E(){var t=Object(F.useState)(!1),e=Object(l.a)(t,2),n=e[0],i=e[1];return Object(F.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(O.jsxs)(P,{dark:n,children:[Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png",alt:""}),Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""})]})}var N="https://api.themoviedb.org/3",R="4856fbe893d0ae41582688610ce19cd8",M="/discover/tv",W="/trending/all/week",H="/movie/now_playing",I="/movie/popular",D="/movie/top_rated",J="/movie/upcoming";var U=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),r=Object(l.a)(a,2),o=r[0],s=r[1],d=Object(c.useState)([]),m=Object(l.a)(d,2),u=m[0],b=m[1],j=Object(c.useState)([]),p=Object(l.a)(j,2),h=p[0],v=p[1],f=Object(c.useState)([]),x=Object(l.a)(f,2),w=x[0],k=x[1],y=Object(c.useState)([]),_=Object(l.a)(y,2),T=_[0],L=_[1];return Object(c.useEffect)((function(){g.a.get("".concat(N).concat(M),{params:{api_key:R}}).then((function(t){return i(t.data.results)})),g.a.get("".concat(N).concat(W),{params:{api_key:R}}).then((function(t){return s(t.data.results)})),g.a.get("".concat(N).concat(H),{params:{api_key:R}}).then((function(t){return b(t.data.results)})),g.a.get("".concat(N).concat(I),{params:{api_key:R}}).then((function(t){return v(t.data.results)})),g.a.get("".concat(N).concat(D),{params:{api_key:R}}).then((function(t){return k(t.data.results)})),g.a.get("".concat(N).concat(J),{params:{api_key:R}}).then((function(t){return L(t.data.results)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{}),Object(O.jsx)(B,{movie:n[Math.floor(Math.random()*n.length)]}),Object(O.jsx)(S,{title:"Netflix Originals",movies:n}),Object(O.jsx)(S,{title:"Trending",movies:o}),Object(O.jsx)(S,{title:"Now Playing",movies:u}),Object(O.jsx)(S,{title:"Popular",movies:h}),Object(O.jsx)(S,{title:"Top Rated",movies:w}),Object(O.jsx)(S,{title:"Upcoming",movies:T})]})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),r(t),o(t)}))};m.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.24a011c3.chunk.js.map