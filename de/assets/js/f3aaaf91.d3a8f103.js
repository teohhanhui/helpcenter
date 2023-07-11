"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[681],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var l=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=l.createContext({}),s=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return l.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},h=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),h=i,k=p["".concat(o,".").concat(h)]||p[h]||c[h]||r;return t?l.createElement(k,a(a({ref:n},d),{},{components:t})):l.createElement(k,a({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=h;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<r;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(7294),i=t(6010);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:t,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var l=t(7462),i=t(7294),r=t(6010),a=t(2466),u=t(6550),o=t(1980),s=t(7392),d=t(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:i}}=e;return{value:n,label:t,attributes:l,default:i}}))}function c(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const l=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=c(e),[a,u]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[o,s]=k({queryString:t,groupId:l}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Nk)(t);return[l,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),b=(()=>{const e=o??p;return h({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,r]),tabValues:r}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:u,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),l=s[t].value;l!==u&&(p(n),o(l))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:a}=e;return i.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>d.push(e),onKeyDown:h,onClick:c},a,{className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":u===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function y(e){const n=m(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},i.createElement(g,(0,l.Z)({},e,n)),i.createElement(v,(0,l.Z)({},e,n)))}function T(e){const n=(0,b.Z)();return i.createElement(y,(0,l.Z)({key:String(n)},e))}},3641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var l=t(7462),i=(t(7294),t(3905)),r=t(4866),a=t(5162),u=t(4996);const o={sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},s=void 0,d={unversionedId:"help-center/using-famedly/chats",id:"help-center/using-famedly/chats",title:"Chats",description:"Chats",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/chats.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/chats",permalink:"/helpcenter/de/help-center/using-famedly/chats",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Famedly nutzen",permalink:"/helpcenter/de/using-famedly"},next:{title:"Nachrichten",permalink:"/helpcenter/de/help-center/using-famedly/messages"}},p={},c=[{value:"Direktchat starten",id:"direktchat-starten",level:2},{value:"Gruppenchat starten",id:"gruppenchat-starten",level:2},{value:"Chat beitreten",id:"chat-beitreten",level:2},{value:"Mute chat",id:"mute-chat",level:2},{value:"Leave chat",id:"leave-chat",level:2},{value:"Verlassene Chats l\xf6schen",id:"verlassene-chats-l\xf6schen",level:2},{value:"Gruppenchat Einstellungen",id:"gruppenchat-einstellungen",level:2},{value:"Gruppenname bearbeiten",id:"gruppenname-bearbeiten",level:3},{value:"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten",id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten",level:3},{value:"Gruppenbild hinzuf\xfcgen",id:"gruppenbild-hinzuf\xfcgen",level:3},{value:"Gruppenbild \xe4ndern",id:"gruppenbild-\xe4ndern",level:3},{value:"Personen zu einer Gruppe hinzuf\xfcgen",id:"personen-zu-einer-gruppe-hinzuf\xfcgen",level:3},{value:"Personen aus einer Gruppe entfernen",id:"personen-aus-einer-gruppe-entfernen",level:3},{value:"Das Verschicken von Nachrichten auf Administratoren beschr\xe4nken",id:"das-verschicken-von-nachrichten-auf-administratoren-beschr\xe4nken",level:3},{value:"Promote members to group admin",id:"promote-members-to-group-admin",level:3},{value:"External label",id:"external-label",level:2},{value:"Chat tips and best practices",id:"chat-tips-and-best-practices",level:2}],h={toc:c},k="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,l.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"hero hero--primary"},(0,i.kt)("div",{class:"container"},(0,i.kt)("h2",{class:"hero__title"},"Chats"),(0,i.kt)("p",{class:"hero__subtitle"},"Was ist ein Chat?"),(0,i.kt)("p",null,"Famedly bietet die Chat-Funktionalit\xe4t um Unterhaltungen zwischen mehrere Personen zu organisieren. Wir helfen dabei, Ordnung und Klarheit in der allt\xe4glich Arbeit zu schaffen. Nutzen Sie Chats f\xfcr eine bessere Organisation und Aufgabenverteilung, f\xfcr eine schnellere Entscheidungsfindung und schnellerem Arbeitsfortschritt. Famedly is kompatibel mit dem Matrix Communication Protokoll, das es m\xf6glich macht, Personen zum Chat hinzuzuf\xfcgen, die Matrix Clients von anderen Anbietern benutzen."))),(0,i.kt)("h2",{id:"direktchat-starten"},"Direktchat starten"),(0,i.kt)("p",null,"Direkte Chats in Famedly sind mit einer sicheren Ende-zu-Ende-Verschl\xfcsselung verschl\xfcsselt. Wir stellen sicher, dass nur die Teilnehmer im Chatraum die ausgetauschten Nachrichten entschl\xfcsseln und darauf zugreifen k\xf6nnen. Diese Art der Verschl\xfcsselung bietet eine sichere Umgebung f\xfcr vertrauliche Gespr\xe4che."),(0,i.kt)("p",null,"Um einen direkten Chat mit anderen Personen in Famedly zu starten, befolgen Sie diese Schritten:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,'Vergewissern Sie sich, dass Sie im Bereich "Chats" sind.'),(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"+ Taste")," neben dem Filter im oberen linken Bereich Ihres Bildschirms."),(0,i.kt)("li",null,"W\xe4hlen Sie die Person, die Sie einladen m\xf6chten, aus oder suchen Sie sie."),(0,i.kt)("li",null,"Klicke auf ",(0,i.kt)("b",null,"Chat starten")," um einen Chat zu starten."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,'Stellen Sie sicher, dass Sie sich im Bereich "Chats" befinden.'),(0,i.kt)("li",null,"Tippen Sie ",(0,i.kt)("b",null,"+ Taste")," oben rechts auf dem Bildschirm."),(0,i.kt)("li",null,"W\xe4hlen oder suchen Sie die Person, die Sie zum Chat einladen wollen."),(0,i.kt)("li",null,"Tippen Sie auf den ",(0,i.kt)("b",null,"Chat starten")," um einen Chat zu beginnen.")))),(0,i.kt)("h2",{id:"gruppenchat-starten"},"Gruppenchat starten"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,i.kt)("li",null,"Klicken Sie auf dem ",(0,i.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,i.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,i.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,i.kt)("li",null,"Tippen Sie auf dem ",(0,i.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,i.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,i.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Expertentipp: Suchen Sie einen Ende-zu-Ende verschl\xfcsselten Notizbuch? Just create a group chat only with yourself, name it "notepad" and you have a secure place to store files and text.')),(0,i.kt)("h2",{id:"chat-beitreten"},"Chat beitreten"),(0,i.kt)("p",null,"Um an einem Chat teilzunehmen, m\xfcssen Sie von einem Mitglied dieses Chats eingeladen werden."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,i.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,i.kt)("li",null,"Klicken Sie auf den Chat in den Sie eingeladen wurden."),(0,i.kt)("li",null,"Einladung annehmen."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,i.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,i.kt)("li",null,"Tippen Sie auf den Chat in den Sie eingeladen wurden."),(0,i.kt)("li",null,"Die Einladung annehmen.")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you decline the invitation, you will have to ask the inviting person again to invite you again.")),(0,i.kt)("h2",{id:"mute-chat"},"Mute chat"),(0,i.kt)("p",null,"It is possible to mute notifications for chats. This can be helpful if many members communicate in a group and you do not necessarily want to be informed about new messages."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner inside the chat you want to mute."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Mute chat"),"\xa0to mute the chat."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner inside the chat you want to mute."),(0,i.kt)("li",null,"Tap the ",(0,i.kt)("b",null,"Mute chat"),"\xa0to mute the chat.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can unmute the chat again, by following the same steps and selecting ",(0,i.kt)("b",null,"Unmute chat"),".")),(0,i.kt)("h2",{id:"leave-chat"},"Leave chat"),(0,i.kt)("p",null,"You can leave chat rooms at any time and thus end the conversation. Wenn Sie einen Chat verlassen haben, ist der Verlauf des Chats immer noch im Archiv verf\xfcgbar."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke eines Chats."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chat-Bildschirms."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),".")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Der Chat wurde f\xfcr Sie archiviert. Sie k\xf6nnen das Archiv in den Einstellungen finden und hier \xe4ltere Inhalte zur\xfcckfinden.")),(0,i.kt)("h2",{id:"verlassene-chats-l\xf6schen"},"Verlassene Chats l\xf6schen"),(0,i.kt)("p",null,"Um Speicherplatz auf Ihrem Ger\xe4t zu sparen, k\xf6nnen Sie das Archiv leeren und alle archivierten Chats l\xf6schen. Um einen Chat auf dem Ger\xe4t l\xf6schen zu k\xf6nnen, m\xfcssen Sie ihn zuerst verlassen."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Es ist derzeit nicht m\xf6glich, als Administrator einen Chat f\xfcr alle Mitglieder zu l\xf6schen.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Das Laden des Archivs kann einige Zeit in Anspruch nehmen.")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild")," oder ",(0,i.kt)("b",null,"Initialen")," in der oberen linken Ecke des Bildschirms, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Archiv"),"."),(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Archiv leeren"),"."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"L\xf6schen")))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild")," oder ",(0,i.kt)("b",null,"Initialen")," oben links um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Archiv"),"."),(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Archiv leeren"),"."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"L\xf6schen"))))),(0,i.kt)("h2",{id:"gruppenchat-einstellungen"},"Gruppenchat Einstellungen"),(0,i.kt)("h3",{id:"gruppenname-bearbeiten"},"Gruppenname bearbeiten"),(0,i.kt)("p",null,"Der Gruppenname erscheint in der \xdcberschrift der Gruppe und Administratoren der Gruppe k\xf6nnen diesen \xe4ndern. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden. Wir empfehlen jedoch, den Gruppenbetreff kurz zu halten. Can be up to 250 characters in length and can include emoji. "),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details"),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Set Chat Name"),"."),(0,i.kt)("li",null,"Enter a name."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Done")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap the header of a group to open the group details."),(0,i.kt)("li",null,"Tap \u2807 in the top right corner of the screen."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Change subject"),"."),(0,i.kt)("li",null,"Enter a subject."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Done")," to finish the process.")))),(0,i.kt)("img",{alt:"Edit group name",src:(0,u.Z)("/img/chatroom_group_details_editname.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten"},"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten"),(0,i.kt)("p",null,"From both your desktop and mobile devices, you can see group descriptions when viewing group details. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Set chat description"),"."),(0,i.kt)("li",null,"Enter a description."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Done")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the header of a group to open the group details."),(0,i.kt)("li",null,"Tap \u2807 in the top right corner of the screen."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Change description"),"."),(0,i.kt)("li",null,"Enter a description."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Done")," to finish the process.")))),(0,i.kt)("img",{alt:"Edit group name",src:(0,u.Z)("/img/chatroom_group_details_description.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"gruppenbild-hinzuf\xfcgen"},"Gruppenbild hinzuf\xfcgen"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"\uff0b")," next to the Group initials."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Open"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap the header of a group to open the group details."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"\uff0b")," next to the Group initials."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Open"),".")))),(0,i.kt)("h3",{id:"gruppenbild-\xe4ndern"},"Gruppenbild \xe4ndern"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Pencil icon")," next to the group picture."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Open"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap the header of a group to open the group details."),(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"Pencil icon")," next to the group picture."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Open"),".")))),(0,i.kt)("h3",{id:"personen-zu-einer-gruppe-hinzuf\xfcgen"},"Personen zu einer Gruppe hinzuf\xfcgen"),(0,i.kt)("p",null,"Gruppenchats sind der beste Weg, um Unterhaltungen \xfcber verschiedene Projekte, Themen oder Teams in Famedly zu organisieren. F\xfcgen Sie Personen zu Gruppen hinzu, um die richtigen Personen und Informationen an einem Ort zusammenzubringen. Sie k\xf6nnen eine unbegrenzte Anzahl von Personen zu einer Gruppe hinzuf\xfcgen. Je gr\xf6\xdfer die Gruppen werden, desto un\xfcbersichtlicher kann die Zusammenarbeit werden. Wir empfehlen daher bewusst zu \xfcberlegen, welche Personen hinzugef\xfcgt werden sollten."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Teilnehmer zeigen"),"."),(0,i.kt)("li",null,"Klicken Sie auf das ",(0,i.kt)("b",null,"\uff0b")," in der Ecke rechtsoben."),(0,i.kt)("li",null,"Klicken Sie auf die Person, die Sie hinzuf\xfcgen m\xf6chten."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke in einer Gruppe."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Teilnehmer zeigen"),"."),(0,i.kt)("li",null,"Tippen Sie auf das ",(0,i.kt)("b",null,"\uff0b")," in der Ecke rechtsoben."),(0,i.kt)("li",null,"Klicken Sie auf die Person, die Sie hinzuf\xfcgen m\xf6chten.")))),(0,i.kt)("img",{alt:"Add group members",src:(0,u.Z)("/img/chatroom_group_details_addmembers.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"personen-aus-einer-gruppe-entfernen"},"Personen aus einer Gruppe entfernen"),(0,i.kt)("p",null,"Famedly organisiert Unterhaltungen zwischen mehreren Personen in Gruppenchats. Gruppenchats sorgen f\xfcr Ordnung und \xdcbersichtlichkeit bei der Arbeit. Erstellen Sie themenbasierte Gruppen oder Gruppen f\xfcr Teams, um die Zusammenarbeit zu f\xf6rdern.\nWenn eine Person nicht mehr Teil einer Gruppe sein sollte, kann die Person entfernt werden. Administratoren einer Gruppe k\xf6nnen Personen aus der Gruppe entfernen."),(0,i.kt)("p",null,"Wenn Sie eine Person aus einer Gruppe entfernen, kann diese Person nicht mehr an der Kommunikation teilnehmen, aber hat noch Zugriff auf alte Nachrichten innerhalb der Gruppe."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Remove User"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the header of a group to open the group details."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Participants"),"."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Tap and hold")," on the person you want to remove."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Remove Person Name"),".")))),(0,i.kt)("img",{alt:"Add group members",src:(0,u.Z)("/img/chatroom_group_details_participant_settings.PNG.png"),width:"40%"}),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Person nicht entfernen, wenn sie auch ein Administrator ist. In diesem Fall m\xfcssen Sie die Person bitten, die Gruppe eigenst\xe4ndig zu verlassen.")),(0,i.kt)("h3",{id:"das-verschicken-von-nachrichten-auf-administratoren-beschr\xe4nken"},"Das Verschicken von Nachrichten auf Administratoren beschr\xe4nken"),(0,i.kt)("p",null,"Gruppen k\xf6nnen so eingestellt werden, dass nur Administratoren Nachrichten senden k\xf6nnen. Dies kann besonders f\xfcr Gruppen mit vielen Personen n\xfctzlich sein, in denen Ank\xfcndigungen geteilt werden sollten.\nIn diesem Fall k\xf6nnen nur Administratoren einer Gruppe Ank\xfcndigungen verschicken."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},"This feature is not available on desktop."),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap the header of a group to open the group details."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Restrict messaging to group admins")," to activate it.")))),(0,i.kt)("img",{alt:"Restrict messaging to group admins",src:(0,u.Z)("/img/chatroom_group_details_admin.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"promote-members-to-group-admin"},"Promote members to group admin"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Promote to Administrator"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the header of a group to open the group details."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Participants"),"."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Tap and hold")," on the person you want to remove."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Promote to Admin"),".")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"You cannot devote other admins of a group.")),(0,i.kt)("h2",{id:"external-label"},"External label"),(0,i.kt)("p",null,'To ensure that no information is unintentionally shared with outside organisations, we have introduced an "external" label. If you invite people to chat rooms, or\nif chat rooms with external people already exist, they will be marked with the "External" label accordingly.'),(0,i.kt)("h2",{id:"chat-tips-and-best-practices"},"Chat tips and best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that the group chats you\xa0create\xa0or maintain have a clear\xa0topic and description\xa0so that people understand what they\u2019re used for."),(0,i.kt)("li",{parentName:"ul"},"Make your group chats unique by setting up a profile picture for your group chat"),(0,i.kt)("li",{parentName:"ul"},"Archive group chats\xa0when they\u2019re no longer needed.")))}m.isMDXComponent=!0}}]);