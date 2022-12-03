"use strict";(self.webpackChunktradersarena=self.webpackChunktradersarena||[]).push([[772],{21772:function(e,a,i){i.r(a);var n=i(1413),t=i(70885),l=i(73088),o=i(60073),r=i(80402),s=i(19577),d=i(47313),c=i(90182),u=i(1084),p=i(63830),f=i(31982),v=i(39554),y=i(47241),g=i(7087),h=i(46417);a.default=(0,p.EN)((0,u.$j)((function(e){return{dailyList:e.config.dailyList,chartAndtables:e.config.needs.chartAndtables}}),(function(e){return{setDailyList:function(a){return e((0,g.Gg)(a))}}}))((function(e){var a,i,u,g,b,m,w,x,Z,j,N,O,k,z,L=(0,p.UO)().id,E=(0,d.useState)(L),S=(0,t.Z)(E,2),P=S[0],F=S[1],A=(0,y.ZR)(e.chartAndtables,"dailyCashFlowIndustriesGroup"),C=(0,y.et)(A),G=(0,y.ZR)(e.chartAndtables,"dailyTradeValue"),R=(0,y.et)(G,"/".concat(P)),W=(0,d.useState)((null===(a=v.Z.dailyTradeValue.options)||void 0===a?void 0:a.labels)||[]),I=(0,t.Z)(W,2),B=I[0],V=I[1],D=(0,y.ZR)(e.chartAndtables,"dailyEntryMany"),M=(0,y.et)(D,"/".concat(P)),T=(0,d.useState)((null===(i=v.Z.dailyEntryMany.options)||void 0===i?void 0:i.labels)||[]),K=(0,t.Z)(T,2),q=K[0],U=K[1],$=(0,y.ZR)(e.chartAndtables,"dailyPowerBuyer"),H=(0,y.et)($,"/".concat(P)),J=(0,d.useState)((null===(u=v.Z.dailyPowerBuyer.options)||void 0===u?void 0:u.labels)||[]),Q=(0,t.Z)(J,2),X=Q[0],Y=Q[1],_=null===(g=C.data)||void 0===g||null===(b=g.data.find((function(e){return e.value===P})))||void 0===b?void 0:b.label;return(0,d.useEffect)((function(){var e,a,i,n,t,l;V((null===(e=R.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.date)||[]),U((null===(i=M.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.date)||[]),Y((null===(t=H.data)||void 0===t||null===(l=t.data)||void 0===l?void 0:l.date)||[])}),[R.data,M.data,H.data]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.q,{children:(0,h.jsx)("title",{children:"\u0646\u0645\u0648\u062f\u0627\u0631 \u0647\u0627\u06cc \u062c\u0631\u06cc\u0627\u0646\u0627\u062a \u0646\u0642\u062f\u06cc\u0646\u062f\u06af\u06cc"})}),(0,h.jsxs)(l.K,{spacing:"lg",children:[(0,h.jsxs)(o.Z,{position:"apart",children:[(0,h.jsx)(r.x,{size:"md",children:_}),(0,h.jsx)(s.Ph,{disabled:C.isLoading||R.isLoading||M.isLoading||H.isLoading,searchable:!0,onChange:F,placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0635\u0646\u0639\u062a",defaultValue:"".concat(null===(m=C.data)||void 0===m||null===(w=m.data[0])||void 0===w?void 0:w.value),data:C.isLoading?[]:null===(x=C.data)||void 0===x?void 0:x.data})]}),(0,h.jsx)(f.Z,{data:null===(Z=R.data)||void 0===Z||null===(j=Z.data)||void 0===j?void 0:j.series,isLoading:R.isLoading,isFetching:R.isFetching,error:R.isError?R.error:null,allow:null===G||void 0===G?void 0:G.allow,special:null===G||void 0===G?void 0:G.key,options:{options:(0,n.Z)((0,n.Z)({},v.Z.dailyTradeValue.options),{},{labels:B})},type:v.Z[G.key].type,width:"100%",height:300,title:G.title}),(0,h.jsx)(f.Z,{data:null===(N=M.data)||void 0===N||null===(O=N.data)||void 0===O?void 0:O.series,isLoading:M.isLoading,isFetching:M.isFetching,error:M.isError?M.error:null,allow:null===D||void 0===D?void 0:D.allow,special:null===D||void 0===D?void 0:D.key,options:{options:(0,n.Z)((0,n.Z)({},v.Z.dailyEntryMany.options),{},{labels:q})},type:v.Z[D.key].type,width:"100%",height:300,title:D.title}),(0,h.jsx)(f.Z,{data:null===(k=H.data)||void 0===k||null===(z=k.data)||void 0===z?void 0:z.series,isLoading:H.isLoading,isFetching:H.isFetching,error:H.isError?H.error:null,allow:null===$||void 0===$?void 0:$.allow,special:null===$||void 0===$?void 0:$.key,options:{options:(0,n.Z)((0,n.Z)({},v.Z.dailyPowerBuyer.options),{},{labels:X})},type:v.Z[$.key].type,width:"100%",height:300,title:$.title})]})]})})))},60073:function(e,a,i){i.d(a,{Z:function(){return g}});var n=i(37762),t=i(47313),l=i(10847),o=i(3010),r={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},s=(0,o.k)((function(e,a){var i=a.spacing,n=a.position,t=a.noWrap,l=a.direction,o=a.grow,s=a.align,d=a.count;return{root:{boxSizing:"border-box",display:"flex",flexDirection:l,alignItems:s||("row"===l?"center":o?"stretch":"apart"===n?"flex-start":r[n]),flexWrap:t?"nowrap":"wrap",justifyContent:"row"===l?r[n]:void 0,gap:e.fn.size({size:i,sizes:e.spacing})},child:{boxSizing:"border-box",maxWidth:o&&"row"===l?"calc(".concat(100/d,"% - ").concat(e.fn.size({size:i,sizes:e.spacing})-e.fn.size({size:i,sizes:e.spacing})/d,"px)"):void 0,flexGrow:o?1:0}}}));var d=i(78129),c=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=function(e,a,i){return a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i},y={position:"left",spacing:"md",direction:"row"},g=(0,t.forwardRef)((function(e,a){var i=(0,l.Z3)("Group",y,e),o=i.className,r=i.position,c=i.align,g=i.children,h=i.noWrap,b=i.grow,m=i.spacing,w=i.direction,x=i.classNames,Z=i.styles,j=function(e,a){var i={};for(var t in e)p.call(e,t)&&a.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&u){var l,o=(0,n.Z)(u(e));try{for(o.s();!(l=o.n()).done;)t=l.value,a.indexOf(t)<0&&f.call(e,t)&&(i[t]=e[t])}catch(r){o.e(r)}finally{o.f()}}return i}(i,["className","position","align","children","noWrap","grow","spacing","direction","classNames","styles"]),N=function(e){return t.Children.toArray(e).filter(Boolean)}(g),O=s({align:c,grow:b,noWrap:h,spacing:m,position:r,direction:w,count:N.length},{classNames:x,styles:Z,name:"Group"}),k=O.classes,z=O.cx,L=N.map((function(e){var a;return"object"===typeof e&&null!==e&&"props"in e?t.cloneElement(e,{className:z(k.child,null==(a=e.props)?void 0:a.className)}):e}));return t.createElement(d.x,function(e,a){for(var i in a||(a={}))p.call(a,i)&&v(e,i,a[i]);if(u){var t,l=(0,n.Z)(u(a));try{for(l.s();!(t=l.n()).done;)i=t.value,f.call(a,i)&&v(e,i,a[i])}catch(o){l.e(o)}finally{l.f()}}return e}({className:z(k.root,o),ref:a},j),L)}));g.displayName="@mantine/core/Group"},73088:function(e,a,i){i.d(a,{K:function(){return v}});var n=i(37762),t=i(47313),l=i(10847),o=(0,i(3010).k)((function(e,a){var i=a.spacing;return{root:{display:"flex",flexDirection:"column",alignItems:a.align,justifyContent:a.justify,gap:e.fn.size({size:i,sizes:e.spacing})}}})),r=i(78129),s=Object.defineProperty,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=function(e,a,i){return a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i},f={spacing:"md",align:"stretch",justify:"top"},v=(0,t.forwardRef)((function(e,a){var i=(0,l.Z3)("Stack",f,e),s=i.spacing,v=i.className,y=i.classNames,g=i.styles,h=i.align,b=i.justify,m=function(e,a){var i={};for(var t in e)c.call(e,t)&&a.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&d){var l,o=(0,n.Z)(d(e));try{for(o.s();!(l=o.n()).done;)t=l.value,a.indexOf(t)<0&&u.call(e,t)&&(i[t]=e[t])}catch(r){o.e(r)}finally{o.f()}}return i}(i,["spacing","className","classNames","styles","align","justify"]),w=o({spacing:s,align:h,justify:b},{name:"Stack",classNames:y,styles:g}),x=w.classes,Z=w.cx;return t.createElement(r.x,function(e,a){for(var i in a||(a={}))c.call(a,i)&&p(e,i,a[i]);if(d){var t,l=(0,n.Z)(d(a));try{for(l.s();!(t=l.n()).done;)i=t.value,u.call(a,i)&&p(e,i,a[i])}catch(o){l.e(o)}finally{l.f()}}return e}({className:Z(x.root,v),ref:a},m))}));v.displayName="@mantine/core/Stack"}}]);