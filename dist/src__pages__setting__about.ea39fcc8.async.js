(self.webpackChunk=self.webpackChunk||[]).push([[154],{59673:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(14797),i=n(63313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=n(46420),s=function(t,e){return i.createElement(a.Z,(0,r.Z)((0,r.Z)({},t),{},{ref:e,icon:c}))};s.displayName="CheckOutlined";var o=i.forwardRef(s)},76834:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(88265),i=(n(63313),n(92260)),c=n(23797),a="container___nww32",s="right___o0xXT",o="title___DHxWh",u="desc___frhI6",l=n(52053),f=n.n(l),d=n(11527),h=i.Z.Link,m=function(t){var e=t.systemInfo;return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("img",{alt:"logo",style:{width:140,marginRight:20},src:"https://qn.whyour.cn/logo.png"}),(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("span",{className:o,children:r.ZP.get("青龙")}),(0,d.jsx)("span",{className:u,children:r.ZP.get("支持python3、javascript、shell、typescript 的定时任务管理面板")}),(0,d.jsxs)(c.Z,{children:[(0,d.jsxs)(c.Z.Item,{label:r.ZP.get("版本"),span:3,children:["develop"===(null==e?void 0:e.branch)?r.ZP.get("开发版"):r.ZP.get("正式版")," ","v",e.version]}),(0,d.jsx)(c.Z.Item,{label:r.ZP.get("更新时间"),span:3,children:f()(1e3*e.publishTime).format("YYYY-MM-DD HH:mm")}),(0,d.jsx)(c.Z.Item,{label:r.ZP.get("更新日志"),span:3,children:(0,d.jsx)(h,{href:"https://qn.whyour.cn/version.yaml?t=".concat(Date.now()),target:"_blank",children:r.ZP.get("查看")})})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{href:"https://github.com/whyour/qinglong",target:"_blank",style:{marginRight:15},children:"Github"}),(0,d.jsx)(h,{href:"https://t.me/jiao_long",target:"_blank",style:{marginRight:15},children:r.ZP.get("Telegram频道")}),(0,d.jsx)(h,{href:"https://github.com/whyour/qinglong/issues",target:"_blank",children:r.ZP.get("提交BUG")})]})]})]})}},11847:function(t,e,n){"use strict";n.d(e,{c4:function(){return c}});var r=n(22481),i=n(88028),c=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,o=-1,u={},l={matchHandlers:{},dispatch:function(t){return u=t,s.forEach((function(t){return t(u)})),s.size>=1},subscribe:function(t){return s.size||this.register(),o+=1,s.set(o,t),t(u),o},unsubscribe:function(t){s.delete(t),s.size||this.unregister()},unregister:function(){var t=this;Object.keys(a).forEach((function(e){var n=a[e],r=t.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),s.clear()},register:function(){var t=this;Object.keys(a).forEach((function(e){var n=a[e],c=function(n){var c=n.matches;t.dispatch((0,i.Z)((0,i.Z)({},u),(0,r.Z)({},e,c)))},s=window.matchMedia(n);s.addListener(c),t.matchHandlers[n]={mql:s,listener:c},c(s)}))}};e.ZP=l},23797:function(t,e,n){"use strict";n.d(e,{K:function(){return N},Z:function(){return _}});var r=n(22481),i=n(41171),c=n(69947),a=n(84875),s=n.n(a),o=n(51026),u=n(63313),l=n(82259),f=n(25515),d=n(11847),h=function(t){return t.children},m=n(88028);function v(t){return null!=t}var E=function(t){var e,n=t.itemPrefixCls,i=t.component,c=t.span,a=t.className,o=t.style,l=t.labelStyle,f=t.contentStyle,d=t.bordered,h=t.label,m=t.content,E=t.colon,p=i;return d?u.createElement(p,{className:s()((e={},(0,r.Z)(e,"".concat(n,"-item-label"),v(h)),(0,r.Z)(e,"".concat(n,"-item-content"),v(m)),e),a),style:o,colSpan:c},v(h)&&u.createElement("span",{style:l},h),v(m)&&u.createElement("span",{style:f},m)):u.createElement(p,{className:s()("".concat(n,"-item"),a),style:o,colSpan:c},u.createElement("div",{className:"".concat(n,"-item-container")},(h||0===h)&&u.createElement("span",{className:s()("".concat(n,"-item-label"),(0,r.Z)({},"".concat(n,"-item-no-colon"),!E)),style:l},h),(m||0===m)&&u.createElement("span",{className:s()("".concat(n,"-item-content")),style:f},m)))};function p(t,e,n){var r=e.colon,i=e.prefixCls,c=e.bordered,a=n.component,s=n.type,o=n.showLabel,l=n.showContent,f=n.labelStyle,d=n.contentStyle;return t.map((function(t,e){var n=t.props,h=n.label,v=n.children,p=n.prefixCls,y=void 0===p?i:p,N=n.className,S=n.style,M=n.labelStyle,g=n.contentStyle,_=n.span,O=void 0===_?1:_,b=t.key;return"string"==typeof a?u.createElement(E,{key:"".concat(s,"-").concat(b||e),className:N,style:S,labelStyle:(0,m.Z)((0,m.Z)({},f),M),contentStyle:(0,m.Z)((0,m.Z)({},d),g),span:O,colon:r,component:a,itemPrefixCls:y,bordered:c,label:o?h:null,content:l?v:null}):[u.createElement(E,{key:"label-".concat(b||e),className:N,style:(0,m.Z)((0,m.Z)((0,m.Z)({},f),S),M),span:1,colon:r,component:a[0],itemPrefixCls:y,bordered:c,label:h}),u.createElement(E,{key:"content-".concat(b||e),className:N,style:(0,m.Z)((0,m.Z)((0,m.Z)({},d),S),g),span:2*O-1,component:a[1],itemPrefixCls:y,bordered:c,content:v})]}))}var y=function(t){var e=u.useContext(N),n=t.prefixCls,r=t.vertical,i=t.row,c=t.index,a=t.bordered;return r?u.createElement(u.Fragment,null,u.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},p(i,t,(0,m.Z)({component:"th",type:"label",showLabel:!0},e))),u.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},p(i,t,(0,m.Z)({component:"td",type:"content",showContent:!0},e)))):u.createElement("tr",{key:c,className:"".concat(n,"-row")},p(i,t,(0,m.Z)({component:a?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},e)))},N=u.createContext({}),S={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function M(t,e,n){var r=t;return(void 0===e||e>n)&&(r=(0,f.Tm)(t,{span:n})),r}function g(t){var e,n=t.prefixCls,a=t.title,f=t.extra,h=t.column,m=void 0===h?S:h,v=t.colon,E=void 0===v||v,p=t.bordered,g=t.layout,_=t.children,O=t.className,b=t.style,x=t.size,C=t.labelStyle,$=t.contentStyle,Z=u.useContext(l.E_),I=Z.getPrefixCls,w=Z.direction,T=I("descriptions",n),D=u.useState({}),P=(0,i.Z)(D,2),U=P[0],A=P[1],L=function(t,e){if("number"==typeof t)return t;if("object"===(0,c.Z)(t))for(var n=0;n<d.c4.length;n++){var r=d.c4[n];if(e[r]&&void 0!==t[r])return t[r]||S[r]}return 3}(m,U);u.useEffect((function(){var t=d.ZP.subscribe((function(t){"object"===(0,c.Z)(m)&&A(t)}));return function(){d.ZP.unsubscribe(t)}}),[]);var R=function(t,e){var n=(0,o.Z)(t).filter((function(t){return t})),r=[],i=[],c=e;return n.forEach((function(t,a){var s,o=null===(s=t.props)||void 0===s?void 0:s.span,u=o||1;if(a===n.length-1)return i.push(M(t,o,c)),void r.push(i);u<c?(c-=u,i.push(t)):(i.push(M(t,u,c)),r.push(i),c=e,i=[])})),r}(_,L),H=u.useMemo((function(){return{labelStyle:C,contentStyle:$}}),[C,$]);return u.createElement(N.Provider,{value:H},u.createElement("div",{className:s()(T,(e={},(0,r.Z)(e,"".concat(T,"-").concat(x),x&&"default"!==x),(0,r.Z)(e,"".concat(T,"-bordered"),!!p),(0,r.Z)(e,"".concat(T,"-rtl"),"rtl"===w),e),O),style:b},(a||f)&&u.createElement("div",{className:"".concat(T,"-header")},a&&u.createElement("div",{className:"".concat(T,"-title")},a),f&&u.createElement("div",{className:"".concat(T,"-extra")},f)),u.createElement("div",{className:"".concat(T,"-view")},u.createElement("table",null,u.createElement("tbody",null,R.map((function(t,e){return u.createElement(y,{key:e,index:e,colon:E,prefixCls:T,vertical:"vertical"===g,bordered:p,row:t})})))))))}g.Item=h;var _=g},76737:function(t,e,n){"use strict";n.d(e,{RV:function(){return u},Rk:function(){return l},Ux:function(){return d},aM:function(){return f},q3:function(){return s},qI:function(){return o}});var r=n(88028),i=n(14542),c=n(54331),a=n(63313),s=a.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),o=a.createContext(null),u=function(t){var e=(0,c.Z)(t,["prefixCls"]);return a.createElement(i.FormProvider,(0,r.Z)({},e))},l=a.createContext({prefixCls:""}),f=a.createContext({}),d=function(t){var e=t.children,n=t.status,i=t.override,c=(0,a.useContext)(f),s=(0,a.useMemo)((function(){var t=(0,r.Z)({},c);return i&&delete t.isFormItemInput,n&&(delete t.status,delete t.hasFeedback,delete t.feedbackIcon),t}),[n,i,c]);return a.createElement(f.Provider,{value:s},e)}},60934:function(t,e,n){"use strict";n.d(e,{BR:function(){return h},ri:function(){return d}});var r=n(88028),i=n(22481),c=n(84875),a=n.n(c),s=n(51026),o=n(63313),u=n(82259),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},f=o.createContext(null),d=function(t,e){var n=o.useContext(f),r=o.useMemo((function(){var r;if(!n)return"";var c=n.compactDirection,s=n.isFirstItem,o=n.isLastItem,u="vertical"===c?"-vertical-":"-";return a()((r={},(0,i.Z)(r,"".concat(t,"-compact").concat(u,"item"),!0),(0,i.Z)(r,"".concat(t,"-compact").concat(u,"first-item"),s),(0,i.Z)(r,"".concat(t,"-compact").concat(u,"last-item"),o),(0,i.Z)(r,"".concat(t,"-compact").concat(u,"item-rtl"),"rtl"===e),r))}),[t,e,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:r}},h=function(t){var e=t.children;return o.createElement(f.Provider,{value:null},e)},m=function(t){var e=t.children,n=l(t,["children"]);return o.createElement(f.Provider,{value:n},e)};e.ZP=function(t){var e,n=o.useContext(u.E_),c=n.getPrefixCls,d=n.direction,h=t.size,v=void 0===h?"middle":h,E=t.direction,p=t.block,y=t.prefixCls,N=t.className,S=t.children,M=l(t,["size","direction","block","prefixCls","className","children"]),g=c("space-compact",y),_=a()(g,(e={},(0,i.Z)(e,"".concat(g,"-rtl"),"rtl"===d),(0,i.Z)(e,"".concat(g,"-block"),p),(0,i.Z)(e,"".concat(g,"-vertical"),"vertical"===E),e),N),O=o.useContext(f),b=(0,s.Z)(S),x=o.useMemo((function(){return b.map((function(t,e){var n=t&&t.key||"".concat(g,"-item-").concat(e);return o.createElement(m,{key:n,compactSize:v,compactDirection:E,isFirstItem:0===e&&(!O||(null==O?void 0:O.isFirstItem)),isLastItem:e===b.length-1&&(!O||(null==O?void 0:O.isLastItem))},t)}))}),[v,b,O]);return 0===b.length?null:o.createElement("div",(0,r.Z)({className:_},M),x)}},52053:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",c="minute",a="hour",s="day",o="week",u="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),c=n-i<0,a=e.clone().add(r+(c?-1:1),u);return+(-(r+(n-i)/(c?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:o,d:s,D:d,h:a,m:c,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},N="en",S={};S[N]=E;var M=function(t){return t instanceof b},g=function t(e,n,r){var i;if(!e)return N;if("string"==typeof e){var c=e.toLowerCase();S[c]&&(i=c),n&&(S[c]=n,i=c);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&(N=i),i||!r&&N},_=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},O=y;O.l=g,O.i=M,O.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function E(t){this.$L=g(t.locale,null,!0),this.parse(t)}var p=E.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,c=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,c)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return O},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return _(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<_(t)},p.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!O.u(e)||e,l=O.p(t),h=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,E=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case u:return r?h(1,E):h(0,E+1);case o:var N=this.$locale().weekStart||0,S=(v<N?v+7:v)-N;return h(r?p-S:p+(6-S),E);case s:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case c:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=O.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[s]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[c]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===s?this.$D+(e-this.$W):e;if(o===u||o===f){var v=this.clone().set(d,1);v.$d[h](m),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[O.p(t)]()},p.add=function(r,l){var d,h=this;r=Number(r);var m=O.p(l),v=function(t){var e=_(h);return O.w(e.date(e.date()+Math.round(t*r)),h)};if(m===u)return this.set(u,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===s)return v(1);if(m===o)return v(7);var E=(d={},d[c]=e,d[a]=n,d[i]=t,d)[m]||1,p=this.$d.getTime()+r*E;return O.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),c=this.$H,a=this.$m,s=this.$M,o=n.weekdays,u=n.months,l=function(t,n,i,c){return t&&(t[n]||t(e,r))||i[n].slice(0,c)},f=function(t){return O.s(c%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:O.s(this.$y,4,"0"),M:s+1,MM:O.s(s+1,2,"0"),MMM:l(n.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(c),HH:O.s(c,2,"0"),h:f(1),hh:f(2),a:d(c,a,!0),A:d(c,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||m[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,h){var m,v=O.p(d),E=_(r),p=(E.utcOffset()-this.utcOffset())*e,y=this-E,N=O.m(this,E);return N=(m={},m[f]=N/12,m[u]=N,m[l]=N/3,m[o]=(y-p)/6048e5,m[s]=(y-p)/864e5,m[a]=y/n,m[c]=y/e,m[i]=y/t,m)[v]||y,h?N:O.a(N)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return S[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return O.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},E}(),x=b.prototype;return _.prototype=x,[["$ms",r],["$s",i],["$m",c],["$H",a],["$W",s],["$M",u],["$y",f],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,b,_),t.$i=!0),_},_.locale=g,_.isDayjs=M,_.unix=function(t){return _(1e3*t)},_.en=S[N],_.Ls=S,_.p={},_}()},32602:function(t,e){"use strict";var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var e=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||e>=n.F1&&e<=n.F12)return!1;switch(e){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=n.ZERO&&t<=n.NINE)return!0;if(t>=n.NUM_ZERO&&t<=n.NUM_MULTIPLY)return!0;if(t>=n.A&&t<=n.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===t)return!0;switch(t){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};e.Z=n},12334:function(t,e,n){"use strict";n.d(e,{o:function(){return a}});var r=n(63313),i=(0,n(46594).Z)()?r.useLayoutEffect:r.useEffect,c=function(t,e){var n=r.useRef(!0);i((function(){return t(n.current)}),e),i((function(){return n.current=!1,function(){n.current=!0}}),[])},a=function(t,e){c((function(e){if(!e)return t()}),e)};e.Z=c}}]);