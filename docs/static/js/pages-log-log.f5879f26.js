(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-log-log"],{"0486":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiTimeaxisItem",props:{bgcolor:{type:String,default:"#fafafa"}},data:function(){return{}}};e.default=i},"0c20":function(t,e,n){"use strict";n.r(e);var i=n("50a0"),o=n("1cfc");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("e826");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"78b22094",null);e["default"]=u.exports},"14ab":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("61e6")),r=i(n("0c20")),a=i(n("26bf")),u=n("2f62"),c=n("8454"),s={computed:(0,u.mapState)(["version"]),components:{tuiIcon:o.default,tuiTimeAxis:r.default,tuiTimeaxisItem:a.default},data:function(){return{logList:[{version:"preface",date:"2019-06-01",log:["本项目稳定后，会同步更新到支付宝小程序，百度小程序，头条小程序等"]},{version:"0.1.0",date:"2019-06-01",log:["1.Thor UI代码片段整理","2.bug修复，以及部分兼容问题修复，代码优化"]},{version:"0.5.0",date:"2019-06-08",log:["1.Thor UI第一版开始内测","2.已知bug修复，以及部分兼容问题修复","3.代码片段优化，封装部分组件"]},{version:"1.0.0",date:"2019-06-15",log:["1.【地图】新增拖拽定位功能","2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...","3.【扩展】新增数字键盘","4.【扩展】新增时间轴","5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等","6.已知bug修复，以及部分功能优化"]},{version:"1.1.0",date:"2019-06-24",log:["1.将基础组件移出扩展，单独出来","2.扩展改为单独tab bar选项extend","3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品","4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层","5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式","6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等","7.部分功能优化，修复已知bug"]},{version:"1.2.0",date:"2019-07-01",log:["1.新增组件NumberBox数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)","2.新增组件Rate评分:可设置星星数，可设置大小颜色","3.新增聊天模板，包含：消息列表，好友列表，聊天界面等","4.新增商城模板,包含：商城首页，商城列表，商城详情等","5.优化部分体验"]},{version:"1.2.1",date:"2019-07-10",log:["1.修复部分兼容性问题","2.修复部分已知bug"]},{version:"1.2.2",date:"2019-07-11",log:["1.新增组件Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。","2.修复已知bug","3.ThorUI组件文档地址：http://www.donarui.com/"]},{version:"1.3.0",date:"2019-07-14",log:["1.新增倒计时组件:时分秒倒计时，支持设置大小，颜色等。","2.新增分隔符组件:Divider分隔符，可设置占据高度，线条宽度，颜色等。","3.新增卡片轮播:包含顶部轮播，秒杀商品轮播等。","4.已知问题修复以及优化。"]},{version:"1.3.2",date:"2019-07-22",log:["1.修复H5端发行报错的问题。","2.扩展基础组件(保留了之前版本):alert、tips、button、toast。","3.新增表单验证功能，只需配置相应验证即可。","4.新增返回顶部组件,nvue返回顶部看首页[nvue商品列表]。","5.优化部分页面，修复已知bug。"]},{version:"1.4.0",date:"2019-10-06",log:["1.新增日期时间选择器组件。","2.H5新增复制文本功能。","3.新增悬浮按钮组件。","4.新增Tabbar组件。","5.新增tabs标签页组件。","6.新增折叠面板组件。","7.新增图片上传组件。","8.NumberBox组件优化调整。","9.Modal组件优化调整。","10.sticky组件优化调整。","11.countdown组件优化调整。","12.商城模板新增购物车、我的、提交订单、支付成功、我的订单、地址列表、新增地址、设置、用户信息等页面。","13.修改已知bug。"]},{version:"1.4.1",date:"2019-10-27",log:["1.新增文档相关链接信息。","2.新增骨架屏组件(extend=>骨架屏)。","3.新增网络请求示例。","4.调整sticky组件，支持索引列表吸顶效果。","5.新增吸顶&索引列表，非scroll-view实现(code[首页]=>索引列表=>索引&吸顶效果)。","6.已知问题修复以及优化。"]}].reverse()}},methods:{getLink:function(t){var e=this;c.getClipboardData(t,(function(t){t?e.tui.toast("链接复制成功"):e.tui.toast("链接复制失败")}))}}};e.default=s},1677:function(t,e,n){"use strict";(function(t){var i,o,r,a=n("4ea4");n("6b54"),n("ac6a"),n("fd24"),n("ac4d"),n("8a81");var u=a(n("7618"));
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */!function(n,a){"object"==(0,u.default)(e)&&"object"==(0,u.default)(t)?t.exports=a():(o=[],i=a,r="function"===typeof i?i.apply(e,o):i,void 0===r||(t.exports=r))}(0,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==(0,u.default)(t)&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var i="function"==typeof Symbol&&"symbol"==(0,u.default)(Symbol.iterator)?function(t){return(0,u.default)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,u.default)(t)},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=s(n(1)),a=s(n(3)),c=s(n(4));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(0,u.default)(e)&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(0,u.default)(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),o(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===i(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,c.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return f("action",t)}},{key:"defaultTarget",value:function(t){var e=f("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return f("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}();function f(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){var i,o="function"==typeof Symbol&&"symbol"==(0,u.default)(Symbol.iterator)?function(t){return(0,u.default)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,u.default)(t)},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(2),c=(i=a)&&i.__esModule?i:{default:i},s=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=s},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var i=n(5),o=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return d=e,p=n,(f=t).addEventListener(d,p),{destroy:function(){f.removeEventListener(d,p)}};if(i.nodeList(t))return c=t,s=e,l=n,Array.prototype.forEach.call(c,(function(t){t.addEventListener(s,l)})),{destroy:function(){Array.prototype.forEach.call(c,(function(t){t.removeEventListener(s,l)}))}};if(i.string(t))return r=t,a=e,u=n,o(document.body,r,a,u);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,a,u,c,s,l,f,d,p}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(7);function o(t,e,n,o,r){var a=function(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}t.exports=function(t,e,n,i,r){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,i,r)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])}))}).call(this,n("62e4")(t))},"1cfc":function(t,e,n){"use strict";n.r(e);var i=n("5782"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"26bf":function(t,e,n){"use strict";n.r(e);var i=n("5bed"),o=n("c2ed");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("ad25");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"fa4aa1c0",null);e["default"]=u.exports},"282a":function(t,e,n){"use strict";n.r(e);var i=n("14ab"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"326e":function(t,e,n){var i=n("f5bd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("012e1db2",i,!0,{sourceMap:!1,shadowMode:!1})},"418d":function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,".tui-timeaxis-item[data-v-fa4aa1c0]{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:25px}.tui-node[data-v-fa4aa1c0]{position:absolute;top:0;left:-20px;\n\t/* padding: 3px 0; */-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:99;background:#fafafa;font-size:%?24?%}",""])},"50a0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tui-timeaxis-class tui-time-axis"},[t._t("default")],2)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},5782:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiTimeAxis",data:function(){return{}}};e.default=i},"5bed":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"timeaxis-item-class tui-timeaxis-item"},[t._t("content"),n("v-uni-view",{staticClass:"tui-node",style:{background:t.bgcolor}},[t._t("node")],2)],2)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},"77a7":function(t,e,n){var i=n("a6a9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("bd709768",i,!0,{sourceMap:!1,shadowMode:!1})},8454:function(t,e,n){"use strict";var i=n("4ea4"),o=i(n("1677")),r={getClipboardData:function(t,e){var n=window.event||{},i=new o.default("",{text:function(){return t}});i.on("success",(function(t){"function"==typeof e&&e(!0),i.off("success"),i.off("error"),i.destroy()})),i.on("error",(function(t){"function"==typeof e&&e(!1),i.off("success"),i.off("error"),i.destroy()})),i.onClick(n)}};t.exports={getClipboardData:r.getClipboardData}},a6a9:function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,'.container[data-v-d6485b48]{overflow:hidden}.tui-header[data-v-d6485b48]{width:100%;padding:0 %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;height:%?54?%;line-height:%?54?%;background:#fff8d5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;\n\t\ttop:44px;\n\t\tz-index:999999}.tui-version[data-v-d6485b48]{color:#f54f46;font-weight:700}.tui-log[data-v-d6485b48]{padding:%?84?% %?80?% %?30?% %?40?%;box-sizing:border-box}.tui-node[data-v-d6485b48]{padding:3px 0}.tui-content-log[data-v-d6485b48]{border-radius:%?10?%;position:relative;padding:%?20?% %?26?%;font-size:%?28?%;color:#fff;background:#5c8dff;border:%?1?% solid #5c8dff;display:inline-block}.tui-log-text[data-v-d6485b48]{\n\t\t/* word-break: break-all;\n  word-wrap: break-word;\n  text-align: justify; */}.tui-content-log[data-v-d6485b48]:before{content:"";position:absolute;width:0;height:0;top:%?14?%;border:%?16?% solid;right:100%;border-color:transparent #5c8dff transparent transparent}.tui-log-gray[data-v-d6485b48]{background:#ededed!important;border:%?1?% solid #ededed!important;color:#999!important}.tui-log-gray[data-v-d6485b48]:before{border-color:transparent #ededed transparent transparent!important}.tui-version-date[data-v-d6485b48]{font-size:%?32?%;font-weight:700;padding-bottom:%?20?%}.tui-doc-box[data-v-d6485b48]{padding-top:%?20?%;word-break:break-all}.tui-link[data-v-d6485b48]{padding-bottom:%?20?%;color:#06c}',""])},ad25:function(t,e,n){"use strict";var i=n("d47c"),o=n.n(i);o.a},c2ed:function(t,e,n){"use strict";n.r(e);var i=n("0486"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},d170:function(t,e,n){"use strict";n.r(e);var i=n("d2cb"),o=n("282a");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("f1e1");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"d6485b48",null);e["default"]=u.exports},d2cb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"tui-header"},[t._v("Hi，欢迎使用Thor UI！当前版本："),n("v-uni-text",{staticClass:"tui-version"},[t._v("V"+t._s(t.version))])],1),n("v-uni-view",{staticClass:"tui-log"},[n("tui-time-axis",t._l(t.logList,(function(e,i){return n("tui-timeaxis-item",{key:i,scopedSlots:t._u([{key:"node",fn:function(){return[n("v-uni-view",{staticClass:"tui-node"},[n("tui-icon",{attrs:{name:"explore-fill",color:t.version==e.version?"#5c8dff":"#ddd",size:18}})],1)]},proxy:!0},{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-content-log",class:[t.version==e.version?"":"tui-log-gray"]},[n("v-uni-view",{staticClass:"tui-version-date"},[t._v(t._s(t.logList.length-1==i?e.version:"V"+e.version)+"（"+t._s(e.date)+"）")]),t._l(e.log,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tui-log-text"},[t._v(t._s(e))])})),i===t.logList.length-1?n("v-uni-view",{staticClass:"tui-doc-box"},[n("v-uni-view",[t._v("组件文档地址：")]),n("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getLink("http://www.donarui.com")}}},[t._v("http://www.donarui.com")]),n("v-uni-view",[t._v("uni-app版本GitHub地址：")]),n("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getLink("https://github.com/dingyong0214/ThorUI-uniapp")}}},[t._v("https://github.com/dingyong0214/ThorUI-uniapp")]),n("v-uni-view",[t._v("uni-app版本插件市场地址：")]),n("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getLink("https://ext.dcloud.net.cn/plugin?id=556")}}},[t._v("https://ext.dcloud.net.cn/plugin?id=556")]),n("v-uni-view",[t._v("小程序版本GitHub地址：")]),n("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getLink("https://github.com/dingyong0214/ThorUI")}}},[t._v("https://github.com/dingyong0214/ThorUI")]),n("v-uni-view",[t._v("小程序版本插件市场地址：")]),n("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getLink("https://ext.dcloud.net.cn/plugin?id=569")}}},[t._v("https://ext.dcloud.net.cn/plugin?id=569")])],1):t._e()],2)]},proxy:!0}],null,!0)})})),1)],1)],1)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},d47c:function(t,e,n){var i=n("418d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("56b1a17e",i,!0,{sourceMap:!1,shadowMode:!1})},e826:function(t,e,n){"use strict";var i=n("326e"),o=n.n(i);o.a},f1e1:function(t,e,n){"use strict";var i=n("77a7"),o=n.n(i);o.a},f5bd:function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,'.tui-time-axis[data-v-78b22094]{padding-left:20px;box-sizing:border-box;position:relative}.tui-time-axis[data-v-78b22094]:before{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #ddd;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}',""])},fd24:function(t,e,n){var i=n("5ca1");i(i.S,"Object",{setPrototypeOf:n("8b97").set})}}]);