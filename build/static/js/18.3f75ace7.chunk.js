(this["webpackJsonpmusic-web-react"]=this["webpackJsonpmusic-web-react"]||[]).push([[18],{359:function(t,e,n){"use strict";n.r(e);var i,c,r=n(0),s=n(43),a=n(55),o=n(17),l=n(102),p=n(23),u=n(24),d=u.a.div(i||(i=Object(p.a)(["\n    margin-top: 2rem;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 30px;\n"]))),b=u.a.div(c||(c=Object(p.a)(["\n    width: 137px;\n    cursor: pointer;\n    position: relative;\n    p {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        margin-top: 0.2rem;\n    }\n    p:hover {\n        text-decoration: underline;\n    }\n    .play-icon {\n        position: absolute;\n        width: 44px;\n        height: 44px;\n        background-image: url(",");\n        background-position: -30px -135px;\n        top: 45%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n"])),n(165).default),j=n(1),m=(e.default=Object(r.memo)((function(){console.log("JJArtistMV"),console.log("JJArtisrDesc");var t=Object(o.useHistory)().location,e=(void 0===t?{}:t).search,n=void 0===e?"":e,i=Object(a.c)(n),c=Object(s.c)(),p=Object(s.d)((function(t){return{artistMVs:t.getIn(["artistDetailReducer","artistMVs"])}})).artistMVs,u=void 0===p?[]:p;if(Object(r.useEffect)((function(){c(Object(l.d)(i))}),[c,i]),i)return Object(j.jsx)(d,{children:u.map((function(t){return Object(j.jsx)(m,{mv:t},t.id)}))})})),Object(r.memo)((function(t){var e=t.mv,n=Object(o.useHistory)(),i=Object(r.useCallback)((function(t){t.id&&n.push({pathname:"/discover/artist/detail/mv-detail",search:"?id="+t.id,state:t})}),[n]);return e?Object(j.jsxs)(b,{className:"col",onClick:function(t){return i(e)},children:[Object(j.jsx)("img",{alt:"",src:Object(a.e)(e.imgurl,137,103)}),Object(j.jsx)("div",{className:"play-icon"}),Object(j.jsx)("p",{children:e.name})]}):null})))}}]);