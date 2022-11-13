"use strict";(self.webpackChunktradersarena=self.webpackChunktradersarena||[]).push([[429],{88441:function(e,t,a){var r=a(1413),i=a(70885),n=a(45987),o=a(63407),s=a(42553),m=a(60392),l=a(55705),h=a(80184),d=["name","type"];t.Z=function(e){var t=e.name,a=e.type,u=(0,n.Z)(e,d),y=(0,l.U$)(t),v=(0,i.Z)(y,2),c=v[0],g=v[1],p=(0,r.Z)((0,r.Z)((0,r.Z)({},c),u),{},{color:"blue",radius:"md",size:"md",autoComplete:"off"});return g&&g.touched&&g.error&&(p.error=(0,h.jsx)(o.x,{size:"xs",children:g.error})),"password"===a?(0,h.jsx)(s.W,(0,r.Z)({},p)):(0,h.jsx)(m.o,(0,r.Z)({},p))}},59429:function(e,t,a){a.r(t);var r=a(15861),i=a(15671),n=a(43144),o=a(60136),s=a(43668),m=a(64687),l=a.n(m),h=a(72791),d=a(40639),u=a(63407),y=a(85943),v=a(4332),c=a(22977),g=a(36065),p=a(61630),f=a(96018),S=a(56447),k=a(85042),x=a(6501),C=a(87003),b=a(72430),j=a(56009),w=a(54270),D=a(8136),W=a(60526),Z=a(79271),I=a(55705),O=a(77942),L=a(88441),M=a(60364),A=a(34861),T=(a(763),a(24361)),P=a.n(T),z=a(80184),R=function(e){(0,o.Z)(a,e);var t=(0,s.Z)(a);function a(e){var r;return(0,i.Z)(this,a),(r=t.call(this,e)).state={title:"\u0628\u0627\u0632\u0627\u0631",industrieLists:[],shorttermData:null,midtermData:null,longtermData:null,shortmovingtermData:null,midmovingtermData:null,longmovingtermData:null,chipsValue:0,comparisonPeriod:"",allowSelectLastChip:!0,openedModal:!1,overloayModal:!1,loading:!1,averageSettings:{shortterm:"10",midterm:"20",longterm:"50",shortmovingterm:"10",midmovingterm:"20",longmovingterm:"50"},pageID:e.route.match.params.id},r.history=e.history,r.group=e.route.match.params.id,r.chartRef=h.createRef(),r.chart=r.Candlestick=r.volumeStudy=null,r.candleStickData=[],r.market=e.marketData,r.shorttermChart=r.midtermChart=r.longtermChart=r.shortmovingtermChart=r.midmovingtermChart=r.longmovingtermChart=r.compareSell=r.compareBuy=r.chip1=r.chip4=null,r}return(0,n.Z)(a,[{key:"getGroupLists",value:function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,(0,D.O)("https://feed.tseshow.com/api/totalIndustriesGroupHisory");case 4:t=e.sent,this.setState({industrieLists:t.data.data,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({loading:!1}),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"changeGroup",value:function(e){this.history.push("/stock/chart/".concat(e))}},{key:"onChangeChips",value:function(){var e=(0,r.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({chipsValue:t}),+t>=0&&+t<=4?(null!==this.compareBuy&&this.compareBuy.applyOptions({visible:!1}),null!==this.compareSell&&this.compareSell.applyOptions({visible:!1}),0===+t&&this.CandlestickInitialize(this.state.pageID),this.VolumeStudyWorker(this.state.pageID,t),this.shortTermChartWorker(this.state.pageID,t),this.midTermChartWorker(this.state.pageID,t),this.longTermChartWorker(this.state.pageID,t),this.shortmovingtermWorker(this.state.pageID,t),this.midMovingTermChartWorker(this.state.pageID,t),this.longMovingTermChartWorker(this.state.pageID,t)):(this.CompareBuyWorker(),this.CompareSellWorker());case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"lastChipInputChange",value:function(e){e.length>0?this.setState({allowSelectLastChip:!1}):this.setState({allowSelectLastChip:!0}),e>0&&e<=100?this.setState({allowSelectLastChip:!1}):this.setState({allowSelectLastChip:!0}),this.setState({comparisonPeriod:e})}},{key:"CandlestickInitialize",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.group,null===this.Candlestick&&(this.Candlestick=this.chart.addCandlestickSeries({priceScaleId:"right",visible:!0})),this.Candlestick.applyOptions({visible:!0}),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/chart/".concat(t));case 7:a=e.sent,this.setState({loading:!1}),this.Candlestick.setData(a.data.data),this.candleStickData=a.data.data,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"chartDisplaySettings",value:function(e){this.Candlestick.applyOptions({visible:!e.includes("0")}),this.chart.applyOptions({rightPriceScale:{mode:e.includes("1")?W.B8.Logarithmic:W.B8.Normal}})}},{key:"handleAverageSettings",value:function(e){e.shortterm==this.state.averageSettings.shortterm&&e.midterm==this.state.averageSettings.midterm&&e.longterm==this.state.averageSettings.longterm&&e.shortmovingterm==this.state.averageSettings.shortmovingterm&&e.midmovingterm==this.state.averageSettings.midmovingterm&&e.longmovingterm==this.state.averageSettings.longmovingterm||(this.setState({averageSettings:e}),this.shortTermChartWorker(),this.midTermChartWorker(),this.longTermChartWorker(),this.shortMovingTermChartWorker(),this.midMovingTermChartWorker(),this.longMovingTermChartWorker())}},{key:"averagesDisplaySettings",value:function(e){this.volumeStudy.applyOptions({visible:!!e.includes("0")}),this.shorttermChart.applyOptions({visible:!!e.includes("1")}),this.midtermChart.applyOptions({visible:!!e.includes("2")}),this.longtermChart.applyOptions({visible:!!e.includes("3")}),this.shortmovingtermChart.applyOptions({visible:!!e.includes("4")}),this.midmovingtermChart.applyOptions({visible:!!e.includes("5")}),this.longmovingtermChart.applyOptions({visible:!!e.includes("6")})}},{key:"VolumeStudyWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r,i=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:this.group,a=i.length>1&&void 0!==i[1]?i[1]:this.state.chipsValue,null===this.volumeStudy&&(this.volumeStudy=this.volumeStudy=this.chart.addHistogramSeries({color:P().blue[500],priceFormat:{type:"volume"},priceScaleId:"left",overlay:!0,visible:!1,scaleMargins:{top:.5,bottom:0}})),5===a){e.next=17;break}return this.setState({loading:!0}),e.prev=5,e.next=8,(0,D.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(t,"/1"));case 8:r=e.sent,this.volumeStudy.setData(r.data.data),this.setState({loading:!1}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),this.setState({loading:!1}),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[5,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"CompareSellWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===this.compareSell&&(this.compareSell=this.chart.addLineSeries({color:P().red[500],visible:!0})),null!==this.Candlestick&&this.Candlestick.applyOptions({visible:!1}),this.compareSell.applyOptions({visible:!0}),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(this.state.pageID,"/3/").concat(this.state.comparisonPeriod));case 7:t=e.sent,this.compareSell.setData(t.data.data),this.setState({loading:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"CompareBuyWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===this.compareBuy&&(this.compareBuy=this.chart.addLineSeries({color:P().green[500],visible:!0})),null!==this.Candlestick&&this.Candlestick.applyOptions({visible:!0}),this.compareBuy.applyOptions({visible:!0}),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(this.state.pageID,"/2/").concat(this.state.comparisonPeriod));case 7:t=e.sent,this.compareBuy.setData(t.data.data),this.setState({loading:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"shortTermChartWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,a=r.length>1&&void 0!==r[1]?r[1]:this.state.chipsValue,null===this.shorttermChart&&(this.shorttermChart=this.chart.addLineSeries({color:P().emerald[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(t,"/").concat(a,"/").concat(this.state.averageSettings.shortterm));case 7:e.sent,this.shorttermChart.setData([{time:{year:"2022",month:"05",day:"14"},value:2248},{time:{year:"2022",month:"05",day:"15"},value:2207},{time:{year:"2022",month:"05",day:"16"},value:2205},{time:{year:"2022",month:"05",day:"17"},value:2194},{time:{year:"2022",month:"05",day:"18"},value:2193},{time:{year:"2022",month:"05",day:"21"},value:2185},{time:{year:"2022",month:"05",day:"22"},value:2176},{time:{year:"2022",month:"05",day:"23"},value:2153},{time:{year:"2022",month:"05",day:"24"},value:2136},{time:{year:"2022",month:"05",day:"25"},value:2124},{time:{year:"2022",month:"05",day:"28"},value:2103},{time:{year:"2022",month:"05",day:"29"},value:2076},{time:{year:"2022",month:"05",day:"30"},value:2053},{time:{year:"2022",month:"05",day:"31"},value:2033},{time:{year:"2022",month:"06",day:"01"},value:2017},{time:{year:"2022",month:"06",day:"06"},value:1994},{time:{year:"2022",month:"06",day:"07"},value:1974},{time:{year:"2022",month:"06",day:"08"},value:1958},{time:{year:"2022",month:"06",day:"11"},value:1941},{time:{year:"2022",month:"06",day:"12"},value:1927},{time:{year:"2022",month:"06",day:"13"},value:1925},{time:{year:"2022",month:"06",day:"14"},value:1926},{time:{year:"2022",month:"06",day:"15"},value:1921},{time:{year:"2022",month:"06",day:"19"},value:1910},{time:{year:"2022",month:"06",day:"20"},value:1907},{time:{year:"2022",month:"06",day:"21"},value:1905},{time:{year:"2022",month:"06",day:"22"},value:1907},{time:{year:"2022",month:"06",day:"25"},value:1918},{time:{year:"2022",month:"06",day:"26"},value:1920},{time:{year:"2022",month:"06",day:"27"},value:1921},{time:{year:"2022",month:"06",day:"28"},value:1927},{time:{year:"2022",month:"06",day:"29"},value:1931},{time:{year:"2022",month:"07",day:"02"},value:1925},{time:{year:"2022",month:"07",day:"03"},value:1921},{time:{year:"2022",month:"07",day:"04"},value:1919},{time:{year:"2022",month:"07",day:"05"},value:1916},{time:{year:"2022",month:"07",day:"06"},value:1907},{time:{year:"2022",month:"07",day:"09"},value:1897},{time:{year:"2022",month:"07",day:"11"},value:1880},{time:{year:"2022",month:"07",day:"12"},value:1869},{time:{year:"2022",month:"07",day:"13"},value:1863},{time:{year:"2022",month:"07",day:"16"},value:1852},{time:{year:"2022",month:"07",day:"17"},value:1842},{time:{year:"2022",month:"07",day:"19"},value:1833},{time:{year:"2022",month:"07",day:"20"},value:1825},{time:{year:"2022",month:"07",day:"23"},value:1819},{time:{year:"2022",month:"07",day:"24"},value:1810},{time:{year:"2022",month:"07",day:"25"},value:1794},{time:{year:"2022",month:"07",day:"26"},value:1779},{time:{year:"2022",month:"07",day:"27"},value:1767},{time:{year:"2022",month:"07",day:"30"},value:1752},{time:{year:"2022",month:"07",day:"31"},value:1731},{time:{year:"2022",month:"08",day:"01"},value:1715},{time:{year:"2022",month:"08",day:"02"},value:1700},{time:{year:"2022",month:"08",day:"03"},value:1694},{time:{year:"2022",month:"08",day:"06"},value:1697},{time:{year:"2022",month:"08",day:"09"},value:1704},{time:{year:"2022",month:"08",day:"10"},value:1711},{time:{year:"2022",month:"08",day:"13"},value:1726},{time:{year:"2022",month:"08",day:"14"},value:1747},{time:{year:"2022",month:"08",day:"15"},value:1771},{time:{year:"2022",month:"08",day:"16"},value:1800},{time:{year:"2022",month:"08",day:"17"},value:1836},{time:{year:"2022",month:"08",day:"27"},value:1858},{time:{year:"2022",month:"08",day:"28"},value:1879},{time:{year:"2022",month:"08",day:"29"},value:1897},{time:{year:"2022",month:"08",day:"30"},value:1907},{time:{year:"2022",month:"08",day:"31"},value:1919}]),this.setState({loading:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"midTermChartWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,a=r.length>1&&void 0!==r[1]?r[1]:this.state.chipsValue,null===this.midtermChart&&(this.midtermChart=this.chart.addLineSeries({color:P().red[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(t,"/").concat(a,"/").concat(this.state.averageSettings.midterm));case 7:e.sent,this.midtermChart.setData([{time:{year:"2022",month:"05",day:"14"},value:2248},{time:{year:"2022",month:"05",day:"15"},value:2208},{time:{year:"2022",month:"05",day:"16"},value:2206},{time:{year:"2022",month:"05",day:"17"},value:2195},{time:{year:"2022",month:"05",day:"18"},value:2194},{time:{year:"2022",month:"05",day:"21"},value:2187},{time:{year:"2022",month:"05",day:"22"},value:2179},{time:{year:"2022",month:"05",day:"23"},value:2159},{time:{year:"2022",month:"05",day:"24"},value:2145},{time:{year:"2022",month:"05",day:"25"},value:2135},{time:{year:"2022",month:"05",day:"28"},value:2117},{time:{year:"2022",month:"05",day:"29"},value:2095},{time:{year:"2022",month:"05",day:"30"},value:2077},{time:{year:"2022",month:"05",day:"31"},value:2060},{time:{year:"2022",month:"06",day:"01"},value:2046},{time:{year:"2022",month:"06",day:"06"},value:2027},{time:{year:"2022",month:"06",day:"07"},value:2012},{time:{year:"2022",month:"06",day:"08"},value:1998},{time:{year:"2022",month:"06",day:"11"},value:1984},{time:{year:"2022",month:"06",day:"12"},value:1972},{time:{year:"2022",month:"06",day:"13"},value:1967},{time:{year:"2022",month:"06",day:"14"},value:1965},{time:{year:"2022",month:"06",day:"15"},value:1960},{time:{year:"2022",month:"06",day:"19"},value:1950},{time:{year:"2022",month:"06",day:"20"},value:1946},{time:{year:"2022",month:"06",day:"21"},value:1943},{time:{year:"2022",month:"06",day:"22"},value:1941},{time:{year:"2022",month:"06",day:"25"},value:1946},{time:{year:"2022",month:"06",day:"26"},value:1945},{time:{year:"2022",month:"06",day:"27"},value:1944},{time:{year:"2022",month:"06",day:"28"},value:1946},{time:{year:"2022",month:"06",day:"29"},value:1947},{time:{year:"2022",month:"07",day:"02"},value:1944},{time:{year:"2022",month:"07",day:"03"},value:1940},{time:{year:"2022",month:"07",day:"04"},value:1938},{time:{year:"2022",month:"07",day:"05"},value:1936},{time:{year:"2022",month:"07",day:"06"},value:1930},{time:{year:"2022",month:"07",day:"09"},value:1923},{time:{year:"2022",month:"07",day:"11"},value:1914},{time:{year:"2022",month:"07",day:"12"},value:1907},{time:{year:"2022",month:"07",day:"13"},value:1902},{time:{year:"2022",month:"07",day:"16"},value:1894},{time:{year:"2022",month:"07",day:"17"},value:1887},{time:{year:"2022",month:"07",day:"19"},value:1881},{time:{year:"2022",month:"07",day:"20"},value:1875},{time:{year:"2022",month:"07",day:"23"},value:1869},{time:{year:"2022",month:"07",day:"24"},value:1863},{time:{year:"2022",month:"07",day:"25"},value:1853},{time:{year:"2022",month:"07",day:"26"},value:1843},{time:{year:"2022",month:"07",day:"27"},value:1834},{time:{year:"2022",month:"07",day:"30"},value:1824},{time:{year:"2022",month:"07",day:"31"},value:1811},{time:{year:"2022",month:"08",day:"01"},value:1800},{time:{year:"2022",month:"08",day:"02"},value:1789},{time:{year:"2022",month:"08",day:"03"},value:1783},{time:{year:"2022",month:"08",day:"06"},value:1780},{time:{year:"2022",month:"08",day:"09"},value:1780},{time:{year:"2022",month:"08",day:"10"},value:1780},{time:{year:"2022",month:"08",day:"13"},value:1783},{time:{year:"2022",month:"08",day:"14"},value:1790},{time:{year:"2022",month:"08",day:"15"},value:1800},{time:{year:"2022",month:"08",day:"16"},value:1811},{time:{year:"2022",month:"08",day:"17"},value:1827},{time:{year:"2022",month:"08",day:"27"},value:1837},{time:{year:"2022",month:"08",day:"28"},value:1847},{time:{year:"2022",month:"08",day:"29"},value:1857},{time:{year:"2022",month:"08",day:"30"},value:1863},{time:{year:"2022",month:"08",day:"31"},value:1870}]),this.setState({loading:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"longTermChartWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,a=r.length>1&&void 0!==r[1]?r[1]:this.state.chipsValue,null===this.longtermChart&&(this.longtermChart=this.chart.addLineSeries({color:P().yellow[600],visible:!1,priceScaleId:"left",priceFormat:{type:"volume"},scaleMargins:{top:.5,bottom:0}})),this.setState({loading:!0}),e.prev=4,e.next=7,(0,D.O)("https://feed.tseshow.com/api/stock/movingAverage/".concat(t,"/").concat(a,"/").concat(this.state.averageSettings.longterm));case 7:e.sent,this.longtermChart.setData([{time:{year:"2022",month:"05",day:"13"},value:2248},{time:{year:"2022",month:"05",day:"14"},value:2205},{time:{year:"2022",month:"05",day:"15"},value:2204},{time:{year:"2022",month:"05",day:"16"},value:2191},{time:{year:"2022",month:"05",day:"17"},value:2191},{time:{year:"2022",month:"05",day:"20"},value:2181},{time:{year:"2022",month:"05",day:"21"},value:2171},{time:{year:"2022",month:"05",day:"22"},value:2141},{time:{year:"2022",month:"05",day:"23"},value:2121},{time:{year:"2022",month:"05",day:"24"},value:2108},{time:{year:"2022",month:"05",day:"27"},value:2081},{time:{year:"2022",month:"05",day:"28"},value:2046},{time:{year:"2022",month:"05",day:"29"},value:2018},{time:{year:"2022",month:"05",day:"30"},value:1993},{time:{year:"2022",month:"05",day:"31"},value:1976},{time:{year:"2022",month:"06",day:"05"},value:1946},{time:{year:"2022",month:"06",day:"06"},value:1925},{time:{year:"2022",month:"06",day:"07"},value:1908},{time:{year:"2022",month:"06",day:"10"},value:1888},{time:{year:"2022",month:"06",day:"11"},value:1875},{time:{year:"2022",month:"06",day:"12"},value:1880},{time:{year:"2022",month:"06",day:"13"},value:1890},{time:{year:"2022",month:"06",day:"14"},value:1889},{time:{year:"2022",month:"06",day:"18"},value:1875},{time:{year:"2022",month:"06",day:"19"},value:1877},{time:{year:"2022",month:"06",day:"20"},value:1879},{time:{year:"2022",month:"06",day:"21"},value:1887},{time:{year:"2022",month:"06",day:"24"},value:1910},{time:{year:"2022",month:"06",day:"25"},value:1915},{time:{year:"2022",month:"06",day:"26"},value:1918},{time:{year:"2022",month:"06",day:"27"},value:1929},{time:{year:"2022",month:"06",day:"28"},value:1936},{time:{year:"2022",month:"07",day:"01"},value:1925},{time:{year:"2022",month:"07",day:"02"},value:1916},{time:{year:"2022",month:"07",day:"03"},value:1915},{time:{year:"2022",month:"07",day:"04"},value:1910},{time:{year:"2022",month:"07",day:"05"},value:1894},{time:{year:"2022",month:"07",day:"08"},value:1877},{time:{year:"2022",month:"07",day:"10"},value:1850},{time:{year:"2022",month:"07",day:"11"},value:1835},{time:{year:"2022",month:"07",day:"12"},value:1829},{time:{year:"2022",month:"07",day:"15"},value:1815},{time:{year:"2022",month:"07",day:"16"},value:1803},{time:{year:"2022",month:"07",day:"18"},value:1794},{time:{year:"2022",month:"07",day:"19"},value:1786},{time:{year:"2022",month:"07",day:"22"},value:1780},{time:{year:"2022",month:"07",day:"23"},value:1771},{time:{year:"2022",month:"07",day:"24"},value:1748},{time:{year:"2022",month:"07",day:"25"},value:1727},{time:{year:"2022",month:"07",day:"26"},value:1715},{time:{year:"2022",month:"07",day:"29"},value:1695},{time:{year:"2022",month:"07",day:"30"},value:1666},{time:{year:"2022",month:"07",day:"31"},value:1647},{time:{year:"2022",month:"08",day:"01"},value:1632},{time:{year:"2022",month:"08",day:"02"},value:1633},{time:{year:"2022",month:"08",day:"05"},value:1648},{time:{year:"2022",month:"08",day:"08"},value:1672},{time:{year:"2022",month:"08",day:"09"},value:1691},{time:{year:"2022",month:"08",day:"12"},value:1722},{time:{year:"2022",month:"08",day:"13"},value:1762},{time:{year:"2022",month:"08",day:"14"},value:1807},{time:{year:"2022",month:"08",day:"15"},value:1856},{time:{year:"2022",month:"08",day:"16"},value:1913},{time:{year:"2022",month:"08",day:"26"},value:1941},{time:{year:"2022",month:"08",day:"27"},value:1966},{time:{year:"2022",month:"08",day:"28"},value:1985},{time:{year:"2022",month:"08",day:"29"},value:1988},{time:{year:"2022",month:"08",day:"30"},value:1995}]),this.setState({loading:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"shortmovingtermWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,null===this.shortmovingtermChart&&(this.shortmovingtermChart=this.chart.addLineSeries({color:P().blue[600],visible:!1})),this.setState({loading:!0}),e.prev=3,e.next=6,(0,D.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(t,"/").concat(this.state.averageSettings.shortmovingterm));case 6:a=e.sent,this.shortmovingtermChart.setData(a.data.data),this.setState({loading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({loading:!1}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"midmovingtermWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,null===this.midmovingtermChart&&(this.midmovingtermChart=this.chart.addLineSeries({color:P().green[600],visible:!1})),this.setState({loading:!0}),e.prev=3,e.next=6,(0,D.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(t,"/").concat(this.state.averageSettings.midmovingterm));case 6:a=e.sent,this.midmovingtermChart.setData(a.data.data),this.setState({loading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({loading:!1}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"longmovingtermWorker",value:function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.state.pageID,null===this.longmovingtermChart&&(this.longmovingtermChart=this.chart.addLineSeries({color:P().yellow[600],visible:!1})),this.setState({loading:!0}),e.prev=3,e.next=6,(0,D.O)("https://feed.tseshow.com/api/stock/movingAveragePrice/".concat(t,"/").concat(this.state.averageSettings.longmovingterm));case 6:a=e.sent,this.longmovingtermChart.setData(a.data.data),this.setState({loading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({loading:!1}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getGroupLists(),this.chart=(0,W.C2)(this.chartRef.current,{width:this.chartRef.current.offsetWidth,height:this.chartRef.current.offsetHeight,overlayPriceScales:{visible:!1},grid:{horzLines:{color:"rgba(240, 243, 250,1)"},vertLines:{color:"rgba(240, 243, 250,0)"}},crosshair:{mode:W.rM.Normal},rightPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 1)",scaleMargins:{top:0,bottom:.5}},leftPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 1)",scaleMargins:{top:.5,bottom:0}},layout:{backgroundColor:"#ffffff",textColor:"rgba(33, 56, 77, 1)"}}),this.CandlestickInitialize(),this.VolumeStudyWorker(),this.shortTermChartWorker(),this.midTermChartWorker(),this.longTermChartWorker(),this.shortmovingtermWorker(),this.midmovingtermWorker(),this.longmovingtermWorker(),this.history.listen((function(t){var a=t.pathname.split("/")[3];e.setState({pageID:a}),e.CandlestickInitialize(a),e.state.chipsValue.includes("0")||(e.getNormalAverages(a),e.getMovingAverages(a),e.shortTermChartWorker(),e.midTermChartWorker(),e.longTermChartWorker(),e.shortmovingtermWorker(),e.midmovingtermWorker(),e.longmovingtermWorker())}))}},{key:"render",value:function(){var e=this;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w.q,{children:(0,z.jsxs)("title",{children:["\u0646\u0645\u0648\u062f\u0627\u0631 \u0647\u0627\u06cc \u062c\u0631\u06cc\u0627\u0646\u0627\u062a \u0646\u0642\u062f\u06cc\u0646\u06af\u06cc ",this.state.title]})}),(0,z.jsxs)(d.Z,{position:"apart",children:[(0,z.jsx)(u.x,{children:this.state.title}),(0,z.jsx)(y.Ph,{onChange:function(t){return e.changeGroup(t)},placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",data:this.state.industrieLists})]}),(0,z.jsxs)(v.X,{p:"lg",shadow:"xs",radius:"md",mt:"lg",children:[(0,z.jsxs)(c.c,{defaultValue:"0",radius:"sm",onChange:function(t){return e.onChangeChips(t)},children:[(0,z.jsx)(g.A,{value:"0",defaultChecked:!0,children:"\u0648\u0631\u0648\u062f \u067e\u0648\u0644"}),(0,z.jsx)(g.A,{value:"1",children:"\u0627\u0631\u0632\u0634 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u0639\u0627\u0645\u0644\u0627\u062a"}),(0,z.jsx)(g.A,{value:"2",children:"\u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f"}),(0,z.jsx)(g.A,{value:"3",children:"\u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634"}),(0,z.jsx)(g.A,{value:"4",children:"\u0642\u062f\u0631\u062a \u062e\u0631\u06cc\u062f"}),(0,z.jsx)(g.A,{value:"5",disabled:this.state.allowSelectLastChip,children:"\u0645\u0642\u0627\u06cc\u0633\u0647 \u0627\u06cc \u0633\u0631\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634"})]}),(0,z.jsxs)(d.Z,{mt:"sm",children:[(0,z.jsx)(p.I,{value:this.state.comparisonPeriod,min:1,max:100,maxLength:3,size:"xs",onChange:function(t){return e.lastChipInputChange(t.target.value)},placeholder:"\u062f\u0648\u0631\u0647 \u0645\u0642\u0627\u06cc\u0633\u0647 \u0628\u06cc\u0646 1 \u062a\u0627 100",inputMode:"numeric"}),(0,z.jsx)(f.z,{size:"xs",variant:"outline",onClick:function(){return e.setState({openedModal:!0})},children:"\u062a\u0646\u0638\u06cc\u0645 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646"})]}),(0,z.jsx)(S.i,{my:"lg",label:"\u0628\u06cc\u0634\u062a\u0631",labelPosition:"center"}),(0,z.jsxs)(d.Z,{position:"apart",children:[(0,z.jsx)(k.NU,{clearable:!0,placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",onChange:function(t){return e.chartDisplaySettings(t)},label:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0645\u0627\u06cc\u0634\u06cc",data:[{value:"0",label:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0646\u0645\u0648\u062f\u0627\u0631 \u0642\u06cc\u0645\u062a"},{value:"1",label:"\u0644\u06af\u0627\u0631\u06cc\u062a\u0645\u06cc"}]}),(0,z.jsx)("div",{className:"relative",children:(0,z.jsx)(k.NU,{clearable:!0,placeholder:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",label:"\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0647\u0627",onChange:function(t){return e.averagesDisplaySettings(t)},data:[{value:"0",label:"\u0628\u0627\u0632\u0627\u0631"},{value:"1",label:"\u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a"},{value:"2",label:"\u0645\u06cc\u0627\u0646 \u0645\u062f\u062a"},{value:"3",label:"\u0628\u0644\u0646\u062f \u0645\u062f\u062a"},{value:"4",label:"\u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a - \u067e\u0648\u0644"},{value:"5",label:"\u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a - \u067e\u0648\u0644"},{value:"6",label:"\u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a - \u067e\u0648\u0644"}]})})]}),(0,z.jsxs)("div",{className:"h-[70vh] relative",children:[(0,z.jsx)(x.f,{visible:this.state.loading,loaderProps:{variant:"dots"}}),(0,z.jsx)("div",{ref:this.chartRef,className:"mt-10 w-full h-full"})]})]}),(0,z.jsx)(C.u,{dir:"rtl",title:"\u062a\u0646\u0638\u06cc\u0645 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",zIndex:9999999999,opened:this.state.openedModal,onClose:function(){return e.setState({openedModal:!1})},children:(0,z.jsx)(I.J9,{enableReinitialize:!0,initialValues:{shortterm:this.state.averageSettings.shortterm,midterm:this.state.averageSettings.midterm,longterm:this.state.averageSettings.longterm,shortmovingterm:this.state.averageSettings.shortmovingterm,midmovingterm:this.state.averageSettings.midmovingterm,longmovingterm:this.state.averageSettings.longmovingterm},validationSchema:V,onSubmit:function(t){return e.handleAverageSettings(t)},children:(0,z.jsxs)(I.l0,{children:[(0,z.jsxs)(b.r,{children:[(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 50",name:"shortterm"})})}),(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 100",name:"midterm"})})}),(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 200",name:"longterm"})})}),(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 200",name:"shortmovingterm"})})}),(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 200",name:"midmovingterm"})})}),(0,z.jsx)(b.r.Col,{md:6,sm:12,children:(0,z.jsx)(j.S,{label:"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a",children:(0,z.jsx)(L.Z,{placeholder:"1 \u062a\u0627 200",name:"longmovingterm"})})})]}),(0,z.jsx)(d.Z,{position:"apart",mt:"lg",children:(0,z.jsx)(f.z,{color:"green",size:"sm",type:"submit",loading:this.state.overloayModal,children:"\u062b\u0628\u062a"})})]})})})]})}}]),a}(h.Component),V=O.Ry().shape({shortterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(50,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 50 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),midterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(100,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 100 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),longterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),shortmovingterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),midmovingterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0645\u06cc\u0627\u0646 \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),longmovingterm:O.Rx().min(1,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0628\u0627\u0634\u062f").max(200,"\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 200 \u0628\u0627\u0634\u062f").typeError("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").required("\u062f\u0648\u0631\u0647 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0628\u0644\u0646\u062f \u0645\u062f\u062a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")});t.default=(0,Z.EN)((0,M.$j)((function(e){return{marketData:e.market,chartAndtables:e.config.needs.chartAndtables}}),(function(e){return{setMarket:function(t){return e((0,A.sS)(t))}}}))(R))}}]);
//# sourceMappingURL=429.c55d56ba.chunk.js.map