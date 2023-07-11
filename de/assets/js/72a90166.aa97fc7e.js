"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(n),p=l,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),l=n(6010);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,a),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(7462),l=n(7294),i=n(6010),a=n(2466),u=n(6550),s=n(1980),o=n(7392),c=n(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,o]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{m&&u(m)}),[m]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),b(e)}),[o,b,i]),tabValues:i}}var m=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==u&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:a}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},a,{className:(0,i.Z)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":u===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},l.createElement(v,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function S(e){const t=(0,m.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},7448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),i=n(4866),a=n(5162);n(4996);const u={sidebar_label:"Verschl\xfcsselung & Sicherheit",title:"Verschl\xfcsselung & Sicherheit",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:2},s=void 0,o={unversionedId:"help-center/your-account/encryption-security",id:"help-center/your-account/encryption-security",title:"Verschl\xfcsselung & Sicherheit",description:"Verschl\xfcsselung & Sicherheit",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/encryption-security.mdx",sourceDirName:"help-center/your-account",slug:"/help-center/your-account/encryption-security",permalink:"/helpcenter/de/help-center/your-account/encryption-security",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Verschl\xfcsselung & Sicherheit",title:"Verschl\xfcsselung & Sicherheit",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:2},sidebar:"helpcenterSidebar",previous:{title:"Fehlerbehebung",permalink:"/helpcenter/de/help-center/your-account/troubleshoot"},next:{title:"Administration",permalink:"/helpcenter/de/first-steps"}},c={},d=[{value:"Ger\xe4te verifizieren",id:"ger\xe4te-verifizieren",level:2},{value:"\xdcberpr\xfcfen, ob Ende-zu-Ende-Verschl\xfcsselung aktiviert ist",id:"\xfcberpr\xfcfen-ob-ende-zu-ende-verschl\xfcsselung-aktiviert-ist",level:2},{value:"Bildschirm sperren",id:"bildschirm-sperren",level:2}],h={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"hero hero--primary"},(0,l.kt)("div",{class:"container"},(0,l.kt)("h2",{class:"hero__title"},"Verschl\xfcsselung & Sicherheit"),(0,l.kt)("p",{class:"hero__subtitle"},"Warum ist Verschl\xfcsselung & Sicherheit wichtig?"),(0,l.kt)("p",null,"Um sicherzustellen, dass Sie Famedly mit all seinen Vorteilen nutzen, sind die Einstellungen und Funktionen von Verschl\xfcsselung & Sicherheit unerl\xe4sslich."))),(0,l.kt)("h2",{id:"ger\xe4te-verifizieren"},"Ger\xe4te verifizieren"),(0,l.kt)("p",null,"Die Nachrichten werden f\xfcr jedes Ger\xe4t einzeln verschl\xfcsselt, daher sollten Sie alle Ihre eigenen Ger\xe4te \xfcberpr\xfcfen, um zu beweisen, dass nicht jemand anderes Ihre Anmeldedaten in die H\xe4nde bekommen hat."),(0,l.kt)("p",null,"Wenn Sie die Ende-zu-Ende-Verschl\xfcsselung auf jedem Ger\xe4t verwenden m\xf6chten, m\xfcssen Sie Ihre Ger\xe4te verifizieren. Alle Nachrichten werden f\xfcr jedes Ger\xe4t separat verschl\xfcsselt. Daher ist eine \xdcberpr\xfcfung erforderlich, um sicherzustellen, dass die richtige Person die Nachricht erh\xe4lt."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr ",(0,l.kt)("b",null,"Profilbild"),"."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Verbundene Ger\xe4te"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie das Ger\xe4t, das Sie verifiziereun m\xf6chten und klicken Sie auf ",(0,l.kt)("b",null,"Ger\xe4t verifizieren"),"."),(0,l.kt)("li",null,"Akzeptieren Sie die Anfrage auf dem Ger\xe4t, das Sie verifizieren m\xf6chten."),(0,l.kt)("li",null,"Gleichen Sie die angezeigten Codes ab."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf Ihr ",(0,l.kt)("b",null,"Profilbild oder Ihren Namen")," am oberen Bildschirmrand."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Verbundene Ger\xe4te"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie das Ger\xe4t, das Sie verifizieren m\xf6chten und tippen Sie auf die drei kleine Punkte daneben."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Verifizieren"),"."),(0,l.kt)("li",null,"Akzeptieren Sie die Anfrage auf dem Ger\xe4t, das Sie verifizieren m\xf6chten."),(0,l.kt)("li",null,"Gleichen Sie die angezeigten Codes ab.")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Auf diese Weise k\xf6nnen auch Ger\xe4te gesperrt und entfernt werden.")),(0,l.kt)("h2",{id:"\xfcberpr\xfcfen-ob-ende-zu-ende-verschl\xfcsselung-aktiviert-ist"},"\xdcberpr\xfcfen, ob Ende-zu-Ende-Verschl\xfcsselung aktiviert ist"),(0,l.kt)("p",null,"Es ist immer n\xfctzlich zu \xfcberpr\xfcfen, ob die Ende-zu-Ende-Verschl\xfcsselung f\xfcr eine Unterhaltung korrekt aktiviert ist."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Chat, den Sie kontrollieren m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das i in der Ecke oben rechts im Gruppenchat um die Details zu \xf6ffnen."),(0,l.kt)("li",null,"W\xe4hlen Sie ",(0,l.kt)("b",null,"Verschl\xfcsselung"),"."),(0,l.kt)("li",null,"Wenn hinter jedem Namen ein geschlossenes, gr\xfcnes Schloss zu sehen ist, ist die Ende-zu-Ende Verschl\xfcsselung aktiv."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Chat, den Sie kontrollieren m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf der Leiste \xfcber dem Chat um die Details zu \xf6ffnen."),(0,l.kt)("li",null,"W\xe4hlen Sie ",(0,l.kt)("b",null,"Verschl\xfcsselung"),"."),(0,l.kt)("li",null,"Wenn hinter jedem Namen ein geschlossenes, gr\xfcnes Schloss zu sehen ist, ist die Ende-zu-Ende Verschl\xfcsselung aktiv.")))),(0,l.kt)("h2",{id:"bildschirm-sperren"},"Bildschirm sperren"),(0,l.kt)("p",null,"Die Aktivierung des Sperrbildschirms gibt Ihnen zus\xe4tzliche Sicherheit."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf ihr ",(0,l.kt)("b",null,"Profilbild oder Ihren Name")," in der Header oben auf dem Bildschirm."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Sperrbildschirm"),"."),(0,l.kt)("li",null,"Legen Sie einen PIN fest oder stellen Sie ein, dass Sie den Bildschirm mit Ihren biometrischen Daten entsperren k\xf6nnen.")))))}f.isMDXComponent=!0}}]);