"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[770],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},517:function(e,t,n){var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2120:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5773),r=n(7378),i=n(6457),o=n(4956);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6429),u=n(8944),p="tabItem_a7dU";function d(e){var t,n,i,o=e.lazy,d=e.block,c=e.defaultValue,m=e.values,v=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,T=(0,r.useState)(g),x=T[0],O=T[1],E=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=w[v];null!=C&&C!==x&&k.some((function(e){return e.value===C}))&&O(C)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==x&&(P(t),O(a),null!=v&&N(v,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return v}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=n(2120),l=n(517),s=["components"],u={description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},p="Installing disnake",d={unversionedId:"prerequisites/installing-disnake",id:"prerequisites/installing-disnake",title:"Installing disnake",description:"An article on the various ways you can install disnake.",source:"@site/docs/prerequisites/installing-disnake.mdx",sourceDirName:"prerequisites",slug:"/prerequisites/installing-disnake",permalink:"/prerequisites/installing-disnake",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/prerequisites/installing-disnake.mdx",tags:[],version:"current",lastUpdatedBy:"shiftinv",lastUpdatedAt:1641924670,formattedLastUpdatedAt:"1/11/2022",frontMatter:{description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Migrating from discord.py",permalink:"/prerequisites/migrating-from-dpy"}},c=[],m={toc:c};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-disnake"},"Installing disnake"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To use disnake, you'll first need to install ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python"),". Like most other\n",(0,i.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.py"))," forks, disnake supports Python 3.8 or higher. For a full\nwalkthrough on installing Python, we suggest following\n",(0,i.kt)("a",{parentName:"p",href:"https://realpython.com/installing-python/"},"this Real Python article"),", or\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python-guide.org/starting/installation/"},"The Hitchhiker's Guide to Python"),"."))),(0,i.kt)("p",null,"To use disnake, you'll need to install it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),", which is Python's standard package manager. Since pip comes\nstandard with Python 3.4 and above, there is no need to separately install it."),(0,i.kt)("p",null,"To install the library without full voice support, you can just run the following command:"),(0,i.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"py -3 -m pip install -U disnake\n"))),(0,i.kt)(l.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n"))),(0,i.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n")))),(0,i.kt)("p",null,"Otherwise to get voice support you should run the following command:"),(0,i.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'py -3 -m pip install -U "disnake[voice]"\n'))),(0,i.kt)(l.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n'))),(0,i.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n')))),(0,i.kt)("p",null,"To install the development version, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pip install -U git+https://github.com/DisnakeDev/disnake#egg=disnake[speed,voice]\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While installing voice on Linux, you must install the following packages via your favourite package manager (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"dnf"),", etc.) before running the above commands:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"libffi-dev (or ",(0,i.kt)("inlineCode",{parentName:"li"},"libffi-devel")," on some systems)"),(0,i.kt)("li",{parentName:"ul"},"python-dev (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"python3.6-dev")," for Python 3.6)")))),(0,i.kt)("p",null,"And that's it! With all the necessities installed, you're almost ready to start coding your bot."))}v.isMDXComponent=!0}}]);