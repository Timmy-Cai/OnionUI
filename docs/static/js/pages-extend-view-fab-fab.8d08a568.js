(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-fab-fab"],{"05c0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={name:"tuiFab",props:{left:{type:Number,default:0},right:{type:Number,default:80},bottom:{type:Number,default:100},width:{type:Number,default:108},height:{type:Number,default:108},radius:{type:String,default:"50%"},bgColor:{type:String,default:"#5677fc"},color:{type:String,default:"#fff"},btnList:{type:Array,default:function(){return[]}},maskClosable:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,hidden:!0,timer:null}},methods:{getLeft:function(){var t="auto";return this.left&&!this.right&&(t=this.left+"rpx"),t},getRight:function(){var t=this.right+"rpx";return this.left&&!this.right&&(t="auto"),t},handleClick:function(t){var e=this;this.hidden=!1,clearTimeout(this.timer),-1==t&&this.btnList.length?this.isOpen=!this.isOpen:(this.$emit("click",{index:t}),this.isOpen=!1),this.isOpen||(this.timer=setTimeout((function(){e.hidden=!0}),200))},handleClickCancel:function(){this.maskClosable&&(this.isOpen=!1)}},beforeDestroy:function(){clearTimeout(this.timer),this.timer=null}};e.default=n},"0a35":function(t,e,i){"use strict";var n=i("6054"),a=i.n(n);a.a},1677:function(t,e,i){"use strict";(function(t){var n,a,o,r=i("4ea4");i("6b54"),i("ac6a"),i("fd24"),i("ac4d"),i("8a81");var c=r(i("7618"));
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */!function(i,r){"object"==(0,c.default)(e)&&"object"==(0,c.default)(t)?t.exports=r():(a=[],n=r,o="function"===typeof n?n.apply(e,a):n,void 0===o||(t.exports=o))}(0,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==(0,c.default)(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var n="function"==typeof Symbol&&"symbol"==(0,c.default)(Symbol.iterator)?function(t){return(0,c.default)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,c.default)(t)},a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=l(i(1)),r=l(i(3)),u=l(i(4));function l(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(0,c.default)(e)&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(i),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(0,c.default)(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),a(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===n(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return f("action",t)}},{key:"defaultTarget",value:function(t){var e=f("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return f("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),e}();function f(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}t.exports=s},function(t,e,i){var n,a="function"==typeof Symbol&&"symbol"==(0,c.default)(Symbol.iterator)?function(t){return(0,c.default)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,c.default)(t)},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(2),u=(n=r)&&n.__esModule?n:{default:n},l=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,u.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,u.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":a(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=l},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),a=document.createRange();a.selectNodeContents(t),n.removeAllRanges(),n.addRange(a),e=n.toString()}return e}},function(t,e){function i(){}i.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function a(){n.off(t,a),e.apply(i,arguments)}return a._=e,this.on(t,a,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,a=i.length;n<a;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],a=[];if(n&&e)for(var o=0,r=n.length;o<r;o++)n[o].fn!==e&&n[o].fn._!==e&&a.push(n[o]);return a.length?i[t]=a:delete i[t],this}},t.exports=i},function(t,e,i){var n=i(5),a=i(6);t.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(i))throw new TypeError("Third argument must be a Function");if(n.node(t))return d=e,b=i,(f=t).addEventListener(d,b),{destroy:function(){f.removeEventListener(d,b)}};if(n.nodeList(t))return u=t,l=e,s=i,Array.prototype.forEach.call(u,(function(t){t.addEventListener(l,s)})),{destroy:function(){Array.prototype.forEach.call(u,(function(t){t.removeEventListener(l,s)}))}};if(n.string(t))return o=t,r=e,c=i,a(document.body,o,r,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,c,u,l,s,f,d,b}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,i){var n=i(7);function a(t,e,i,a,o){var r=function(t,e,i,a){return function(i){i.delegateTarget=n(i.target,e),i.delegateTarget&&a.call(t,i)}}.apply(this,arguments);return t.addEventListener(i,r,o),{destroy:function(){t.removeEventListener(i,r,o)}}}t.exports=function(t,e,i,n,o){return"function"==typeof t.addEventListener?a.apply(null,arguments):"function"==typeof i?a.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return a(t,e,i,n,o)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])}))}).call(this,i("62e4")(t))},"1ab1":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("75fc")),o=n(i("3229")),r=n(i("54c4")),c=i("8454"),u={components:{tuiButton:o.default,tuiFab:r.default},data:function(){return{left:0,right:80,bottom:100,bgColor:"#5677fc",btnList:[],list:[{bgColor:"#16C2C2",imgUrl:"/static/images/fab/fab_about.png",imgHeight:64,imgWidth:64,text:"关于",fontSize:34,color:"#fff"},{bgColor:"#64B532",imgUrl:"/static/images/fab/fab_share.png",imgHeight:64,imgWidth:64,text:"分享",fontSize:34,color:"#fff"},{bgColor:"#FFA000",imgUrl:"/static/images/fab/fab_reward.png",imgHeight:64,imgWidth:64,text:"赞赏",fontSize:34,color:"#fff"}],list2:[{bgColor:"#16C2C2",text:"关于",fontSize:28,color:"#fff"},{bgColor:"#64B532",text:"分享",fontSize:28,color:"#fff"},{bgColor:"#FFA000",text:"赞赏",fontSize:28,color:"#fff"}]}},onLoad:function(){this.btnList=(0,a.default)(this.list)},methods:{change:function(t){switch(t){case 1:this.left=80,this.right=0;break;case 2:this.left=0,this.right=80;break;case 3:this.bgColor="#FF0000";break;case 4:this.btnList=[];break;case 5:this.btnList=(0,a.default)(this.list);break;case 6:this.btnList=(0,a.default)(this.list2);break;default:break}this.tui.toast("切换成功，点击查看效果")},onClick:function(t){var e=t.index;switch(e){case-1:this.tui.toast("您点击了悬浮按钮");break;case 0:uni.navigateTo({url:"/pages/about/about"});break;case 1:this.clipboard("https://thorui.cn/");break;case 2:uni.previewImage({urls:["https://thorui.cn/img/reward.jpg"]});break;default:break}},clipboard:function(t){var e=this;c.getClipboardData(t,(function(t){t?e.tui.toast("分享链接已复制"):e.tui.toast("分享链接复制失败")}))}}};e.default=u},"1af6":function(t,e,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20b6":function(t,e,i){"use strict";i.r(e);var n=i("8991"),a=i("a4b0");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6b72");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"f59c9624",null);e["default"]=c.exports},"20fd":function(t,e,i){"use strict";var n=i("d9f6"),a=i("aebd");t.exports=function(t,e,i){e in t?n.f(t,e,a(0,i)):t[e]=i}},3229:function(t,e,i){"use strict";i.r(e);var n=i("ad24"),a=i("faf7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0a35");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"4863cc0f",null);e["default"]=c.exports},"437f":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'.tui-btn-primary[data-v-4863cc0f]{background:#1582ad!important;color:#fff}.tui-shadow-primary[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 rgba(15,96,128,.14)}.tui-btn-danger[data-v-4863cc0f]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-4863cc0f]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-4863cc0f]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-4863cc0f]{background:#5677fc!important;color:#fff}.tui-shadow-blue[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-white[data-v-4863cc0f]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-4863cc0f]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-4863cc0f]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-4863cc0f]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-4863cc0f]{background:#f7f7f9!important}\n\n/* button start*/.tui-btn[data-v-4863cc0f]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-4863cc0f]:after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-4863cc0f]:after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-4863cc0f]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-4863cc0f]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled.tui-btn-danger[data-v-4863cc0f]{opacity:1!important;background:#fc8888!important}.tui-outline-hover[data-v-4863cc0f]{opacity:.5}.tui-primary-hover[data-v-4863cc0f]{background:#126f93!important;color:#e5e5e5!important}.tui-primary-outline[data-v-4863cc0f]:after{border:%?1?% solid #1582ad!important}.tui-primary-outline[data-v-4863cc0f]{color:#1582ad!important;background:none}.tui-danger-hover[data-v-4863cc0f]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-4863cc0f]{color:#eb0909!important;background:none}.tui-danger-outline[data-v-4863cc0f]:after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-4863cc0f]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-4863cc0f]{color:#fc872d!important;background:none}.tui-warning-outline[data-v-4863cc0f]:after{border:1px solid #fc872d!important}.tui-green-hover[data-v-4863cc0f]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-4863cc0f]{color:#35b06a!important;background:none}.tui-green-outline[data-v-4863cc0f]:after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-4863cc0f]{background:#4a67d6!important;color:#e5e5e5!important}.tui-blue-outline[data-v-4863cc0f]{color:#5677fc!important;background:none}.tui-blue-outline[data-v-4863cc0f]:after{border:%?1?% solid #5677fc!important}.tui-gray-hover[data-v-4863cc0f]{background:#a3a3a3!important;color:#898989}.tui-gray-outline[data-v-4863cc0f]{color:#999!important;background:none!important}.tui-white-outline[data-v-4863cc0f]{color:#fff!important;background:none!important}.tui-black-outline[data-v-4863cc0f]{background:none!important;color:#333!important}.tui-gray-outline[data-v-4863cc0f]:after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-4863cc0f]:after{border:1px solid #fff!important}.tui-black-outline[data-v-4863cc0f]:after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-4863cc0f]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-4863cc0f]:after{border-radius:%?98?%}.tui-outline-fillet[data-v-4863cc0f]:after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-4863cc0f]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-4863cc0f]:after{border-radius:0}.tui-outline-rightAngle[data-v-4863cc0f]:after{border-radius:0}',""])},"48db":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'@font-face{font-family:tuifab;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAREAA0AAAAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEKAAAABoAAAAciPExJUdERUYAAAQIAAAAHgAAAB4AKQAKT1MvMgAAAaAAAABCAAAAVjyBSAVjbWFwAAAB9AAAAD4AAAFCAA/pvmdhc3AAAAQAAAAACAAAAAj//wADZ2x5ZgAAAkAAAABRAAAAYFkYQQNoZWFkAAABMAAAADAAAAA2Fm5OF2hoZWEAAAFgAAAAHQAAACQH3QOFaG10eAAAAeQAAAAPAAAAEAwAAANsb2NhAAACNAAAAAoAAAAKADAAAG1heHAAAAGAAAAAHwAAACABDwAobmFtZQAAApQAAAFJAAACiCnmEVVwb3N0AAAD4AAAAB8AAAAx2XRuznjaY2BkYGAAYtGolt54fpuvDNwsDCBwc1krH5xm/t/I/J+5FsjlYGACiQIAGAEKZHjaY2BkYGBu+N/AEMPCAALM/xkYGVABCwBZ4wNrAAAAeNpjYGRgYGBhkGEA0QwMTEDMBYQMDP/BfAYAC4kBOAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PhJ8JMzf8b2CIYW5gaAAKM4LkAN21DAEAAHjaY2GAABYIZgYAAIMAEAB42mNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoRA/jPh//8hpOQHqEoGRjYGGJOBkQlIMDGgAkaGYQ8AUSIHswAAAAAAAAAAAAAAMAAAeNpjYGRg/t/I/J+5lkGagYFRUVCPUYmNXVCRj1FETFxRUI7RyMxcUNGO0USN+fS/HEY5XTnGfznicnLijFPAHMYpYnJyjFvBlBgWBQBNJxKpAAAAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMCiTIxMbFmZiRmJ+QALXAKKAAAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAMAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPTNZa18MBoAPbcFzgAA) format("woff");font-weight:400;font-style:normal}.tui-fab-icon[data-v-6a1e978e]{font-family:tuifab!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:%?10?%}.tui-icon-plus[data-v-6a1e978e]:before{content:"\\e613"}.tui-fab-box[data-v-6a1e978e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;z-index:99997}.tui-fab-right[data-v-6a1e978e]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.tui-fab-btn[data-v-6a1e978e]{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0;visibility:hidden}.tui-fab-hidden[data-v-6a1e978e]{height:0;width:0}.tui-fab-item-box[data-v-6a1e978e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-bottom:%?40?%}.tui-fab-item-left[data-v-6a1e978e]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-flow:row-reverse;flex-flow:row-reverse}.tui-fab-title[data-v-6a1e978e]{width:90%;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tui-text-left[data-v-6a1e978e]{padding-left:%?28?%}.tui-text-right[data-v-6a1e978e]{padding-right:%?28?%}.tui-fab-img[data-v-6a1e978e]{display:block}.tui-fab-item[data-v-6a1e978e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-shadow:0 0 5px 2px rgba(0,0,0,.1);-webkit-transition:all .2s linear;transition:all .2s linear}.tui-radius[data-v-6a1e978e]{border-radius:50%}.tui-active[data-v-6a1e978e]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.tui-fab-mask[data-v-6a1e978e]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.75);z-index:99996;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0;visibility:hidden}.tui-visible[data-v-6a1e978e]{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)}',""])},5344:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"94rpx"},size:{type:Number,default:32},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{})},getShadowClass:function(t,e,i){var n="";return e&&"white"!=t&&!i&&(n="tui-shadow-"+t),n},getDisabledClass:function(t,e){var i="";return t&&"white"!=e&&"gray"!=e&&(i="tui-dark-disabled"),i},getShapeClass:function(t,e){var i="";return"circle"==t?i=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(i=e?"tui-outline-rightAngle":"tui-rightAngle"),i},getHoverClass:function(t,e,i){var n="";return t||(n=i?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),n}}};e.default=n},"549b":function(t,e,i){"use strict";var n=i("d864"),a=i("63b6"),o=i("241e"),r=i("b0dc"),c=i("3702"),u=i("b447"),l=i("20fd"),s=i("7cd6");a(a.S+a.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,a,f,d=o(t),b="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,A=void 0!==p,v=0,g=s(d);if(A&&(p=n(p,h>2?arguments[2]:void 0,2)),void 0==g||b==Array&&c(g))for(e=u(d.length),i=new b(e);e>v;v++)l(i,v,A?p(d[v],v):d[v]);else for(f=g.call(d),i=new b;!(a=f.next()).done;v++)l(i,v,A?r(f,p,[a.value,v],!0):a.value);return i.length=v,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"54c4":function(t,e,i){"use strict";i.r(e);var n=i("fc89"),a=i("66e4");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6814");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"6a1e978e",null);e["default"]=c.exports},6054:function(t,e,i){var n=i("437f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("a186d4ea",n,!0,{sourceMap:!1,shadowMode:!1})},"66e4":function(t,e,i){"use strict";i.r(e);var n=i("05c0"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},6814:function(t,e,i){"use strict";var n=i("938c"),a=i.n(n);a.a},"6b72":function(t,e,i){"use strict";var n=i("e694"),a=i.n(n);a.a},"75fc":function(t,e,i){"use strict";i.r(e);var n=i("a745"),a=i.n(n);function o(t){if(a()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),c=i.n(r),u=i("c8bb"),l=i.n(u);function s(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return o(t)||s(t)||f()}i.d(e,"default",(function(){return d}))},"774e":function(t,e,i){t.exports=i("d2d5")},8454:function(t,e,i){"use strict";var n=i("4ea4"),a=n(i("1677")),o={getClipboardData:function(t,e){var i=window.event||{},n=new a.default("",{text:function(){return t}});n.on("success",(function(t){"function"==typeof e&&e(!0),n.off("success"),n.off("error"),n.destroy()})),n.on("error",(function(t){"function"==typeof e&&e(!1),n.off("success"),n.off("error"),n.destroy()})),n.onClick(i)}};t.exports={getClipboardData:o.getClipboardData}},8991:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("悬浮按钮")]),i("v-uni-view",{staticClass:"sub-title"},[t._v("fab，可设置left，right，bottom值，可设置大小，颜色等，具体参考文档。拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。")])],1),i("v-uni-view",{staticClass:"tui-btn-box"},[i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(1)}}},[t._v("左侧悬浮")])],1),i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(2)}}},[t._v("右侧悬浮")])],1),i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(3)}}},[t._v("设置默认按钮背景颜色")])],1),i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(4)}}},[t._v("无拓展按钮")])],1),i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(5)}}},[t._v("设置拓展按钮")])],1),i("v-uni-view",{staticClass:"tui-btn-btm"},[i("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.change(6)}}},[t._v("拓展按钮无图标展示")])],1)],1),i("tui-fab",{attrs:{left:t.left,right:t.right,bottom:t.bottom,bgColor:t.bgColor,btnList:t.btnList},on:{click:function(e){e=t.$handleEvent(e),t.onClick(e)}}})],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},9246:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".container[data-v-f59c9624]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-f59c9624]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-f59c9624]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-f59c9624]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-f59c9624]{padding:%?10?% %?40?%;box-sizing:border-box}.tui-btn-btm[data-v-f59c9624]{margin-bottom:%?36?%}",""])},"938c":function(t,e,i){var n=i("48db");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("9cdc341a",n,!0,{sourceMap:!1,shadowMode:!1})},"95d5":function(t,e,i){var n=i("40c3"),a=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a4b0:function(t,e,i){"use strict";i.r(e);var n=i("1ab1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a745:function(t,e,i){t.exports=i("f410")},ad24:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{staticClass:"tui-btn-class tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx"},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,disabled:t.disabled},on:{click:function(e){e=t.$handleEvent(e),t.handleClick(e)}}},[t._t("default")],2)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},e694:function(t,e,i){var n=i("9246");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3e23058d",n,!0,{sourceMap:!1,shadowMode:!1})},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},faf7:function(t,e,i){"use strict";i.r(e);var n=i("5344"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fc89:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"tui-fab-box",class:{"tui-fab-right":!t.left||t.left&&t.right},style:{left:t.getLeft(),right:t.getRight(),bottom:t.bottom+"rpx"}},[i("v-uni-view",{staticClass:"tui-fab-btn",class:{"tui-visible":t.isOpen,"tui-fab-hidden":t.hidden}},t._l(t.btnList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tui-fab-item-box",class:{"tui-fab-item-left":t.left&&!t.right&&e.imgUrl},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.handleClick(n)}}},[e.imgUrl?i("v-uni-view",{class:[t.left&&!t.right?"tui-text-left":"tui-text-right"],style:{fontSize:e.fontSize+"rpx",color:e.color}},[t._v(t._s(e.text||""))]):t._e(),i("v-uni-view",{staticClass:"tui-fab-item",style:{width:t.width+"rpx",height:t.height+"rpx",background:e.bgColor||t.bgColor,borderRadius:t.radius}},[e.imgUrl?i("v-uni-image",{staticClass:"tui-fab-img",style:{width:e.imgWidth+"rpx",height:e.imgHeight+"rpx"},attrs:{src:e.imgUrl}}):i("v-uni-view",{staticClass:"tui-fab-title",style:{fontSize:e.fontSize+"rpx",color:e.color}},[t._v(t._s(e.text||""))])],1)],1)})),1),i("v-uni-view",{staticClass:"tui-fab-item",class:{"tui-active":t.isOpen},style:{width:t.width+"rpx",height:t.height+"rpx",borderRadius:t.radius,background:t.bgColor,color:t.color},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.handleClick(-1)}}},[i("v-uni-view",{staticClass:"tui-fab-icon tui-icon-plus"})],1)],1),i("v-uni-view",{staticClass:"tui-fab-mask",class:{"tui-visible":t.isOpen},on:{click:function(e){e=t.$handleEvent(e),t.handleClickCancel(e)}}})],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},fd24:function(t,e,i){var n=i("5ca1");n(n.S,"Object",{setPrototypeOf:i("8b97").set})}}]);