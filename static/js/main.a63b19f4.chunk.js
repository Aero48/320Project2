(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{38:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(39),r=n.n(s),a=(n(48),n(13)),j=n(71),o=n(75),l=n(72),d=n(74),b=n(1);function h(e){var t=e.locations[e.currentItem].builders.map((function(e,t){return Object(b.jsx)(d.a,{item:!0,children:e},t)}));return Object(b.jsxs)("div",{className:"description-list",children:[Object(b.jsx)("h3",{children:"Builders:"}),Object(b.jsx)(d.a,{container:!0,spacing:2,children:t})]})}function u(e){var t=e.locations[e.currentItem].connections.map((function(e,t){return Object(b.jsx)(d.a,{item:!0,children:e},t)}));return Object(b.jsxs)("div",{className:"description-list",children:[Object(b.jsx)("h3",{children:"Connections:"}),Object(b.jsx)(d.a,{container:!0,spacing:2,children:t})]})}function O(e){var t=e.locations,n=e.currentItem;return Object(b.jsxs)("div",{className:"description-list",children:[Object(b.jsx)("h3",{children:"Theme:"}),Object(b.jsx)("a",{href:t[n].theme,children:t[n].theme})]})}function x(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),i=n[0],s=n[1],r=e.locations,d=e.currentItem,x=[Object(b.jsx)(h,{locations:r,currentItem:d}),Object(b.jsx)(u,{locations:r,currentItem:d}),Object(b.jsx)(O,{locations:r,currentItem:d})];return Object(b.jsx)("div",{class:"infoDiv",children:Object(b.jsxs)(j.a,{direction:"column",divider:Object(b.jsx)(o.a,{orientation:"horizontal",flexItem:!0}),spacing:0,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:r[d].image,width:"500px"}),Object(b.jsx)("h2",{children:r[d].name})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"description-buttoncontainer",children:[Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{variant:"contained",onClick:function(){s(0)},children:"Builders"})}),Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{variant:"contained",onClick:function(){s(1)},children:"Connections"})}),Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{variant:"contained",onClick:function(){s(2)},children:"Theme"})})]}),x[i]]})]})})}n(38);function m(e){var t=e.place,n={animationName:"fadeIn",animationDuration:"1s",animationDelay:.1*t.id+"s"};return Object(b.jsxs)("div",{class:"listElement",style:n,children:[Object(b.jsx)("div",{class:"listElementPart",children:Object(b.jsx)("img",{src:t.image,width:"200px"})}),Object(b.jsx)("div",{class:"listElementPart",children:t.name}),Object(b.jsx)("div",{class:"listElementPart",a:!0,children:Object(b.jsx)(l.a,{variant:"contained",onClick:function(){e.showDescription(t.id)},children:"Details"})})]})}function v(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(0),r=Object(a.a)(s,2),l=r[0],d=r[1],h=Object(c.useState)(!1),u=Object(a.a)(h,2),O=u[0],v=u[1];Object(c.useEffect)((function(){fetch("data/data.json").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var f=null;O&&(f=Object(b.jsx)("div",{className:"infoPanel",children:Object(b.jsx)(x,{locations:n,currentItem:l})}));var p=n.map((function(e,t){return Object(b.jsx)(m,{place:e,showDescription:g},t)}));return console.log(l),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Liminal World"}),Object(b.jsxs)("div",{className:"containerDiv",children:[Object(b.jsx)("div",{className:"subContainerLeft",children:Object(b.jsx)("div",{className:"listPanel",children:Object(b.jsxs)(j.a,{direction:"column",divider:Object(b.jsx)(o.a,{orientation:"horizontal",flexItem:!0}),spacing:2,children:[Object(b.jsx)("h2",{children:"Locations"}),p]})})}),Object(b.jsx)("div",{className:"subContainerRight",children:f})]})]});function g(e){d(e),v(!0)}}n(54);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),p()}},[[55,1,2]]]);
//# sourceMappingURL=main.a63b19f4.chunk.js.map