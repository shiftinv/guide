"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[206],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2661:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],s={slug:"/",description:"The purpose of this guide is to make your journey with disnake easier.",keywords:["disnake","bot","guide","api","python"]},u="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"The purpose of this guide is to make your journey with disnake easier.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/intro.mdx",tags:[],version:"current",lastUpdatedBy:"shiftinv",lastUpdatedAt:1641924670,formattedLastUpdatedAt:"1/11/2022",frontMatter:{slug:"/",description:"The purpose of this guide is to make your journey with disnake easier.",keywords:["disnake","bot","guide","api","python"]},sidebar:"guideSidebar",next:{title:"Installing disnake",permalink:"/prerequisites/installing-disnake"}},l=[],d={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome! The purpose of this guide is to make your journey with ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," easier, whether you're an experienced\ndeveloper just getting into coding Discord bots, or an advanced bot developer who has decided to proceed with ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),"\nas their library of choice."),(0,a.kt)("p",null,"The concept we will be going over, include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to get started on working with bots;"),(0,a.kt)("li",{parentName:"ul"},"How to create and organize commands, using cogs/extensions;"),(0,a.kt)("li",{parentName:"ul"},"Working with databases (such as ",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/sqlite3.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sqlite"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://motor.readthedocs.io/en/stable/"},(0,a.kt)("inlineCode",{parentName:"a"},"mongodb (motor)")),");"),(0,a.kt)("li",{parentName:"ul"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"https://disnake.readthedocs.io/en/latest/api.html#disnake.AutoShardedClient"},(0,a.kt)("inlineCode",{parentName:"a"},"AutoShardedClient"))," class\nto shard your bot;"),(0,a.kt)("li",{parentName:"ul"},"A plethora of examples with popular topics along with in-depth explanation, and much more!")),(0,a.kt)("p",null,"This guide will showcase the various features and events that our library has, while giving you an idea of how these\nfunctions work together as well as how the syntax looks in production."),(0,a.kt)("h2",null,"Disclaimer"),(0,a.kt)("p",null,"We appreciate the process of making Discord bots, but creating a bot with ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," requires a decent amount of\nexperience on working with Python and object-oriented programming. While you ",(0,a.kt)("em",{parentName:"p"},"can")," go forward and make a bot with little\nto no knowledge of Python or programming, doing so will only hinder your progress and cause issues in the future."),(0,a.kt)("p",null,"If you don't know Python but would like to learn more, here are a few resources to get you started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://greenteapress.com/thinkpython/html/index.html"},"Think Python"),", a free online book."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.codecademy.com/learn/learn-python-3"},"Codecademy's course")," for learning Python 3."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.learnpython.org/"},"LearnPython"),", an interactive tutorial for absolute beginners."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.swaroopch.com/"},"A Byte of Python by Swaroop C.H."),", an introductory text for people with no previous\nprogramming experience.")),(0,a.kt)("p",null,"An extensive list of these resources can be found on\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/BeginnersGuide/NonProgrammers"},"Python's official website"),". Once you're more experienced\nwith Python, you can come back here to get started!"),(0,a.kt)("h2",null,"Links & Credits"),(0,a.kt)("p",null,"This guide is made using ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},(0,a.kt)("strong",{parentName:"a"},"Docusaurus")),", a static site generator geared towards building\nproject documentation."),(0,a.kt)("p",null,"The idea of building a guide that showcases the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),"'s syntax was inpired from\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.js.org/"},(0,a.kt)("strong",{parentName:"a"},"Discord.js")),", one of the most popular JavaScript Discord libraries; their guide can be\nfound ",(0,a.kt)("a",{parentName:"p",href:"https://discordjs.guide/"},"here"),". The credit for the initial directory structure and articles, goes to them."),(0,a.kt)("p",null,"Since this project started as members-only, the credits for a majority of the initial content go to our organization\nmembers - ",(0,a.kt)("strong",{parentName:"p"},"thesadru"),", ",(0,a.kt)("strong",{parentName:"p"},"shiftinv"),", ",(0,a.kt)("strong",{parentName:"p"},"Victorsitou"),", ",(0,a.kt)("strong",{parentName:"p"},"vcokltfre"),", ",(0,a.kt)("strong",{parentName:"p"},"m1raynee")," and ",(0,a.kt)("strong",{parentName:"p"},"AbhigyanTrips"),". We also thank\nto all contributors on the repository, who strive to make the guide better."),(0,a.kt)("p",null,"Lastly, a huge thanks to ",(0,a.kt)("strong",{parentName:"p"},"you"),", the members of the ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," community, for supporting our library and choosing us for\nyour bot development journey. We as the authors of this guide aim to familiarize users on coding Discord bots with our\nlibrary, and your support gives us a boost to make the guide better, one commit at a time."))}c.isMDXComponent=!0}}]);