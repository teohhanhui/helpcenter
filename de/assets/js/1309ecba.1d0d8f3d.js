"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[679],{3905:(e,n,i)=>{i.d(n,{Zo:()=>o,kt:()=>b});var t=i(7294);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function u(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=t.createContext({}),d=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},o=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=d(i),k=l,b=c["".concat(s,".").concat(k)]||c[k]||h[k]||r;return i?t.createElement(b,a(a({ref:n},o),{},{components:i})):t.createElement(b,a({ref:n},o))}));function b(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=k;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[c]="string"==typeof e?e:l,a[1]=u;for(var d=2;d<r;d++)a[d]=i[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}k.displayName="MDXCreateElement"},5162:(e,n,i)=>{i.d(n,{Z:()=>a});var t=i(7294),l=i(4334);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:i,className:a}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,a),hidden:i},n)}},4866:(e,n,i)=>{i.d(n,{Z:()=>I});var t=i(7462),l=i(7294),r=i(4334),a=i(2466),u=i(6550),s=i(1980),d=i(7392),o=i(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}}))}function h(e){const{values:n,children:i}=e;return(0,l.useMemo)((()=>{const e=n??c(i);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function k(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:i}=e;const t=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function p(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=h(e),[a,u]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[s,d]=b({queryString:i,groupId:t}),[c,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,o.Nk)(i);return[t,(0,l.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),m=(()=>{const e=s??c;return k({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{m&&u(m)}),[m]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var m=i(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:i,selectedValue:u,selectValue:s,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{const n=e.currentTarget,i=o.indexOf(n),t=d[i].value;t!==u&&(c(n),s(t))},k=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n)},d.map((e=>{let{value:n,label:i,attributes:a}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>o.push(e),onKeyDown:k,onClick:h},a,{className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":u===n})}),i??n)})))}function v(e){let{lazy:n,children:i,selectedValue:t}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function S(e){const n=p(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,t.Z)({},e,n)),l.createElement(v,(0,t.Z)({},e,n)))}function I(e){const n=(0,m.Z)();return l.createElement(S,(0,t.Z)({key:String(n)},e))}},6716:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var t=i(7462),l=(i(7294),i(3905)),r=i(4866),a=i(5162);const u={sidebar_label:"Einstellungen",title:"Kontoeinstellungen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},s=void 0,d={unversionedId:"help-center/your-account/account-settings",id:"help-center/your-account/account-settings",title:"Kontoeinstellungen",description:"Kontoeinstellungen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/account-settings.mdx",sourceDirName:"help-center/your-account",slug:"/help-center/your-account/account-settings",permalink:"/helpcenter/de/help-center/your-account/account-settings",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"Krille-chan",lastUpdatedAt:1699619642,formattedLastUpdatedAt:"10. Nov. 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Einstellungen",title:"Kontoeinstellungen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Ihr Konto",permalink:"/helpcenter/de/your-account"},next:{title:"Fehlerbehebung",permalink:"/helpcenter/de/help-center/your-account/troubleshoot"}},o={},c=[{value:"Ein Profilbild hochladen oder bearbeiten",id:"ein-profilbild-hochladen-oder-bearbeiten",level:2},{value:"Profilbild hinzuf\xfcgen oder \xe4ndern",id:"profilbild-hinzuf\xfcgen-oder-\xe4ndern",level:3},{value:"Profilbild entfernen",id:"profilbild-entfernen",level:3},{value:"Benachrichtigungen",id:"benachrichtigungen",level:2},{value:"Stil",id:"stil",level:2},{value:"Verzeichnis",id:"verzeichnis",level:2},{value:"Passwort \xe4ndern",id:"passwort-\xe4ndern",level:2},{value:"Bildschirm sperren",id:"bildschirm-sperren",level:2},{value:"Bildschirmsperre aktivieren",id:"bildschirmsperre-aktivieren",level:3},{value:"\xc4ndern der PIN f\xfcr die Bildschirmsperre",id:"\xe4ndern-der-pin-f\xfcr-die-bildschirmsperre",level:3},{value:"Entsperren der App mittels PIN",id:"entsperren-der-app-mittels-pin",level:3},{value:"Nutzen von Biometrischer Authentifizierung",id:"nutzen-von-biometrischer-authentifizierung",level:3},{value:"Auto lock zum Sperren des Bildschirms verwenden",id:"auto-lock-zum-sperren-des-bildschirms-verwenden",level:3},{value:"Verbundene Ger\xe4te",id:"verbundene-ger\xe4te",level:2},{value:"Datenschutz",id:"datenschutz",level:2},{value:"Was sind Lesebest\xe4tigungen?",id:"was-sind-lesebest\xe4tigungen",level:3},{value:"Was sind Tippbenachrichtigungen?",id:"was-sind-tippbenachrichtigungen",level:3},{value:"Was ist Ihr Online-Status?",id:"was-ist-ihr-online-status",level:3},{value:"Wie Sie die Chat-Features aktivieren/deaktivieren k\xf6nnen",id:"wie-sie-die-chat-features-aktivierendeaktivieren-k\xf6nnen",level:3},{value:"Archiv",id:"archiv",level:2},{value:"Chat-Backup",id:"chat-backup",level:2},{value:"\xdcber uns",id:"\xfcber-uns",level:2},{value:"Ausloggen",id:"ausloggen",level:2}],h={toc:c},k="wrapper";function b(e){let{components:n,...i}=e;return(0,l.kt)(k,(0,t.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"hero hero--primary"},(0,l.kt)("div",{class:"container"},(0,l.kt)("h2",{class:"hero__title"},"Kontoeinstellungen"),(0,l.kt)("p",null,"In diesem Abschnitt helfen wir Ihnen, Ihr Konto zu verwalten."))),(0,l.kt)("h2",{id:"ein-profilbild-hochladen-oder-bearbeiten"},"Ein Profilbild hochladen oder bearbeiten"),(0,l.kt)("p",null,"Ein Profilbild zu haben ist n\xfctzlich, da es anderen Benutzern erm\xf6glicht, Sie leicht zu identifizieren und zu \xfcberpr\xfcfen, ob sie mit der richtigen Person kommunizieren. Es f\xfcgt dem Gespr\xe4ch auch eine pers\xf6nliche Note hinzu und macht es ansprechender."),(0,l.kt)("h3",{id:"profilbild-hinzuf\xfcgen-oder-\xe4ndern"},"Profilbild hinzuf\xfcgen oder \xe4ndern"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,'Klicken Sie auf "Galerie er\xf6ffnen".'),(0,l.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihren Dateien."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,'Tippen Sie auf "Galerie er\xf6ffnen" or "Kamera er\xf6ffnen".'),(0,l.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihren Dateien.")))),(0,l.kt)("h3",{id:"profilbild-entfernen"},"Profilbild entfernen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf Ihrem Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,'Klicken Sie auf "Galerie er\xf6ffnen".'),(0,l.kt)("li",null,'Klicken Sie auf "Profilbild entfernen".'))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen, um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,'Tippen Sie auf "Profilbild entfernen" ')))),(0,l.kt)("h2",{id:"benachrichtigungen"},"Benachrichtigungen"),(0,l.kt)("p",null,"Wir verlassen uns auf die zeitnahe Kommunikation zwischen unseren Nutzern, und Benachrichtigungen stellen sicher, dass Sie \xfcber neue Nachrichten oder Updates in Echtzeit informiert werden. Ohne Benachrichtigungen k\xf6nnen Sie wichtige Nachrichten verpassen und es k\xf6nnen Verz\xf6gerungen in Ihrer Kommunikation entstehen."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf Ihr ",(0,l.kt)("b",null,"Profilbild oder Namensinitials")," um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Klicken Sie auf das Feld ",(0,l.kt)("b",null,"Benachrichtigungen"),"."),(0,l.kt)("li",null,"Klicken Sie auf den Schalter, um die Benachrichtigungen zu aktivieren oder zu deaktivieren."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf Ihr ",(0,l.kt)("b",null,"Profilbild oder Namensinitials")," um die Einstellungen zu \xf6ffnen."),(0,l.kt)("li",null,"Klicken Sie auf das Feld ",(0,l.kt)("b",null,"Benachrichtigungen"),"."),(0,l.kt)("li",null,"Klicken Sie auf den Schalter, um die Benachrichtigungen zu aktivieren oder zu deaktivieren.")))),(0,l.kt)("h2",{id:"stil"},"Stil"),(0,l.kt)("p",null,'Das Aktivieren des dunklen Modus in Famedly kann die Augenbelastung verringern und es einfacher machen, l\xe4nger zu arbeiten. Sie k\xf6nnen auch den Stil auf "System Theme" einstellen, um das Theme basierend auf den Systemeinstellungen zu wechseln.'),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Stil"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie unter ",(0,l.kt)("b",null,"Theme")," den gew\xfcnschten Stil aus."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Stil"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie unter ",(0,l.kt)("b",null,"Theme")," den gew\xfcnschten Stil aus.")))),(0,l.kt)("h2",{id:"verzeichnis"},"Verzeichnis"),(0,l.kt)("p",null,"Sie k\xf6nnen es Personen aus anderen Organisationen erlauben, Ihr Konto zu finden. Das ist sinnvoll, wenn Sie mit Personen au\xdferhalb Ihrer eigenen Organisation kommunizieren m\xf6chten."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Verzeichnis"),"."),(0,l.kt)("li",null,"Aktivieren oder deaktivieren Sie die Option, von Personen au\xdferhalb Ihrer Organisation gefunden zu werden."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Verzeichnis"),"."),(0,l.kt)("li",null,"Aktivieren oder deaktivieren Sie die Option, von Personen au\xdferhalb Ihrer Organisation gefunden zu werden.")))),(0,l.kt)("h2",{id:"passwort-\xe4ndern"},"Passwort \xe4ndern"),(0,l.kt)("p",null,"Wenn die Option f\xfcr Sie verf\xfcgbar ist, k\xf6nnen Sie Ihr Passwort in den Einstellungen \xe4ndern. Wenn Ihr Account von Ihrer Organisation verwaltet wird, ist diese Option in der Famedly-App m\xf6glicherweise nicht verf\xfcgbar.",(0,l.kt)("br",{parentName:"p"}),"\n","Bitte beachten Sie die ",(0,l.kt)("a",{parentName:"p",href:"./encryption-security#best-practices-for-secure-passwords"},"Best Practices f\xfcr sichere Passw\xf6rter")," wenn Sie sich f\xfcr ein neues Passwort entscheiden."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Passwort \xe4ndern"),"."),(0,l.kt)("li",null,"Geben Sie Ihr aktuelles Passwort ein"),(0,l.kt)("li",null,"Geben Sie Ihr neues Passwort ein"),(0,l.kt)("li",null,"Best\xe4tigen Sie die \xc4nderung Ihres Passwort, indem Sie auf ",(0,l.kt)("b",null,"Passwort \xe4ndern")," klicken."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Passwort \xe4ndern"),"."),(0,l.kt)("li",null,"Geben Sie Ihr aktuelles Passwort ein"),(0,l.kt)("li",null,"Geben Sie Ihr neues Passwort ein"),(0,l.kt)("li",null,"Best\xe4tigen Sie die \xc4nderung Ihres Passwort, indem Sie auf ",(0,l.kt)("b",null,"Passwort \xe4ndern")," klicken.")))),(0,l.kt)("h2",{id:"bildschirm-sperren"},"Bildschirm sperren"),(0,l.kt)("p",null,"Auf Mobilger\xe4ten gibt es eine Option, um die App zu sperren und entweder mit einer PIN oder mit Biometrischer Authentifizierung (z.B. Fingerabdruck) wieder zu entsperren.\nEine gesetzte Bildschirmsperre wird ausschlie\xdflich auf das Ger\xe4t angewandt, auf dem Sie sie aktivieren und wird beim Logout automatisch deaktiviert. Wenn Sie sich einloggen, m\xfcssen Sie die Bildschirmsperre erst wieder einrichten, um sie zu nutzen, das bedeutet aber auch, dass Sie beim Vergessen der PIN die M\xf6glichkeit haben, die Bildschirmsperre durch einen Logout zur\xfcckzusetzen. "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Auf mobilen Endger\xe4ten kann es sein, dass Sie aufgefordert werden, eine Bildschirmsperre einzurichten, entweder weil Sie keine betriebssystemweite Sperre aktiviert haben oder weil Ihre Organisation das verlangt.")),(0,l.kt)("h3",{id:"bildschirmsperre-aktivieren"},"Bildschirmsperre aktivieren"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Bildschirm sperren"),"."),(0,l.kt)("li",null,"Tippen Sie dort erneut auf ",(0,l.kt)("b",null,"Bildschirm sperren"),", um den Schalter f\xfcr die Bildschirmsperre zu aktivieren."),(0,l.kt)("li",null,"Geben Sie eine PIN ein, die Sie zum Entsperren verwenden m\xf6chten."),(0,l.kt)("li",null,"Best\xe4tigen Sie die PIN."),(0,l.kt)("li",null,"Sie werden nun weitere Optionen in den Einstellungen unter ",(0,l.kt)("b",null,"Bildschirm sperren")," sehen.")))),(0,l.kt)("h3",{id:"\xe4ndern-der-pin-f\xfcr-die-bildschirmsperre"},"\xc4ndern der PIN f\xfcr die Bildschirmsperre"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"PIN-Code \xe4ndern"),"."),(0,l.kt)("li",null,"Geben Sie Ihre aktuelle PIN ein."),(0,l.kt)("li",null,"Geben Sie nun Ihre neue PIN ein."),(0,l.kt)("li",null,"Wiederholen Sie die neue PIN.")))),(0,l.kt)("h3",{id:"entsperren-der-app-mittels-pin"},"Entsperren der App mittels PIN"),(0,l.kt)("p",null,"Nachdem Sie die App geschlossen oder minimiert haben, werden Sie beim erneuten \xd6ffnen der App nach Ihrer PIN f\xfcr die Bildschirmsperre gefragt. "),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf das Zahlen-Eingabefeld."),(0,l.kt)("li",null,"Geben Sie Ihre PIN ein."),(0,l.kt)("li",null,"Falls Sie Ihre PIN vergessen haben, tippen Sie bitte auf den Button ",(0,l.kt)("b",null,"Ausloggen")," rechts oben, die Bildschirmsperre wird bei jedem Logout automatisch zur\xfcckgesetzt.")))),(0,l.kt)("h3",{id:"nutzen-von-biometrischer-authentifizierung"},"Nutzen von Biometrischer Authentifizierung"),(0,l.kt)("p",null,"Anstelle der PIN k\xf6nnen Sie Ihr Ger\xe4t auch mittels Biometrie wie z.B. Gesichtserkennung oder Fingerabdruck entsperren. Die Biometrische Authentifizierung wird die Standard-Authentifizierungsmethode Ihres Ger\xe4tes verwenden. Sie k\xf6nnen auch weiterhin Ihre PIN verwenden, um die Bildschirmsperre aufzuheben, au\xdferdem wird die PIN zum Deaktivieren der Bildschirmsperre ben\xf6tigt. Falls Sie Ihre PIN vergessen, k\xf6nnen Sie die Bildschirmsperre nur noch durch einen Logout deaktivieren. "),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Biometrische Authentifizierung zulassen"),"."),(0,l.kt)("li",null,"Identifizieren Sie sich mit der biometrischen Authentifizierung auf Ihrem Mobilger\xe4t."),(0,l.kt)("li",null,"Wenn Sie nun versuchen, die App zu entsperren, werden Sie aufgefordert, sich mittels Biometrie zu authentifizieren. Sie k\xf6nnen diesen Dialog abbrechen und stattdessen Ihre PIN verwenden."),(0,l.kt)("li",null,"Falls Sie den Dialog versehentlich abgebrochen haben oder er nicht angezeigt wird, k\xf6nnen Sie auf \u201eBiometrische Authentifizierung verwenden\u201c tippen, um eine erneute Abfrage der Biometrie anzufordern.")))),(0,l.kt)("h3",{id:"auto-lock-zum-sperren-des-bildschirms-verwenden"},"Auto lock zum Sperren des Bildschirms verwenden"),(0,l.kt)("p",null,"Falls Sie sichergehen m\xf6chten, dass niemand Ihre Nachrichten lesen kann, z.B. wenn Sie vergessen, die App in den Hintergrund zu versetzen, k\xf6nnen Sie zwischen verschiedenen Zeitspannen w\xe4hlen, nach denen die App automatisch gesperrt wird. "),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Auto lock"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie nun die Zeitspanne aus der Liste, nach der die App sich sperren soll."),(0,l.kt)("li",null,"Die App wird sich nun bei jeder Inaktivit\xe4t wenn die gew\xe4hlte Zeitspanne verstreicht automatisch sperren."),(0,l.kt)("li",null,"Falls Sie das Auto Lock Feature nicht mehr nutzen wollen, tippen Sie erneut auf ",(0,l.kt)("b",null,"Auto lock")," und w\xe4hlen Sie \u201eDeaktivieren\u201c aus der Liste aus.")))),(0,l.kt)("h2",{id:"verbundene-ger\xe4te"},"Verbundene Ger\xe4te"),(0,l.kt)("p",null,"Hier finden Sie alle Ger\xe4te die mit Ihrem Ger\xe4t verbunden sind. Sie k\xf6nnen die Ger\xe4te sperren und entfernen. Bitte beachten Sie, dass Sie Zugriff auf den Ger\xe4ten verlieren, wenn Sie diese ausloggen. Sie m\xfcssen sich auf diesen Ger\xe4ten dann neu einloggen."),(0,l.kt)("h2",{id:"datenschutz"},"Datenschutz"),(0,l.kt)("p",null,"Hier k\xf6nnen Sie w\xe4hlen, ob Sie Lesebest\xe4tigungen, Tippbenachrichtigungen oder Ihren Online-Status mit anderen Nutzern teilen m\xf6chten und ob Sie Absturzberichte an Famedly senden m\xf6chten.\nUm Ihre Privatsph\xe4re zu sch\xfctzen, sind all diese Chat-Features standardm\xe4\xdfig abgeschaltet und m\xfcssen von Ihnen erst aktiviert werden, um sie zu nutzen. "),(0,l.kt)("h3",{id:"was-sind-lesebest\xe4tigungen"},"Was sind Lesebest\xe4tigungen?"),(0,l.kt)("p",null,"Wenn der Schalter zum Senden von Lesebest\xe4tigungen angeschaltet ist, k\xf6nnen andere Nutzer sehen, ob sie eine Nachricht gelesen haben.\nIn der unteren rechten Ecke jedes Chatraums direkt \xfcber dem Eingabefeld sehen Sie die Avatare der Nutzer, die die letzte Nachricht gelesen haben. Sollten mehr als vier Nutzer die letzte Nachricht gelesen haben, werden nur vier Avatare angezeigt. F\xfcr alle anderen Nutzer, die die Nachricht gelesen haben, wird dann stattdessen eine Nummer angezeigt wie z.B. ",(0,l.kt)("b",null,"+3")," wenn sieben Nutzer die Nachricht gelesen haben.\nSie k\xf6nnen au\xdferdem in den Einstellungen zur Nachricht unter ",(0,l.kt)("b",null,"Gelesen")," f\xfcr jede Nachricht einsehen, wer diese bereits gelesen hat.\nWenn Sie den Schalter zum Senden von Lesebest\xe4tigungen ausschalten, werden andere weder Ihren Avatar am unteren Ende des Chats sehen, noch werden Sie in den ",(0,l.kt)("b",null,"Gelesen"),"-Listen erscheinen. "),(0,l.kt)("h3",{id:"was-sind-tippbenachrichtigungen"},"Was sind Tippbenachrichtigungen?"),(0,l.kt)("p",null,"Wenn der Schalter zum Senden von Tippbenachrichtigungen eingeschaltet ist, bedeutet das, dass andere Nutzer, die den Chatraum gerade ge\xf6ffnet haben, links \xfcber dem Eingabefeld sehen, wenn Sie gerade tippen. Dort sind dann Ihr Avatar oder Ihre Initialen zu sehen und daneben die Nachricht ",(0,l.kt)("b",null,"Nutzer tippt gerade..."),", wobei \u201eNutzer\u201c in diesem Fall f\xfcr Ihren Nutzernamen steht.\nWenn Sie das Senden von Tippbenachrichtigungen ausschalten, wird diese Nachricht nicht mehr f\xfcr andere angezeigt wenn Sie gerade tippen. "),(0,l.kt)("h3",{id:"was-ist-ihr-online-status"},"Was ist Ihr Online-Status?"),(0,l.kt)("p",null,"Zurzeit wird in Famedly der Online-Status nicht angezeigt, doch das k\xf6nnte sich in Zukunft noch \xe4ndern.\nDa Matrix Accounts nicht auf die Nutzung eines bestimmten Messengers beschr\xe4nkt sind, ist es au\xdferdem m\xf6glich, dass ein Nutzer, mit dem Sie einen gemeinsamen Chatraum haben, einen anderen Client wie z.B. Element verwendet.\nWenn der Schalter zum Senden des Online-Status eingeschaltet ist, k\xf6nnten diese Nutzer einen gr\xfcnen Punkt auf Ihrem Avatar oder andere Indikatoren f\xfcr Ihren Online-Status sehen, wenn die App sich im Vordergrund befindet oder einen gelben Punkt f\xfcr Inaktivit\xe4t, wenn Sie die App minimiert haben.\nWenn der Schalter zum Senden des Online-Status ausgeschaltet ist, werden Sie f\xfcr andere Nutzer, deren Matrix Messenger in der Lage ist, den Online-Status anzuzeigen, permanent als Offline angezeigt. "),(0,l.kt)("h3",{id:"wie-sie-die-chat-features-aktivierendeaktivieren-k\xf6nnen"},"Wie Sie die Chat-Features aktivieren/deaktivieren k\xf6nnen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Datenschutz"),"."),(0,l.kt)("li",null,"Sie k\xf6nnen alle Features auf einmal aktivieren oder deaktivieren, indem Sie auf ",(0,l.kt)("b",null,"Alle Chat-Features aktivieren")," klicken."),(0,l.kt)("li",null,"Um einzelne Chat-Features an- oder auszuschalten, klicken Sie einfach auf die einzelnen Schalter."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Datenschutz"),"."),(0,l.kt)("li",null,"Sie k\xf6nnen alle Chat-Features aktivieren, indem Sie auf ",(0,l.kt)("b",null,"Alle Chat-Features aktivieren")," tippen. Das bedeutet, dass Sie dann Lesebest\xe4tigungen, Tippbenachrichtigungen, den Online-Status und Absturzberichte senden."),(0,l.kt)("li",null,"Wenn Sie bereits alle Chat-Features aktiviert haben, k\xf6nnen Sie alle Chat-Features wieder deaktivieren indem Sie erneut auf ",(0,l.kt)("b",null,"Alle Chat-Features aktivieren")," tippen. Das bedeutet, dass Sie nun ",(0,l.kt)("b",null,"keine")," Lesebest\xe4tigungen, Tippbenachrichtigungen und Absturzberichte mehr senden und dass andere nicht mehr sehen, ob Sie online sind."),(0,l.kt)("li",null,"Um einzelne Chat-Features an- oder auszuschalten, tippen Sie einfach auf die einzelnen Schalter.")))),(0,l.kt)("h2",{id:"archiv"},"Archiv"),(0,l.kt)("p",null,"Im Archiv finden Sie die archivierten Unterhaltungen. Das Laden kann einige Zeit in Anspruch nehmen. Sie k\xf6nnen alte Nachrichten hier lesen und das Archiv leeren."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Um alte Unterhaltungen zu lesen, klicken Sie auf die Unterhaltung."),(0,l.kt)("li",{parentName:"ul"},"Um das Archiv zu leeren, klicken Sie bitte auf das Men\xfc in der Ecke rechts oben.")),(0,l.kt)("h2",{id:"chat-backup"},"Chat-Backup"),(0,l.kt)("p",null,"Abh\xe4ngig davon in welchem Status sich das Chat-Backup befindet, haben Sie zwei Optionen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sie k\xf6nnen das Chat-Backup einrichten."),(0,l.kt)("li",{parentName:"ul"},"Sie k\xf6nnen die Passphrase f\xfcr den Chat-Backup zur\xfccksetzen.")),(0,l.kt)("p",null,"In beiden F\xe4llen, stellen Sie sicher, dass Sie die erstellte Passphrase sicher aufheben."),(0,l.kt)("h2",{id:"\xfcber-uns"},"\xdcber uns"),(0,l.kt)("p",null,"Hier finden Sie zus\xe4tzliche hilfreiche Informationen."),(0,l.kt)("h2",{id:"ausloggen"},"Ausloggen"),(0,l.kt)("p",null,"Sie k\xf6nnen sich ausloggen, wenn Sie sich mit einem anderen Account bei Famedly einloggen m\xf6chten."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Einstellungen zu \xf6ffnen, klicken Sie auf Ihr ",(0,l.kt)("b",null,"Profilbild"),"."),(0,l.kt)("li",null,"Klicken Sie auf das Logout-Symbol \xfcber Ihrem ",(0,l.kt)("b",null,"Profilbild"),"."),(0,l.kt)("li",null,"Best\xe4tigen Sie das Ausloggen, indem Sie auf ",(0,l.kt)("b",null,"Ausloggen")," klicken."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Um die Settings zu \xf6ffnen, tippen Sie auf ",(0,l.kt)("b",null,"ihr Profilbild oder ihren Namen")," in dem Header oben auf dem Bildschirm."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Ausloggen"),".")))))}b.isMDXComponent=!0}}]);