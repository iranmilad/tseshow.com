(self.webpackChunktradersarena=self.webpackChunktradersarena||[]).push([[668],{73088:function(e,t,n){"use strict";n.d(t,{K:function(){return d}});var r=n(37762),a=n(47313),i=n(10847),o=(0,n(3010).k)((function(e,t){var n=t.spacing;return{root:{display:"flex",flexDirection:"column",alignItems:t.align,justifyContent:t.justify,gap:e.fn.size({size:n,sizes:e.spacing})}}})),s=n(78129),l=Object.defineProperty,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},g={spacing:"md",align:"stretch",justify:"top"},d=(0,a.forwardRef)((function(e,t){var n=(0,i.Z3)("Stack",g,e),l=n.spacing,d=n.className,h=n.classNames,m=n.styles,w=n.align,y=n.justify,v=function(e,t){var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u){var i,o=(0,r.Z)(u(e));try{for(o.s();!(i=o.n()).done;)a=i.value,t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a])}catch(s){o.e(s)}finally{o.f()}}return n}(n,["spacing","className","classNames","styles","align","justify"]),C=o({spacing:l,align:w,justify:y},{name:"Stack",classNames:h,styles:m}),b=C.classes,x=C.cx;return a.createElement(s.x,function(e,t){for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(u){var a,i=(0,r.Z)(u(t));try{for(i.s();!(a=i.n()).done;)n=a.value,f.call(t,n)&&p(e,n,t[n])}catch(o){i.e(o)}finally{i.f()}}return e}({className:x(b.root,d),ref:t},v))}));d.displayName="@mantine/core/Stack"},14277:function(e,t,n){"use strict";n.d(t,{u:function(){return k}});var r=n(42982),a=n(70885),i=n(37762),o=n(47313),s=n(65427),l=n(10847),u=n(29179),c=n(3010),f=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,w=function(e,t,n){return t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},y=function(e,t){for(var n in t||(t={}))h.call(t,n)&&w(e,n,t[n]);if(d){var r,a=(0,i.Z)(d(t));try{for(a.s();!(r=a.n()).done;){n=r.value;m.call(t,n)&&w(e,n,t[n])}}catch(o){a.e(o)}finally{a.f()}}return e},v=(0,c.k)((function(e,t){var n,r,a=t.color,i=t.radius;return{root:{position:"relative",display:"inline-block"},body:(n=y({},e.fn.fontStyles()),r={backgroundColor:e.fn.themeColor(a,"dark"===e.colorScheme?3:9),lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,borderRadius:e.fn.radius(i),padding:"".concat(e.spacing.xs/2,"px ").concat(e.spacing.xs,"px"),color:"dark"===e.colorScheme?e.colors.dark[9]:e.white,position:"relative",overflow:"hidden",textOverflow:"ellipsis"},p(n,g(r))),arrow:{border:0,background:e.fn.themeColor(a,"dark"===e.colorScheme?3:9),zIndex:1}}})),C=n(78129),b=n(57678),x=Object.defineProperty,S=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,O=function(e,t,n){return t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},P={openDelay:0,closeDelay:0,gutter:5,color:"gray",disabled:!1,withArrow:!1,arrowSize:2,position:"top",placement:"center",transition:"pop-top-left",transitionDuration:100,zIndex:(0,s.w)("popover"),width:"auto",wrapLines:!1,allowPointerEvents:!1,positionDependencies:[],withinPortal:!0},k=(0,o.forwardRef)((function(e,t){var n=(0,l.Z3)("Tooltip",P,e),s=n.className,c=n.label,f=n.children,p=n.opened,g=n.openDelay,d=n.closeDelay,h=n.gutter,m=n.color,w=n.radius,y=n.disabled,x=n.withArrow,k=n.arrowSize,R=n.position,j=n.placement,A=n.transition,z=n.transitionDuration,T=n.zIndex,D=(n.transitionTimingFunction,n.width),Z=n.wrapLines,I=n.allowPointerEvents,M=n.positionDependencies,V=n.withinPortal,L=n.tooltipRef,F=(n.tooltipId,n.classNames),_=n.styles,$=n.onMouseLeave,q=n.onMouseEnter,H=function(e,t){var n={};for(var r in e)E.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&S){var a,o=(0,i.Z)(S(e));try{for(o.s();!(a=o.n()).done;)r=a.value,t.indexOf(r)<0&&N.call(e,r)&&(n[r]=e[r])}catch(s){o.e(s)}finally{o.f()}}return n}(n,["className","label","children","opened","openDelay","closeDelay","gutter","color","radius","disabled","withArrow","arrowSize","position","placement","transition","transitionDuration","zIndex","transitionTimingFunction","width","wrapLines","allowPointerEvents","positionDependencies","withinPortal","tooltipRef","tooltipId","classNames","styles","onMouseLeave","onMouseEnter"]),U=v({color:m,radius:w},{classNames:F,styles:_,name:"Tooltip"}),B=U.classes,G=U.cx,K=U.theme,Y=(0,o.useRef)(),J=(0,o.useRef)(),Q=(0,o.useState)(!1),W=(0,a.Z)(Q,2),X=W[0],ee=W[1],te=("boolean"===typeof p?p:X)&&!y,ne=(0,o.useState)(null),re=(0,a.Z)(ne,2),ae=re[0],ie=re[1],oe=(0,u.Y)(t,ie),se=function(){window.clearTimeout(J.current),0!==g?Y.current=window.setTimeout((function(){ee(!0)}),g):ee(!0)},le=function(){window.clearTimeout(Y.current),0!==d?J.current=window.setTimeout((function(){ee(!1)}),d):ee(!1)};return(0,o.useEffect)((function(){return function(){window.clearTimeout(Y.current),window.clearTimeout(J.current)}}),[]),o.createElement(C.x,function(e,t){for(var n in t||(t={}))E.call(t,n)&&O(e,n,t[n]);if(S){var r,a=(0,i.Z)(S(t));try{for(a.s();!(r=a.n()).done;)n=r.value,N.call(t,n)&&O(e,n,t[n])}catch(o){a.e(o)}finally{a.f()}}return e}({className:G(B.root,s),onPointerEnter:function(e){se(),"function"===typeof q&&q(e)},onPointerLeave:function(e){le(),"function"===typeof $&&$(e)},onFocusCapture:se,onBlurCapture:le,ref:oe},H),o.createElement(b.r,{referenceElement:ae,transitionDuration:z,transition:A,mounted:te,position:R,placement:j,gutter:h,withArrow:x,arrowSize:k,arrowDistance:K.fn.radius(w)>10?7:3,zIndex:T,arrowClassName:B.arrow,forceUpdateDependencies:[m,w].concat((0,r.Z)(M)),withinPortal:V},o.createElement(C.x,{className:B.body,ref:L,sx:{pointerEvents:I?"all":"none",whiteSpace:Z?"normal":"nowrap",width:D}},c)),f)}));k.displayName="@mantine/core/Tooltip"},16757:function(e,t,n){var r,a,i,o,s,l=[].slice;o=this,s=function(){var e,t,n,r,a,i,o,s,u,c,f,p,g,d,h;return u=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},o=function(e,t){var n,r,a;for(a=[],n=-1,r=e.length;++n<r;)a=a.concat(t(e[n]));return a},d=function(e,t){var n,r,a;for(a="",n=-1,r=e.length;++n<r;)a+=t(e[n]);return a},g=function(e){return new RegExp(e.toString()+"|").exec("").length-1},f=function(e,t){var n,r,a,i,o;for(i={},n=-1,a=e.length;++n<a;)r=e[n],null!=(o=t[n])&&(null!=i[r]?(Array.isArray(i[r])||(i[r]=[i[r]]),i[r].push(o)):i[r]=o);return i},(e={}).Result=function(e,t){this.value=e,this.rest=t},e.Tagged=function(e,t){this.tag=e,this.value=t},e.tag=function(t,n){return function(r){var a,i;if(null!=(a=n(r)))return i=new e.Tagged(t,a.value),new e.Result(i,a.rest)}},e.regex=function(t){return function(n){var r,a;if(null!=(r=t.exec(n)))return a=r[0],new e.Result(a,n.slice(a.length))}},e.sequence=function(){var t;return t=1<=arguments.length?l.call(arguments,0):[],function(n){var r,a,i,o,s;for(r=-1,a=t.length,s=[],i=n;++r<a;){if(null==(o=(0,t[r])(i)))return;s.push(o.value),i=o.rest}return new e.Result(s,i)}},e.pick=function(){var t,n;return t=arguments[0],n=2<=arguments.length?l.call(arguments,1):[],function(r){var a,i;if(null!=(i=e.sequence.apply(e,n)(r)))return a=i.value,i.value=a[t],i}},e.string=function(t){var n;return n=t.length,function(r){if(r.slice(0,n)===t)return new e.Result(t,r.slice(n))}},e.lazy=function(e){var t;return t=null,function(n){return null==t&&(t=e()),t(n)}},e.baseMany=function(t,n,r,a,i){var o,s,l;for(s=i,l=r?"":[];(null==n||null==n(s))&&null!=(o=t(s));)r?l+=o.value:l.push(o.value),s=o.rest;if(!a||0!==l.length)return new e.Result(l,s)},e.many1=function(t){return function(n){return e.baseMany(t,null,!1,!0,n)}},e.concatMany1Till=function(t,n){return function(r){return e.baseMany(t,n,!0,!0,r)}},e.firstChoice=function(){var e;return e=1<=arguments.length?l.call(arguments,0):[],function(t){var n,r,a;for(n=-1,r=e.length;++n<r;)if(null!=(a=(0,e[n])(t)))return a}},p=function(t){var n;return(n={}).wildcard=e.tag("wildcard",e.string(t.wildcardChar)),n.optional=e.tag("optional",e.pick(1,e.string(t.optionalSegmentStartChar),e.lazy((function(){return n.pattern})),e.string(t.optionalSegmentEndChar))),n.name=e.regex(new RegExp("^["+t.segmentNameCharset+"]+")),n.named=e.tag("named",e.pick(1,e.string(t.segmentNameStartChar),e.lazy((function(){return n.name})))),n.escapedChar=e.pick(1,e.string(t.escapeChar),e.regex(/^./)),n.static=e.tag("static",e.concatMany1Till(e.firstChoice(e.lazy((function(){return n.escapedChar})),e.regex(/^./)),e.firstChoice(e.string(t.segmentNameStartChar),e.string(t.optionalSegmentStartChar),e.string(t.optionalSegmentEndChar),n.wildcard))),n.token=e.lazy((function(){return e.firstChoice(n.wildcard,n.optional,n.named,n.static)})),n.pattern=e.many1(e.lazy((function(){return n.token}))),n},s={escapeChar:"\\",segmentNameStartChar:":",segmentValueCharset:"a-zA-Z0-9-_~ %",segmentNameCharset:"a-zA-Z0-9",optionalSegmentStartChar:"(",optionalSegmentEndChar:")",wildcardChar:"*"},i=function(e,t){if(Array.isArray(e))return d(e,(function(e){return i(e,t)}));switch(e.tag){case"wildcard":return"(.*?)";case"named":return"(["+t+"]+)";case"static":return u(e.value);case"optional":return"(?:"+i(e.value,t)+")?"}},a=function(e,t){return null==t&&(t=s.segmentValueCharset),"^"+i(e,t)+"$"},r=function(e){if(Array.isArray(e))return o(e,r);switch(e.tag){case"wildcard":return["_"];case"named":return[e.value];case"static":return[];case"optional":return r(e.value)}},c=function(e,t,n,r){var a,i,o;if(null==r&&(r=!1),null!=(o=e[t])){if(!((a=n[t]||0)>(Array.isArray(o)?o.length-1:0)))return i=Array.isArray(o)?o[a]:o,r&&(n[t]=a+1),i;if(r)throw new Error("too few values provided for key `"+t+"`")}else if(r)throw new Error("no values provided for key `"+t+"`")},n=function(e,t,r){var a,i;if(Array.isArray(e)){for(a=-1,i=e.length;++a<i;)if(n(e[a],t,r))return!0;return!1}switch(e.tag){case"wildcard":return null!=c(t,"_",r,!1);case"named":return null!=c(t,e.value,r,!1);case"static":return!1;case"optional":return n(e.value,t,r)}},h=function(e,t,r){if(Array.isArray(e))return d(e,(function(e){return h(e,t,r)}));switch(e.tag){case"wildcard":return c(t,"_",r,!0);case"named":return c(t,e.value,r,!0);case"static":return e.value;case"optional":return n(e.value,t,r)?h(e.value,t,r):""}},(t=function(e,n){var i,o,l;if(e instanceof t)return this.isRegex=e.isRegex,this.regex=e.regex,this.ast=e.ast,void(this.names=e.names);if(this.isRegex=e instanceof RegExp,"string"!==typeof e&&!this.isRegex)throw new TypeError("argument must be a regex or a string");if(this.isRegex){if(this.regex=e,null!=n){if(!Array.isArray(n))throw new Error("if first argument is a regex the second argument may be an array of group names but you provided something else");if(i=g(this.regex),n.length!==i)throw new Error("regex contains "+i+" groups but array of group names contains "+n.length);this.names=n}}else{if(""===e)throw new Error("argument must not be the empty string");if(e.replace(/\s+/g,"")!==e)throw new Error("argument must not contain whitespace");if(o={escapeChar:(null!=n?n.escapeChar:void 0)||s.escapeChar,segmentNameStartChar:(null!=n?n.segmentNameStartChar:void 0)||s.segmentNameStartChar,segmentNameCharset:(null!=n?n.segmentNameCharset:void 0)||s.segmentNameCharset,segmentValueCharset:(null!=n?n.segmentValueCharset:void 0)||s.segmentValueCharset,optionalSegmentStartChar:(null!=n?n.optionalSegmentStartChar:void 0)||s.optionalSegmentStartChar,optionalSegmentEndChar:(null!=n?n.optionalSegmentEndChar:void 0)||s.optionalSegmentEndChar,wildcardChar:(null!=n?n.wildcardChar:void 0)||s.wildcardChar},null==(l=p(o).pattern(e)))throw new Error("couldn't parse pattern");if(""!==l.rest)throw new Error("could only partially parse pattern");this.ast=l.value,this.regex=new RegExp(a(this.ast,o.segmentValueCharset)),this.names=r(this.ast)}}).prototype.match=function(e){var t,n;return null==(n=this.regex.exec(e))?null:(t=n.slice(1),this.names?f(this.names,t):t)},t.prototype.stringify=function(e){if(null==e&&(e={}),this.isRegex)throw new Error("can't stringify patterns generated from a regex");if(e!==Object(e))throw new Error("argument must be an object or undefined");return h(this.ast,e,{})},t.escapeForRegex=u,t.concatMap=o,t.stringConcatMap=d,t.regexGroupCount=g,t.keysAndValuesToObject=f,t.P=e,t.newParser=p,t.defaultOptions=s,t.astNodeToRegexString=a,t.astNodeToNames=r,t.getParam=c,t.astNodeContainsSegmentsForProvidedParams=n,t.stringify=h,t},null!=n.amdO?(a=[],void 0===(i="function"===typeof(r=s)?r.apply(t,a):r)||(e.exports=i)):null!==t?e.exports=s():o.UrlPattern=s()}}]);