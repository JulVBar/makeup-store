/*! For license information please see 410.008d5aed.chunk.js.LICENSE.txt */
(self.webpackChunkmakeup_store=self.webpackChunkmakeup_store||[]).push([[410],{5947:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(2791),i=n(2982),o=n(5671),s=n(3144),c=n(136),a=n(8557),u=n(1694),l=n.n(u),d=n(3504),f=n.p+"static/media/slider1.e252e9c9035dd760d621.jpg",h=n.p+"static/media/slider2.f1a66a30440e22f71792.jpg",p=n.p+"static/media/slider3.f7af1bd09ca8075f562d.jpg",v=n(184),y=[{heading:"Sale 2022",subheading:"Up to",subheadingGreen:"70% off",img:f},{heading:"Pure organic",subheading:"Fresh.",subheadingGreen:"Healthy.",img:h},{heading:"Skin care",subheading:"Soft and",subheadingGreen:"safety",img:p}],g=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).IMAGE_PARTS=4,r.changeTO=null,r.AUTOCHANGE_TIME=4e3,r.state={activeSlide:-1,prevSlide:-1,sliderReady:!1},r}return(0,s.Z)(n,[{key:"componentWillUnmount",value:function(){window.clearTimeout(this.changeTO)}},{key:"componentDidMount",value:function(){var e=this;this.runAutochangeTO(),setTimeout((function(){e.setState({activeSlide:0,sliderReady:!0})}),0)}},{key:"runAutochangeTO",value:function(){var e=this;this.changeTO=setTimeout((function(){e.changeSlides(1),e.runAutochangeTO()}),this.AUTOCHANGE_TIME)}},{key:"changeSlides",value:function(e){window.clearTimeout(this.changeTO);var t=y.length,n=this.state.activeSlide,r=n+e;r<0&&(r=t-1),r>=t&&(r=0),this.setState({activeSlide:r,prevSlide:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSlide,r=t.prevSlide,o=t.sliderReady;return(0,v.jsxs)("div",{className:l()("slider",{"s--ready":o}),children:[(0,v.jsx)("div",{className:"slider__slides",children:y.map((function(t,o){return(0,v.jsxs)("div",{className:l()("slider__slide",{"s--active":n===o,"s--prev":r===o}),children:[(0,v.jsxs)("div",{className:"slider__slide-content",children:[(0,v.jsx)("p",{className:"slider__top-heading",children:"Natural Cosmetics"}),(0,v.jsxs)("h3",{className:"slider__slide-subheading",children:[t.subheading," ",(0,v.jsx)("span",{children:t.subheadingGreen})," "]}),(0,v.jsx)("ul",{className:"slider__slide-heading",children:t.heading.split("").map((function(e,t){return(0,v.jsx)("li",{children:e},"".concat(e,"-").concat(t))}))}),(0,v.jsx)(d.rU,{to:"/shop",children:(0,v.jsx)("button",{className:"slider__slide-button button-green",children:"Shopping now!"})})]}),(0,v.jsx)("div",{className:"slider__slide-parts",children:(0,i.Z)(Array(e.IMAGE_PARTS).fill()).map((function(e,n){return(0,v.jsx)("div",{className:"slider__slide-part",children:(0,v.jsx)("div",{className:"slider__slide-part-inner",style:{backgroundImage:"url(".concat(t.img,")")}})},n)}))})]},"".concat(t,"-").concat(o))}))}),(0,v.jsx)("div",{className:"slider__control",onClick:function(){return e.changeSlides(-1)}}),(0,v.jsx)("div",{className:"slider__control slider__control--right",onClick:function(){return e.changeSlides(1)}})]})}}]),n}(r.Component),b=function(){return(0,r.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(g,{})})}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},7326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return i}})},8557:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return c}});var i=n(1002),o=n(7326);function s(e,t){if(t&&("object"===(0,i.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}},136:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9611);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},9611:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:function(){return r}})},2982:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(907);var i=n(181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=410.008d5aed.chunk.js.map