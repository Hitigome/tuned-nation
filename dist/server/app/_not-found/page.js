(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},7925:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),r(7352),r(5866),r(3224);var s=r(3191),n=r(8716),o=r(7922),a=r.n(o),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3224)),"/Users/hitigome/tuned-nation/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=[],d="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7099:(e,t,r)=>{let s={"5ccab87d3c99a53327468fe32ae174e9e94acd31":()=>Promise.resolve().then(r.bind(r,2394)).then(e=>e.$$ACTION_0)};async function n(e,...t){return(await s[e]()).apply(null,t)}e.exports={"5ccab87d3c99a53327468fe32ae174e9e94acd31":n.bind(null,"5ccab87d3c99a53327468fe32ae174e9e94acd31")}},1521:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6132:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},3224:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var s=r(9510),n=r(2547),o=r.n(n);r(7272);var a=r(2394),i=r(9596);function l(){return s.jsx("nav",{className:"w-full flex justify-center border-b border-b-foreground/10 h-16",children:(0,s.jsxs)("div",{className:"w-full flex justify-between items-center p-3 text-sm",children:[s.jsx(i.Z,{}),s.jsx(a.default,{})]})})}let c={metadataBase:new URL(process.env.VERCEL_URL?`https://${process.env.VERCEL_URL}`:"http://localhost:3000"),title:"Next.js and Supabase Starter Kit",description:"The fastest way to build apps with Next.js and Supabase"};function u({children:e}){return s.jsx("html",{lang:"en",className:o().className,children:s.jsx("body",{className:"bg-background text-foreground",children:(0,s.jsxs)("main",{className:"min-h-screen flex flex-col items-center",children:[s.jsx(l,{}),e]})})})}},2394:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>c,default:()=>l});var s=r(9510),n=r(4330);r(166);var o=r(1804),a=r(7371),i=r(8585);async function l(){let e=(0,o.e)(),{data:{user:t}}=await e.auth.getUser(),r=(0,n.j)("5ccab87d3c99a53327468fe32ae174e9e94acd31",c);return t?(0,s.jsxs)("div",{className:"flex items-center gap-4",children:["Hey, ",t.email,"!",s.jsx("form",{action:r,children:s.jsx("button",{className:"py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover",children:"Logout"})})]}):s.jsx(a.default,{href:"/login",className:"py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover",children:"Login"})}async function c(){let e=(0,o.e)();return await e.auth.signOut(),(0,i.redirect)("/login")}},9596:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(9510);function n(){return(0,s.jsxs)("a",{className:"py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border",href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6",target:"_blank",rel:"noreferrer",children:[s.jsx("svg",{"aria-label":"Vercel logomark",role:"img",viewBox:"0 0 74 64",className:"h-4 w-4 mr-2",children:s.jsx("path",{d:"M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z",fill:"currentColor"})}),"Deploy to Vercel"]})}},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return o}});let s=r(6399),n="next/dist/client/components/parallel-route-default.js";function o(){(0,s.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1804:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var s=r(3306),n=r(1615);let o=()=>{let e=(0,n.cookies)();return(0,s.lx)("https://qyyoebsjxzkhtusqwqdc.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eW9lYnNqeHpraHR1c3F3cWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NDI1MjQsImV4cCI6MjAzMTExODUyNH0.pZmSQVPAH8vvELkFY4GDlHm2hc5FLChBmWtRQ17WHW0",{cookies:{get:t=>e.get(t)?.value,set(t,r,s){try{e.set({name:t,value:r,...s})}catch(e){}},remove(t,r){try{e.set({name:t,value:"",...r})}catch(e){}}}})}},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,416,89],()=>r(7925));module.exports=s})();