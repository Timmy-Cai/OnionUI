(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basic-basic"],{"0422":function(t,e,i){"use strict";var a=i("7108"),r=i.n(a);r.a},"0ddd":function(t,e,i){"use strict";i.r(e);var a=i("d971"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"1e8e":function(t,e,i){"use strict";i.r(e);var a=i("528b"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"1eb9":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".header[data-v-fee30180]{padding:%?80?% %?60?%}.title[data-v-fee30180]{font-size:%?36?%;color:#333;font-weight:700}.sub-title[data-v-fee30180]{font-size:%?28?%;color:#7a7a7a;padding-top:%?18?%}.tui-grid-icon[data-v-fee30180]{width:%?74?%;height:%?74?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-grid-icon uni-image[data-v-fee30180]{display:block}.tui-grid-icon+.tui-grid-label[data-v-fee30180]{margin-top:%?10?%}.tui-grid-label[data-v-fee30180]{display:block;text-align:center;font-weight:400;color:#333;font-size:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""])},2888:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-grid-class tui-grid",class:[t.bottom?"":"tui-grid-bottom","tui-grid-"+(t.cell<2?3:t.cell)],style:{background:t.bgcolor},attrs:{"hover-class":t.hover?"tui-item-hover":"","hover-stay-time":150},on:{click:function(e){e=t.$handleEvent(e),t.handleClick(e)}}},[i("v-uni-view",{staticClass:"tui-grid-bg"},[t._t("default")],2)],1)},r=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}))},3455:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiGrid",props:{unlined:{type:Boolean,default:!1}}};e.default=a},"35b8":function(t,e,i){"use strict";var a=i("d64a"),r=i.n(a);r.a},"38d1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-grids",class:{"tui-border-top":t.unlined}},[t._t("default")],2)},r=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}))},"446b":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'.tui-grids[data-v-3d5dffca]{width:100%;position:relative;overflow:hidden}.tui-grids[data-v-3d5dffca]:after{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #eaeef1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-border-top[data-v-3d5dffca]:after{border-top:0!important}',""])},"4b4e":function(t,e,i){"use strict";i.r(e);var a=i("3455"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"528b":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("b86e")),n=a(i("a468")),o={components:{tuiGrid:r.default,tuiGridItem:n.default},data:function(){return{routers:[{name:"Color 色彩",url:"color",width:74,height:74},{name:"Flex 布局",url:"flex",width:60,height:60},{name:"Icon 图标",url:"icon",width:56,height:56},{name:"Button 按钮",url:"button",width:64,height:64},{name:"Tag 标签",url:"tag",width:64,height:64},{name:"Badge 徽章",url:"badge",width:58,height:58},{name:"List 列表",url:"list",width:64,height:64},{name:"Card 卡片",url:"card",width:68,height:68},{name:"Grid 宫格",url:"grid",width:48,height:48},{name:"Loading 加载",url:"load",width:74,height:48},{name:"Footer 页脚",url:"footer",width:64,height:58},{name:"Other 其它",url:"other",width:64,height:50}]}},methods:{}};e.default=o},6917:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("Basic")]),i("v-uni-view",{staticClass:"sub-title"},[t._v("基础组件是项目中独立的模块")])],1),i("tui-grid",[t._l(t.routers,(function(e,a){return[i("v-uni-navigator",{key:a+"_0",attrs:{url:"../basic-view/"+e.url+"/"+e.url,"hover-class":"none"}},[i("tui-grid-item",[i("v-uni-view",{staticClass:"tui-grid-icon"},[i("v-uni-image",{style:{width:t.tui.px(e.width),height:t.tui.px(e.height)},attrs:{src:"../../static/images/basic/"+e.url+".png"}})],1),i("v-uni-text",{staticClass:"tui-grid-label"},[t._v(t._s(e.name))])],1)],1)]}))],2)],1)},r=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}))},7108:function(t,e,i){var a=i("1eb9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("cd706eaa",a,!0,{sourceMap:!1,shadowMode:!1})},7507:function(t,e,i){"use strict";i.r(e);var a=i("6917"),r=i("1e8e");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("0422");var o=i("2877"),d=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"fee30180",null);e["default"]=d.exports},"8cfe":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'.tui-grid[data-v-79a06903]{position:relative;padding:%?40?% %?20?%;box-sizing:border-box;background:#fff;float:left}.tui-grid-2[data-v-79a06903]{width:50%}.tui-grid-3[data-v-79a06903]{width:33.333333333%}.tui-grid-4[data-v-79a06903]{width:25%;padding:%?30?% %?20?%!important}.tui-grid-5[data-v-79a06903]{width:20%;padding:%?20?%!important}.tui-grid-2[data-v-79a06903]:nth-of-type(2n):before{width:0;border-right:0}.tui-grid-3[data-v-79a06903]:nth-of-type(3n):before{width:0;border-right:0}.tui-grid-4[data-v-79a06903]:nth-of-type(4n):before{width:0;border-right:0}.tui-grid-5[data-v-79a06903]:nth-of-type(5n):before{width:0;border-right:0}.tui-grid[data-v-79a06903]:before{content:" ";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #eaeef1;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.tui-grid[data-v-79a06903]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #eaeef1;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-grid-bottom[data-v-79a06903]:after{height:0!important;border-bottom:0!important}.tui-grid-bg[data-v-79a06903]{position:relative;padding:0;width:100%;box-sizing:border-box}.tui-item-hover[data-v-79a06903]{background:#f7f7f9!important}',""])},a468:function(t,e,i){"use strict";i.r(e);var a=i("2888"),r=i("0ddd");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("35b8");var o=i("2877"),d=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"79a06903",null);e["default"]=d.exports},b318:function(t,e,i){"use strict";var a=i("b54b"),r=i.n(a);r.a},b54b:function(t,e,i){var a=i("446b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("786a1901",a,!0,{sourceMap:!1,shadowMode:!1})},b86e:function(t,e,i){"use strict";i.r(e);var a=i("38d1"),r=i("4b4e");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("b318");var o=i("2877"),d=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"3d5dffca",null);e["default"]=d.exports},d64a:function(t,e,i){var a=i("8cfe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("fc2eb490",a,!0,{sourceMap:!1,shadowMode:!1})},d971:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiGridItem",props:{cell:{type:Number,default:3},bgcolor:{type:String,default:"#fff"},hover:{type:Boolean,default:!0},bottom:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a}}]);