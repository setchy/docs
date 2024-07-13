"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[633],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4823:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"packaging",title:"Packaging",sidebar_label:"Packaging"},p=void 0,c={unversionedId:"packaging",id:"packaging",title:"Packaging",description:"To package apps for the local platform:",source:"@site/docs/packaging.md",sourceDirName:".",slug:"/packaging",permalink:"/docs/packaging",draft:!1,editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/packaging.md",tags:[],version:"current",frontMatter:{id:"packaging",title:"Packaging",sidebar_label:"Packaging"},sidebar:"docs",previous:{title:"Building",permalink:"/docs/building"},next:{title:"Adding Assets",permalink:"/docs/adding-assets"}},u={},s=[{value:"Debugging Production Builds",id:"debugging-production-builds",level:3},{value:"Notarizing",id:"notarizing",level:2}],d={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To package apps for the local platform:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run package\n")),(0,i.kt)("p",null,"The packaged app will be inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," directory."),(0,i.kt)("p",null,"To package apps with options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run package -- --[option]\n# Example: npm run package -- --mac\n")),(0,i.kt)("h3",{id:"debugging-production-builds"},"Debugging Production Builds"),(0,i.kt)("p",null,"You can debug your production build with devtools by simply setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG_PROD")," env variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx cross-env DEBUG_PROD=true npm run package\n")),(0,i.kt)("h2",{id:"notarizing"},"Notarizing"),(0,i.kt)("p",null,"To notarize your macOS app, you will need to set the following environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLE_ID")," - Your Apple ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLE_APP_SPECIFIC_PASSWORD")," - Your Apple ID password")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"mac")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"teamId")," key needs to be set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"notarize": {\n  "teamId": "YOUR_TEAM_ID"\n}\n')),(0,i.kt)("p",null,"This above config will automatically get electron-builder to notarize the build."))}g.isMDXComponent=!0}}]);