(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{4915:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendar-static",function(){return e(8921)}])},1031:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(5893),c=e(2185);function i(n){var t=n.children,e=n.breadcrumb;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),e&&(0,r.jsx)(c.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{className:" -mt-[20px] link link--metis text-center font-bold tracking-tighter leading-tight text-4xl mm:text-5xl 5h:text-6xl md:text-7xl lg:text-8xl lg:mb-3 lg:w-auto ",children:t})]})})}},8921:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return u}});var r=e(5893),c=e(6503),i=e(1031),a=e(7280),s=e.n(a),l=(e(2630),e(7294));var u=!0;t.default=function(n){var t=n.calendarPreData,e=function(n,t){t.forEach((function(e){v.push(t.calendar_id),n.push({id:e.calendar_id,startAt:e.event_date_starts,endAt:e.event_date_ends,summary:e.title})})),_(n)},u=(0,l.useState)(null),d=(u[0],u[1]),o=(0,l.useState)(!1),h=o[0],x=o[1],f=(0,l.useState)([{}]),m=f[0],_=f[1],v=[];return(0,l.useEffect)((function(){x(!0),e(m,t),fetch("https://admin.brooklynslcouncil.com/public/api/events-calendar").then((function(n){return n.json()})).then((function(n){d(n),e(m,n)})),fetch("https://admin.brooklynslcouncil.com/public/api/events").then((function(n){return n.json()})).then((function(n){!function(n,t){console.log(t)}(0,n)}))}),[h]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(i.Z,{breadcrumb:!0,children:"Calendar"}),(0,r.jsxs)("div",{className:"",children:[h&&(0,r.jsx)("div",{className:"h-[500px]",children:(0,r.jsx)(s(),{initialView:a.CalendarView.MONTH,events:m})}),!h&&(0,r.jsx)("div",{className:"h-[500px] content-center center-content",children:(0,r.jsx)("div",{children:"Retrieving Calendar Events..."})})]})]})})}}},function(n){n.O(0,[809,602,824,18,774,888,179],(function(){return t=4915,n(n.s=t);var t}));var t=n.O();_N_E=t}]);