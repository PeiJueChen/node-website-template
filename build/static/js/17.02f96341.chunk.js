(this["webpackJsonpmusic-web-react"]=this["webpackJsonpmusic-web-react"]||[]).push([[17],{366:function(e,t,n){"use strict";n.r(t);var c,i=n(0),r=n(43),s=n(55),a=n(17),o=n(102),d=n(23),j=n(24).a.div(c||(c=Object(d.a)(["\n    padding-top: 2rem;\n    .title {\n        margin-bottom: 0.3rem;\n        h2 {\n            border-left: 2px solid var(--primary-color);\n            padding-left: 0.8rem;\n        }\n    }\n    .content-in {\n        white-space: pre-wrap;\n        p {\n            line-height: 25px;\n        }\n        &.summary {\n            text-indent: 2em;\n        }\n    }\n    .introducation-wrapper {\n        margin-top: 1rem;\n    }\n"]))),l=n(1);t.default=Object(i.memo)((function(e){var t=e.artist;console.log("JJArtistDesc");var n=Object(a.useHistory)().location,c=(void 0===n?{}:n).search,d=void 0===c?"":c,b=Object(s.c)(d),m=Object(r.c)(),p=Object(r.d)((function(e){return{artistDesc:e.getIn(["artistDetailReducer","artistDesc"])}})).artistDesc;if(Object(i.useEffect)((function(){m(Object(o.b)(b))}),[m,b]),b&&t&&p){var u=p.introduction,h=void 0===u?[]:u;return Object(l.jsxs)(j,{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsxs)("h2",{children:[t.name,"\u7b80\u4ecb"]})}),Object(l.jsx)("div",{className:"content-in summary",children:Object(l.jsx)("p",{children:p.briefDesc})}),h.map((function(e){return Object(l.jsxs)("div",{className:"introducation-wrapper",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:e.ti})}),Object(l.jsx)("div",{className:"content-in",children:Object(l.jsx)("p",{children:e.txt})})]},e.ti)}))]})}}))}}]);