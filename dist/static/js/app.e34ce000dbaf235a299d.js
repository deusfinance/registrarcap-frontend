webpackJsonp([1],{"3myR":function(e,t){},"5+yj":function(e,t){},"9M+g":function(e,t){},B9IB:function(e,t){},Jmt5:function(e,t){},L5Xb:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r=a("sCSS"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"fixed-bottom"},[a("ul",{staticClass:"social"},[a("li",[a("a",{attrs:{href:"https://deus.finance",target:"_blank",rel:"noopener noreferrer"}},[e._v("deus.finance")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/deusdao",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@deusfinance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/deusfinance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://discord.com/invite/DxdM7TW",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://t.me/deusfinance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram")])])])])}]};var o=a("VU/8")({name:"Footer"},n,!1,function(e){a("L5Xb")},"data-v-332ce00b",null).exports,l={name:"App",components:{"rc-footer":o}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("rc-footer")],1)},staticRenderFns:[]};var c=a("VU/8")(l,i,!1,function(e){a("3myR")},null,null).exports,u=a("/ocq"),d=a("mtWM"),p=a.n(d),v={name:"Table",data:function(){return{perPage:100,currentPage:1,sortBy:"index",sortDesc:!1,fields:[{key:"index",label:"#",sortable:!0},{key:"registrar",label:"Registrar",sortable:!0},{key:"price",label:"Price",sortable:!0},{key:"oneHour",label:"1h",sortable:!0},{key:"oneDay",label:"24h",sortable:!0},{key:"sevenDays",label:"7d",sortable:!0},{key:"oneDayVolume",label:"24h Volume",sortable:!0},{key:"marketCapRegistrar",label:"Mkt Cap (Registrar)",sortable:!0},{key:"marketCapAsset",label:"Mkt Cap (Asset)",sortable:!0},{key:"lastSevenDays",label:"Last 7 Days",sortable:!0}],items:[],selected:"usd",options:[{value:"usd",text:"USD"},{value:"eth",text:"ETH"}]}},computed:{rows:function(){return this.items.length}},created:function(){var e=this;p.a.get(this.endpoint("/prices/")).then(function(t){e.items=t.data})},methods:{formatNumber:function(e){return new Intl.NumberFormat("en-US").format(e)}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form-radio-group",{staticClass:"float-left",staticStyle:{"padding-bottom":"10px"},attrs:{options:e.options,buttons:"","button-variant":"outline-secondary"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),a("b-table",{staticClass:"text-left text-white-50",staticStyle:{"margin-top":"20px"},attrs:{id:"coinTable","head-variant":"dark",responsive:"",items:e.items,fields:e.fields,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"per-page":e.perPage,"current-page":e.currentPage},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"cell(registrar)",fn:function(t){var s=t.value;return[a("router-link",{staticClass:"text-white",attrs:{to:{name:"Registrar",params:{registrar:s}}}},[e._v(e._s(s))])]}},{key:"cell(price)",fn:function(t){var s=t.value;return["usd"==e.selected?a("span",[e._v("$"+e._s(e.formatNumber(s.usd)))]):a("span",[e._v(e._s(e.formatNumber(s.eth))+" ETH")])]}},{key:"cell(oneHour)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneDay)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(sevenDays)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneDayVolume)",fn:function(t){var s=t.value;return["usd"==e.selected?a("span",[e._v("$"+e._s(e.formatNumber(s.usd)))]):a("span",[e._v(e._s(e.formatNumber(s.eth))+" ETH")])]}},{key:"cell(marketCapRegistrar)",fn:function(t){var s=t.value;return["usd"==e.selected?a("span",[e._v("$"+e._s(e.formatNumber(s.usd)))]):a("span",[e._v(e._s(e.formatNumber(s.eth))+" ETH")])]}},{key:"cell(marketCapAsset)",fn:function(t){var s=t.value;return["usd"==e.selected?a("span",[e._v("$"+e._s(e.formatNumber(s.usd)))]):a("span",[e._v(e._s(e.formatNumber(s.eth))+" ETH")])]}}])}),e._v(" "),a("b-pagination",{staticClass:"float-right",attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"coinTable"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},staticRenderFns:[]};var m={name:"App",components:{"rc-table":a("VU/8")(v,f,!1,function(e){a("bsx+")},null,null).exports,"rc-footer":o}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h2",{staticClass:"text-white text-center",staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[this._v("Top 2 Registrars by Market Capitalization")]),this._v(" "),t("div",{staticStyle:{"padding-left":"2em","padding-right":"2em"}},[t("rc-table")],1),this._v(" "),t("rc-footer")],1)},staticRenderFns:[]};var b=a("VU/8")(m,_,!1,function(e){a("5+yj")},null,null).exports,h=a("ZK7N"),g={name:"Registrar",components:{TradingVue:a.n(h).a},data:function(){return{titleTxt:"RegistrarCap",price:2.1,fields:[{key:"oneHour",label:"1h"},{key:"oneDay",label:"24h"},{key:"oneWeek",label:"7d"},{key:"twoWeeks",label:"14d"},{key:"oneMonth",label:"30d"},{key:"oneYear",label:"1y"}],items:[{oneHour:-10,oneDay:20,oneWeek:5,twoWeeks:100,oneMonth:-10,oneYear:-50}],timeSelected:"oneDay",timeOptions:[{value:"oneDay",text:"24h"},{value:"oneWeek",text:"7d"},{value:"twoWeeks",text:"14d"},{value:"oneMonth",text:"30d"},{value:"threeMonths",text:"90d"},{value:"halfYear",text:"180d"},{value:"oneYear",text:"1y"},{value:"max",text:"Max"}],chartSelected:"price",chartOptions:[{value:"price",text:"Price"},{value:"marketCapRegistrar",text:"Market Cap (Registrar)"},{value:"marketCapAsset",text:"Market Cap (Asset)"}],ohlcv:[[15511284e5,33,37.1,14,14,196],[1551132e6,13.7,30,6.6,30,206],[15511356e5,29.9,33,21.3,21.8,74],[15511392e5,21.7,25.9,18,24,140],[15511428e5,24.1,24.1,24,24.1,29]]}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"padding-left":"20em","padding-right":"20em"}},[a("h1",{staticClass:"text-white"},[e._v(e._s(e.$route.params.registrar.toUpperCase()))]),e._v(" "),a("h3",{staticClass:"text-white"},[e._v("\n    "+e._s(e.price)+"\n    "),e.items[0].oneDay>=0?a("span",{staticClass:"text-success"},[e._v(e._s(e.items[0].oneDay)+"%")]):a("span",{staticClass:"text-danger"},[e._v(e._s(e.items[0].oneDay)+"%")])]),e._v(" "),e._m(0),e._v(" "),a("br"),e._v(" "),a("b-table",{staticClass:"text-center",attrs:{items:e.items,fields:e.fields,responsive:"",bordered:""},scopedSlots:e._u([{key:"cell(oneHour)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneDay)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneWeek)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(twoWeeks)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneMonth)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}},{key:"cell(oneYear)",fn:function(t){var s=t.value;return[a("span",s>=0?{staticClass:"text-success"}:{staticClass:"text-danger"},[e._v(e._s(s)+"%")])]}}])}),e._v(" "),a("b-form-radio-group",{staticClass:"float-left",attrs:{options:e.chartOptions,buttons:"","button-variant":"outline-secondary"},model:{value:e.chartSelected,callback:function(t){e.chartSelected=t},expression:"chartSelected"}}),e._v(" "),a("b-form-radio-group",{staticClass:"float-right",attrs:{options:e.timeOptions,buttons:"","button-variant":"outline-secondary"},model:{value:e.timeSelected,callback:function(t){e.timeSelected=t},expression:"timeSelected"}}),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("trading-vue",{attrs:{data:this.$data,"title-txt":this.titleTxt,width:1300}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-white"},[this._v("\n    Market Cap (Registrar): $5,788,804"),t("br"),this._v("\n    Market Cap (Asset): $5,788,804"),t("br"),this._v("\n    24 Hour Trading Vol: $1,028,532"),t("br"),this._v("\n    Max Supply: 2,657,016"),t("br")])}]};var x=a("VU/8")(g,y,!1,function(e){a("B9IB")},null,null).exports;s.default.use(u.a);var k=new u.a({routes:[{path:"/",name:"Prices",component:b},{path:"/:registrar",name:"Registrar",component:x}]});a("Jmt5"),a("9M+g");s.default.use(r.a),s.default.config.productionTip=!1,s.default.mixin({methods:{endpoint:function(e){return"http://159.65.88.246:8008"+e}}}),new s.default({el:"#app",router:k,render:function(e){return e(c)}})},"bsx+":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e34ce000dbaf235a299d.js.map