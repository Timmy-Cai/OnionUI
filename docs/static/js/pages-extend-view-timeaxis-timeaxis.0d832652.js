(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-timeaxis-timeaxis"],{"0486":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiTimeaxisItem",props:{bgcolor:{type:String,default:"#fafafa"}},data:function(){return{}}};i.default=n},"0c20":function(t,i,e){"use strict";e.r(i);var n=e("50a0"),a=e("1cfc");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("e826");var o=e("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"78b22094",null);i["default"]=s.exports},1046:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-order-header"},[e("v-uni-view",{staticClass:"tui-text"},[t._v("订单编号："),e("v-uni-text",{staticClass:"tui-bold"},[t._v("9136257866")])],1),e("v-uni-view",{staticClass:"tui-text"},[t._v("国内承运人：华南众包站")]),e("v-uni-view",{staticClass:"tui-text"},[t._v("预计送达："),e("v-uni-text",{staticClass:"tui-bold"},[t._v("5")]),t._v("月"),e("v-uni-text",{staticClass:"tui-bold"},[t._v("1")]),t._v("日")],1)],1),e("v-uni-view",{staticClass:"tui-order-tracking"},[e("tui-time-axis",[e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node tui-bg-primary"},[e("tui-icon",{attrs:{name:"check",color:"#fff",size:14,bold:!0}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",[e("v-uni-view",{staticClass:"tui-order-title"},[t._v("已签收")]),e("v-uni-view",{staticClass:"tui-order-desc"},[t._v("您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 18:48:26")])],1)]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"people",color:"#fff",size:13}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("派送中")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("您的订单正在配送途中（快递员：echo.，电话："),e("v-uni-text",{staticClass:"tui-primary"},[t._v("13822448855")]),t._v("），请您耐心等待。")],1),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 16:29:07")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"transport",color:"#fff",size:13}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("运输中")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("您的订单已到达XX【北京XX营业部】")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 16:17:32")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node tui-node-small"})]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray tui-ptop"},[t._v("您的订单已在XX【北京XX营业部】收货完成")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 08:40:32")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node tui-node-small"})]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray tui-ptop"},[t._v("您的订单由XXXX送往XX【北京XX营业部】")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 08:17:32")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"home",color:"#fff",size:12}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("仓库处理中")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("打包完成")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 08:09:16")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"order",color:"#fff",size:12}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("已下单")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("您的订单将下传XXX仓库，准备出库")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 02:09:16")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"notice",color:"#fff",size:12}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("温馨提示")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("您的订单预计5月1日送达您手中")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 02:05:16")])]},proxy:!0}])}),e("tui-timeaxis-item",{attrs:{bgcolor:"none"},scopedSlots:t._u([{key:"node",fn:function(){return[e("v-uni-view",{staticClass:"tui-node"},[e("tui-icon",{attrs:{name:"order",color:"#fff",size:12}})],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-order-title tui-gray"},[t._v("已下单")]),e("v-uni-view",{staticClass:"tui-order-desc tui-light-gray"},[t._v("您提交了订单，请等待第三方卖家系统弄确认")]),e("v-uni-view",{staticClass:"tui-order-time tui-gray"},[t._v("2019-05-01 02:04:16")])]},proxy:!0}])})],1)],1)],1)},a=[];e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return a}))},"140c":function(t,i,e){"use strict";e.r(i);var n=e("1046"),a=e("5a9d");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("f5af");var o=e("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"fd23dad2",null);i["default"]=s.exports},"1cfc":function(t,i,e){"use strict";e.r(i);var n=e("5782"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"26bf":function(t,i,e){"use strict";e.r(i);var n=e("5bed"),a=e("c2ed");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("ad25");var o=e("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"fa4aa1c0",null);i["default"]=s.exports},"326e":function(t,i,e){var n=e("f5bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("012e1db2",n,!0,{sourceMap:!1,shadowMode:!1})},3427:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("61e6")),r=n(e("0c20")),o=n(e("26bf")),s={components:{tuiIcon:a.default,tuiTimeAxis:r.default,tuiTimeaxisItem:o.default},data:function(){return{}},methods:{}};i.default=s},"418d":function(t,i,e){i=t.exports=e("24fb")(!1),i.push([t.i,".tui-timeaxis-item[data-v-fa4aa1c0]{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:25px}.tui-node[data-v-fa4aa1c0]{position:absolute;top:0;left:-20px;\n\t/* padding: 3px 0; */-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:99;background:#fafafa;font-size:%?24?%}",""])},"50a0":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-timeaxis-class tui-time-axis"},[t._t("default")],2)},a=[];e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return a}))},5782:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiTimeAxis",data:function(){return{}}};i.default=n},"5a9d":function(t,i,e){"use strict";e.r(i);var n=e("3427"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"5bed":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"timeaxis-item-class tui-timeaxis-item"},[t._t("content"),e("v-uni-view",{staticClass:"tui-node",style:{background:t.bgcolor}},[t._t("node")],2)],2)},a=[];e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return a}))},a0d2:function(t,i,e){var n=e("fd36");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("23e6862e",n,!0,{sourceMap:!1,shadowMode:!1})},ad25:function(t,i,e){"use strict";var n=e("d47c"),a=e.n(n);a.a},c2ed:function(t,i,e){"use strict";e.r(i);var n=e("0486"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},d47c:function(t,i,e){var n=e("418d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("56b1a17e",n,!0,{sourceMap:!1,shadowMode:!1})},e826:function(t,i,e){"use strict";var n=e("326e"),a=e.n(n);a.a},f5af:function(t,i,e){"use strict";var n=e("a0d2"),a=e.n(n);a.a},f5bd:function(t,i,e){i=t.exports=e("24fb")(!1),i.push([t.i,'.tui-time-axis[data-v-78b22094]{padding-left:20px;box-sizing:border-box;position:relative}.tui-time-axis[data-v-78b22094]:before{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #ddd;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}',""])},fd36:function(t,i,e){i=t.exports=e("24fb")(!1),i.push([t.i,".tui-order-header[data-v-fd23dad2]{padding:%?30?%;box-sizing:border-box;background:#fff}.tui-text[data-v-fd23dad2]{font-size:%?28?%;color:#333;padding:%?4?%}.tui-bold[data-v-fd23dad2]{font-weight:700}.tui-node[data-v-fd23dad2]{background:#ddd;height:%?44?%;width:%?44?%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;padding-top:0}.tui-node-small[data-v-fd23dad2]{height:%?16?%!important;width:%?16?%!important}.tui-bg-primary[data-v-fd23dad2]{background:#5677fc!important}.tui-order-tracking[data-v-fd23dad2]{padding:%?30?% %?30?% %?30?% %?40?%;background:#fff;margin-top:%?20?%;box-sizing:border-box}.tui-order-title[data-v-fd23dad2]{color:#333;font-weight:700;font-size:%?32?%;font-family:microsoft yahei}.tui-order-desc[data-v-fd23dad2]{font-size:%?28?%;color:#333;padding:%?12?% 0}.tui-ptop[data-v-fd23dad2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;line-height:%?28?%}.tui-order-time[data-v-fd23dad2]{font-size:%?24?%;font-weight:700}.tui-gray[data-v-fd23dad2]{color:#848484!important}.tui-light-gray[data-v-fd23dad2]{color:#888!important}.tui-primary[data-v-fd23dad2]{color:#5677fc}",""])}}]);