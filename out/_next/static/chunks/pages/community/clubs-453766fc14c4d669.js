(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{648:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/clubs",function(){return t(8670)}])},2185:function(e,n,t){"use strict";var a=t(5893),r=t(7294),s=t(1163),l=t(1664);function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.Z=function(){var e=(0,s.useRouter)(),n=(0,r.useState)(null),t=n[0],o=n[1];return(0,r.useEffect)((function(){if(e){var n=e.asPath.split("/");n.shift();var t=n.map((function(e,t){return{breadcrumb:e,href:"/"+n.slice(0,t+1).join("/")}}));t.splice(-1),o(t)}}),[e]),t?(0,a.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,a.jsxs)("ol",{className:"breadcrumb bg-white",children:[(0,a.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:"Home"})})}),t.map((function(e,n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"text-xl font-bold text-decoration-none text-secondary ",children:"\xa0/\xa0"}),(0,a.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,a.jsx)(l.default,{href:e.href,children:(0,a.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:i((t=e.breadcrumb,t.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc")))})})},e.href)]});var t}))]})}):null}},6503:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(5893),r=(t(7294),t(1664)),s=t(1163),l=t(5697),i=t.n(l);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function m(e){var n=e.href,t=e.exact,l=e.children,i=d(e,["href","exact","children"]),o=(0,s.useRouter)().pathname;return(t?o===n:o.startsWith(n))&&(i.className+=" active"),(0,a.jsx)(r.default,{href:n,children:(0,a.jsx)("a",c({},i,{children:l}))})}function u(e){e.container;return(0,a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark no-flow",children:(0,a.jsxs)("div",{className:"container-fluid ",children:[(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{className:"navbar-brand",href:"#",children:(0,a.jsx)("img",{className:"logo",src:"/assets/logo.png",alt:"Koppelman Student Leadership Council"})})}),(0,a.jsx)("button",{className:"navbar-toggler no-border",align:"right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(m,{href:"/about",className:"link-light nav-link ",children:"About"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(m,{href:"/calendar",className:"nav-link link-light",children:"KSB Calendar"})}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)(m,{href:"/events",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Events"}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)(m,{href:"/events/business-matters",className:"dropdown-item",children:"Business Matters"}),(0,a.jsx)(m,{href:"/events/summit",className:"dropdown-item",children:"KSB Summit"}),(0,a.jsx)(m,{href:"/events/learn-more",className:"dropdown-item",children:"Learn More"})]})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)(m,{href:"/community",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Our Community"}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)(m,{href:"/community/team",className:"dropdown-item",children:"Our Team"}),(0,a.jsx)(m,{href:"/community/clubs",className:"dropdown-item",children:"KSB Clubs"}),(0,a.jsx)(m,{href:"/community/contact",className:"dropdown-item",children:"Contact Us"})]})]}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"btn btn-outline-light slc-hover-background ml-2",href:"https://form.typeform.com/to/ImW405p0",target:"_blank",rel:"noopener noreferrer",children:"Subscribe Us"})})]})})]})})}function h(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{className:"py-5 bg-dark",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Koppelman SLC 2022"})})})})}m.propTypes={href:i().string.isRequired,exact:i().bool},m.defaultProps={exact:!1};var p=t(9008);function x(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(p.default,{children:[(0,a.jsx)("link",{rel:"icon",href:"slc-icon32x32.ico"}),(0,a.jsx)("title",{children:"Koppelman Student Leadership Council"}),(0,a.jsx)("meta",{name:"keywords",content:"slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,a.jsx)("meta",{name:"description",content:"The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers."}),(0,a.jsx)("meta",{name:"author",content:"Koppelman Student Leadership Council"})]}),(0,a.jsxs)("body",{className:"pb-5",children:[(0,a.jsx)(u,{}),(0,a.jsx)("div",{className:" container mx-auto px-5",children:e.children})]}),(0,a.jsx)(h,{})]})}},1031:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(5893),r=t(2185);function s(e){var n=e.children,t=e.breadcrumb;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("br",{}),t&&(0,a.jsx)(r.Z,{}),(0,a.jsx)("br",{}),(0,a.jsx)("h1",{className:"link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2",children:n})]})})}},8670:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),r=t(6503),s=t(1031),l=t(4184),i=t.n(l);function o(e){var n=e.title,t=e.src,r=e.slug,s=(e.postUrl,(0,a.jsx)("img",{src:t,alt:"Cover Image for ".concat(n),className:i()("shadow-big rounded-10",{"hover:shadow-medium transition-shadow duration-200":r})}));return(0,a.jsx)("div",{className:"sm:mx-0",children:s})}t(1664);function c(e){var n=e.title,t=e.link,r=e.imageLink;return(0,a.jsx)("div",{className:" col-md-3 mb-2 rounded-10",children:(0,a.jsx)("div",{className:" content ",children:(0,a.jsx)("a",{target:"_blank",href:t,rel:"noopener noreferrer",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"content-overlay rounded-10"}),(0,a.jsx)(o,{slug:n,title:n,src:r,postUrl:"programs"}),(0,a.jsx)("a",{target:"_blank",as:t,href:t,rel:"noopener noreferrer",children:(0,a.jsx)("div",{className:"content-details fadeIn-top",children:(0,a.jsx)("p",{children:n})})})]})})})})}var d=JSON.parse('[{"title":"Accounting Society","imagename":"accountingsociety","link":"https://accounting.brooklyn.cuny.club/"},{"title":"Actuarial Society","imagename":"actuarialsociety","link":"https://cunybrooklyn.campuslabs.com/engage/organization/actuarial-society"},{"title":"Alpha","imagename":"alpha","link":"#"},{"title":"Accounting Women\'s Initiative Network","imagename":"awin","link":"https://www.facebook.com/AWINWomen/"},{"title":"Marketing Society","imagename":"marketingsociety","link":"https://bcmarketingsociety.wixsite.com/main"},{"title":"NABA","imagename":"naba","link":"https://www.instagram.com/bc_naba/?hl=en"},{"title":"Smoothtalkers","imagename":"smoothtalkers","link":"https://www.instagram.com/bcsmoothtalkers/"},{"title":"Toastmasters","imagename":"toastmasters","link":"https://www.toastmasters.org/Find-a-Club/06558323-koppelman-toastmasters"}]');var m=function(){return console.log(d),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{breadcrumb:!0,children:"Our Clubs"}),(0,a.jsx)("div",{className:"row",children:d.map((function(e){return(0,a.jsx)(c,{title:e.title,link:e.link,imageLink:"/assets/clubs/resized/"+e.imagename+".png"},e.imagename)}))})]})})}}},function(e){e.O(0,[726,774,888,179],(function(){return n=648,e(e.s=n);var n}));var n=e.O();_N_E=n}]);