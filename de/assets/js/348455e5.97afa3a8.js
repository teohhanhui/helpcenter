"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),l=r(6010),i=r(2466),s=r(6550),o=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(d(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},9008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=(r(4866),r(5162),r(4996));const i={sidebar_label:"Installation von Famedly Apps",title:"Installation von Famedly Apps",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},s=void 0,o={unversionedId:"help-center/first-steps/installation",id:"help-center/first-steps/installation",title:"Installation von Famedly Apps",description:"Installation von Famedly Apps",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/first-steps/installation.mdx",sourceDirName:"help-center/first-steps",slug:"/help-center/first-steps/installation",permalink:"/helpcenter/de/help-center/first-steps/installation",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Installation von Famedly Apps",title:"Installation von Famedly Apps",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},sidebar:"helpcenterSidebar",previous:{title:"Registrieren",permalink:"/helpcenter/de/help-center/first-steps/register"},next:{title:"Erste Anmeldung",permalink:"/helpcenter/de/help-center/first-steps/first-login"}},u={},c=[{value:"Famedly f\xfcr mobile Ger\xe4te",id:"famedly-f\xfcr-mobile-ger\xe4te",level:2},{value:"Famedly herunterladen",id:"famedly-herunterladen",level:3},{value:"Famedly f\xfcr Web",id:"famedly-f\xfcr-web",level:2},{value:"Zugriff auf die Web-App",id:"zugriff-auf-die-web-app",level:3},{value:"Unterst\xfctzte Browser",id:"unterst\xfctzte-browser",level:3},{value:"Die App aktualisieren",id:"die-app-aktualisieren",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Installation von Famedly Apps"),(0,a.kt)("p",{class:"hero__subtitle"},"Es gibt 3 M\xf6glichkeiten Famedly zu benutzen."),(0,a.kt)("p",null,"Famedly ist als Web-App f\xfcr Ihren Browser, als Desktop-Anwendung und nat\xfcrlich als App f\xfcr Ihre mobilen Ger\xe4te verf\xfcgbar, da dies die Hauptverwendung eines Messengers ist."))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ihre Organisation muss registriert sein, ansonsten ist es nicht m\xf6glich, sich anzumelden.")),(0,a.kt)("h2",{id:"famedly-f\xfcr-mobile-ger\xe4te"},"Famedly f\xfcr mobile Ger\xe4te"),(0,a.kt)("p",null,"Sie k\xf6nnen Famedly auf Ihrem iOS oder Android-Ger\xe4t herunterladen, f\xfcr die optimale Messaging-Erfahrung."),(0,a.kt)("h3",{id:"famedly-herunterladen"},"Famedly herunterladen"),(0,a.kt)("p",null,"Um die App herunterzuladen, gehen Sie bitte zum App Store oder Play Store und suchen Sie nach Famedly oder scannen Sie den QR-Code."),(0,a.kt)("img",{alt:"Passphrase",src:(0,l.Z)("/img/qr-code.png"),width:"20%"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Geben Sie Ihre Organisations-URL ein oder scannen Sie den QR-Code neben Ihren Login-Daten."),(0,a.kt)("li",{parentName:"ol"},"Melden Sie sich mit Ihrem Benutzernamen und Passwort an.")),(0,a.kt)("h2",{id:"famedly-f\xfcr-web"},"Famedly f\xfcr Web"),(0,a.kt)("p",null,"Famedly ist eine Cloud-basierte App und Sie k\xf6nnen von mehreren Webbrowsern aus - Chrome, Firefox, Safari - darauf zugreifen. Solange Sie mit dem Internet verbunden sind, synchronisieren alle Ihre Nachrichten sich automatisch."),(0,a.kt)("h3",{id:"zugriff-auf-die-web-app"},"Zugriff auf die Web-App"),(0,a.kt)("p",null,"Um Famedly in Ihrem Browser zu verwenden, geben Sie die Organisations-URL ein, die von Ihrer Organisation bereitgestellt wird und geben Sie Benutzername und Passwort ein. "),(0,a.kt)("h3",{id:"unterst\xfctzte-browser"},"Unterst\xfctzte Browser"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wir unterst\xfctzen Famedly auf Safari, Google Chrome und Microsoft Edge."),(0,a.kt)("li",{parentName:"ul"},"F\xfcr Firefox-Nutzer empfehlen wir die Verwendung der Standardversion von Firefox \u2013 die Entwickler-Edition und Nightly werden nicht vollst\xe4ndig unterst\xfctzt. "),(0,a.kt)("li",{parentName:"ul"},"Leider wird Internet Explorer derzeit nicht unterst\xfctzt.")),(0,a.kt)("h2",{id:"die-app-aktualisieren"},"Die App aktualisieren"),(0,a.kt)("p",null,"Famedly wird automatisch aktualisiert! Wir ver\xf6ffentlichen regelm\xe4\xdfig Updates mit Bugfixes und Leistungsverbesserungen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sehr selten m\xfcssen Sie Famedly neu installieren, um ein Update zu installieren. Wir informieren Sie dar\xfcber, wenn das der Fall ist, und sagen Ihnen genau, was Sie tun sollen.")))}m.isMDXComponent=!0}}]);