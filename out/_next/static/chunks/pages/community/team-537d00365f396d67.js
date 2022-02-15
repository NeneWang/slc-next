(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{4678:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/team",function(){return t(1661)}])},2185:function(e,n,t){"use strict";var r=t(5893),a=t(7294),s=t(1163),i=t(1664);function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.Z=function(){var e=(0,s.useRouter)(),n=(0,a.useState)(null),t=n[0],l=n[1];return(0,a.useEffect)((function(){if(e){var n=e.asPath.split("/");n.shift();var t=n.map((function(e,t){return{breadcrumb:e,href:"/"+n.slice(0,t+1).join("/")}}));t.splice(-1),l(t)}}),[e]),t?(0,r.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,r.jsxs)("ol",{className:"breadcrumb bg-white",children:[(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:"Home"})})}),t.map((function(e,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xl font-bold text-decoration-none text-secondary ",children:"\xa0/\xa0"}),(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,r.jsx)(i.default,{href:e.href,children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:o((t=e.breadcrumb,t.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc")))})})},e.href)]});var t}))]})}):null}},6503:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),a=(t(7294),t(1664)),s=t(1163),i=t(5697),o=t.n(i);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e){var n=e.href,t=e.exact,i=e.children,o=d(e,["href","exact","children"]),l=(0,s.useRouter)().pathname;return(t?l===n:l.startsWith(n))&&(o.className+=" active"),(0,r.jsx)(a.default,{href:n,children:(0,r.jsx)("a",c({},o,{children:i}))})}function h(e){e.container;return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark no-flow",children:(0,r.jsxs)("div",{className:"container-fluid ",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",href:"#",children:(0,r.jsx)("img",{className:"logo",src:"/assets/logo.png",alt:"Koppelman Student Leadership Council"})})}),(0,r.jsx)("button",{className:"navbar-toggler no-border",align:"right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(u,{href:"/about",className:"link-light nav-link ",children:"About"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(u,{href:"/calendar",className:"nav-link link-light",children:"KSB Calendar"})}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(u,{href:"/events",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Events"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(u,{href:"/events/business-matters",className:"dropdown-item",children:"Business Matters"}),(0,r.jsx)(u,{href:"/events/summit",className:"dropdown-item",children:"KSB Summit"}),(0,r.jsx)(u,{href:"/events/learn-more",className:"dropdown-item",children:"Learn More"})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(u,{href:"/community",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Our Community"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(u,{href:"/community/team",className:"dropdown-item",children:"Our Team"}),(0,r.jsx)(u,{href:"/community/clubs",className:"dropdown-item",children:"KSB Clubs"}),(0,r.jsx)(u,{href:"/community/contact",className:"dropdown-item",children:"Contact Us"})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"btn btn-outline-light slc-hover-background ml-2",href:"https://form.typeform.com/to/ImW405p0",target:"_blank",rel:"noopener noreferrer",children:"Subscribe Us"})})]})})]})})}function m(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"py-5 bg-dark",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Koppelman SLC 2022"})})})})}u.propTypes={href:o().string.isRequired,exact:o().bool},u.defaultProps={exact:!1};var p=t(9008);function f(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"slc-icon32x32.ico"}),(0,r.jsx)("title",{children:"Koppelman Student Leadership Council"}),(0,r.jsx)("meta",{name:"keywords",content:"slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{name:"description",content:"The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers."}),(0,r.jsx)("meta",{name:"author",content:"Koppelman Student Leadership Council"})]}),(0,r.jsxs)("body",{className:"pb-5",children:[(0,r.jsx)(h,{}),(0,r.jsx)("div",{className:" container mx-auto px-5",children:e.children})]}),(0,r.jsx)(m,{})]})}},1031:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),a=t(2185);function s(e){var n=e.children,t=e.breadcrumb;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),t&&(0,r.jsx)(a.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{className:"link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2",children:n})]})})}},1661:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(5893),a=t(6503),s=t(1031),i=t(3941),o=t.n(i),l=t(545),c=t(7294),d=t(8735);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return!n||"object"!==b(n)&&"function"!==typeof n?u(e):n}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=m(e);if(n){var a=m(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return p(this,t)}}var j={"Alumni Relations":"The Alumni Relations Department is responsible for fostering relationships with SLC\u2019s <br />alumni network and creating an engaged and supportive connection between former and current SLC members. <br />SLC\u2019s alumni network consists of diverse members in terms of experience, industries and exposure. The department  <br />is responsible for keeping the alumni aware about the successes and current events hosted by SLC through newsletters.  <br />Buddy System is a mentorship program within SLC that pairs a current member with an alumni for the professional <br /> development of the current members and for the alumni to stay better connected and engaged with the progress of SLC"},v=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(i,e);var n,t,a,s=x(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=s.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(u(e)),e}return n=i,(t=[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"shadow p-2 wrap-content rounded",children:(0,r.jsx)("div",{className:"portraits",children:(0,r.jsxs)(l.Z,{className:"no-border ",children:[(0,r.jsxs)(o(),{isFlipped:this.state.isFlipped,flipDirection:"horizontal",children:[(0,r.jsx)("div",{onClick:this.handleClick,className:"portraits ",children:(0,r.jsx)("img",{className:"rounded portraits-front",src:"\\assets\\team-members\\resized-members\\elena.png",alt:"${member.name}"})}),(0,r.jsx)("div",{onClick:this.handleClick,className:"portraits rounded portraits-back",children:"This is the back of the card."})]}),(0,r.jsxs)(l.Z.Body,{children:[(0,r.jsx)(l.Z.Title,{children:"Elena Ivanov"})," ",(0,r.jsxs)(l.Z.Text,{children:["Strategist -",(0,r.jsx)("span",{"data-tip":!0,"data-for":"registerTip",children:"Alumni Relations"})]}),(0,r.jsx)(d.Z,{id:"registerTip",place:"bottom",effect:"solid",multiline:"true",children:(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:j["Alumni Relations"]}})})]})]})})})})}}])&&h(n.prototype,t),a&&h(n,a),i}(c.Component);var g=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{breadcrumb:!0,children:"Our Team"}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(v,{})})]})})}}},function(e){e.O(0,[726,65,774,888,179],(function(){return n=4678,e(e.s=n);var n}));var n=e.O();_N_E=n}]);