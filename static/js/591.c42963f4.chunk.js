"use strict";(self.webpackChunktradersarena=self.webpackChunktradersarena||[]).push([[591],{3591:function(n,e,t){t.r(e);var r=t(15861),o=t(15671),c=t(43144),u=t(60136),i=t(43668),l=t(64687),s=t.n(l),a=t(72791),f=t(63407),m=t(40639),d=t(61630),x=t(85943),h=t(8136),b=t(62409),p=t(763),W=t.n(p),w=t(15276),j=t(81082),_=t(60364),k=t(80184),v=function(n){(0,u.Z)(t,n);var e=(0,i.Z)(t);function t(n){var r;return(0,o.Z)(this,t),(r=e.call(this,n)).state={stats:[],orders:[],ordersFiltered:[]},r}return(0,c.Z)(t,[{key:"GetTotalOrders",value:function(){var n=(0,r.Z)(s().mark((function n(){var e,t,r,o=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:0,t=(t=this.props.chartAndtables).find((function(n){return"getTotalOrders"===n.key})),n.prev=3,n.next=6,(0,h.O)("".concat(t.feeder_url,"/").concat(e));case 6:r=n.sent,this.setState({orders:r.data.data,ordersFiltered:r.data.data}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0);case 13:case"end":return n.stop()}}),n,this,[[3,10]])})));return function(){return n.apply(this,arguments)}}()},{key:"totalOrderWatchStates",value:function(){var n=(0,r.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(e=this.props.chartAndtables).find((function(n){return"totalOrdersWatchState"===n.key})),n.prev=2,n.next=5,(0,h.O)(e.feeder_url);case 5:t=n.sent,this.setState({stats:t.data.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,this,[[2,9]])})));return function(){return n.apply(this,arguments)}}()},{key:"changeSelect",value:function(n){this.GetTotalOrders(n)}},{key:"filterOrders",value:function(n){var e=(0,b.Lu)(this.state.orders,n,{keys:W().map(new Array(13),(function(n,e){return"n".concat(e)}))});this.setState({ordersFiltered:e})}},{key:"componentDidMount",value:function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.GetTotalOrders(),this.totalOrderWatchStates();case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.x,{size:"sm",children:"\u062f\u06cc\u062f\u0647 \u0628\u0627\u0646 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627"}),(0,k.jsxs)(m.Z,{position:"apart",mt:"md",children:[this.state.orders.length>0&&(0,k.jsx)(d.I,{placeholder:"\u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u062c\u062f\u0648\u0644",onChange:function(e){return n.filterOrders(e.target.value)}}),this.state.stats.length>0&&(0,k.jsx)(x.Ph,{data:this.state.stats,onChange:function(e){return n.changeSelect(e)},defaultValue:0,placeholder:"\u0646\u0648\u0639 \u0627\u0648\u0631\u0627\u0642"})]}),(0,k.jsx)(w.Z,{pagination:!0,fixedHeader:!0,fixedHeaderScrollHeight:"70vh",data:this.state.ordersFiltered,column:j.lZ.header})]})}}]),t}(a.Component);e.default=(0,_.$j)((function(n){return{chartAndtables:n.config.needs.chartAndtables}}))(v)},81082:function(n,e,t){t.d(e,{K0:function(){return i},Y:function(){return l},JH:function(){return s},q:function(){return a},fZ:function(){return f},bG:function(){return m},sS:function(){return d},SO:function(){return x},FZ:function(){return h},kW:function(){return b},XC:function(){return p},lZ:function(){return W},UE:function(){return w}});var r=t(42982),o=t(91523),c=t(42997),u=t(80184);var i={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0627\u0645 \u06af\u0631\u0648\u0647",selector:function(n){return n.n0},cell:function(n){return(0,u.jsx)("span",{className:"text-blue-500 cursor-pointer",onClick:function(){return function(n){var e=n.label,t=n.id,r=n.pointIndex;window.chartable.setChart({label:e,id:t,pointIndex:r}),window.chartable.setModal()}({label:n.n0,id:"tb-GroupState",pointIndex:n.id})},children:n.n0})}},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n2},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642",selector:function(n){return n.n3},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n4},sortable:!0},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n5},cell:function(n){return(0,u.jsx)(c._b,{row:n.n5})},sortable:!0},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n6},cell:function(n){return(0,u.jsx)(c._b,{row:n.n6})},sortable:!0}]},l={header:[{name:"#",selector:function(n){return n.id},sortable:!0,omit:!0},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n0},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642",selector:function(n){return n.n2},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n3},sortable:!0},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n4},cell:function(n){return(0,u.jsx)(c._b,{row:n.n4})},sortable:!0},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n5},cell:function(n){return(0,u.jsx)(c._b,{row:n.n5})},sortable:!0}]},s={header:[{name:"\u062a\u0639\u062f\u0627\u062f \u062e\u0631\u06cc\u062f\u0627\u0631",selector:function(n){return n.n0}},{name:"\u0627\u0631\u0632\u0634 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n1}},{name:"\u062f\u0631\u0635\u062f \u062e\u0631\u06cc\u062f",selector:function(n){return n.n2}},{name:"\u0646\u0648\u0639",selector:function(n){return n.n3}},{name:"\u062a\u0639\u062f\u0627\u062f \u0641\u0631\u0648\u0634\u0646\u062f\u0647",selector:function(n){return n.n4}},{name:"\u0627\u0631\u0632\u0634 \u0641\u0631\u0648\u0634",selector:function(n){return n.n5}},{name:"\u062f\u0631\u0635\u062f \u0641\u0631\u0648\u0634",selector:function(n){return n.n6}}]},a={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0627\u0645 \u06af\u0631\u0648\u0647",selector:function(n){return n.n0},sortable:!0,cell:function(n){return(0,u.jsx)(c.IR,{link:"/industries/".concat(n.id),text:n.n0})},grow:2},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n2},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n3},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n4},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f",selector:function(n){return n.n5},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u0641\u0631\u0648\u0634",selector:function(n){return n.n6},sortable:!0,minWidth:"0px"},{name:"\u062a\u0631\u0627\u0632 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627",selector:function(n){return n.n7},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n7})},minWidth:"0px"},{name:"\u0647\u0645 \u0648\u0632\u0646",selector:function(n){return n.n8},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n8})},minWidth:"0px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n9},sortable:!0,minWidth:"0px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634",selector:function(n){return n.n10},sortable:!0,minWidth:"0px"},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n11},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n11})},minWidth:"0px"},{name:"\u062f\u0631\u0635\u062f \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n12},sortable:!0,minWidth:"0px"},{name:"\u062f\u0631\u0635\u062f \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n13},sortable:!0,minWidth:"0px"},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n14},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n14})},minWidth:"0px"}]},f={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u06af\u0631\u0648\u0647",selector:function(n){return n.n0}},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u06af\u0631\u0648\u0647",selector:function(n){return n.n1}},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642\u06cc\t",selector:function(n){return n.n2}},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc\t",selector:function(n){return n.n3}},{name:"\u0646\u0633\u0628\u062a \u062e\u0631\u06cc\u062f\u0627\u0631 \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u0647\t",selector:function(n){return n.n4},cell:function(n){return(0,u.jsx)(c._b,{row:n.n4})}},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n5},cell:function(n){return(0,u.jsx)(c._b,{row:n.n5})}}]},m={header:(0,r.Z)(s.header)},d={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0645\u0627\u062f",selector:function(n){return n.n0},sortable:!0,cell:function(n){return(0,u.jsx)(c.IR,{link:"/stock/".concat(n.id),text:n.n0})},minWidth:"50px"},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0,minWidth:"70px"},{name:"\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u062d\u062c\u0645 20 \u0631\u0648\u0632\u0647",selector:function(n){return n.n2},sortable:!0,minWidth:"0px"},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n3},sortable:!0,minWidth:"0px"},{name:"\u0622\u062e\u0631\u06cc\u0646",selector:function(n){return n.n4},sortable:!0,minWidth:"0px"},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n5},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n5})},minWidth:"0px"},{name:"\u067e\u0627\u06cc\u0627\u0646\u06cc",selector:function(n){return n.n6},sortable:!0,minWidth:"0px"},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n7},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n7})},minWidth:"0px"},{name:"\u0646\u0648\u0633\u0627\u0646",selector:function(n){return n.n8},sortable:!0,minWidth:"0px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n9},sortable:!0,minWidth:"0px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634",selector:function(n){return n.n10},sortable:!0,minWidth:"0px"},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n11},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n11})},minWidth:"0px"},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f 5 \u0631\u0648\u0632\u0647",selector:function(n){return n.n12},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n12})},minWidth:"0px"},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644",selector:function(n){return n.n13},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n13})},minWidth:"0px"},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 5 \u0631\u0648\u0632\u0647",selector:function(n){return n.n14},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n14})},minWidth:"0px"},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 20 \u0631\u0648\u0632\u0647",selector:function(n){return n.n15},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n15})},minWidth:"0px"},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 60 \u0631\u0648\u0632\u0647",selector:function(n){return n.n16},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n16})},minWidth:"0px"}]},x={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0645\u0627\u062f",selector:function(n){return n.n0},sortable:!0,cell:function(n){return(0,u.jsx)(c.IR,{link:"/stock/".concat(n.id),text:n.n0})}},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0},{name:"\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u062d\u062c\u0645 20 \u0631\u0648\u0632\u0647",selector:function(n){return n.n2},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n3},sortable:!0},{name:"NAV",selector:function(n){return n.n4},sortable:!0},{name:"\u062f\u0631\u0635\u062f \u062a\u0641\u0627\u0648\u062a \u0642\u06cc\u0645\u062a \u0628\u0627  NAV",selector:function(n){return n.n5},sortable:!0},{name:"\u0622\u062e\u0631\u06cc\u0646",selector:function(n){return n.n6},sortable:!0},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n7},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n7})}},{name:"\u067e\u0627\u06cc\u0627\u0646\u06cc",selector:function(n){return n.n8},sortable:!0},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n9},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n9})}},{name:"\u0646\u0648\u0633\u0627\u0646",selector:function(n){return n.n10},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n11},sortable:!0},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634",selector:function(n){return n.n12},sortable:!0},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n13},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n13})}},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f 5 \u0631\u0648\u0632\u0647",selector:function(n){return n.n14},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n14})}},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644",selector:function(n){return n.n15},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n15})}},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 5 \u0631\u0648\u0632\u0647",selector:function(n){return n.n16},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n16})}},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 20 \u0631\u0648\u0632\u0647",selector:function(n){return n.n17},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n17})}},{name:"\u0628\u0627\u0632\u062f\u0647\u06cc 60 \u0631\u0648\u0632\u0647",selector:function(n){return n.n18},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n18})}}]},h={header:[{name:"\u0631\u062f\u06cc\u0641",selector:function(n){return n.n0},minWidth:"30px"},{name:"\u062a\u0627\u0631\u06cc\u062e",selector:function(n){return n.n1},cell:function(n){return(0,u.jsx)(o.rU,{style:{width:"300px"},to:"/extra/marketwatch/".concat(n.n1.replaceAll("/","")),children:(0,u.jsx)("span",{className:"text-blue-500",style:{width:"300px"},children:n.n1})})}},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n2},minWidth:"30px"},{name:"\u0627\u0631\u0632\u0634 \u0628\u0647 5 \u0631\u0648\u0632",selector:function(n){return n.n3},minWidth:"10px"},{name:"\u0627\u0631\u0632\u0634 \u0628\u0647 20 \u0631\u0648\u0632",selector:function(n){return n.n4},minWidth:"60px"},{name:"\u0627\u0631\u0632\u0634 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n5},minWidth:"60px"},{name:"\u0627\u0631\u0632\u0634 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n6},minWidth:"60px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n7},minWidth:"60px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n8},minWidth:"60px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n9},minWidth:"60px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634",selector:function(n){return n.n10},minWidth:"60px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n11},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n12},minWidth:"50px"},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n13},cell:function(n){return(0,u.jsx)(c._b,{row:n.n13})},minWidth:"50px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n14},cell:function(n){return(0,u.jsx)(c._b,{row:n.n14})},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n15},cell:function(n){return(0,u.jsx)(c._b,{row:n.n15})},minWidth:"50px"},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644",selector:function(n){return n.n16},cell:function(n){return(0,u.jsx)(c._b,{row:n.n16})},minWidth:"50px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n17},cell:function(n){return(0,u.jsx)(c._b,{row:n.n17})},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n18},cell:function(n){return(0,u.jsx)(c._b,{row:n.n18})},minWidth:"50px"},{name:"\u0634\u0627\u062e\u0635 \u06af\u0631\u0648\u0647",selector:function(n){return n.n18},cell:function(n){return(0,u.jsx)(c._b,{row:n.n19})},minWidth:"50px"}]},b={header:[{name:"\u0631\u062f\u06cc\u0641",selector:function(n){return n.n0},minWidth:"30px"},{name:"\u062a\u0627\u0631\u06cc\u062e",selector:function(n){return n.n1},cell:function(n){return(0,u.jsx)(o.rU,{style:{width:"300px"},to:"/extra/marketwatch/".concat(n.n1.replaceAll("/","")),children:(0,u.jsx)("span",{className:"text-blue-500",style:{width:"300px"},children:n.n1})})}},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n2},minWidth:"30px"},{name:"\u0627\u0631\u0632\u0634 \u0628\u0647 5 \u0631\u0648\u0632",selector:function(n){return n.n3},minWidth:"10px"},{name:"\u0627\u0631\u0632\u0634 \u0628\u0647 20 \u0631\u0648\u0632",selector:function(n){return n.n4},minWidth:"60px"},{name:"\u0627\u0631\u0632\u0634 \u062e\u0631\u06cc\u062f \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n5},minWidth:"60px"},{name:"\u0627\u0631\u0632\u0634 \u0641\u0631\u0648\u0634 \u062d\u0642\u06cc\u0642\u06cc",selector:function(n){return n.n6},minWidth:"60px"},{name:"\u06a9\u062f \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f\u0627\u0631",selector:function(n){return n.n7},minWidth:"60px"},{name:"\u06a9\u062f \u0647\u0627\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647",selector:function(n){return n.n8},minWidth:"60px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f",selector:function(n){return n.n9},minWidth:"60px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n10},minWidth:"60px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n11},minWidth:"60px"},{name:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634",selector:function(n){return n.n12},minWidth:"50px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n13},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n14},minWidth:"50px"},{name:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f",selector:function(n){return n.n15},cell:function(n){return(0,u.jsx)(c._b,{row:n.n15})},minWidth:"50px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n16},cell:function(n){return(0,u.jsx)(c._b,{row:n.n16})},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n17},cell:function(n){return(0,u.jsx)(c._b,{row:n.n17})},minWidth:"50px"},{name:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644",selector:function(n){return n.n18},cell:function(n){return(0,u.jsx)(c._b,{row:n.n18})},minWidth:"50px"},{name:"5 \u0631\u0648\u0632",selector:function(n){return n.n19},cell:function(n){return(0,u.jsx)(c._b,{row:n.n19})},minWidth:"50px"},{name:"20 \u0631\u0648\u0632",selector:function(n){return n.n20},cell:function(n){return(0,u.jsx)(c._b,{row:n.n20})},minWidth:"50px"},{name:"\u0634\u0627\u062e\u0635 \u06a9\u0644",selector:function(n){return n.n21},minWidth:"50px"},{name:"\u0634\u0627\u062e\u0635 \u0647\u0645 \u0648\u0632\u0646",selector:function(n){return n.n22},minWidth:"50px"}]},p={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0631\u062a\u0628\u0647",selector:function(n){return n.colid},sortable:!0},{name:"\u0646\u0645\u0627\u062f",selector:function(n){return n.n0},sortable:!0,cell:function(n){return(0,u.jsx)(c.IR,{link:"/stock/".concat(n.id),text:n.n0})}},{name:"\u0642\u06cc\u0645\u062a \u0647\u0631 \u0633\u0647\u0645",selector:function(n){return n.n1},sortable:!0},{name:"\u062a\u0639\u062f\u0627\u062f \u0633\u0647\u0627\u0645",selector:function(n){return n.n2},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0628\u0627\u0632\u0627\u0631",selector:function(n){return n.n3},sortable:!0}]},W={header:[{name:"\u0634\u0646\u0627\u0633\u0647",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0645\u0627\u062f",selector:function(n){return n.n0},sortable:!0,cell:function(n){return(0,u.jsx)(c.IR,{link:"/stock/".concat(n.id),text:n.n0})}},{name:"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n1},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062a",selector:function(n){return n.n2},sortable:!0},{name:"\u0622\u062e\u0631\u06cc\u0646",selector:function(n){return n.n3},sortable:!0},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n4},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n4})}},{name:"\u067e\u0627\u06cc\u0627\u0646\u06cc",selector:function(n){return n.n5},sortable:!0},{name:"\u062f\u0631\u0635\u062f",selector:function(n){return n.n6},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n6})}},{name:"\u0646\u0648\u0633\u0627\u0646",selector:function(n){return n.n7},sortable:!0},{name:"\u062d\u062c\u0645 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f",selector:function(n){return n.n8},sortable:!0},{name:"\u062d\u062c\u0645 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u0641\u0631\u0648\u0634",selector:function(n){return n.n9},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f",selector:function(n){return n.n10},sortable:!0},{name:"\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u0641\u0631\u0648\u0634",selector:function(n){return n.n11},sortable:!0},{name:"\u062a\u0631\u0627\u0632 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627",selector:function(n){return n.n12},sortable:!0,cell:function(n){return(0,u.jsx)(c._b,{row:n.n12})}}]},w=[{name:"\u0631\u062f\u06cc\u0641",selector:function(n){return n.id},omit:!0},{name:"\u0646\u0645\u0627\u062f",selector:function(n){return n.n0},sortable:!0},{name:"\u0633\u0642\u0641 \u0642\u06cc\u0645\u062a\u06cc \u0633\u0647\u0645",selector:function(n){return n.n1},sortable:!0},{name:"\u0642\u06cc\u0645\u062a \u0627\u0645\u0631\u0648\u0632",selector:function(n){return n.n2},sortable:!0},{name:"\u062a\u0627\u0631\u06cc\u062e \u0631\u0633\u06cc\u062f\u0646 \u0628\u0647 \u0642\u0644\u0647",selector:function(n){return n.n3},sortable:!0},{name:"\u062f\u0631\u0635\u062f \u0631\u06cc\u0632\u0634 \u0627\u0632 \u0633\u0642\u0641",selector:function(n){return n.n4},cell:function(n){return(0,u.jsx)(c._b,{row:n.n4})},sortable:!0}]}}]);
//# sourceMappingURL=591.c42963f4.chunk.js.map