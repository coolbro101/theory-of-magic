(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{119:function(t,e,s){var l=s(159);"string"==typeof l&&(l=[[t.i,l,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(13)(l,a);l.locals&&(t.exports=l.locals)},158:function(t,e,s){"use strict";var l=s(119);s.n(l).a},159:function(t,e,s){(t.exports=s(12)(!1)).push([t.i,"\ndiv.spellcraft[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\ndiv.spellcraft .userspells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tpadding: 8px;\r\n\tborder-bottom: 1pt solid var( --separator-color );\n}\ndiv.userspells .spells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction:row;\n}\ndiv.spells .custom[data-v-622e812c] {\r\n\tmargin-right:20px;\n}\n.crafting .options[data-v-622e812c] {\r\n\tpadding-bottom: 4px;\n}\ndiv.spellcraft .bottom[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tpadding-top: 8px;\r\n\tpadding-left: 8px;\n}\ndiv.spellcraft .crafting[data-v-622e812c], div.spellcraft .allspells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\r\n\r\n",""])},164:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spellcraft"},[s("div",{staticClass:"userspells"},[s("div",[t._v("\r\n\t\tCustom Spells: "+t._s(Math.floor(t.userSpells.used)+" / "+Math.floor(t.userSpells.max.value))+"\r\n\t")]),t._v(" "),s("div",{staticClass:"spells"},t._l(t.userSpells.items,(function(e){return s("div",{key:e.id,staticClass:"custom",on:{"!mouseenter":function(s){return s.stopPropagation(),t.emit("itemover",s,e)}}},[s("span",{staticClass:"text-entry"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"c.name"}],staticClass:"fld-name",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]),t._v(" "),s("button",{on:{click:function(s){return t.removeSpell(e)}}},[t._v("Remove")])])})),0)]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"crafting"},[s("div",{staticClass:"options"},[t.craft.level>=t.maxLevels?s("span",{staticClass:"warn-text"},[t._v("You are at your power limit.")]):t._e(),t._v(" "),s("div",{staticClass:"text-entry"},[s("label",{attrs:{for:t.elmId("spName")}},[t._v("Spell")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.craft.name,expression:"craft.name"}],staticClass:"fld-name",attrs:{id:t.elmId("spName"),type:"text"},domProps:{value:t.craft.name},on:{input:function(e){e.target.composing||t.$set(t.craft,"name",e.target.value)}}})]),t._v(" "),s("span",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.emit("itemover",e,t.craft)}}},[s("span",[t._v("Power: "+t._s(t.craft.level+" / "+Math.floor(t.maxLevels)))]),t._v(" "),s("button",{attrs:{disabled:!t.canCraft},on:{click:t.create}},[t._v("Craft")])])]),t._v(" "),t._l(t.list,(function(e,l){return s("div",{key:l,on:{"!mouseenter":function(s){return s.stopPropagation(),t.emit("itemover",s,e)}}},[s("span",[t._v(t._s(e.name))]),s("button",{on:{click:function(e){return t.removeAt(l)}}},[t._v("Remove")])])}))],2),t._v(" "),s("div",{staticClass:"allspells"},t._l(t.spells,(function(e){return s("div",{key:e.id,on:{"!mouseenter":function(s){return s.stopPropagation(),t.emit("itemover",s,e)}}},[s("span",[t._v(t._s(e.name))]),s("button",{attrs:{disabled:!t.canAdd(e)},on:{click:function(s){return t.add(e)}}},[t._v("Add")])])})),0)])])};l._withStripped=!0;var a=s(11);const r=(t,e,s)=>{let l=t[e];t[e]=l?l+s:s},n=t=>{var e={};for(let l=t.length-1;l>=0;l--){var s=t[l];e.gold=(e.gold||0)+300*s.level,i(s.school,s.level,e)}return e},i=(t,e=1,s={})=>{if(Array.isArray(t))for(let l=t.length-1;l>=0;l--)i(t[l],e,s);else null!=t&&(r(s,t+"gem",e*e),e<=5?r(s,"codices",e):r(s,"tomes",e=5));return s};var o=s(1),c={mixins:[a.a],data:()=>({list:[],craft:{name:"new spell",level:0,buy:null}}),methods:{removeSpell(t){this.userSpells.remove(t)},canAdd(t){return t.level+this.craft.level<=this.maxLevels},create(){this.list&&0!==this.list.length&&(o.c.payCost(this.craft.buy),this.userSpells.create(this.list,this.craft.name),this.list=[],this.craft.level=0,this.craft.buy=null)},add(t){this.list.push(t),this.craft.level+=t.level,this.craft.buy=n(this.list)},removeAt(t){let e=this.list[t];e&&(this.craft.level-=e.level),this.list.splice(t,1),this.craft.buy=n(this.list)},remove(t){let e=this.list.indexOf(t);e>=0&&(this.list.splice(e,1),this.craft.level-=t.level,this.craft.buy=n(this.list))}},computed:{canCraft(){return!this.userSpells.full()&&this.list.length>0&&o.c.canPay(this.craft.buy)},userSpells:()=>o.c.state.userSpells,spells(){return o.c.state.filterItems(t=>"spell"===t.type&&!this.locked(t)&&t.owned)},scraft:()=>o.c.state.getData("scraft"),maxLevels(){return Math.floor(this.scraft.valueOf())}}},v=(s(158),s(4)),p=Object(v.a)(c,l,[],!1,null,"622e812c",null);p.options.__file="src/ui/sections/scraft.vue";e.default=p.exports}}]);