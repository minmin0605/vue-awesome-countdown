(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},144:function(t,e,n){var a=n(16),r="["+n(142)+"]",i=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},145:function(t,e,n){var a=n(0),r=n(3),i=n(97),o=[].slice,s=function(t){return function(e,n){var a=arguments.length>2,r=a?o.call(arguments,2):void 0;return t(a?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},147:function(t,e,n){"use strict";var a=n(12),r=n(8),i=n(2),o=n(98),s=RegExp.prototype,u=s.toString,l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),c="toString"!=u.name;(l||c)&&a(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n)}),{unsafe:!0})},148:function(t,e,n){var a=n(0),r=n(149);a({global:!0,forced:parseInt!=r},{parseInt:r})},149:function(t,e,n){var a=n(3),r=n(144).trim,i=n(142),o=a.parseInt,s=/^[+-]?0[Xx]/,u=8!==o(i+"08")||22!==o(i+"0x16");t.exports=u?function(t,e){var n=r(String(t));return o(n,e>>>0||(s.test(n)?16:10))}:o},172:function(t,e,n){var a=n(12),r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&a(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},173:function(t,e,n){"use strict";var a=n(6),r=n(3),i=n(61),o=n(12),s=n(4),u=n(19),l=n(100),c=n(31),f=n(2),m=n(20),d=n(43).f,p=n(18).f,g=n(7).f,T=n(144).trim,h=r.Number,v=h.prototype,w="Number"==u(m(v)),S=function(t){var e,n,a,r,i,o,s,u,l=c(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=T(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(o=(i=l.slice(2)).length,s=0;s<o;s++)if((u=i.charCodeAt(s))<48||u>r)return NaN;return parseInt(i,a)}return+l};if(i("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,b=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof b&&(w?f((function(){v.valueOf.call(n)})):"Number"!=u(n))?l(new h(S(e)),n,b):S(e)},_=a?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)s(h,I=_[N])&&!s(b,I)&&g(b,I,p(h,I));b.prototype=v,v.constructor=b,o(r,"Number",b)}},174:function(t,e,n){"use strict";var a=n(0),r=n(175).start;a({target:"String",proto:!0,forced:n(177)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},175:function(t,e,n){var a=n(13),r=n(176),i=n(16),o=Math.ceil,s=function(t){return function(e,n,s){var u,l,c=String(i(e)),f=c.length,m=void 0===s?" ":String(s),d=a(n);return d<=f||""==m?c:(u=d-f,(l=r.call(m,o(u/m.length))).length>u&&(l=l.slice(0,u)),t?c+l:l+c)}};t.exports={start:s(!1),end:s(!0)}},176:function(t,e,n){"use strict";var a=n(32),r=n(16);t.exports="".repeat||function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},177:function(t,e,n){var a=n(97);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},257:function(t,e,n){"use strict";n.r(e);n(172),n(173),n(14),n(148),n(147),n(174),n(145);var a={name:"vue-awesome-countdown",props:{startTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},endTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},leftTime:{type:Number,default:0},autoStart:{type:Boolean,default:!0},speed:{type:Number,default:1e3,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},data:function(){return{state:"beforeStart",attrs:{},actualStartTime:null,actualEndTime:null,timeObj:{},countdownTimer:null,runTimes:0,usedTime:0,remainingTime:0}},watch:{speed:function(t,e){var n=this;if(t<0&&(t=0),t!==e){clearTimeout(n.countdownTimer);var a=(new Date).getTime(),r=Math.floor((a-n.actualStartTime)/t),i=a%t;n.runTimes=r,n.$nextTick((function(){n.countdownTimer=setTimeout(n.doCountdown,i)}))}}},created:function(){var t=this,e=t.startTime&&new Date(t.startTime).getTime()||0,n=e&&e-(new Date).getTime()||0;t.autoStart&&(t.state="preheat",setTimeout((function(){t.startCountdown(!0)}),n))},methods:{startCountdown:function(t){var e=this;if("beforeStart"===e.state||"stoped"===e.state||"paused"===e.state||t){t&&(Object.assign(e.$data,e.$options.data.call(e)),e.$emit("start",e));"stoped"===e.state&&(e.remainingTime=e.actualEndTime-(new Date).getTime()),e.actualEndTime||(e.actualEndTime=e.endTime||(new Date).getTime()+(e.remainingTime||e.leftTime)),"paused"===e.state&&(e.actualEndTime=(new Date).getTime()+e.remainingTime),e.state="process",e.doCountdown()}},stopCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.$emit("stop",t),t.state="stoped")},pauseCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.remainingTime=t.actualEndTime-(new Date).getTime(),t.$emit("paused",t),t.state="paused")},switchCountdown:function(){var t=this;return"stoped"===t.state||"beforeStart"===t.state?t.startCountdown():"process"===t.state?t.stopCountdown():void 0},finishCountdown:function(){var t=this;t.state="finised",t.timeObj={},t.usedTime=(new Date).getTime()-t.actualStartTime,t.$emit("finish",t)},doCountdown:function(){var t=this;if("process"===t.state){t.actualStartTime||(t.actualStartTime=(new Date).getTime());var e=new Date(t.actualEndTime).getTime()-(new Date).getTime();if(e>0){var n={},a=e/1e3,r={d:a/60/60/24,h:a/60/60%24,m:a/60%60,s:a%60,ms:e%1e3},i={d:parseInt(r.d,10).toString(),h:parseInt(r.h,10).toString().padStart(2,0),m:parseInt(r.m,10).toString().padStart(2,0),s:parseInt(r.s,10).toString().padStart(2,0),ms:r.ms.toString().padStart(3,0)},o={d:parseInt(Math.ceil(a/60/60/24),10),h:parseInt(Math.ceil(a/60/60),10),m:parseInt(Math.ceil(a/60),10),s:parseInt(Math.ceil(a),10)};n.endTime=t.actualEndTime,n.speed=t.speed,t.usedTime=(new Date).getTime()-t.actualStartTime,n.leftTime=e,t.remainingTime=e,t.timeObj=Object.assign({},n,i,{org:r,ceil:o}),t.timeObj.org=r,t.timeObj.ceil=o,t.$emit("process",t);var s=t.speed+(t.actualStartTime+t.runTimes++*t.speed-(new Date).getTime());s<0&&(s+=t.speed),t.countdownTimer=setTimeout(t.doCountdown,s)}else t.finishCountdown()}}}},r=n(28),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._g(t._b({tag:"components"},"components",t.attrs,!1),t.$listeners),[t._t("prev",null,null,this._self),t._v(" "),"beforeStart"===t.state?t._t("before",null,null,this._self):t._e(),t._v(" "),"preheat"===t.state?t._t("preheat",null,null,this._self):t._e(),t._v(" "),"process"===t.state||"stoped"===t.state||"paused"===t.state?t._t("process",null,null,this._self):t._e(),t._v(" "),"finised"===t.state?t._t("finish",null,null,this._self):t._e(),t._v(" "),t._t("default",null,null,this._self)],2)}),[],!1,null,null,null);e.default=i.exports}}]);