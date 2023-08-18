"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var l=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=l.createContext({}),s=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return l.createElement(o.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(t),f=i,b=c["".concat(o,".").concat(f)]||c[f]||h[f]||r;return t?l.createElement(b,a(a({ref:n},d),{},{components:t})):l.createElement(b,a({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[c]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<r;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(7294),i=t(4334);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:t,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var l=t(7462),i=t(7294),r=t(4334),a=t(2466),u=t(6550),o=t(1980),s=t(7392),d=t(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:i}}=e;return{value:n,label:t,attributes:l,default:i}}))}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[a,u]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[o,s]=b({queryString:t,groupId:l}),[c,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Nk)(t);return[l,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),p=(()=>{const e=o??c;return f({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{p&&u(p)}),[p]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),k(e)}),[s,k,r]),tabValues:r}}var p=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:u,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),l=s[t].value;l!==u&&(c(n),o(l))},f=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:a}=e;return i.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>d.push(e),onKeyDown:f,onClick:h},a,{className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":u===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function S(e){const n=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",m.tabList)},i.createElement(g,(0,l.Z)({},e,n)),i.createElement(v,(0,l.Z)({},e,n)))}function y(e){const n=(0,p.Z)();return i.createElement(S,(0,l.Z)({key:String(n)},e))}},6716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var l=t(7462),i=(t(7294),t(3905)),r=t(4866),a=t(5162);const u={sidebar_label:"Einstellungen",title:"Kontoeinstellungen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},o=void 0,s={unversionedId:"help-center/your-account/account-settings",id:"help-center/your-account/account-settings",title:"Kontoeinstellungen",description:"Kontoeinstellungen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/account-settings.mdx",sourceDirName:"help-center/your-account",slug:"/help-center/your-account/account-settings",permalink:"/helpcenter/de/help-center/your-account/account-settings",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"mErrenst",lastUpdatedAt:1692356471,formattedLastUpdatedAt:"18. Aug. 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Einstellungen",title:"Kontoeinstellungen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Ihr Konto",permalink:"/helpcenter/de/your-account"},next:{title:"Fehlerbehebung",permalink:"/helpcenter/de/help-center/your-account/troubleshoot"}},d={},c=[{value:"Ein Profilbild hochladen oder bearbeiten",id:"ein-profilbild-hochladen-oder-bearbeiten",level:2},{value:"Profilbild hinzuf\xfcgen oder \xe4ndern",id:"profilbild-hinzuf\xfcgen-oder-\xe4ndern",level:3},{value:"Profilbild entfernen",id:"profilbild-entfernen",level:3},{value:"Benachrichtigungen",id:"benachrichtigungen",level:2},{value:"Stil",id:"stil",level:2},{value:"Verzeichnis",id:"verzeichnis",level:2},{value:"Passwort \xe4ndern",id:"passwort-\xe4ndern",level:2},{value:"Verbundene Ger\xe4te",id:"verbundene-ger\xe4te",level:2},{value:"Archiv",id:"archiv",level:2},{value:"Chat-Backup",id:"chat-backup",level:2},{value:"\xdcber uns",id:"\xfcber-uns",level:2},{value:"Ausloggen",id:"ausloggen",level:2}],h={toc:c},f="wrapper";function b(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,l.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"hero hero--primary"},(0,i.kt)("div",{class:"container"},(0,i.kt)("h2",{class:"hero__title"},"Kontoeinstellungen"),(0,i.kt)("p",null,"In diesem Abschnitt helfen wir Ihnen, Ihr Konto zu verwalten."))),(0,i.kt)("h2",{id:"ein-profilbild-hochladen-oder-bearbeiten"},"Ein Profilbild hochladen oder bearbeiten"),(0,i.kt)("p",null,"Ein Profilbild zu haben ist n\xfctzlich, da es anderen Benutzern erm\xf6glicht, Sie leicht zu identifizieren und zu \xfcberpr\xfcfen, ob sie mit der richtigen Person kommunizieren. Es f\xfcgt dem Gespr\xe4ch auch eine pers\xf6nliche Note hinzu und macht es ansprechender."),(0,i.kt)("h3",{id:"profilbild-hinzuf\xfcgen-oder-\xe4ndern"},"Profilbild hinzuf\xfcgen oder \xe4ndern"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,'Klicken Sie auf "Galerie er\xf6ffnen".'),(0,i.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihren Dateien."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,'Tippen Sie auf "Galerie er\xf6ffnen" or "Kamera er\xf6ffnen".'),(0,i.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihren Dateien.")))),(0,i.kt)("h3",{id:"profilbild-entfernen"},"Profilbild entfernen"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,'Klicken Sie auf "Galerie er\xf6ffnen".'),(0,i.kt)("li",null,'Klicken Sie auf "Profilbild entfernen".'))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,'Tippen Sie auf "Profilbild entfernen" ')))),(0,i.kt)("h2",{id:"benachrichtigungen"},"Benachrichtigungen"),(0,i.kt)("p",null,"Wir verlassen uns auf die zeitnahe Kommunikation zwischen unseren Nutzern, und Benachrichtigungen stellen sicher, dass Sie \xfcber neue Nachrichten oder Updates in Echtzeit informiert werden. Ohne Benachrichtigungen k\xf6nnen Sie wichtige Nachrichten verpassen und es k\xf6nnen Verz\xf6gerungen in Ihrer Kommunikation entstehen."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild oder Namensinitials")," um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf das Feld ",(0,i.kt)("b",null,"Benachrichtigungen"),"."),(0,i.kt)("li",null,"Klicken Sie auf den Schalter, um die Benachrichtigungen zu aktivieren oder zu deaktivieren."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild oder Namensinitials")," um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf das Feld ",(0,i.kt)("b",null,"Benachrichtigungen"),"."),(0,i.kt)("li",null,"Klicken Sie auf den Schalter, um die Benachrichtigungen zu aktivieren oder zu deaktivieren.")))),(0,i.kt)("h2",{id:"stil"},"Stil"),(0,i.kt)("p",null,'Das Aktivieren des dunklen Modus in Famedly kann die Augenbelastung verringern und es einfacher machen, l\xe4nger zu arbeiten. Sie k\xf6nnen auch den Stil auf "System Theme" einstellen, um das Theme basierend auf den Systemeinstellungen zu wechseln.'),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Stil"),"."),(0,i.kt)("li",null,"W\xe4hlen Sie unter ",(0,i.kt)("b",null,"Theme")," den gew\xfcnschten Stil aus."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Stil"),"."),(0,i.kt)("li",null,"W\xe4hlen Sie unter ",(0,i.kt)("b",null,"Theme")," den gew\xfcnschten Stil aus.")))),(0,i.kt)("h2",{id:"verzeichnis"},"Verzeichnis"),(0,i.kt)("p",null,"Sie k\xf6nnen es Personen aus anderen Organisationen erlauben, Ihr Konto zu finden. Das ist sinnvoll, wenn Sie mit Personen au\xdferhalb Ihrer eigenen Organisation kommunizieren m\xf6chten."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Verzeichnis"),"."),(0,i.kt)("li",null,"Aktivieren oder deaktivieren Sie die Option, von Personen au\xdferhalb Ihrer Organisation gefunden zu werden."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Verzeichnis"),"."),(0,i.kt)("li",null,"Aktivieren oder deaktivieren Sie die Option, von Personen au\xdferhalb Ihrer Organisation gefunden zu werden.")))),(0,i.kt)("h2",{id:"passwort-\xe4ndern"},"Passwort \xe4ndern"),(0,i.kt)("p",null,"Wenn Sie die M\xf6glichkeit sehen, das Passwort in den Einstellungen zu \xe4ndern, k\xf6nnen Sie das Passwort \xe4ndern. Wenn Sie die M\xf6glichkeit nicht sehen, wird das Passwort in Ihrer Organisation in einem anderen System festgelegt."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Geben Sie Ihr aktuelles Passwort ein"),(0,i.kt)("li",null,"Geben Sie Ihr neues Passwort ein"),(0,i.kt)("li",null,"Best\xe4tigen Sie die \xc4nderung Ihres Passwort, indem Sie auf ",(0,i.kt)("b",null,"Passwort \xe4ndern")," klicken."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Geben Sie Ihr aktuelles Passwort ein"),(0,i.kt)("li",null,"Geben Sie Ihr neues Passwort ein"),(0,i.kt)("li",null,"Best\xe4tigen Sie die \xc4nderung Ihres Passwort, indem Sie auf ",(0,i.kt)("b",null,"Passwort \xe4ndern")," klicken.")))),(0,i.kt)("h2",{id:"verbundene-ger\xe4te"},"Verbundene Ger\xe4te"),(0,i.kt)("p",null,"Hier finden Sie alle Ger\xe4te die mit Ihrem Ger\xe4t verbunden sind. Sie k\xf6nnen die Ger\xe4te sperren und entfernen. Bitte beachten Sie, dass Sie Zugriff auf den Ger\xe4ten verlieren, wenn Sie diese ausloggen. Sie m\xfcssen sich auf diesen Ger\xe4ten dann neu einloggen."),(0,i.kt)("h2",{id:"archiv"},"Archiv"),(0,i.kt)("p",null,"Im Archiv finden Sie die archivierten Unterhaltungen. Das Laden kann einige Zeit in Anspruch nehmen. Sie k\xf6nnen alte Nachrichten hier lesen und das Archiv leeren."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Um alte Unterhaltungen zu lesen, klicken Sie auf die Unterhaltung."),(0,i.kt)("li",{parentName:"ul"},"Um das Archiv zu leeren, klicken Sie bitte auf das Men\xfc in der Ecke rechts oben.")),(0,i.kt)("h2",{id:"chat-backup"},"Chat-Backup"),(0,i.kt)("p",null,"Abh\xe4ngig davon in welchem Status sich das Chat-Backup befindet, haben Sie zwei Optionen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sie k\xf6nnen das Chat-Backup einrichten."),(0,i.kt)("li",{parentName:"ul"},"Sie k\xf6nnen die Passphrase f\xfcr den Chat-Backup zur\xfccksetzen.")),(0,i.kt)("p",null,"In beiden F\xe4llen, stellen Sie sicher, dass Sie die erstellte Passphrase sicher aufheben."),(0,i.kt)("h2",{id:"\xfcber-uns"},"\xdcber uns"),(0,i.kt)("p",null,"Hier finden Sie zus\xe4tzliche hilfreiche Informationen."),(0,i.kt)("h2",{id:"ausloggen"},"Ausloggen"),(0,i.kt)("p",null,"Sie k\xf6nnen sich ausloggen, wenn Sie sich mit einem anderen Account bei Famedly einloggen m\xf6chten."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild"),"."),(0,i.kt)("li",null,"Klicken Sie auf das Logout-Symbol \xfcber Ihrem ",(0,i.kt)("b",null,"Profilbild"),"."),(0,i.kt)("li",null,"Best\xe4tigen Sie das Ausloggen, indem Sie auf ",(0,i.kt)("b",null,"Ausloggen")," klicken."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um die Settings zu \xf6ffnen, tippen Sie auf ",(0,i.kt)("b",null,"ihr Profilbild oder ihren Namen")," in dem Header oben auf dem Bildschirm."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Ausloggen"),".")))))}b.isMDXComponent=!0}}]);