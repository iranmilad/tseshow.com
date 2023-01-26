"use strict";(self.webpackChunktradersarena=self.webpackChunktradersarena||[]).push([[388],{6352:function(t,e,r){var a=r(1413),i=r(885),n=r(5987),s=r(402),o=r(3572),l=r(7171),c=r(7410),h=r(6417),u=["name","type"];e.Z=function(t){var e=t.name,r=t.type,d=(0,n.Z)(t,u),m=(0,c.U$)(e),p=(0,i.Z)(m,2),g=p[0],v=p[1],f=(0,a.Z)((0,a.Z)((0,a.Z)({},g),d),{},{color:"blue",radius:"md",size:"md",autoComplete:"off"});return v&&v.touched&&v.error&&(f.error=(0,h.jsx)(s.x,{size:"xs",children:v.error})),"password"===r?(0,h.jsx)(o.W,(0,a.Z)({},f)):(0,h.jsx)(l.o,(0,a.Z)({},f))}},3183:function(t,e,r){r.r(e);var a=r(5861),i=r(5671),n=r(3144),s=r(136),o=r(3668),l=r(4687),c=r.n(l),h=r(7313),u=r(73),d=r(402),m=r(489),p=r(7842),g=r(4391),v=r(1064),f=r(7019),y=r(1512),S=r(6144),x=r(9835),C=r(8007),k=r(5208),b=r(2297),w=r(182),j=r(6520),O=r(1582),D=r(3830),W=r(7410),Z=r(6834),I=r(6352),L=r(1084),z=r(4709),R=(r(6031),r(5998)),M=r.n(R),P=r(6417),A=function(t){(0,s.Z)(r,t);var e=(0,o.Z)(r);function r(t){var a;return(0,i.Z)(this,r),(a=e.call(this,t)).state={title:"\u0628\u0627\u0632\u0627\u0631",industrieLists:[],shorttermData:null,midtermData:null,longtermData:null,shortmovingtermData:null,midmovingtermData:null,longmovingtermData:null,chipsValue:0,comparisonPeriod:"",allowSelectLastChip:!0,openedModal:!1,overloayModal:!1,loading:!1,averageSettings:{shortterm:"10",midterm:"20",longterm:"50",shortmovingterm:"10",midmovingterm:"20",longmovingterm:"50"},pageID:t.route.match.params.id},a.history=t.history,a.group=t.route.match.params.id,a.chartRef=h.createRef(),a.chart=a.Candlestick=a.volumeStudy=null,a.candleStickData=[],a.market=t.marketData,a.shorttermChart=a.midtermChart=a.longtermChart=a.shortmovingtermChart=a.midmovingtermChart=a.longmovingtermChart=a.compareSell=a.compareBuy=a.chip1=a.chip4=null,a}return(0,n.Z)(r,[{key:"getGroupLists",value:function(){var t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.prev=1,t.next=4,(0,j.O)("https://feed.tseshow.com/api/totalIndustriesGroupHisory");case 4:e=t.sent,this.setState({industrieLists:e.data.data,loading:!1}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),this.setState({loading:!1}),console.log(t.t0);case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"changeGroup",value:function(t){this.history.push("/stock/chart/".concat(t))}},{key:"onChangeChips",value:function(){var t=(0,a.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({chipsValue:e}),+e>=0&&+e<=4?(null!==this.compareBuy&&this.compareBuy.applyOptions({visible:!1}),null!==this.compareSell&&this.compareSell.applyOptions({visible:!1}),0===+e&&this.CandlestickInitialize(this.state.pageID),this.VolumeStudyWorker(this.state.pageID,e),this.shortTermChartWorker(this.state.pageID,e),this.midTermChartWorker(this.state.pageID,e),this.longTermChartWorker(this.state.pageID,e),this.shortmovingtermWorker(this.state.pageID,e),this.midMovingTermChartWorker(this.state.pageID,e),this.longMovingTermChartWorker(this.state.pageID,e)):(this.CompareBuyWorker(),this.CompareSellWorker());case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"lastChipInputChange",value:function(t){t.length>0?this.setState({allowSelectLastChip:!1}):this.setState({allowSelectLastChip:!0}),t>0&&t<=100?this.setState({allowSelectLastChip:!1}):this.setState({allowSelectLastChip:!0}),this.setState({comparisonPeriod:t})}},{key:"CandlestickInitialize",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:this.group,null===this.Candlestick&&(this.Candlestick=this.chart.addCandlestickSeries({priceScaleId:"right",visible:!0})),this.Candlestick.applyOptions({visible:!0}),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/chart/".concat(e));case 7:r=t.sent,this.setState({loading:!1}),this.Candlestick.setData(r.data.data),this.candleStickData=r.data.data,t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 17:case"end":return t.stop()}}),t,this,[[4,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"chartDisplaySettings",value:function(t){this.Candlestick.applyOptions({visible:!t.includes("0")}),this.chart.applyOptions({rightPriceScale:{mode:t.includes("1")?O.B8.Logarithmic:O.B8.Normal}})}},{key:"handleAverageSettings",value:function(t){t.shortterm==this.state.averageSettings.shortterm&&t.midterm==this.state.averageSettings.midterm&&t.longterm==this.state.averageSettings.longterm&&t.shortmovingterm==this.state.averageSettings.shortmovingterm&&t.midmovingterm==this.state.averageSettings.midmovingterm&&t.longmovingterm==this.state.averageSettings.longmovingterm||(this.setState({averageSettings:t}),this.shortTermChartWorker(),this.midTermChartWorker(),this.longTermChartWorker(),this.shortMovingTermChartWorker(),this.midMovingTermChartWorker(),this.longMovingTermChartWorker())}},{key:"averagesDisplaySettings",value:function(t){this.volumeStudy.applyOptions({visible:!!t.includes("0")}),this.shorttermChart.applyOptions({visible:!!t.includes("1")}),this.midtermChart.applyOptions({visible:!!t.includes("2")}),this.longtermChart.applyOptions({visible:!!t.includes("3")}),this.shortmovingtermChart.applyOptions({visible:!!t.includes("4")}),this.midmovingtermChart.applyOptions({visible:!!t.includes("5")}),this.longmovingtermChart.applyOptions({visible:!!t.includes("6")})}},{key:"VolumeStudyWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:this.group,r=i.length>1&&void 0!==i[1]?i[1]:this.state.chipsValue,null===this.volumeStudy&&(this.volumeStudy=this.volumeStudy=this.chart.addHistogramSeries({color:M().blue[500],priceFormat:{type:"volume"},priceScaleId:"left",overlay:!0,visible:!1,scaleMargins:{top:.5,bottom:0}})),5===r){t.next=17;break}return this.setState({loading:!0}),t.prev=5,t.next=8,(0,j.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(e,"/1"));case 8:a=t.sent,this.volumeStudy.setData(a.data.data),this.setState({loading:!1}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),this.setState({loading:!1}),console.log(t.t0);case 17:case"end":return t.stop()}}),t,this,[[5,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"CompareSellWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===this.compareSell&&(this.compareSell=this.chart.addLineSeries({color:M().red[500],visible:!0})),null!==this.Candlestick&&this.Candlestick.applyOptions({visible:!1}),this.compareSell.applyOptions({visible:!0}),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(this.state.pageID,"/3/").concat(this.state.comparisonPeriod));case 7:e=t.sent,this.compareSell.setData(e.data.data),this.setState({loading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"CompareBuyWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===this.compareBuy&&(this.compareBuy=this.chart.addLineSeries({color:M().green[500],visible:!0})),null!==this.Candlestick&&this.Candlestick.applyOptions({visible:!0}),this.compareBuy.applyOptions({visible:!0}),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(this.state.pageID,"/2/").concat(this.state.comparisonPeriod));case 7:e=t.sent,this.compareBuy.setData(e.data.data),this.setState({loading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"shortTermChartWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:this.state.pageID,r=i.length>1&&void 0!==i[1]?i[1]:this.state.chipsValue,null===this.shorttermChart&&(this.shorttermChart=this.chart.addLineSeries({color:M().emerald[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(e,"/").concat(r,"/").concat(this.state.averageSettings.shortterm));case 7:a=t.sent,this.shorttermChart.setData(a.data.data),this.setState({loading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"midTermChartWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:this.state.pageID,r=i.length>1&&void 0!==i[1]?i[1]:this.state.chipsValue,null===this.midtermChart&&(this.midtermChart=this.chart.addLineSeries({color:M().red[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(e,"/").concat(r,"/").concat(this.state.averageSettings.midterm));case 7:a=t.sent,this.midtermChart.setData(a.data.data),this.setState({loading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"longTermChartWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:this.state.pageID,r=i.length>1&&void 0!==i[1]?i[1]:this.state.chipsValue,null===this.longtermChart&&(this.longtermChart=this.chart.addLineSeries({color:M().yellow[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),t.prev=4,t.next=7,(0,j.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(e,"/").concat(r,"/").concat(this.state.averageSettings.longterm));case 7:a=t.sent,this.longtermChart.setData(a.data.data),this.setState({loading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.setState({loading:!1}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"shortmovingtermWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:this.state.pageID,null===this.shortmovingtermChart&&(this.shortmovingtermChart=this.chart.addLineSeries({color:M().blue[600],visible:!1})),this.setState({loading:!0}),t.prev=3,t.next=6,(0,j.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(e,"/").concat(this.state.averageSettings.shortmovingterm));case 6:r=t.sent,this.shortmovingtermChart.setData(r.data.data),this.setState({loading:!1}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),this.setState({loading:!1}),console.log(t.t0);case 15:case"end":return t.stop()}}),t,this,[[3,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"midmovingtermWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:this.state.pageID,null===this.midmovingtermChart&&(this.midmovingtermChart=this.chart.addLineSeries({color:M().green[600],visible:!1})),this.setState({loading:!0}),t.prev=3,t.next=6,(0,j.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(e,"/").concat(this.state.averageSettings.midmovingterm));case 6:r=t.sent,this.midmovingtermChart.setData(r.data.data),this.setState({loading:!1}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),this.setState({loading:!1}),console.log(t.t0);case 15:case"end":return t.stop()}}),t,this,[[3,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"longmovingtermWorker",value:function(){var t=(0,a.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:this.state.pageID,null===this.longmovingtermChart&&(this.longmovingtermChart=this.chart.addLineSeries({color:M().yellow[600],visible:!1})),this.setState({loading:!0}),t.prev=3,t.next=6,(0,j.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(e,"/").concat(this.state.averageSettings.longmovingterm));case 6:r=t.sent,this.longmovingtermChart.setData(r.data.data),this.setState({loading:!1}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),this.setState({loading:!1}),console.log(t.t0);case 15:case"end":return t.stop()}}),t,this,[[3,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;this.getGroupLists(),this.chart=(0,O.C2)(this.chartRef.current,{width:this.chartRef.current.offsetWidth,height:this.chartRef.current.offsetHeight,localization:{locale:"fa-IR"},overlayPriceScales:{visible:!1},grid:{horzLines:{color:"rgba(240, 243, 250,1)"},vertLines:{color:"rgba(240, 243, 250,0)"}},crosshair:{mode:O.rM.Normal},rightPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 1)",scaleMargins:{top:0,bottom:.5}},leftPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 1)",scaleMargins:{top:.5,bottom:0}},layout:{backgroundColor:"#ffffff",textColor:"rgba(33, 56, 77, 1)"}}),this.CandlestickInitialize(),this.VolumeStudyWorker(),this.shortTermChartWorker(),this.midTermChartWorker(),this.longTermChartWorker(),this.shortmovingtermWorker(),this.midmovingtermWorker(),this.longmovingtermWorker(),this.history.listen((function(e){var r=e.pathname.split("/")[3];t.setState({pageID:r}),t.CandlestickInitialize(r),t.state.chipsValue.includes("0")||(t.getNormalAverages(r),t.getMovingAverages(r),t.shortTermChartWorker(),t.midTermChartWorker(),t.longTermChartWorker(),t.shortmovingtermWorker(),t.midmovingtermWorker(),t.longmovingtermWorker())}))}},{key:"render",value:function(){var t=this;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w.q,{children:(0,P.jsxs)("title",{children:["\u0646\u0645\u0648\u062f\u0627\u0631 \u0647\u0627\u06cc \u062c\u0631\u06cc\u0627\u0646\u0627\u062a \u0646\u0642\u062f\u06cc\u0646\u06af\u06cc ",this.state.title]})}),(0,P.jsx)(u.Z,{position:"apart",children:(0,P.jsx)(d.x,{children:this.state.title})}),(0,P.jsxs)(m.X,{p:"lg",shadow:"xs",radius:"md",mt:"lg",children:[(0,P.jsxs)(p.c,{defaultValue:"0",radius:"sm",onChange:function(e){return t.onChangeChips(e)},children:[(0,P.jsx)(g.A,{value:"0",defaultChecked:!0,children:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644"}),(0,P.jsx)(g.A,{value:"1",children:"\u0627\u0631\u0632\u0634 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u0639\u0627\u0645\u0644\u0627\u062a"}),(0,P.jsx)(g.A,{value:"2",children:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f"}),(0,P.jsx)(g.A,{value:"3",children:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634"}),(0,P.jsx)(g.A,{value:"4",children:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f"}),(0,P.jsx)(g.A,{value:"5",disabled:this.state.allowSelectLastChip,children:"\u0645\u0642\u0627\u06cc\u0633\u0647 \u0627\u06cc \u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634"})]}),(0,P.jsxs)(u.Z,{mt:"sm",children:[(0,P.jsx)(v.I,{value:this.state.comparisonPeriod,min:1,max:100,maxLength:3,size:"xs",onChange:function(e){return t.lastChipInputChange(e.target.value)},placeholder:"\u062f\u0648\u0631\u0647 \u0645\u0642\u0627\u06cc\u0633\u0647 \u0628\u06cc\u0646 1 \u062a\u0627 100",inputMode:"numeric"}),(0,P.jsx)(f.z,{size:"xs",variant:"outline",onClick:function(){return t.setState({openedModal:!0})},children:"\u062a\u0646\u0638\u06cc\u0645 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646"})]}),(0,P.jsx)(y.i,{my:"lg",label:"\u0628\u06cc\u0634\u062a\u0631",labelPosition:"center"}),(0,P.jsxs)(u.Z,{position:"apart",children:[(0,P.jsx)(S.NU,{clearable:!0,placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",onChange:function(e){return t.chartDisplaySettings(e)},label:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0645\u0627\u06cc\u0634\u06cc",data:[{value:"0",label:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0646\u0645\u0648\u062f\u0627\u0631 \u0642\u06cc\u0645\u062a"},{value:"1",label:"\u0644\u06af\u0627\u0631\u06cc\u062a\u0645\u06cc"}]}),(0,P.jsx)("div",{className:"relative",children:(0,P.jsx)(S.NU,{clearable:!0,placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",label:"\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0647\u0627",onChange:function(e){return t.averagesDisplaySettings(e)},data:[{value:"0",label:"\u0628\u0627\u0632\u0627\u0631"},{value:"1",label:"\u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a"},{value:"2",label:"\u0645\u06cc\u0627\u0646 \u0645\u062f\u062a"},{value:"3",label:"\u0628\u0644\u0646\u062f \u0645\u062f\u062a"},{value:"4",label:"\u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a - \u067e\u0648\u0644"},{value:"5",label:"\u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a - \u067e\u0648\u0644"},{value:"6",label:"\u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a - \u067e\u0648\u0644"}]})})]}),(0,P.jsxs)("div",{className:"h-[70vh] relative",children:[(0,P.jsx)(x.f,{visible:this.state.loading,loaderProps:{variant:"dots"}}),(0,P.jsx)("div",{ref:this.chartRef,className:"mt-10 w-full h-full"})]})]}),(0,P.jsx)(C.u,{dir:"rtl",title:"\u062a\u0646\u0638\u06cc\u0645 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",zIndex:9999999999,opened:this.state.openedModal,onClose:function(){return t.setState({openedModal:!1})},children:(0,P.jsx)(W.J9,{enableReinitialize:!0,initialValues:{shortterm:this.state.averageSettings.shortterm,midterm:this.state.averageSettings.midterm,longterm:this.state.averageSettings.longterm,shortmovingterm:this.state.averageSettings.shortmovingterm,midmovingterm:this.state.averageSettings.midmovingterm,longmovingterm:this.state.averageSettings.longmovingterm},validationSchema:T,onSubmit:function(e){return t.handleAverageSettings(e)},children:(0,P.jsxs)(W.l0,{children:[(0,P.jsxs)(k.r,{children:[(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 50",name:"shortterm"})})}),(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 100",name:"midterm"})})}),(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 200",name:"longterm"})})}),(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 200",name:"shortmovingterm"})})}),(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 200",name:"midmovingterm"})})}),(0,P.jsx)(k.r.Col,{md:6,sm:12,children:(0,P.jsx)(b.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a",children:(0,P.jsx)(I.Z,{placeholder:"1 \u062a\u0627 200",name:"longmovingterm"})})})]}),(0,P.jsx)(u.Z,{position:"apart",mt:"lg",children:(0,P.jsx)(f.z,{color:"green",size:"sm",type:"submit",loading:this.state.overloayModal,children:"\u062b\u0628\u062a"})})]})})})]})}}]),r}(h.Component),T=Z.Ry().shape({shortterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(50,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 50 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),midterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(100,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 100 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),longterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),shortmovingterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),midmovingterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),longmovingterm:Z.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")});e.default=(0,D.EN)((0,L.$j)((function(t){return{marketData:t.market,chartAndtables:t.config.needs.chartAndtables}}),(function(t){return{setMarket:function(e){return t((0,z.sS)(e))}}}))(A))},6959:function(t,e,r){r.d(e,{o:function(){return O}});var a=r(7762),i=r(7313),n=r(5715),s=r(847),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=function(t,e,r){return e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},d=function(t,e){for(var r in e||(e={}))c.call(e,r)&&u(t,r,e[r]);if(l){var i,n=(0,a.Z)(l(e));try{for(n.s();!(i=n.n()).done;){r=i.value;h.call(e,r)&&u(t,r,e[r])}}catch(s){n.e(s)}finally{n.f()}}return t},m={xs:14,sm:18,md:20,lg:24,xl:28};function p(t){var e=t,r=e.size,n=e.error,o=e.style,u=function(t,e){var r={};for(var i in t)c.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&l){var n,s=(0,a.Z)(l(t));try{for(s.s();!(n=s.n()).done;)i=n.value,e.indexOf(i)<0&&h.call(t,i)&&(r[i]=t[i])}catch(o){s.e(o)}finally{s.f()}}return r}(e,["size","error","style"]),p=(0,s.rZ)(),g=p.fn.size({size:r,sizes:m});return i.createElement("svg",d({width:g,height:g,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:d({color:n?p.colors.red[6]:p.colors.gray[6]},o),"data-chevron":!0},u),i.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function g(t){var e=t.shouldClear,r=t.clearButtonLabel,a=t.onClear,s=t.size,o=t.error,l=t.clearButtonTabIndex;return e?i.createElement(n.P,{variant:"transparent","aria-label":r,onClick:a,size:s,tabIndex:l}):i.createElement(p,{error:o,size:s})}g.displayName="@mantine/core/SelectRightSection";var v=Object.defineProperty,f=Object.defineProperties,y=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,k=function(t,e,r){return e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},b=function(t,e){for(var r in e||(e={}))x.call(e,r)&&k(t,r,e[r]);if(S){var i,n=(0,a.Z)(S(e));try{for(n.s();!(i=n.n()).done;){r=i.value;C.call(e,r)&&k(t,r,e[r])}}catch(s){n.e(s)}finally{n.f()}}return t},w=function(t,e){return f(t,y(e))},j={xs:24,sm:30,md:34,lg:44,xl:54};function O(t){var e=t,r=e.styles,n=e.rightSection,s=e.rightSectionWidth,o=e.theme,l=function(t,e){var r={};for(var i in t)x.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&S){var n,s=(0,a.Z)(S(t));try{for(s.s();!(n=s.n()).done;)i=n.value,e.indexOf(i)<0&&C.call(t,i)&&(r[i]=t[i])}catch(o){s.e(o)}finally{s.f()}}return r}(e,["styles","rightSection","rightSectionWidth","theme"]);if(n)return{rightSection:n,rightSectionWidth:s,styles:r};var c="function"===typeof r?r(o):r;return{rightSectionWidth:o.fn.size({size:l.size,sizes:j}),rightSection:!(l.disabled&&l.shouldClear)&&i.createElement(g,b({},l)),styles:w(b({},c),{rightSection:w(b({},null==c?void 0:c.rightSection),{pointerEvents:l.shouldClear?void 0:"none"})})}}},3622:function(t,e,r){r.d(e,{j:function(){return i}});var a=r(2982);function i(t){var e=t.data,r=[],i=[],n=e.reduce((function(t,e,r){return e.group?t[e.group]?t[e.group].push(r):t[e.group]=[r]:i.push(r),t}),{});return Object.keys(n).forEach((function(t){r.push.apply(r,(0,a.Z)(n[t].map((function(t){return e[t]}))))})),r.push.apply(r,(0,a.Z)(i.map((function(t){return e[t]})))),r}},4074:function(t,e,r){r.d(e,{g:function(){return h}});var a=r(7313),i=r(8406),n=r(6343),s=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){var e=t.axis,r=t.target,a=t.parent,i=t.alignment,n=t.offset,s=t.isList;if(!r||!a&&"undefined"===typeof document)return 0;var o=!!a,l=(a||document.body).getBoundingClientRect(),c=r.getBoundingClientRect(),h=function(t){return c[t]-l[t]};if("y"===e){var u=h("top");if(0===u)return 0;if("start"===i){var d=u-n;return d<=c.height*(s?0:1)||!s?d:0}var m=o?l.height:window.innerHeight;if("end"===i){var p=u+n-m+c.height;return p>=-c.height*(s?0:1)||!s?p:0}return"center"===i?u-m/2+c.height/2:0}if("x"===e){var g=h("left");if(0===g)return 0;if("start"===i){var v=g-n;return v<=c.width||!s?v:0}var f=o?l.width:window.innerWidth;if("end"===i){var y=g+n-f+c.width;return y>=-c.width||!s?y:0}return"center"===i?g-f/2+c.width/2:0}return 0},l=function(t){var e=t.axis,r=t.parent;if(!r&&"undefined"===typeof document)return 0;var a="y"===e?"scrollTop":"scrollLeft";if(r)return r[a];var i=document,n=i.body,s=i.documentElement;return n[a]+s[a]},c=function(t){var e=t.axis,r=t.parent,a=t.distance;if(r||"undefined"!==typeof document){var i="y"===e?"scrollTop":"scrollLeft";if(r)r[i]=a;else{var n=document,s=n.body,o=n.documentElement;s[i]=a,o[i]=a}}};function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration,r=void 0===e?1250:e,h=t.axis,u=void 0===h?"y":h,d=t.onScrollFinish,m=t.easing,p=void 0===m?s:m,g=t.offset,v=void 0===g?0:g,f=t.cancelable,y=void 0===f||f,S=t.isList,x=void 0!==S&&S,C=(0,a.useRef)(0),k=(0,a.useRef)(0),b=(0,a.useRef)(!1),w=(0,a.useRef)(null),j=(0,a.useRef)(null),O=(0,i.J)(),D=function(){C.current&&cancelAnimationFrame(C.current)},W=(0,a.useCallback)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.alignment,i=void 0===a?"start":a;b.current=!1,C.current&&D();var n=null!=(t=l({parent:w.current,axis:u}))?t:0,s=o({parent:w.current,target:j.current,axis:u,alignment:i,offset:v,isList:x})-(w.current?0:n);function h(){0===k.current&&(k.current=performance.now());var t=performance.now()-k.current,e=O||0===r?1:t/r,a=n+s*p(e);c({parent:w.current,axis:u,distance:a}),!b.current&&e<1?C.current=requestAnimationFrame(h):("function"===typeof d&&d(),k.current=0,C.current=0,D())}h()}),[w.current]),Z=function(){y&&(b.current=!0)};return(0,n.s)("wheel",Z,{passive:!0}),(0,n.s)("touchmove",Z,{passive:!0}),(0,a.useEffect)((function(){return D}),[]),{scrollableRef:w,targetRef:j,scrollIntoView:W,cancel:D}}}}]);