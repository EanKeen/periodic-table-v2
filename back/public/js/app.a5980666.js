(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d237590":"efb5f174","chunk-504b87ba":"9337b407","chunk-5175c8b6":"f1279cf5","chunk-9dbeae36":"8ffad91c","chunk-a21ef48c":"694d29bd"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-504b87ba":1,"chunk-5175c8b6":1,"chunk-9dbeae36":1,"chunk-a21ef48c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d237590":"31d6cfe0","chunk-504b87ba":"0e433876","chunk-5175c8b6":"0e433876","chunk-9dbeae36":"0e433876","chunk-a21ef48c":"0e433876"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03ed":function(e,t,n){"use strict";var a=n("2418"),o=n.n(a);o.a},"0dd1":function(e,t,n){"use strict";var a=n("cd8e"),o=n.n(a);o.a},1002:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface"},[n("div",{staticClass:"element-information-wrapper"},[n("element-graphic"),n("element-information")],1),n("periodic-table")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"graphic-outer"},[n("div",{staticClass:"graphic"},[n("div",{staticClass:"graphic-inner"},[n("p",[e._v(e._s(e.selectedAtom.atomicNumber))]),n("p",[e._v(e._s(e.selectedAtom.abbreviation))]),n("p",[e._v(e._s(e.selectedAtom.name))]),n("p",[e._v(e._s(e.selectedAtom.atomicWeight))])])])])},i=[],c=n("cebc"),s=(n("cadf"),n("551c"),n("097d"),n("2f62")),u={name:"ElementGraphic",computed:Object(c["a"])({},Object(s["e"])("elementData/",["selectedAtom"]))},l=u,f=(n("03ed"),n("2877")),m=Object(f["a"])(l,r,i,!1,null,"6339add6",null);m.options.__file="ElementGraphic.vue";var d=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"information-outer"},[n("div",{staticClass:"information-inner"},e._l(e.selectedAtom,function(t,a){return n("div",{key:t,staticClass:"information",on:{mousedown:function(t){e.updateSpecificAtomsData(a)}}},[e.dataNotBasic(a)?n("div",[n("p",[e._v(e._s(e.atomKeyInEnglish(a)))]),n("p",[e._v(e._s(t))])]):e._e()])}),0)])},b=[],v=function(e){var t;switch(e){case"name":t="Name";break;case"abbreviation":t="Abbreviation";break;case"atomicNumber":t="Atomic Number";break;case"atomicWeight":t="Atomic Weight";break;case"boilingPoint":t="Boiling Point";break;case"meltingPoint":t="Melting Point";break;case"radius":t="Radius";break;case"electronegativity":t="Electronegativity";break}return t},h={name:"ElementInformation",computed:Object(c["a"])({},Object(s["e"])("elementData/",["selectedAtom"])),methods:Object(c["a"])({},Object(s["d"])("elementData/",["updateSpecificAtomsData"]),{dataNotBasic:function(e){return"name"!==e&&"abbreviation"!==e&&"atomicNumber"!==e&&"atomicWeight"!==e},atomKeyInEnglish:function(e){return v(e)}})},g=h,_=(n("275d"),Object(f["a"])(g,p,b,!1,null,"ad8ba42e",null));_.options.__file="ElementInformation.vue";var A=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0==e.tabAtomsData?n("div",[n("p",[e._v("LOADING DATA HERE")])]):e._e(),e.tabAtomsData?n("section",{staticClass:"periodic-table"},e._l(e.tabAtomsData,function(e,t){return n("div",{key:e.name,staticClass:"element-outer"},[n("element-z",{attrs:{atomData:e,index:t}})],1)}),0):e._e()])},D=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"element-inner",on:{mousedown:function(t){e.updateSelectedAtom(e.atomData.atomicNumber)}}},[n("h3",[e._v(e._s(e.atomData.name))]),n("p",[e._v(e._s(e.atomData.atomicNumber))]),n("p",[e._v(e._s(e.specificAtomsData[e.index]))])])},O=[],y=(n("c5f6"),{name:"Element",computed:Object(c["a"])({},Object(s["e"])("elementData/",["specificAtomsData"])),methods:Object(c["a"])({},Object(s["d"])("elementData/",["updateSelectedAtom"])),props:{atomData:Object,index:Number}}),w=y,E=(n("6a1b"),Object(f["a"])(w,j,O,!1,null,"280ed166",null));E.options.__file="Element.vue";var T=E.exports,x={name:"PeriodicTable",computed:Object(c["a"])({},Object(s["c"])("elementData/",["tabAtomsData","specificAtomsData"])),methods:Object(c["a"])({},Object(s["b"])("elementData/",["fetchUpdatePeriodicTableData"])),watch:{$route:function(){var e={tab:this.$route.meta.tab};this.fetchUpdatePeriodicTableData(e)}},created:function(){var e={tab:this.$route.meta.tab};this.fetchUpdatePeriodicTableData(e)},components:{"element-z":T}},S=x,N=(n("8b84"),Object(f["a"])(S,k,D,!1,null,"3dde07e2",null));N.options.__file="PeriodicTable.vue";var C=N.exports,P={name:"Interface",components:{"element-graphic":d,"element-information":A,"periodic-table":C}},I=P,$=(n("ac8d"),Object(f["a"])(I,a,o,!1,null,"367f0c64",null));$.options.__file="Interface.vue";t["a"]=$.exports},"1df4":function(e,t,n){},2418:function(e,t,n){},"275d":function(e,t,n){"use strict";var a=n("2aa6"),o=n.n(a);o.a},"2aa6":function(e,t,n){},"474f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("navigation"),n("router-view",{staticClass:"router-view"}),n("foot")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"navigation-list"},[n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/properties"}},[e._v("Properties")])],1),n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/electrons"}},[e._v("Electrons")])],1),n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/orbitals"}},[e._v("Orbitals")])],1),n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/isotopes"}},[e._v("Isotopes")])],1),n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/expldore"}},[e._v("Explore")])],1),n("nav-item",[n("router-link",{attrs:{tag:"p",to:"/trivia"}},[e._v("Trivia")])],1)],1)])},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"nav-item-outer",style:e.currentTheme.navigationTheme[e.navItemState],on:{mouseenter:function(t){e.navItemState="hover"},mouseleave:function(t){e.navItemState="default"},mousedown:function(t){e.navItemState="click"},mouseup:function(t){e.navItemState="hover"}}},[e._t("default")],2)},u=[],l=n("cebc"),f=n("2f62"),m={name:"NavItem",data:function(){return{navItemState:"default"}},computed:Object(l["a"])({},Object(f["e"])("themes/",["currentTheme"]))},d=m,p=(n("5b76"),n("2877")),b=Object(p["a"])(d,s,u,!1,null,"4aadd479",null);b.options.__file="NavItem.vue";var v=b.exports,h={name:"Navigation",components:{"nav-item":v}},g=h,_=(n("fe86"),Object(p["a"])(g,i,c,!1,null,"635deb12",null));_.options.__file="Navigation.vue";var A=_.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"foot"},[n("p",[e._v("© 2019 Edwin Kofler")])])}],j={name:"Foot"},O=j,y=(n("0dd1"),Object(p["a"])(O,k,D,!1,null,"44350405",null));y.options.__file="Foot.vue";var w=y.exports,E={name:"App",components:{navigation:A,foot:w}},T=E,x=(n("5c0b"),Object(p["a"])(T,o,r,!1,null,null,null));x.options.__file="App.vue";var S=x.exports,N=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("interface-z")],1)},P=[],I=n("1002"),$={name:"PropertiesTab",components:{"interface-z":I["a"]}},B=$,U=Object(p["a"])(B,C,P,!1,null,null,null);U.options.__file="PropertiesTab.vue";var M=U.exports;a["a"].use(N["a"]);var W=new N["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/properties"},{path:"/properties",component:M,meta:{tab:"properties"}},{path:"/electrons",component:function(){return n.e("chunk-2d237590").then(n.bind(null,"fb75"))},meta:{tab:"electrons"}},{path:"/orbitals",component:function(){return n.e("chunk-504b87ba").then(n.bind(null,"ee3e"))},meta:{tab:"orbitals"}},{path:"/isotopes",component:function(){return n.e("chunk-a21ef48c").then(n.bind(null,"43ce"))},meta:{tab:"isotopes"}},{path:"/explore",component:function(){return n.e("chunk-9dbeae36").then(n.bind(null,"4a19"))},meta:{tab:"explore"}},{path:"/trivia",component:function(){return n.e("chunk-5175c8b6").then(n.bind(null,"6bd1"))},meta:{tab:"trivia"}}]}),z=n("5176"),F=n.n(z),L={fetchUpdateTabAtomsData:function(e,t){var n="propertiesTabAtomData";"properties"===t.tab?n="propertiesTabAtomData":"electrons"===t.tab&&(n="electronsTabAtomData"),fetch("http://localhost:3000/"+n).then(function(e){return e.json()}).then(function(t){e.state.tabAtomsData=t}).then(function(){var t=e.state.selectedAtom.atomicNumber;e.commit("updateSelectedAtom",t)})},fetchSpecificAtomData:function(e,t){var n="propertiesSpecificAtomsData";"properties"===t.tab?n="propertiesSpecificAtomsData":"electrons"===t.tab&&(n="electronsSpecificAtomsData"),fetch("http://localhost:3000/"+n).then(function(e){return e.json()}).then(function(t){e.state.specificAtomsData=t})}},q={tabAtomsData:[],specificAtomsData:[],selectedAtom:{name:"Hydrogen",abbreviation:"H",atomicNumber:1,atomicWeight:1.008}},G={tabAtomsData:function(e){return e.tabAtomsData},specificAtomsData:function(e){return e.specificAtomsData},selectedAtom:function(e){return e.selectedAtom}},H={updateSelectedAtom:function(e,t){var n=t-1,a=e.tabAtomsData[n];e.selectedAtom={},e.selectedAtom=F()({},e.selectedAtom,a)},updateSpecificAtomsData:function(e,t){for(var n=[],a=0;a<e.tabAtomsData.length;a++){var o=e.tabAtomsData[a][t];n.push(o)}e.specificAtomsData=n}},K={fetchUpdatePeriodicTableData:function(e,t){L.fetchUpdateTabAtomsData(e,t),L.fetchSpecificAtomData(e,t)}},J={namespaced:!0,state:q,getters:G,mutations:H,actions:K},R="#f1f3f5",Q="#dee2e6",V="#adb5bd",X={currentTheme:{name:"Light Theme",navigationTheme:{default:{backgroundColor:R,border:"1px solid black"},hover:{backgroundColor:Q,border:"1px solid brown"},click:{backgroundColor:V,border:"1px solid brown"}}},lightTheme:{},darkTheme:{},outlineTheme:{}},Y={},Z={},ee={},te={namespaced:!0,state:X,getters:Y,mutations:Z,actions:ee};a["a"].use(f["a"]);var ne=new f["a"].Store({modules:{elementData:J,themes:te}}),ae=n("9483");Object(ae["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:W,store:ne,render:function(e){return e(S)}}).$mount("#app")},"5b76":function(e,t,n){"use strict";var a=n("474f"),o=n.n(a);o.a},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(e,t,n){},"6a1b":function(e,t,n){"use strict";var a=n("8cdf"),o=n.n(a);o.a},"80a9":function(e,t,n){},"8b84":function(e,t,n){"use strict";var a=n("80a9"),o=n.n(a);o.a},"8cdf":function(e,t,n){},ac8d:function(e,t,n){"use strict";var a=n("1df4"),o=n.n(a);o.a},cd8e:function(e,t,n){},eb06:function(e,t,n){},fe86:function(e,t,n){"use strict";var a=n("eb06"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a5980666.js.map