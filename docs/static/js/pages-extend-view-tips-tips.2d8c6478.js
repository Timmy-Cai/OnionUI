(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-tips-tips"],{"2c69":function(t,e,i){"use strict";i.r(e);var a=i("bbaa"),n=i("e7e8");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("b779");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"7ffb426e",null);e["default"]=s.exports},"45a4":function(t,e,i){"use strict";i.r(e);var a=i("82d8"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},5511:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiTips",props:{fixed:{type:Boolean,default:!0},imgUrl:{type:String,default:""},imgWidth:{type:Number,default:200},imgHeight:{type:Number,default:200},btnWidth:{type:Number,default:200},btnText:{type:String,default:""}},methods:{handleClick:function(t){this.$emit("click",{})}}};e.default=a},"82d8":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2c69")),r={components:{tuiTips:n.default},data:function(){return{show:!1}},methods:{}};e.default=r},"889a":function(t,e,i){var a=i("fd1c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5f2dbe9e",a,!0,{sourceMap:!1,shadowMode:!1})},"8b8e":function(t,e,i){var a=i("a647");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d2263de0",a,!0,{sourceMap:!1,shadowMode:!1})},"99fc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("tips")]),i("v-uni-view",{staticClass:"sub-title"},[t._v("提示信息：默认居中显示，无操作按钮")])],1),i("tui-tips",{attrs:{fixed:!1,imgUrl:"/static/images/toast/img_noorder@3x.png"}},[t._v("暂无订单")]),i("tui-tips",{attrs:{fixed:!1,imgUrl:"/static/images/toast/img_nodata.png"}},[t._v("暂无数据")]),i("tui-tips",{attrs:{fixed:!1,imgUrl:"/static/images/toast/img_nodata.png",btnText:"去逛逛"}},[t._v("您还没有购买任何商品~")])],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},a647:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".tui-tips-box[data-v-7ffb426e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-tips-fixed[data-v-7ffb426e]{width:90%;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tui-tips-icon[data-v-7ffb426e]{display:block;-webkit-flex-shrink:0;flex-shrink:0;width:%?280?%;height:%?280?%;margin-bottom:%?40?%}.tui-tips-content[data-v-7ffb426e]{text-align:center;color:#666;font-size:%?28?%;padding:0 %?50?% %?24?% %?50?%;box-sizing:border-box;word-break:break-all;word-wrap:break-word}.tui-tips-btn[data-v-7ffb426e]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;background:#eb0909;color:#fff;border-radius:%?6?%;margin:0}.tui-tips-btn-hover[data-v-7ffb426e]{background:#c80808;color:#e5e5e5}",""])},b4c8:function(t,e,i){"use strict";i.r(e);var a=i("99fc"),n=i("45a4");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ed4a");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"0a5b38b0",null);e["default"]=s.exports},b779:function(t,e,i){"use strict";var a=i("8b8e"),n=i.n(a);n.a},bbaa:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-tips-box",class:[t.fixed?"tui-tips-fixed":""]},[i("v-uni-image",{staticClass:"tui-tips-icon",style:{width:t.imgWidth+"rpx",height:t.imgHeight+"rpx"},attrs:{src:t.imgUrl}}),i("v-uni-view",{staticClass:"tui-tips-content"},[t._t("default")],2),t.btnText?i("v-uni-button",{staticClass:"tui-tips-btn",style:{width:t.btnWidth+"rpx"},attrs:{"hover-class":"tui-tips-btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.handleClick(e)}}},[t._v(t._s(t.btnText))]):t._e()],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},e7e8:function(t,e,i){"use strict";i.r(e);var a=i("5511"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ed4a:function(t,e,i){"use strict";var a=i("889a"),n=i.n(a);n.a},fd1c:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".container[data-v-0a5b38b0]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-0a5b38b0]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-0a5b38b0]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-0a5b38b0]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-0a5b38b0]{padding:%?10?% %?40?%;box-sizing:border-box}",""])}}]);