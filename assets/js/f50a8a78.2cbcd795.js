"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9218],{92341:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return k}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(80566),l=a(65488),p=a(85162),d=["components"],c={title:"How to perform a check",sidebar_position:4,slug:"/integration/perform-check"},u="How to perform a check",m={unversionedId:"content/integration/perform-check",id:"content/integration/perform-check",title:"How to perform a check",description:"This section will illustrate how to perform a  request to determine whether a  has a certain  with an .",source:"@site/docs/content/integration/perform-check.mdx",sourceDirName:"content/integration",slug:"/integration/perform-check",permalink:"/integration/perform-check",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/integration/perform-check.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to perform a check",sidebar_position:4,slug:"/integration/perform-check"},sidebar:"docs",previous:{title:"How to update relationship tuples",permalink:"/integration/update-tuples"},next:{title:"How to integrate within a framework",permalink:"/integration/framework"}},s={},k=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName format={ProductNameFormat.ShortForm}/> API client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Check API",id:"02-calling-check-api",level:3},{value:"Related Section",id:"related-section",level:2}],h={toc:k};function f(e){var t=e.components,a=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-perform-a-check"},"How to perform a check"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"This section will illustrate how to perform a ",(0,o.kt)(r.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," request to determine whether a ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"user",mdxType:"ProductConcept"})," has a certain ",(0,o.kt)(r.uH,{section:"what-is-a-relationship",linkName:"relationship",mdxType:"ProductConcept"})," with an ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),"."),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},[r.eU.JS_SDK,r.eU.GO_SDK,r.eU.DOTNET_SDK].map((function(e){return(0,o.kt)(p.Z,{value:e,label:r.UB.get(e),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(r.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the SDK"),"."),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,o.kt)("a",{parentName:"li",href:"/integration/update-tuples"},"updated the ",(0,o.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_SECRET")," as environment variables.")))})),(0,o.kt)(p.Z,{value:r.eU.CURL,label:r.UB.get(r.eU.CURL),mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(r.YY,{mdxType:"SdkSetupPrerequisite"})),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,o.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,o.kt)("a",{parentName:"li",href:"/integration/update-tuples"},"updated the ",(0,o.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,o.kt)("li",{parentName:"ol"},"You have loaded ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_BEARER_TOKEN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," as environment variables.")))),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("p",null,"Assume that you want to check whether user ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," has relationship ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,o.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,o.kt)("h3",{id:"01-configure-the--api-client"},"01. Configure the ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," API client"),(0,o.kt)("p",null,"Before calling the check API, you will need to configure the API client."),(0,o.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:r.eU.JS_SDK,label:r.UB.get(r.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)(r.j3,{lang:r.eU.JS_SDK,mdxType:"SdkSetupHeader"})),(0,o.kt)(p.Z,{value:r.eU.GO_SDK,label:r.UB.get(r.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)(r.j3,{lang:r.eU.GO_SDK,mdxType:"SdkSetupHeader"})),(0,o.kt)(p.Z,{value:r.eU.DOTNET_SDK,label:r.UB.get(r.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)(r.j3,{lang:r.eU.DOTNET_SDK,mdxType:"SdkSetupHeader"})),(0,o.kt)(p.Z,{value:r.eU.CURL,label:r.UB.get(r.eU.CURL),mdxType:"TabItem"},(0,o.kt)("p",null,"To obtain the ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow"},"access token"),":"),(0,o.kt)(r.j3,{lang:r.eU.CURL,mdxType:"SdkSetupHeader"}))),(0,o.kt)("h3",{id:"02-calling-check-api"},"02. Calling Check API"),(0,o.kt)("p",null,"To check whether user ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," has relationship ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,o.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,o.kt)(r.uT,{user:"anne",relation:"reader",object:"document:Z",allowed:!0,skipSetup:!0,allowedLanguages:[r.eU.JS_SDK,r.eU.GO_SDK,r.eU.DOTNET_SDK,r.eU.CURL],mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"The result's ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed")," field will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the relationship exists and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the relationship does not exist."),(0,o.kt)("h2",{id:"related-section"},"Related Section"),(0,o.kt)(r.$q,{description:"Take a look at the following section for more on how to perform authorization checks in your system",relatedLinks:[{title:"{ProductName} Check API",description:"Read the Check API documentation and see how it works.",link:"/api/service#/Tuples/Check"}],mdxType:"RelatedSection"}))}f.isMDXComponent=!0}}]);