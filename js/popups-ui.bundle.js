(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{134:function(t,i,n){var e=n(165);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(18)(e,s);e.locals&&(t.exports=e.locals)},135:function(t,i,n){var e=n(167);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(18)(e,s);e.locals&&(t.exports=e.locals)},164:function(t,i,n){"use strict";n(134)},165:function(t,i,n){(i=n(17)(!1)).push([t.i,"\ndiv.activities[data-v-cacde55a] {\n\tmin-width: 28rem;\n\twidth: fit-content;\n\tpadding-top:1em;\n\tpadding: 1.5em;\n}\ndiv.section[data-v-cacde55a] {\n\tmargin-top: 1em;\n\tmin-width: 100%;\n}\ndiv.task-info[data-v-cacde55a] {\n\tdisplay:flex;\n\twidth: 90%;\n\tmargin: var(--sm-gap) 0;\n}\nbutton.stop[data-v-cacde55a] {\n\tmargin: 0 var(--sm-gap);\n}\nspan.task-name[data-v-cacde55a] {\n\tflex-grow:1;\n\tvertical-align: center;\n}\ndiv.section header[data-v-cacde55a] {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=i},166:function(t,i,n){"use strict";n(135)},167:function(t,i,n){(i=n(17)(!1)).push([t.i,"\n.popup[data-v-980be7f2] {\n\tz-index: var(--md-depth);\n\tmax-width: 50vw;\n}\n.content[data-v-980be7f2] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\twidth: 100%;\n\tmin-height:5rem;\n}\n.content .items[data-v-980be7f2] {\n\tdisplay:flex;\n\tflex-flow: row wrap;\n\tflex-grow: 1;\n\twidth:auto;\n}\n.content .title[data-v-980be7f2] {\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin-bottom: var(--sm-gap);\n}\n.task-btn[data-v-980be7f2] {\n\n\tmax-height: 2em;\n\twidth:100%;\n}\nbutton.close-btn[data-v-980be7f2] {\n\tmin-height: 2em;\n\twidth: 5em;\n\tfont-size:0.9em;\n}\n\n\n",""]),t.exports=i},228:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return null!=t.choices&&t.choices.length>0?n("div",{staticClass:"popup"},[n("div",{staticClass:"content"},[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"items"},t._l(t.choices,(function(i){return n("button",{key:t.strings?i:i.id,class:{"task-btn":!0,disabled:!t.strings&&!t.slottable(i)||t.mustPay&&t.cantPay(i)},on:{"!mouseenter":function(n){n.stopPropagation(),!t.strings&&t.itemOver(n,i)},click:function(n){return t.choose(i)}}},[t._v(t._s(t.strings?i:i.name))])})),0),t._v(" "),n("button",{staticClass:"close-btn",on:{click:t.cancel}},[t._v("Cancel")])])]):t._e()};e._withStripped=!0;var s=n(2),a=n(36),c=n(19),o=(n(9),{data:()=>({title:null,list:null,elm:null,item:null,open:!1,mustPay:!1,strings:!1}),mixins:[c.a],created(){this.cb=null,this.plisten=()=>{this.add("choice",this.show,this)},this.listen("game-loaded",this.plisten)},beforeDestroy(){this.removeListener("game-loaded",this.plisten),this.plisten=null,this.cancel()},updated(){!1!==this.open&&(this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.a)(this.$el))},computed:{choices:{get(){return this.list},set(t){if("string"==typeof t&&(t=s.c.state.getData(t)),t&&t.items&&(t=t.items),Array.isArray(t))if(this.strings)this.list=t;else{var i=[];for(let e=t.length-1;e>=0;e--){var n=s.c.state.findData(t[e]);n&&i.push(n)}this.list=i}else this.list=null}}},methods:{show(t,i){this.title=i.title,this.cb=i.cb,this.elm=i.elm,this.strings=i.strings,this.mustPay=i.mustPay,this.choices=t,this.open=!0},cantPay:t=>t.cost&&!s.c.canPay(t.cost),choose(t){if(this.open=!1,this.item=null,this.choices=null,this.elm=null,this.cb){let i=this.cb;this.cb=null,i(t)}},cancel(){this.open=!1,this.cb=null,this.item=null,this.choices=null,this.elm=null}}}),r=(n(166),n(6)),l=Object(r.a)(o,e,[],!1,null,"980be7f2",null);l.options.__file="src/ui/popups/choice.vue";i.default=l.exports},229:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"popup activities"},[n("div",{staticClass:"popup-close",on:{click:function(i){return t.$emit("close")}}},[t._v("X")]),t._v(" "),n("div",{key:"k"+t.activeKey,staticClass:"section"},[n("header",[t._v("Activities")]),t._v(" "),0===t.activesLen?n("div",{staticClass:"note-text"},[t._v("None")]):n("div",t._l(t.actives.values().reverse(),(function(i,e){return n("div",{key:"a"+e,staticClass:"task-info"},[n("button",{staticClass:"stop",on:{click:function(n){return t.removeActive(i)}}},[t._v("X")]),n("span",{staticClass:"task-name"},[t._v(t._s(i.name))]),t._v(" "),n("button",{attrs:{disabled:0===e},on:{click:function(n){return t.incActive(i)}}},[t._v("+")]),t._v(" "),n("button",{attrs:{disabled:e+1===t.activesLen},on:{click:function(n){return t.decActive(i)}}},[t._v("-")])])})),0)]),t._v(" "),n("div",{key:"w"+t.waitKey,staticClass:"section"},[n("header",[t._v("Waiting/Blocked")]),t._v(" "),0===t.waiting.length?n("div",{staticClass:"note-text"},[t._v("None")]):n("div",t._l(t.waiting,(function(i,e){return n("div",{key:"w"+e,staticClass:"task-info"},[n("button",{staticClass:"stop",on:{click:function(n){return t.removeWait(i)}}},[t._v("X")]),n("span",{staticClass:"task-name"},[t._v(t._s(i.name))]),t._v(" "),n("button",{attrs:{disabled:0===e},on:{click:function(n){return t.incWaiting(i)}}},[t._v("+")]),t._v(" "),n("button",{attrs:{disabled:e+1===t.waiting.length},on:{click:function(n){return t.decWaiting(i)}}},[t._v("-")])])})),0)]),t._v(" "),n("div",{staticClass:"section"},[n("header",[t._v("Pursuits")]),t._v(" "),0===t.pursuits.count?n("div",{staticClass:"note-text"},[t._v("None")]):n("div",t._l(t.pursuits.items,(function(i){return n("div",{key:i.id,staticClass:"task-info"},[n("button",{staticClass:"stop",on:{click:function(n){return t.removePursuit(i)}}},[t._v("X")]),n("span",{staticClass:"task-name"},[t._v(t._s(i.name))])])})),0)])])};e._withStripped=!0;var s=n(2),a=n(36),c={mixins:[],data:()=>({activeKey:0,waitKey:0}),mounted(){this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.b)(this.$el,.2)},computed:{runner:()=>s.c.runner,actives(){return this.runner.actives},activesLen(){return this.actives.size},waiting(){return this.runner.waiting.reverse()},pursuits(){return this.runner.pursuits}},methods:{incActive(t){this.actives.inc(t),this.activeKey++},decActive(t){this.actives.dec(t),this.activeKey++},removeActive(t){this.runner.stopTask(t)},removeWait(t){this.runner.removeWait(t)},incWaiting(t){this.runner.waitingUp(t)},decWaiting(t){this.runner.waitingDown(t)},removePursuit(t){this.pursuits.remove(t)},incPursuits(t){this.runner.pursuitUp(t)},decPursuits(t){this.runner.pursuitDown(t)}}},o=(n(164),n(6)),r=Object(o.a)(c,e,[],!1,null,"cacde55a",null);r.options.__file="src/ui/popups/activities.vue";i.default=r.exports}}]);