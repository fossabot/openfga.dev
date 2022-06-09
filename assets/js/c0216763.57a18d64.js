"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[364],{80618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=n(80566),s=["components"],l={sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/concepts/concentric-relationships"},d="Concentric Relationships",p={unversionedId:"content/modeling/concepts/concentric-relationships",id:"content/modeling/concepts/concentric-relationships",title:"Concentric Relationships",description:"Modeling Concepts: Concentric Relationships",source:"@site/docs/content/modeling/concepts/concentric-relationships.mdx",sourceDirName:"content/modeling/concepts",slug:"/modeling/concepts/concentric-relationships",permalink:"/modeling/concepts/concentric-relationships",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/concepts/concentric-relationships.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/concepts/concentric-relationships"},sidebar:"docs",previous:{title:"Direct Relationships",permalink:"/modeling/concepts/direct-relationships"},next:{title:"Object to Object Relationships",permalink:"/modeling/concepts/object-to-object-relationships"}},c={},m=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Modify our model to imply editor as viewer",id:"01-modify-our-model-to-imply-editor-as-viewer",level:3},{value:"02. Check that editors are viewers",id:"02-check-that-editors-are-viewers",level:3},{value:"Related Sections",id:"related-sections",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concentric-relationships"},"Concentric Relationships"),(0,a.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,a.kt)("p",null,"In this short guide, you'll learn how to represent a concentric ",(0,a.kt)(r.uH,{section:"what-is-a-relationship",linkName:"relationships",mdxType:"ProductConcept"}),"."),(0,a.kt)("p",null,"For example, if you want to have all editors of a document also be viewers of said document."),(0,a.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,a.kt)("div",null,(0,a.kt)("p",null,"Concentric relations make the most sense when your domain logic has nested relations, where one having relation implies having another relation."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("inlineCode",{parentName:"li"},"editors")," are ",(0,a.kt)("inlineCode",{parentName:"li"},"viewers")),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("inlineCode",{parentName:"li"},"managers")," are ",(0,a.kt)("inlineCode",{parentName:"li"},"members")),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("inlineCode",{parentName:"li"},"device_managers")," are ",(0,a.kt)("inlineCode",{parentName:"li"},"device_renamers"))),(0,a.kt)("p",null,"This allows you to only create a single ",(0,a.kt)("em",{parentName:"p"},"relationship tuple")," rather than creating n ",(0,a.kt)("em",{parentName:"p"},"relationship tuples")," for each relation.")),mdxType:"CardBox"}),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"To better understand this guide, you should be familiar with some ",(0,a.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",null,"You will start with the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}))," below, it represents a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"}))," that can have users ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-relation",linkName:"related",mdxType:"ProductConcept"}))," as ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer"),"."),(0,a.kt)("p",null,"Let us also assume that we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),' called "meeting_notes.doc" and bob is assigned as editor to this document.')),(0,a.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{viewer:{this:{}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("p",null,"The current state of the system is represented by the following relationship tuples being in the system already:"),(0,a.kt)(r.Wz,{relationshipTuples:[{user:"bob",relation:"editor",object:"document:meeting_notes.doc"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In addition, you will need to know the following:"),(0,a.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,a.kt)("p",null,"You need to know how to add users to groups and grant groups access to resources. ",(0,a.kt)("a",{parentName:"p",href:"/modeling/basics/user-groups"},"Learn more \u2192")),(0,a.kt)("h3",{id:"-concepts"},(0,a.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,a.kt)(r.XQ,{mdxType:"Playground"}),(0,a.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,a.kt)("p",null,"With the current type definition, there isn't a way to indicate that all ",(0,a.kt)("inlineCode",{parentName:"p"},"editors")," of a certain ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," are also automatically ",(0,a.kt)("inlineCode",{parentName:"p"},"viewers")," of that document. So for a certain user, in order to indicate that they can both ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," a certain ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", two ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"}))," need to be created (one for ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),", and another for ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer"),")."),(0,a.kt)("h3",{id:"01-modify-our-model-to-imply-editor-as-viewer"},"01. Modify our model to imply editor as viewer"),(0,a.kt)("p",null,"Instead of creating two ",(0,a.kt)("em",{parentName:"p"},"relationship tuples"),", we can leverage concentric relationships by defining editors are viewers."),(0,a.kt)("p",null,"Our authorization model becomes the following:"),(0,a.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," are any of:"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"users that are directly assigned as ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")),(0,a.kt)("li",{parentName:"ol"},"users that have ",(0,a.kt)("inlineCode",{parentName:"li"},"editor")," of the document")))),(0,a.kt)("p",null,"With this authorization model change, having an ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," relationship with a certain document implies having a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," relationship with that same document."),(0,a.kt)("h3",{id:"02-check-that-editors-are-viewers"},"02. Check that editors are viewers"),(0,a.kt)("p",null,"Since we had a ",(0,a.kt)("em",{parentName:"p"},"relationship tuple")," that indicates that ",(0,a.kt)("strong",{parentName:"p"},"bob")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,a.kt)("strong",{parentName:"p"},"document:meeting_notes.doc"),", this means ",(0,a.kt)("strong",{parentName:"p"},"bob")," is now implicitly a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,a.kt)("strong",{parentName:"p"},"document:meeting_notes.doc"),".\nIf we now check: ",(0,a.kt)("strong",{parentName:"p"},"is bob a viewer of document:meeting_notes.doc?")," we would get the following:"),(0,a.kt)(r.uT,{user:"bob",relation:"viewer",object:"document:meeting_notes.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When creating relationship tuples for ",(0,a.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We're using first names and simple ids to just illustrate an easy-to-follow example."))),(0,a.kt)("h2",{id:"related-sections"},"Related Sections"),(0,a.kt)(r.$q,{description:"Check the following sections for more on how concentric relationships can be used.",relatedLinks:[{title:"Modeling Google Drive",description:"See how to indicate that editors are commenters and viewers in Google Drive.",link:"/modeling/advanced/use-cases/gdrive#01-individual-permissions",id:"../advanced/use-cases/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to indicate that repository admins are writers and readers in GitHub.",link:"/modeling/advanced/use-cases/github#01-permissions-for-individuals-in-an-org",id:"../advanced/use-cases/github.mdx#01-permissions-for-individuals-in-an-org"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);