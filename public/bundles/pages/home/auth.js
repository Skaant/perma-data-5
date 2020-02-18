!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";e.exports=n(5)},function(e,t,n){"use strict";(function(e,a){var r,l=n(2);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:a;var o=Object(l.a)(r);t.a=o}).call(this,n(3),n(4)(e))},function(e,t,n){"use strict";function a(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return a}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(6),r="function"==typeof Symbol&&Symbol.for,l=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113;r&&Symbol.for("react.suspense_list");var f=r?Symbol.for("react.memo"):60115,E=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}function v(){}function O(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var S=O.prototype=new v;S.constructor=O,a(S,_.prototype),S.isPureReactComponent=!0;var w={current:null},N={current:null},A=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var a,r={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)A.call(t,a)&&!T.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:l,type:e,key:o,ref:i,props:r,_owner:N.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var x=/\/+/g,C=[];function D(e,t,n,a){if(C.length){var r=C.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function k(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function j(e,t,n){return null==e?0:function e(t,n,a,r){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case l:case o:s=!0}}if(s)return a(r,t,""===n?"."+L(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var u=n+L(i=t[c],c);s+=e(i,u,a,r)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),c=0;!(i=t.next()).done;)s+=e(i=i.value,u=n+L(i,c++),a,r);else if("object"===i)throw a=""+t,Error(g(31,"[object Object]"===a?"object with keys {"+Object.keys(t).join(", ")+"}":a,""));return s}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function P(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,a,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),a.push(e))}function M(e,t,n,a,r){var l="";null!=n&&(l=(""+n).replace(x,"$&/")+"/"),j(e,U,t=D(t,l,a,r)),k(t)}function $(){var e=w.current;if(null===e)throw Error(g(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var a=[];return M(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;j(e,P,t=D(null,null,t,n)),k(t)},count:function(e){return j(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!I(e))throw Error(g(143));return e}},createRef:function(){return{current:null}},Component:_,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:E,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return $().useCallback(e,t)},useContext:function(e,t){return $().useContext(e,t)},useEffect:function(e,t){return $().useEffect(e,t)},useImperativeHandle:function(e,t,n){return $().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return $().useLayoutEffect(e,t)},useMemo:function(e,t){return $().useMemo(e,t)},useReducer:function(e,t,n){return $().useReducer(e,t,n)},useRef:function(e){return $().useRef(e)},useState:function(e){return $().useState(e)},Fragment:i,Profiler:c,StrictMode:s,Suspense:m,createElement:R,cloneElement:function(e,t,n){if(null==e)throw Error(g(267,e));var r=a({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=N.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)A.call(t,u)&&!T.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:l,type:e.type,key:o,ref:i,props:r,_owner:s}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:a}},V={default:q},G=V&&q||V;e.exports=G.default||G},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,s=o(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))r.call(n,u)&&(s[u]=n[u]);if(a){i=a(n);for(var d=0;d<i.length;d++)l.call(n,i[d])&&(s[i[d]]=n[i[d]])}}return s}},function(e,t,n){"use strict";n.r(t);n(1);var a=function(){return Math.random().toString(36).substring(7).split("").join(".")},r={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function l(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function o(e){for(var t=Object.keys(e),n={},a=0;a<t.length;a++){var o=t[a];0,"function"==typeof e[o]&&(n[o]=e[o])}var i,s=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:r.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:r.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+r.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var a=!1,r={},o=0;o<s.length;o++){var c=s[o],u=n[c],d=e[c],p=u(d,t);if(void 0===p){var m=l(c,t);throw new Error(m)}r[c]=p,a=a||p!==d}return(a=a||s.length!==Object.keys(e).length)?r:e}}var i=o({userModalDisplay:(e=!1,{type:t})=>{switch(t){case"MAIN_AUTH_USER_MODAL_OPEN":return!0;case"MAIN_AUTH_USER_MODAL_CLOSE":case"AUTH_DISCONNECT":return!1;default:return e}}}),s=n(0),c=n.n(s),u=(e,t,n)=>{$(e).off("click"),setTimeout(()=>$(e).on("click",a=>{a.preventDefault(),a.target===$(e)[0]&&($(e).off("click"),window.__STORE__.dispatch({type:t,...n}))}),1)},d=({user:e,closeModal:t})=>c.a.createElement("div",{id:"user-modal",className:"modal fade show"},c.a.createElement("div",{className:"modal-dialog",role:"document",style:{marginTop:"60px"}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header z-depth-2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"h5 font-weight-lighter",style:{margin:"60px 45px 0"}},"Menu utilisateur de :")),c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"modal-title h1",style:{margin:"0 45px 30px"}},c.a.createElement("b",{className:"font-epic"},e.pseudo)))),c.a.createElement("button",{type:"button",className:"close",onClick:t},c.a.createElement("span",{"aria-hidden":"true"},"×"))),c.a.createElement("div",{className:"modal-body",style:{backgroundColor:"#7cb342"}},c.a.createElement("div",{className:"row justify-content-right px-4"},c.a.createElement("div",{className:"col-12 col-md-6 py-3"},c.a.createElement("button",{className:"btn btn-white w-100 p-3",type:"button",onClick:()=>window.__STORE__.dispatch({type:"AUTH_DISCONNECT"}),style:{letterSpacing:"3px"}},"Déconnexion")),c.a.createElement("div",{className:"col-12 col-md-6 py-3"},c.a.createElement("button",{className:"btn btn-outline-white w-100 p-3",type:"button",onClick:t,style:{letterSpacing:"3px"}},"Fermer")))))));let p=null;var m={id:"mainAuth",reducer:i,listener:()=>{const e=window.__STORE__.getState().mainAuth;!p&&e.userModalDisplay||p&&!p.userModalDisplay&&e.userModalDisplay?(()=>{const e=window.__STORE__,{auth:t}=e.getState();window.ReactDOM.render(c.a.createElement(d,{user:t.user,closeModal:()=>e.dispatch({type:"MAIN_AUTH_USER_MODAL_CLOSE"})}),$("#user-modal_anchor")[0]),$("#user-modal").modal("show"),u("#user-modal","MAIN_AUTH_USER_MODAL_CLOSE")})():p&&p.userModalDisplay&&!e.userModalDisplay&&($("#user-modal").modal("hide"),window.ReactDOM.unmountComponentAtNode(document.getElementById("user-modal_anchor"))),p=e}};var f={"kolos-rayon":{trighb:"kolos",name:"nexus",levels:{0:{name:"Graine intrépide",flavour:"A l'intérieur de cette graine, endormie : la conscience; le potentiel de remplir l'espace et de le porter plus haut."},100:{xp:100,name:"Pousse",flavour:"Ça y est, elle a germé la flamme qui maintiendra unies toutes les âmes de la CITÉ. "}},quests:{tuto1Quest:{id:"tuto1Quest",type:"QUEST",title:"Le grand départ",pages:[{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Pour travailler, il faut les bons outils."),c.a.createElement("p",null,"Dans ",c.a.createElement("b",{className:"text-epic"},"PERMA-DATA"),", ",c.a.createElement("b",null,"chaque gamme d'outils est représentée par une tribu de")," ",c.a.createElement("b",{className:"text-epic"},"ZUMS"),"  — ces êtres fantastiques qui sont allés au-delà des limites de l'univers et sont revenus."),c.a.createElement("p",null,"La tribu des ",c.a.createElement("b",{className:"text-epic"},"KOLOS"),", ceux qui voyagent dans la ",c.a.createElement("b",null,"graine intrépide"),", ont des outils pour superviser et découvrir des améliorations pour toutes les autres tribus."),c.a.createElement("p",null,"Les ",c.a.createElement("b",{className:"text-epic"},"KIMORIS"),", que vous rencontrerez bientôt, sont experts dans l'art d'utiliser la fonction de recherche."),c.a.createElement("p",null,"Encore, les ",c.a.createElement("b",{className:"text-epic"},"NOVS"),", qui vous seront également bientôt révélés, permettent de trouver encore ",c.a.createElement("b",null,"plus d'informations sur les pages-plantes"),"  que vous visitez !")),menu:["next"]},{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Mais regardez, voilà comment s'organise le voyage des ",c.a.createElement("b",{className:"font-epic"},"KOLOS"),":"),c.a.createElement("p",null,'Lorsqu\'une région est devenue trop "facile", certains, parmis les plus courageux des ',c.a.createElement("b",{className:"font-epic"},"ZUMS"),", décident de partir pour inoculer d'autres terres."),c.a.createElement("p",null,"Bien qu'ils ignorent tout de leur future destination, ils sont confiant."),c.a.createElement("p",null,"Ils savent qu'ils ne peuvent tomber que dans la ",c.a.createElement("b",{className:"font-epic"},"FRAST"),"– la forêt-univers, le terrain d'expérimentation de la grande conscience collective."),c.a.createElement("img",{src:"public/images/dialogs/kolo-seed-intro.jpg",className:"w-100 mb-2 mt-4"}),c.a.createElement("p",{className:"small text-muted text-right font-weight-light mb-5"},"Des ZUMS devant des graines intrépides en fin de croissance, peu avant le grand départ."),c.a.createElement("p",null,"La tribu des ",c.a.createElement("b",{className:"font-epic"},"KOLOS"),"  attend patiemment que ses ",c.a.createElement("b",null,"graines intrépides"),"  arrivent à maturité."),c.a.createElement("p",null,"Quand elles sont prêtes, ils n'hésitent pas à décrocher ces vaisseaux du tronc qui les a vu naître."),c.a.createElement("p",null,c.a.createElement("b",null,"C'est le grand départ."))),menu:["next","previous"]},{open:e=>{"NEW"===e.status&&window.__STORE__.dispatch({type:"CITY_SERVER_ACTION_START",actionType:"tuto1QuestRead"})},content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Le moment est venu pour vous."),c.a.createElement("p",null,"Lancez-vous sans plus attendre dans l'aventure ",c.a.createElement("b",{className:"font-epic"},"PERMA-DATA"),"  et découvrez les ",c.a.createElement("b",null,"nombreuses fonctionnalités de l'application"),"  à mesure que se développent vos tribus ",c.a.createElement("b",{className:"font-epic"},"ZUMS"),"."),c.a.createElement("p",null,"Allez-y, que pousse cette civilisation du futur !")),interactors:e=>"VALIDATED"===e.status?[{label:"Décrocher la graine",click:()=>e&&window.__STORE__.dispatch({type:"CITY_SERVER_ACTION_START",actionType:"tuto1QuestValid"})}]:[],menu:["previous"]}]},tuto2Quest:{id:"tuto2Quest",type:"QUEST",title:"Juste avant l'atterissage",pages:[{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Ca y est, elle est partie !"),c.a.createElement("p",null,"La ",c.a.createElement("b",null,"graine intrépide")," a pris le chemin de l'inconnu."),c.a.createElement("br",null),c.a.createElement("p",null,"Quand trouvera-t'elle son point de chute ?")),menu:["next"]},{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("b",{className:"font-epic"},"PERMA-DATA")," est un univers très riche, avec une histoire qui s'étend sur des milliards d'années."),c.a.createElement("p",null,"Parallèllement à l'acquisition de nouvelles fonctionnalités, des fragments de ce récit vous seront délivrés."),c.a.createElement("p",null,"Voyez : sur la ",c.a.createElement("b",null,"graine intrépide"),", déjà, deux nouveaux dialogues sont disponibles."),c.a.createElement("br",null),c.a.createElement("p",null,"Avant d'attérir ",c.a.createElement("b",null,"et pour pouvoir faire éclore votre")," ",c.a.createElement("b",{className:"font-epic"},"MÉTA-CITÉ"),", vous devrez consulter ces deux éléments."),c.a.createElement("br",null),c.a.createElement("p",null,"Une fois la ",c.a.createElement("b",null,"graine")," éclose, ces histoires seront toujours consultables dans les archives.")),interactors:e=>"VALIDATED"===e.status?[{label:"Faire éclore la graine",click:()=>console.log("dispatch city actions")}]:[],menu:["previous"]}]}},stories:{seedOverFrastStory:{id:"seedOverFrast",type:"STORY",title:"Voyage au-dessus de la FRAST",pages:[{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Wow la ",c.a.createElement("b",{className:"font-epic"},"FRAST")))}]},kolosXanStory:{id:"kolosXan",type:"STORY",title:"Rencontre avec le KOLOS-XAN",pages:[{content:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Salut, je suis le ",c.a.createElement("b",{className:"font-epic"},"KOLOS-XAN")))}]}}}};var E={QUEST:"Quête",STORY:"Histoire"},y={QUEST:"fas fa-glass-martini",STORY:"fab fa-readme"},g={NEW:"nouveau",VALIDATED:"valide"},b={NEW:"fa-exclamation-circle",VALIDATED:"fa-check-circle"},h=({buildingId:e,list:t})=>t.map(e=>{let t=0;switch(`${e.type}${e.status}`){case"QUEST_CURRENT":t=1}return{...e,score:t}}).sort(({score:e},{score:t})=>{}).map(t=>c.a.createElement("button",{key:t.id,className:`list-group-item font-weight-light text-left pr-3 py-3 rounded-0 ${"CURRENT"!==t.status?"btn-green text-white":""}`,title:E[t.type]+(g[t.status]?" ("+g[t.status]+")":""),style:{letterSpacing:"0.8px",fontSize:"14px"},onClick:()=>{"passive"!==t.type&&window.__STORE__.dispatch({type:"DIALOG_MODAL_OPEN",dialog:{buildingId:e,...t}})}},"CURRENT"!==t.status&&c.a.createElement("span",{className:`fas ${b[t.status]} mr-1`,title:g[t.status][0].toUpperCase()+g[t.status].slice(1)}),c.a.createElement("span",{className:`${y[t.type]} ${"CURRENT"===t.status?"text-green":"text-white"}`,title:E[t.type],"aria-hidden":"true"}),c.a.createElement("span",{className:"mb-0 mt-1 ml-2"},t.title))),_={kolos:{color:"6CEEA3"},novs:{color:"6CEEA3"}},v=e=>{const{id:t,name:n,xp:a,dialogs:r,trighb:l,levels:o}=e,i=_[l],s=Object.keys(o).findIndex(e=>a<parseInt(e)),u=Object.values(o)[s-1];return c.a.createElement("div",null,c.a.createElement("div",{className:"card mb-5"},c.a.createElement("div",{className:"card-body p-0 container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("img",{className:"card-img-top my-4",src:`public/images/buildings/${t}.jpg`})),c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("span",{className:"small float-right text-muted font-weight-light h6 mt-2 mr-3"},"NIVEAU ",s),c.a.createElement("h4",{className:"card-title text-uppercase font-weight-light text-left pt-4 pb-3 px-4 mb-0"},u&&u.name||n),c.a.createElement("ul",{className:"list-group p-2"},c.a.createElement(h,{buildingId:t,list:r,trighb:i,title:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"mr-2 font-weight-bolder",style:{color:"#"+l.color}},i.name),n)})))))))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S={"kolos-rayon":({id:e,quests:t,stories:n,...a})=>c.a.createElement(v,O({id:e},a,{dialogs:Object.values({...t,...n})}))};var w=e=>{const t=Object.entries(e).map(([e,t])=>({id:e,trighb:e.split("-")[0],...t})).reduce((e,t)=>{const n=t.trighb;return e[n]?e[n].push(t):e[n]=[t],e},{}),n=Object.keys(_);return Object.entries(t).map(([e,t])=>({trighb:e,buildings:t})).sort((e,t)=>n[t[trighb]]-n[e[trighb]])},N=({buildings:e})=>c.a.createElement(c.a.Fragment,null,w(e).map(({trighb:e,buildings:t})=>c.a.createElement("div",{key:e,className:"col-12 col-md-6"},c.a.createElement("h2",{className:"text-white text-uppercase m-4"},"Tribu ",c.a.createElement("b",{className:"font-epic"},e)),t.map(e=>{const t=f[e.id],n={};for(const a of["quests","stories"])n[a]={},Object.entries(e[a]||[]).forEach(([e,r])=>n[a][e]={...r,...t[a][e]});return S[e.id]({key:e.id,...e,...t,...n})})))),A=({pseudo:e,buildings:t})=>c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center px-4"},c.a.createElement("div",{className:"col-12 col-md-6 text-white text-center"},c.a.createElement("h1",{className:"font-weight-light display-3 my-5"},c.a.createElement("span",{className:"font-epic"},"MÉTA-CITÉ"),"  de ",c.a.createElement("span",{className:"font-epic text-uppercase"},e))),c.a.createElement(N,{buildings:t})));let T=null;const R=window.__STORE__;var I={id:"city",listener:()=>{const{city:e,auth:t}=R.getState();if(e&&e.buildings){const{buildings:n}=e;(({pseudo:e,buildings:t})=>{window.ReactDOM.render(c.a.createElement(A,{pseudo:e,buildings:t}),document.getElementById("city__anchor"))})({pseudo:t.user.pseudo,buildings:n})}T&&T.serverAction||!e.serverAction||$.post("/api/city-actions",{type:e.serverAction.type}).done(({nextBuildings:e})=>{window.__STORE__.dispatch({type:"CITY_SERVER_ACTION_SUCCESS",nextBuildings:e})}).fail(e=>window.__STORE__.dispatch({type:"CITY_SERVER_ACTION_ERROR",error:e})),T=e},reducer:o({buildings:(e=!1,{type:t,bundleId:n,buildings:a={},nextBuildings:r})=>{switch(t){case"CITY_SERVER_ACTION_SUCCESS":return{...e,...r};case"INITALIZER_BUNDLE_REGISTERED":return n.includes("-auth")?a:e;case"AUTH_DISCONNECT":return!1;default:return e}},serverAction:(e=!1,{type:t,actionType:n})=>{switch(t){case"CITY_SERVER_ACTION_START":return{type:n};case"CITY_SERVER_ACTION_SUCCESS":case"CITY_SERVER_ACTION_ERROR":return!1;default:return e}}})},x=({dialogId:e,pageIndex:t,menu:n})=>c.a.createElement("div",{className:"modal-footer rounded-0 border-0 bg-white justify-content-start"},n.filter(e=>!e.display||e.display()).map(n=>{if("string"!=typeof n)return c.a.createElement("button",{key:e+"#"+t+":"+n.label,type:"button",className:`btn bt-lg mr-2 ${n.outline?"btn-outline-green":"btn-green"}`,onClick:e=>n.click&&n.click(e)},n.label);switch(n){case"close":return c.a.createElement("button",{key:e+"#"+t+"::"+n,type:"button",className:"btn btn-outline-green mr-2",onClick:()=>window.__STORE__.dispatch({type:"DIALOG_MODAL_CLOSE"})},"Fermer");case"previous":return c.a.createElement("button",{key:e+"#"+t+"::"+n,type:"button",className:"btn btn-outline-green mr-2 btn-lg",onClick:()=>window.__STORE__.dispatch({type:"DIALOG_PAGE_PREVIOUS",dialog:{id:e}})},"Précédent");case"next":return c.a.createElement("button",{key:e+"#"+t+"::"+n,type:"button",className:"btn btn-green btn-lg mr-2",onClick:()=>window.__STORE__.dispatch({type:"DIALOG_PAGE_NEXT",dialog:{id:e}})},"Suivant")}})),C=({dialogId:e,pageIndex:t,interactors:n})=>c.a.createElement("div",{className:"light-green darken-1 px-5 py-4 text-center"},n.filter(e=>!e.display||e.display()).map(n=>c.a.createElement("button",{key:e+"#"+t+":"+n.label,type:"button",className:"btn btn-lg btn-white w-100",onClick:e=>n.click&&n.click(e)},n.label))),D=({dialog:e})=>{const t=e.pages[e.page],n=t.interactors&&t.interactors(e);return t.open&&setTimeout(()=>t.open(e),1),c.a.createElement("div",{id:"city-dialog-modal",className:"modal fade right show"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered animated zoomInUp",role:"document"},c.a.createElement("div",{className:"modal-content"},t.image||e.image&&c.a.createElement("div",{className:"modal-body px-0"},c.a.createElement("img",{src:`/public/images/dialogs/${t.image||e.image}`})),c.a.createElement("div",{className:"modal-body px-5 pt-4",style:{fontSize:"1.2rem"}},c.a.createElement("button",{type:"button",className:"close",onClick:()=>window.__STORE__.dispatch({type:"DIALOG_MODAL_CLOSE"})},c.a.createElement("span",{"aria-hidden":"true"},"×")),c.a.createElement("h5",{className:"modal-title h2 font-weight-light mt-2 my-4"},c.a.createElement("span",{className:`fas ${"VALIDATED"===e.status?"fa-3x ml-3 my-4":"fa-lg mx-3"} ${y[e.type]}  text-green-hover`,title:E[e.type]}),"VALIDATED"===e.status&&c.a.createElement("span",{className:"fas fa-3x fa-check-circle text-green-hover",title:"Valide"})),c.a.createElement("h1",{className:"font-weight-lighter mb-5"},e.title),t.content()),n&&n.length>0&&c.a.createElement(C,{dialogId:e.id,pageIndex:e.page,interactors:n}),t.menu&&t.menu.length>0&&c.a.createElement(x,{dialogId:e.id,pageIndex:e.page,menu:t.menu}))))},k={QUEST:"quests",STORY:"stories"},j=({buildingId:e,...t})=>{const{city:n,dialog:a}=window.__STORE__.getState(),r=n.buildings[e][k[t.type]][t.id];window.ReactDOM.render(c.a.createElement(D,{dialog:Object.assign({},t,r,{page:a.history[t.id]?a.history[t.id].page:"VALIDATED"===r.status?r.pages.length-1:0})}),document.getElementById("dialog-modal__anchor"))};let L=null,P=null;const U=window.__STORE__;var M,q=o({modalDisplay:(e=!1,{type:t})=>{switch(t){case"DIALOG_MODAL_OPEN":return!0;case"DIALOG_MODAL_CLOSE":return!1;default:return e}},currentDialog:(e=!1,{type:t,dialog:n})=>{switch(t){case"DIALOG_MODAL_OPEN":return n;case"DIALOG_PAGE_PREVIOUS":return Object.assign({},e,{page:e.page-1});case"DIALOG_PAGE_NEXT":return Object.assign({},e,{page:e.page+1});case"DIALOG_MODAL_CLOSE":return!1;default:return e}},history:(e={},{type:t,dialog:n,newPage:a})=>{switch(t){case"DIALOG_MODAL_OPEN":return e[n.id]?e:Object.assign({},e,{[n.id]:{page:n.page||0}});case"DIALOG_PAGE_PREVIOUS":return Object.assign({},e,{[n.id]:Object.assign({},e[n.id],{page:e[n.id].page-1})});case"DIALOG_PAGE_NEXT":return Object.assign({},e,{[n.id]:Object.assign({},e[n.id],{page:e[n.id].page+1})});default:return e}}});M={id:"home-auth",init:()=>{const{auth:e}=window.__STORE__.getState();return{buildings:e.user.buildings}},modules:[m,I,{id:"dialog",listener:()=>{const{dialog:e,city:t}=U.getState();L&&L.modalDisplay&&L.currentDialog.page===e.currentDialog.page||!e.modalDisplay||!e.currentDialog||(j(e.currentDialog),$("#city-dialog-modal").modal("show"),u("#city-dialog-modal","DIALOG_MODAL_CLOSE")),L&&L.modalDisplay&&!e.modalDisplay&&$("#city-dialog-modal").modal("hide"),e.modalDisplay&&P.buildings!==t.buildings&&j(e.currentDialog),L=e,P=t},reducer:q}]},window.__STORE__.dispatch({type:"AUTH_LOAD_BUNDLE_SUCCESS"}),(({id:e,init:t,modules:n})=>{const a=window.__STORE__;n.forEach(({id:e,reducer:t,listener:n})=>{window.__REDUCERS__[e]=t,a.subscribe(n)}),a.replaceReducer(o(window.__REDUCERS__)),a.dispatch({type:"INITALIZER_BUNDLE_REGISTERED",bundleId:e,modules:n.map(({id:e})=>e),...t?t():{}})})(M)}]);