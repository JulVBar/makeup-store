"use strict";(self.webpackChunkmakeup_store=self.webpackChunkmakeup_store||[]).push([[501],{2440:function(e,t,n){n.d(t,{Z:function(){return s}});var c=n(3504),i="notFound_wrap__f3J6C",r="notFound_picture__wtM46",a=n(184),s=function(e){var t=e.title,n=e.img,s=e.button,o=e.link;return(0,a.jsxs)("div",{className:i,children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)("div",{className:r,children:(0,a.jsx)("img",{src:n,alt:t})}),(0,a.jsx)(c.rU,{to:o,children:(0,a.jsx)("button",{className:"button-green",children:s})})]})}},5094:function(e,t,n){n.d(t,{Z:function(){return m}});var c=n(885),i=n(2791),r=n(9434),a=n(5585),s=n(1924),o=n(6737),l=n(3504),d=n(9045),u=n(184),m=function(e){var t=e.id,n=e.product,m=e.name,p=e.image_link,v=e.brand,x=e.productColors,f=e.price,h=(0,i.useState)(x[0]),j=(0,c.Z)(h,2),g=j[0],b=j[1],_=(0,r.v9)(o.L).favs,N=(0,r.I0)(),k=!!_&&_.find((function(e){return e.id===t}));return(0,u.jsxs)("li",{className:"product-item",children:[(0,u.jsxs)("div",{className:"product-header",children:[k&&(0,u.jsx)("div",{className:"product-fav",children:(0,u.jsx)(d.Z,{name:"fullheart",className:"product-icon-fav"})}),(0,u.jsx)("div",{className:"product-img",children:(0,u.jsx)("img",{className:"img-cover",src:p,alt:m})}),(0,u.jsxs)("div",{className:"product-img product-img--hover",children:[(0,u.jsx)("div",{className:"product-circle",onClick:function(){N((0,s.xJ)(n))},children:(0,u.jsx)(d.Z,{name:"heart",className:"product-icon"})}),(0,u.jsx)(l.rU,{to:"/product/".concat(t),children:(0,u.jsx)("div",{className:"product-circle",children:(0,u.jsx)(d.Z,{name:"eye",className:"product-icon"})})})]})]}),(0,u.jsxs)("div",{className:"product-body",children:[(0,u.jsxs)("div",{className:"product-title",children:[(0,u.jsx)(l.rU,{to:"/product/".concat(t),children:(0,u.jsx)("div",{className:"product-name",children:m})}),(0,u.jsx)("div",{className:"product-brand",children:v})]}),(0,u.jsx)("ul",{className:"product-palet",children:x.map((function(e,t){return(0,u.jsx)("li",{className:g.hex_value===e.hex_value?"active":"",onClick:function(){!function(e){b(e)}(x[t])},children:(0,u.jsx)("div",{style:{background:e.hex_value}})},"".concat(e.colour_name,"-").concat(t))}))}),(0,u.jsxs)("div",{className:"product-price",children:["$",f]})]}),(0,u.jsx)("div",{className:"product-footer",children:(0,u.jsx)("button",{onClick:function(){var e={id:t,vendor_code:t+g.colour_name,name:m,image_link:p,brand:v,price:f,pickedUpColor:g,count:0};N((0,a.jX)(e))},className:"product-btn button-green",children:"Add to cart"})})]})}},4743:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var c=n(2791),i=n(9434),r=n(1924),a=n(6737);var s=n.p+"static/media/favourite.7a1bd175222143910616f276afc0eda9.svg",o=n(5094),l="favouriteList_favouriteList__VvHsy",d=n(184),u=function(){var e=(0,i.v9)(a.L).favs;return(0,d.jsx)("ul",{className:l,children:e.map((function(e){return(0,d.jsx)(o.Z,{product:e,id:e.id,name:e.name,image_link:e.image_link,brand:e.brand,productColors:e.product_colors,price:e.price},e.id)}))})},m=n(2440),p=n(259),v=function(){var e=(0,i.v9)(a.L).favs,t=(0,i.I0)();(0,c.useEffect)((function(){window.scrollTo(0,0)}),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"pageTitle",children:(0,d.jsx)("img",{src:s,alt:"favourite"})}),(0,d.jsx)("div",{className:"container",children:e.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{}),(0,d.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,d.jsx)("button",{className:"button-green",onClick:function(){t((0,r.eb)())},children:"Clear favourite list"})})]}):(0,d.jsx)(m.Z,{title:p.E.title,img:p.E.img,button:p.E.button_text,link:p.E.link_to})})]})}},259:function(e,t,n){n.d(t,{y:function(){return r},E:function(){return a}});var c=n.p+"static/media/emptycart.ab7b33de2d1efbb26180.jpg",i=n.p+"static/media/nofavs.c16028c06be6098ff9e9.jpg",r={title:"The cart is empty!",img:c,button_text:"Shopping now!",link_to:"/shop"},a={title:"Favourite list is empty!",img:i,button_text:"Find something lovely!",link_to:"/shop"}}}]);
//# sourceMappingURL=501.69755efc.chunk.js.map