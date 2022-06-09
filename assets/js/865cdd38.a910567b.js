"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7399],{39778:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return c}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),l=a(80566),r=a(65488),s=a(85162),p=["components"],d={title:"How to get tuple changes",sidebar_position:1,slug:"/integration/read-tuple-changes"},u="How to get tuple changes",h={unversionedId:"content/integration/read-tuple-changes",id:"content/integration/read-tuple-changes",title:"How to get tuple changes",description:"This section illustrates how to call the Read Changes API to get the list of relationship tuple changes that happened in your store, in the exact order that they happened. The API response includes tuples that have been added or removed in your store. It does not include other changes, like updates to your authorization model and adding new assertions.",source:"@site/docs/content/integration/read-tuple-changes.mdx",sourceDirName:"content/integration",slug:"/integration/read-tuple-changes",permalink:"/integration/read-tuple-changes",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/integration/read-tuple-changes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to get tuple changes",sidebar_position:1,slug:"/integration/read-tuple-changes"},sidebar:"docs",previous:{title:"How to integrate within a framework",permalink:"/integration/framework"},next:{title:"Search With Permissions",permalink:"/integration/advanced/search-with-permissions"}},m={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName format={ProductNameFormat.ShortForm}/> API client",id:"01-configure-the--api-client",level:3},{value:"02. Get changes for all object types",id:"02-get-changes-for-all-object-types",level:3},{value:"03. Get changes for a specific object type",id:"03-get-changes-for-a-specific-object-type",level:3}],k={toc:c};function g(e){var t=e.components,a=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-get-tuple-changes"},"How to get tuple changes"),(0,o.kt)(l.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"This section illustrates how to call the Read Changes API to get the list of relationship tuple changes that happened in your store, in the exact order that they happened. The API response includes tuples that have been added or removed in your store. It does not include other changes, like updates to your authorization model and adding new assertions."),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the SDK"),"."),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,o.kt)("a",{parentName:"li",href:"/integration/update-tuples#02-calling-write-api-to-add-new-relationship-tuples"},"added some ",(0,o.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_SECRET")," as environment variables."))),(0,o.kt)(s.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the SDK"),"."),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,o.kt)("a",{parentName:"li",href:"/integration/update-tuples#02-calling-write-api-to-add-new-relationship-tuples"},"added some ",(0,o.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_SECRET")," as environment variables."))),(0,o.kt)(s.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the SDK"),"."),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_SECRET")," as environment variables."))),(0,o.kt)(s.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model"))," and and ",(0,o.kt)("a",{parentName:"li",href:"/integration/update-tuples#02-calling-write-api-to-add-new-relationship-tuples"},"added some ",(0,o.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_BEARER_TOKEN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," as environment variables.")))),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("p",null,"To get a chronologically ordered list of tuples that have been written or deleted in your store, you can do so by calling the Read Changes API."),(0,o.kt)("h3",{id:"01-configure-the--api-client"},"01. Configure the ",(0,o.kt)(l.rZ,{format:l.v7.ShortForm,mdxType:"ProductName"})," API client"),(0,o.kt)("p",null,"First you will need to configure the API client."),(0,o.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)(l.j3,{lang:"js-sdk",mdxType:"SdkSetupHeader"})),(0,o.kt)(s.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)(l.j3,{lang:"go-sdk",mdxType:"SdkSetupHeader"})),(0,o.kt)(s.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)(l.j3,{lang:"dotnet-sdk",mdxType:"SdkSetupHeader"})),(0,o.kt)(s.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),mdxType:"TabItem"},(0,o.kt)("p",null,"To obtain the ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow"},"access token"),":"),(0,o.kt)(l.j3,{lang:"curl",mdxType:"SdkSetupHeader"}))),(0,o.kt)("h3",{id:"02-get-changes-for-all-object-types"},"02. Get changes for all object types"),(0,o.kt)("p",null,"To get a paginated list of changes that happened in your store:"),(0,o.kt)(l.J_,{pageSize:25,skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.CURL],mdxType:"ReadChangesRequestViewer"}),(0,o.kt)("p",null,"The result will contain an array of up to 25 tuples, with the operation (",(0,o.kt)("inlineCode",{parentName:"p"},"write")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),"), and the timestamp in which that operation took place. The result will also contain a continuation token. Save the continuation token in persistent storage between calls so that it is not lost and you do not have to restart from scratch on system restart or on error."),(0,o.kt)("p",null,"You can then use this token to get the next set of changes:"),(0,o.kt)(l.J_,{pageSize:25,continuationToken:"eyJwayI6IkxBVEVTVF9OU0NPTkZJR19hdXRoMHN0b3JlIiwic2siOiIxem1qbXF3MWZLZExTcUoyN01MdTdqTjh0cWgifQ==",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.CURL],mdxType:"ReadChangesRequestViewer"}),(0,o.kt)("p",null,"Once there are no more changes to retrieve, the API will return the same token as the one you sent. Save the token in persistent storage to use at a later time."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The default page size is 50. The maximum page size allowed is 100."),(0,o.kt)("li",{parentName:"ul"},"The API response will not return all the changes immediately. There will be a delay of one minute between the time that you add or delete a tuple and the time that you see it in the Read Changes API response."),(0,o.kt)("li",{parentName:"ul"},"The API response does not expand the tuples. If you wrote a tuple that includes a userset, like ",(0,o.kt)("inlineCode",{parentName:"li"},'{"user": "group:abc#member", "relation": "owner": "doc:budget"}'),", the Read Changes API will return that exact tuple.")))),(0,o.kt)("h3",{id:"03-get-changes-for-a-specific-object-type"},"03. Get changes for a specific object type"),(0,o.kt)("p",null,"Imagine you have the following authorization model:"),(0,o.kt)(l.lG,{configuration:{type_definitions:[{type:"group",relations:{member:{this:{}}}},{type:"folder",relations:{owner:{this:{}}}},{type:"doc",relations:{owner:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"It is possible to get a list of changes that happened in your store that relate only to one specific object type, like ",(0,o.kt)("inlineCode",{parentName:"p"},"folder"),", by issuing a call like this:"),(0,o.kt)(l.J_,{pageSize:25,type:"folder",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.CURL],mdxType:"ReadChangesRequestViewer"}),(0,o.kt)("p",null,"The response will include a continuation token. In subsequent calls, you have to include the token and the ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". (If you send this continuation token without the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," parameter set, you will get an error)."),(0,o.kt)(l.J_,{pageSize:25,type:"folder",continuationToken:"eyJwayI6IkxBVEVTVF9OU0NPTkZJR19hdXRoMHN0b3JlIiwic2siOiIxem1qbXF3MWZLZExTcUoyN01MdTdqTjh0cWgifQ==",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.CURL],mdxType:"ReadChangesRequestViewer"}))}g.isMDXComponent=!0}}]);