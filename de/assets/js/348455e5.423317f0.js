"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),i=n(4334),l=n(2466),s=n(6550),o=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=c(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[o,u]=f({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),r=u[n].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=(n(4866),n(5162),n(4996));const l={sidebar_label:"Installation von Famedly Apps",title:"Installation von Famedly Apps",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},s=void 0,o={unversionedId:"help-center/first-steps/installation",id:"help-center/first-steps/installation",title:"Installation von Famedly Apps",description:"Installation von Famedly Apps",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/first-steps/installation.mdx",sourceDirName:"help-center/first-steps",slug:"/help-center/first-steps/installation",permalink:"/helpcenter/de/help-center/first-steps/installation",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"Malin",lastUpdatedAt:1701364322,formattedLastUpdatedAt:"30. Nov. 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Installation von Famedly Apps",title:"Installation von Famedly Apps",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},sidebar:"helpcenterSidebar",previous:{title:"Registrieren",permalink:"/helpcenter/de/help-center/first-steps/register"},next:{title:"Erste Anmeldung",permalink:"/helpcenter/de/help-center/first-steps/first-login"}},u={},d=[{value:"Famedly f\xfcr mobile Ger\xe4te",id:"famedly-f\xfcr-mobile-ger\xe4te",level:2},{value:"Famedly herunterladen",id:"famedly-herunterladen",level:3},{value:"Famedly f\xfcr Web",id:"famedly-f\xfcr-web",level:2},{value:"Zugriff auf die Web-App",id:"zugriff-auf-die-web-app",level:3},{value:"Unterst\xfctzte Browser",id:"unterst\xfctzte-browser",level:3},{value:"Installation der Famedly Web App als Desktop App",id:"installation-der-famedly-web-app-als-desktop-app",level:3},{value:"Deinstallieren der Desktop App",id:"deinstallieren-der-desktop-app",level:3},{value:"Die App aktualisieren",id:"die-app-aktualisieren",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Installation von Famedly Apps"),(0,a.kt)("p",{class:"hero__subtitle"},"Es gibt 3 M\xf6glichkeiten Famedly zu benutzen."),(0,a.kt)("p",null,"Famedly ist als Web-App f\xfcr Ihren Browser, als Desktop-Anwendung und nat\xfcrlich als App f\xfcr Ihre mobilen Ger\xe4te verf\xfcgbar, da dies die Hauptverwendung eines Messengers ist."))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ihre Organisation muss registriert sein, ansonsten ist es nicht m\xf6glich, sich anzumelden.")),(0,a.kt)("h2",{id:"famedly-f\xfcr-mobile-ger\xe4te"},"Famedly f\xfcr mobile Ger\xe4te"),(0,a.kt)("p",null,"Sie k\xf6nnen Famedly auf Ihrem iOS oder Android-Ger\xe4t herunterladen, f\xfcr die optimale Messaging-Erfahrung."),(0,a.kt)("h3",{id:"famedly-herunterladen"},"Famedly herunterladen"),(0,a.kt)("p",null,"Um die App herunterzuladen, gehen Sie bitte zum App Store oder Play Store und suchen Sie nach Famedly oder scannen Sie den QR-Code."),(0,a.kt)("img",{alt:"Passphrase",src:(0,i.Z)("/img/qr-code.png"),width:"20%"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Geben Sie Ihre Organisations-URL ein oder scannen Sie den QR-Code neben Ihren Login-Daten."),(0,a.kt)("li",{parentName:"ol"},"Melden Sie sich mit Ihrem Benutzernamen und Passwort an.")),(0,a.kt)("h2",{id:"famedly-f\xfcr-web"},"Famedly f\xfcr Web"),(0,a.kt)("p",null,"Famedly ist eine Cloud-basierte App und Sie k\xf6nnen von mehreren Webbrowsern aus - Chrome, Firefox, Safari - darauf zugreifen. Solange Sie mit dem Internet verbunden sind, synchronisieren alle Ihre Nachrichten sich automatisch."),(0,a.kt)("h3",{id:"zugriff-auf-die-web-app"},"Zugriff auf die Web-App"),(0,a.kt)("p",null,"Um Famedly in Ihrem Browser zu verwenden, geben Sie die Organisations-URL ein, die von Ihrer Organisation bereitgestellt wird und geben Sie Benutzername und Passwort ein. "),(0,a.kt)("h3",{id:"unterst\xfctzte-browser"},"Unterst\xfctzte Browser"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wir unterst\xfctzen Famedly auf Safari, Google Chrome und Microsoft Edge."),(0,a.kt)("li",{parentName:"ul"},"F\xfcr Firefox-Nutzer empfehlen wir die Verwendung der Standardversion von Firefox \u2013 die Entwickler-Edition und Nightly werden nicht vollst\xe4ndig unterst\xfctzt. "),(0,a.kt)("li",{parentName:"ul"},"Leider wird Internet Explorer derzeit nicht unterst\xfctzt.")),(0,a.kt)("h3",{id:"installation-der-famedly-web-app-als-desktop-app"},"Installation der Famedly Web App als Desktop App"),(0,a.kt)("p",null,"Die meisten Browser erm\xf6glichen die Installation der Famedly Web App auf Ihrem Desktop.",(0,a.kt)("br",{parentName:"p"}),"\n","Das bedeutet, dass Sie die App beim Suchen nach installierten Apps auf Ihrem Betriebssystem finden k\xf6nnen. Au\xdferdem werden sie je nach Betriebssystem Ihrem Desktop oder Dock hinzugef\xfcgt.",(0,a.kt)("br",{parentName:"p"}),"\n","Befolgen Sie die folgenden Schritte, um die Web App auf Ihrem Desktop zu installieren: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie die Famedly Web App in Ihrem Browser. (Bevorzugt Chrome, Firefox bietet diese Option nicht an)"),(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie das Einstellungsmen\xfc Ihres Browsers. (F\xfcr gew\xf6hnlich \xfcber einen Klick auf das ","\xa0",(0,a.kt)("strong",{parentName:"li"},"\u205d"),"\xa0"," oder ","\xa0",(0,a.kt)("strong",{parentName:"li"},"\u2630"),"\xa0"," Icon zu erreichen)"),(0,a.kt)("li",{parentName:"ol"},"Klicken Sie auf ",(0,a.kt)("strong",{parentName:"li"},"Famedly installieren...")," (in Chrome, in anderen Browsern k\xf6nnte die Option anders hei\xdfen)\n(In Chrome und manchen anderen Chrome basierten Browsern, k\xf6nnen Sie auch auf anstelle der Schritte 2 und 3 das ",(0,a.kt)("strong",{parentName:"li"},"Desktop Icon mit dem Pfeil nach unten")," in der Adressleiste klicken)"),(0,a.kt)("li",{parentName:"ol"},"Klicken Sie auf ",(0,a.kt)("strong",{parentName:"li"},"Installieren")),(0,a.kt)("li",{parentName:"ol"},"Nun wird sich ein Fenster mit der Famedly App \xf6ffnen")),(0,a.kt)("p",null,"Falls Sie mit dieser Anleitung Probleme haben, da sich Ihr Browser zu sehr von Chrome unterscheidet, k\xf6nnen Sie auch \u201eWeb App installieren\u201c bei Google eingeben und den Namen Ihres verwendeten Browsers an den Suchbegriff anh\xe4ngen. Verwenden Sie bevorzugt Anleitungen, die direkt vom Anbieter Ihres Browsers kommen, um die aktuellste Anleitung zu erhalten. "),(0,a.kt)("p",null,"Bitte beachten Sie, dass die installierte Web App immer noch ein Fenster des Browsers, mit dem Sie sie installiert haben, ist. Dadurch k\xf6nnen Sie die App neu laden, indem Sie ",(0,a.kt)("strong",{parentName:"p"},"F5")," dr\xfccken oder mit einem Rechtsklick auf die Titelleiste des Fensters und dann einem Klick auf ",(0,a.kt)("strong",{parentName:"p"},"Neu laden"),"."),(0,a.kt)("h3",{id:"deinstallieren-der-desktop-app"},"Deinstallieren der Desktop App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie die Desktop App"),(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie das Einstellungsmen\xfc mit einem Klick auf das ","\xa0",(0,a.kt)("strong",{parentName:"li"},"\u205d"),"\xa0"," oder ","\xa0",(0,a.kt)("strong",{parentName:"li"},"\u2630"),"\xa0"," Icon"),(0,a.kt)("li",{parentName:"ol"},"Klicken Sie auf ",(0,a.kt)("strong",{parentName:"li"},"Famedly deinstallieren..."))),(0,a.kt)("h2",{id:"die-app-aktualisieren"},"Die App aktualisieren"),(0,a.kt)("p",null,"Famedly wird automatisch aktualisiert! Wir ver\xf6ffentlichen regelm\xe4\xdfig Updates mit Bugfixes und Leistungsverbesserungen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sehr selten m\xfcssen Sie Famedly neu installieren, um ein Update zu installieren. Wir informieren Sie dar\xfcber, wenn das der Fall ist, und sagen Ihnen genau, was Sie tun sollen.")))}m.isMDXComponent=!0}}]);