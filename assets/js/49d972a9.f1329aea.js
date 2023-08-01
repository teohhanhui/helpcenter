"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,k=d["".concat(i,".").concat(c)]||d[c]||p[c]||o;return a?l.createElement(k,r(r({ref:t},m),{},{components:a})):l.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(4334);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(7462),n=a(7294),o=a(4334),r=a(2466),s=a(6550),i=a(1980),u=a(7392),m=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const l=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=p(e),[r,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:o}))),[i,u]=k({queryString:a,groupId:l}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,m.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:l}),b=(()=>{const e=i??d;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),l=u[a].value;l!==s&&(d(t),i(l))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},r,{className:(0,o.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:l}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,l.Z)({},e,t)),n.createElement(f,(0,l.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(v,(0,l.Z)({key:String(t)},e))}},778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var l=a(7462),n=(a(7294),a(3905)),o=a(4866),r=a(5162);a(4996);const s={sidebar_label:"Messages",title:"Messages",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},i=void 0,u={unversionedId:"help-center/using-famedly/messages",id:"help-center/using-famedly/messages",title:"Messages",description:"Messages",source:"@site/docs/help-center/using-famedly/messages.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/messages",permalink:"/helpcenter/help-center/using-famedly/messages",draft:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/using-famedly/messages.mdx",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1690885393,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Messages",title:"Messages",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},sidebar:"helpcenterSidebar",previous:{title:"Chats",permalink:"/helpcenter/help-center/using-famedly/chats"},next:{title:"Share files",permalink:"/helpcenter/help-center/using-famedly/share-files"}},m={},d=[{value:"Send messages",id:"send-messages",level:2},{value:"Read new messages",id:"read-new-messages",level:2},{value:"Edit a message",id:"edit-a-message",level:2},{value:"Delete a message",id:"delete-a-message",level:2},{value:"Reply to messages",id:"reply-to-messages",level:2},{value:"Add emojis to your messages",id:"add-emojis-to-your-messages",level:2},{value:"React to a message with an emoji",id:"react-to-a-message-with-an-emoji",level:2},{value:"Add reactions",id:"add-reactions",level:3},{value:"Remove reactions",id:"remove-reactions",level:3},{value:"Mention someone in a message",id:"mention-someone-in-a-message",level:2},{value:"Forward messages",id:"forward-messages",level:2},{value:"Report message content",id:"report-message-content",level:2},{value:"Check who read message",id:"check-who-read-message",level:2},{value:"Format your messages",id:"format-your-messages",level:2}],p={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"hero hero--primary"},(0,n.kt)("div",{class:"container"},(0,n.kt)("h2",{class:"hero__title"},"Messages"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Add a file"),(0,n.kt)("li",null,"Record an audio clip"),(0,n.kt)("li",null,"Add an emoji"),(0,n.kt)("li",null,"Mention someone"),(0,n.kt)("li",null,"Format messages")))),(0,n.kt)("h2",{id:"send-messages"},"Send messages"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Open a group chat or private chat that you\u2019d like to send a message to."),(0,n.kt)("li",null,"Click on the message input field."),(0,n.kt)("li",null,"Type your message and add any emoji, mentions or formatting that you want."),(0,n.kt)("li",null,"Press ",(0,n.kt)("b",null,"Enter")," or click the ",(0,n.kt)("b",null,"Arrow")," to send it."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Open a group chat or private chat that you\u2019d like to send a message to."),(0,n.kt)("li",null,"Tap on the message input field."),(0,n.kt)("li",null,"Type your message and add any emoji, mentions or formatting that you want."),(0,n.kt)("li",null,"Tap the ",(0,n.kt)("b",null,"Arrow")," to send it.")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"With shift + enter, you can jump in a new line.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"read-new-messages"},"Read new messages"),(0,n.kt)("p",null,"A\xa0",(0,n.kt)("b",null,"bold"),"\xa0group chat or private chat in your chat list means that there are unread messages in the conversation. Click on or tap the bold conversation name to view the unread messages."),(0,n.kt)("p",null,"Because mistakes happen, it is possible to edit and delete messages in Famedly."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"edit-a-message"},"Edit a message"),(0,n.kt)("p",null,"By default, any member can edit their messages."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Move the cursor over the message you want to edit."),(0,n.kt)("li",null,"Click on the ",(0,n.kt)("b",null,"Pencil icon"),"."),(0,n.kt)("li",null,"Edit your message in the text field."),(0,n.kt)("li",null,"Click on the ",(0,n.kt)("b",null,"Send icon")," to finish."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Tap the message you want to edit."),(0,n.kt)("li",null,"Tap ",(0,n.kt)("b",null,"Edit")," to make changes."),(0,n.kt)("li",null,"Edit your message in the text field."),(0,n.kt)("li",null,"Tap the ",(0,n.kt)("b",null,"Checkmark icon")," to complete the process.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"delete-a-message"},"Delete a message"),(0,n.kt)("p",null,"By default, any member can delete their messages."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Deleting a message is permanent, so please proceed with care.")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Hover over the message you want to delete."),(0,n.kt)("li",null,"Click the\xa0",(0,n.kt)("b",null,"Bin icon"),"."),(0,n.kt)("li",null,"Click\xa0",(0,n.kt)("b",null,"Yes")," to confirm."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Tap the message you want to delete."),(0,n.kt)("li",null,"Tap ",(0,n.kt)("b",null,"Delete")," to delete the message."),(0,n.kt)("li",null,"Tap ",(0,n.kt)("b",null,"Yes")," to confirm.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"reply-to-messages"},"Reply to messages"),(0,n.kt)("p",null,"The reply function allows you to reply to a specific message in group chat or private chat."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Hover over the message you want to answer."),(0,n.kt)("li",null,"Click the\xa0",(0,n.kt)("b",null,"Reply icon"),"."),(0,n.kt)("li",null,"Enter your reply in the textfield."),(0,n.kt)("li",null,"Press ",(0,n.kt)("b",null,"Enter")," or click the ",(0,n.kt)("b",null,"Arrow")," to send reply."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Tap the message you want to answer."),(0,n.kt)("li",null,"Tap ",(0,n.kt)("b",null,"Answer"),"."),(0,n.kt)("li",null,"Enter your reply in the textfield."),(0,n.kt)("li",null,"Tap the ",(0,n.kt)("b",null,"Arrow icon")," to send reply.")))),(0,n.kt)("h2",{id:"add-emojis-to-your-messages"},"Add emojis to your messages"),(0,n.kt)("p",null,"Emojis are a reference to common emoticons. In Famedly, emojis are both entertaining and practical for more efficient work: Use emojis to enhance their messages or add emoji reactions to a message for quick response."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"macos",label:"MacOs",default:!0,mdxType:"TabItem"},"To send an emoji on MacOS, please use the emoji keyboard. Please look at the link below to find out how to open the emoji keyboard.",(0,n.kt)("p",null,"  ",(0,n.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/mac-help/mchlp1560/mac#:~:text=Press%20Control-Command-Space.,and%20choose%20Show%20Emoji%20%26%20Symbols.&text=-E%20(if%20the%20Globe%20key,is%20available%20on%20the%20keyboard)."},"More information"))),(0,n.kt)(r.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"To send an emoji on windows, type ",(0,n.kt)("code",null,"windows-logo")," + ",(0,n.kt)("code",null,".")," to open the emoji keyboard"))),(0,n.kt)(r.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Tap the message box to open the keyboard."),(0,n.kt)("li",null,"Tap the ",(0,n.kt)("b",null,"Emoji")," or ",(0,n.kt)("b",null,"Globe")," button on the keyboard."),(0,n.kt)("li",null,"Tap on an emoji to add it to your message."))),(0,n.kt)(r.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Use the native emoji keyboard of your system to insert an emoji.")))),(0,n.kt)("h2",{id:"react-to-a-message-with-an-emoji"},"React to a message with an emoji"),(0,n.kt)("p",null,"Often a message can be replaced by an emoji reaction. You can long-press reactions in a conversation to see who added them."),(0,n.kt)("h3",{id:"add-reactions"},"Add reactions"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click the message to which you want to add a reaction."),(0,n.kt)("li",null,"Select a frequently used reaction from the menu, or tap the ",(0,n.kt)("b",null,"\uff0b Plus symbol")," to search for another one."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Tap the message to which you want to add a reaction."),(0,n.kt)("li",null,"Select a frequently used reaction from the menu, or tap the ",(0,n.kt)("b",null,"\uff0b Plus symbol")," to search for another one.")))),(0,n.kt)("h3",{id:"remove-reactions"},"Remove reactions"),(0,n.kt)("p",null,"Simply click or tap on the reaction to remove it from the message again."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can only remove your own reactions.")),(0,n.kt)("h2",{id:"mention-someone-in-a-message"},"Mention someone in a message"),(0,n.kt)("p",null,"Mentions allow you to directly notify people about something that requires their attention in Famedly. Learn how to mention people in your messages."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"While you are writing a message, type the ",(0,n.kt)("b",null,"@")," ",(0,n.kt)("b",null,"symbol"),"."),(0,n.kt)("li",null,"Enter a member's name or select a member from the member list. You can repeat this step for each person you want to mention in your message."),(0,n.kt)("li",null,"Send your message."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"While you are writing a message, type the ",(0,n.kt)("b",null,"@ symbol"),"."),(0,n.kt)("li",null,"Enter a member's name or select a member from the member list. You can repeat this step for each person you want to mention in your message."),(0,n.kt)("li",null,"Send your message.")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only members of a group chat or the person within the private chat can be mentioned. If you want to mention a person who is not a member of the group, this person must first be added to the group.")),(0,n.kt)("h2",{id:"forward-messages"},"Forward messages"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click on the message you want to forward."),(0,n.kt)("li",null,"Click on ",(0,n.kt)("b",null,"Forward message")),(0,n.kt)("li",null,"Select the room you want to forward the message to."))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Long press on the message you want to forward."),(0,n.kt)("li",null,"Select ",(0,n.kt)("b",null,"Forward message")),(0,n.kt)("li",null,"Select the room you want to forward the message to.")))),(0,n.kt)("h2",{id:"report-message-content"},"Report message content"),(0,n.kt)("p",null,"The message will be reported to the admin of your Organization."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click on the message you want to report."),(0,n.kt)("li",null,"Click on ",(0,n.kt)("b",null,"Report content")))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Long press on the message you want to report."),(0,n.kt)("li",null,"Tap on ",(0,n.kt)("b",null,"Report content"))))),(0,n.kt)("h2",{id:"check-who-read-message"},"Check who read message"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click on the message you want to get the read status."),(0,n.kt)("li",null,"Click on ",(0,n.kt)("b",null,"Read by")))),(0,n.kt)(r.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Long press on the message you want to get the read status."),(0,n.kt)("li",null,"Tap on ",(0,n.kt)("b",null,"Read by"))))),(0,n.kt)("h2",{id:"format-your-messages"},"Format your messages"),(0,n.kt)("p",null,"Formatting helps add detail and clarity to your messages in Famedly. You can use markup language and surround text with special characters."),(0,n.kt)("p",null,"When using Famedly on your desktop or mobile, you can format your messages with these markup commands."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bold"),(0,n.kt)("td",{parentName:"tr",align:null},"Surround text with asterisks:\xa0",(0,n.kt)("strong",{parentName:"td"},"your text"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Italicize"),(0,n.kt)("td",{parentName:"tr",align:null},"Surround text with underscores:",(0,n.kt)("em",{parentName:"td"},"your text"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Strikethrough"),(0,n.kt)("td",{parentName:"tr",align:null},"Surround text with tildes:~your text~")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Code"),(0,n.kt)("td",{parentName:"tr",align:null},"Surround text with backticks:",(0,n.kt)("inlineCode",{parentName:"td"},"your text"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Block quote"),(0,n.kt)("td",{parentName:"tr",align:null},"Add an angled bracket in front of text:>your text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Code block"),(0,n.kt)("td",{parentName:"tr",align:null},"Add three backticks in front and after of text:",(0,n.kt)("inlineCode",{parentName:"td"},"your text"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Header 1"),(0,n.kt)("td",{parentName:"tr",align:null},"Add # then press Space in front of text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Header 2"),(0,n.kt)("td",{parentName:"tr",align:null},"Add ## then press Space in front of text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Header 3"),(0,n.kt)("td",{parentName:"tr",align:null},"Add ### then press Space in front of text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1. Ordered list"),(0,n.kt)("td",{parentName:"tr",align:null},"Add 1 and a full stop, then press\xa0Space\xa0in front of text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"- Bulleted list"),(0,n.kt)("td",{parentName:"tr",align:null},"Add an asterisk, then press\xa0Space\xa0in front of text.")))),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);