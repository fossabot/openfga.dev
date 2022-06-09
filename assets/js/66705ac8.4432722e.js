"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1913],{40537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(80566),s=["components"],l={sidebar_position:2,slug:"/modeling/concepts/object-to-object-relationships"},p="Object to Object Relationships",d={unversionedId:"content/modeling/concepts/object-to-object-relationships",id:"content/modeling/concepts/object-to-object-relationships",title:"Object to Object Relationships",description:"In this guide you'll learn how to model your application with  that are not specifically tied to a user. For example, a folder is a parent of a document.",source:"@site/docs/content/modeling/concepts/object-to-object-relationships.mdx",sourceDirName:"content/modeling/concepts",slug:"/modeling/concepts/object-to-object-relationships",permalink:"/modeling/concepts/object-to-object-relationships",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/concepts/object-to-object-relationships.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/modeling/concepts/object-to-object-relationships"},sidebar:"docs",previous:{title:"Concentric Relationships",permalink:"/modeling/concepts/concentric-relationships"},next:{title:"Usersets",permalink:"/modeling/concepts/usersets"}},c={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Create parent relations in document",id:"01-create-parent-relations-in-document",level:3},{value:"02. Add parent relationship tuples",id:"02-add-parent-relationship-tuples",level:3},{value:"03. Check that parent folders have permissions",id:"03-check-that-parent-folders-have-permissions",level:3},{value:"Advanced Object to Object Relationships",id:"advanced-object-to-object-relationships",level:2},{value:"01. Create authorization model with object to object relationships",id:"01-create-authorization-model-with-object-to-object-relationships",level:3},{value:"02. Adding relationship tuples",id:"02-adding-relationship-tuples",level:3},{value:"03. Check to see if access is allowed without direct relationship",id:"03-check-to-see-if-access-is-allowed-without-direct-relationship",level:3},{value:"04. Disassociating plan from feature",id:"04-disassociating-plan-from-feature",level:3},{value:"Related Sections",id:"related-sections",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-to-object-relationships"},"Object to Object Relationships"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"In this guide you'll learn how to model your application with ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"objects",mdxType:"ProductConcept"})," that are not specifically tied to a user. For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"folder")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,o.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,(0,o.kt)("p",null,"This design pattern is helpful in the case where there are relationships between different objects. With ",(0,o.kt)(r.rZ,{format:r.v7.LongForm,mdxType:"ProductName"}),", so long as both objects are in a type defined in the ",(0,o.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),", relationship tuples can be added to indicate a relationship between them."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"communities")," can contain ",(0,o.kt)("inlineCode",{parentName:"li"},"channels")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"channels")," can contain ",(0,o.kt)("inlineCode",{parentName:"li"},"posts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"channels")," can contain ",(0,o.kt)("inlineCode",{parentName:"li"},"threads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"threads")," can contain ",(0,o.kt)("inlineCode",{parentName:"li"},"posts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookshelf")," can have ",(0,o.kt)("inlineCode",{parentName:"li"},"books")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trips")," can have ",(0,o.kt)("inlineCode",{parentName:"li"},"bookings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account")," can contain ",(0,o.kt)("inlineCode",{parentName:"li"},"transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildings")," can have ",(0,o.kt)("inlineCode",{parentName:"li"},"doors")))),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"To better follow this guide, make sure you're familiar with some ",(0,o.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"You will start with the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}))," below, it represents a ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"}))," that can have users ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"related",mdxType:"ProductConcept"}))," as ",(0,o.kt)("inlineCode",{parentName:"p"},"editor"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"folder")," type that can have users related as ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer"),".")),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}}}},{type:"folder",relations:{viewer:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition, you will need to know the following:"),(0,o.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,o.kt)("p",null,"You need to know how to add users to groups and grant groups access to resources. ",(0,o.kt)("a",{parentName:"p",href:"/modeling/basics/user-groups"},"Learn more \u2192")),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,o.kt)(r.XQ,{mdxType:"Playground"}),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("h3",{id:"01-create-parent-relations-in-document"},"01. Create parent relations in document"),(0,o.kt)("p",null,"To represent that a ",(0,o.kt)("inlineCode",{parentName:"p"},"folder")," can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),", we first need to modify our ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," ",(0,o.kt)(r.uH,{section:"what-is-a-type-definition",linkName:"type definition",mdxType:"ProductConcept"})," to allow a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," ",(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"relation",mdxType:"ProductConcept"}),"."),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{parent:{this:{}},editor:{this:{}}}},{type:"folder",relations:{viewer:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("h3",{id:"02-add-parent-relationship-tuples"},"02. Add parent relationship tuples"),(0,o.kt)("p",null,"Once the type definition is updated, we can now create the ",(0,o.kt)(r.uH,{section:"what-is-a-relationship",linkName:"relationship",mdxType:"ProductConcept"})," between a ",(0,o.kt)("inlineCode",{parentName:"p"},"folder")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),". To do this, we will create a new ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," that describes: ",(0,o.kt)("strong",{parentName:"p"},"folder:budgets")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of ",(0,o.kt)("strong",{parentName:"p"},"document:may_budget.doc"),". In ",(0,o.kt)(r.rZ,{format:r.v7.LongForm,mdxType:"ProductName"}),", ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"users",mdxType:"ProductConcept"})," in the relationship tuples can not only be be IDs, but also other objects in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"type:object_id"),"."),(0,o.kt)(r.Gb,{relationshipTuples:[{_description:"The user in this case is another object where the type is `folder` and the object_id is `budgets`",user:"folder:budgets",relation:"parent",object:"document:may_budget.doc"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," does not restrict what value belongs within the user key, so technically a user or any other object can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),". It is your responsibility to ensure that relationship tuples are being created accordingly within your applications business logic."))),(0,o.kt)("h3",{id:"03-check-that-parent-folders-have-permissions"},"03. Check that parent folders have permissions"),(0,o.kt)("p",null,"Once that relationship tuple is added to ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),", we can ",(0,o.kt)(r.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," if the relationship is valid by asking the following: ",(0,o.kt)("strong",{parentName:"p"},'"is folder:budgets a parent of document:may_budget.doc?"')),(0,o.kt)(r.uT,{user:"folder:budgets",relation:"parent",object:"document:may_budget.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"It is important to note that the current authorization model does not imply inheritance of permissions. Even though ",(0,o.kt)("strong",{parentName:"p"},"folder:budgets")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of ",(0,o.kt)("strong",{parentName:"p"},"document:may_budget.doc"),", ",(0,o.kt)("strong",{parentName:"p"},"it does not inherit the ",(0,o.kt)("inlineCode",{parentName:"strong"},"editor")," relation from ",(0,o.kt)("inlineCode",{parentName:"strong"},"parent")," to ",(0,o.kt)("inlineCode",{parentName:"strong"},"document"),".")," Meaning ",(0,o.kt)("inlineCode",{parentName:"p"},"editors")," on ",(0,o.kt)("strong",{parentName:"p"},"folder:budgets")," are not ",(0,o.kt)("inlineCode",{parentName:"p"},"editors")," on ",(0,o.kt)("strong",{parentName:"p"},"document:may_budget.doc"),". Further configuration changes are needed to indicate that and will be tackled in a later guide."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," When creating relationship tuples for ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We are using first names and simple ids to just illustrate an easy-to-follow example."))),(0,o.kt)("h2",{id:"advanced-object-to-object-relationships"},"Advanced Object to Object Relationships"),(0,o.kt)("p",null,"Object to object can be used for more advanced use case, such as ",(0,o.kt)("a",{parentName:"p",href:"/modeling/advanced/patterns/entitlements"},"entitlements"),". An example use case is to allow subscribers to be entitled to different plans."),(0,o.kt)("h3",{id:"01-create-authorization-model-with-object-to-object-relationships"},"01. Create authorization model with object to object relationships"),(0,o.kt)("p",null,"To do this, the authorization model will have two ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"types",mdxType:"ProductConcept"})," - feature and plan."),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"feature",relations:{associated_plan:{this:{}},access:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{relation:"associated_plan"},computedUserset:{relation:"subscriber_member"}}}]}}}},{type:"plan",relations:{subscriber_member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"feature")," has two relations, associated_plan and access. Relation ",(0,o.kt)("inlineCode",{parentName:"p"},"associated_plan")," allows associating plans with features while ",(0,o.kt)("inlineCode",{parentName:"p"},"access")," defines who can access the feature. In our case, the access can be achieved either from"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.uH,{section:"what-are-direct-and-implied-relationships",linkName:"direct relationship",mdxType:"ProductConcept"})," via the keyword `self` or `this`"),(0,o.kt)("li",{parentName:"ul"},"object to object relationship where a user can access because it is a subscriber_member of a particular plan AND that plan is associated with the feature.")),(0,o.kt)("h3",{id:"02-adding-relationship-tuples"},"02. Adding relationship tuples"),(0,o.kt)("p",null,"To realize the relationship, we will need to add the following relationship tuples."),(0,o.kt)(r.Gb,{relationshipTuples:[{_description:"make anne as subscriber_member for plan:advanced",user:"anne",relation:"subscriber_member",object:"plan:advanced"},{_description:"The advanced plan is associated with the data preview feature",user:"plan:advanced",relation:"associated_plan",object:"feature:data_preview"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("h3",{id:"03-check-to-see-if-access-is-allowed-without-direct-relationship"},"03. Check to see if access is allowed without direct relationship"),(0,o.kt)("p",null,"To validate that the authorization model and relationship tuples are correct, we can ask the question:"),(0,o.kt)(r.uT,{user:"anne",relation:"access",object:"feature:data_preview",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"We see that ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," is allowed to ",(0,o.kt)("inlineCode",{parentName:"p"},"access")," ",(0,o.kt)("inlineCode",{parentName:"p"},"feature:data_preview")," without requiring direct relationship."),(0,o.kt)("h3",{id:"04-disassociating-plan-from-feature"},"04. Disassociating plan from feature"),(0,o.kt)("p",null,"At any point in time, ",(0,o.kt)("inlineCode",{parentName:"p"},"plan:advanced")," may be disassociated from ",(0,o.kt)("inlineCode",{parentName:"p"},"feature:data_preview"),"."),(0,o.kt)(r.Gb,{deleteRelationshipTuples:[{_description:"Remove advanced plan from data preview feature",user:"plan:advanced",relation:"associated_plan",object:"feature:data_preview"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"When this is the case, ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," will no longer have ",(0,o.kt)("inlineCode",{parentName:"p"},"access")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"feature:data_preview")," even though she is still a ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriber_member")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"plan:advanced"),"."),(0,o.kt)(r.uT,{user:"anne",relation:"access",object:"feature:data_preview",allowed:!1,mdxType:"CheckRequestViewer"}),(0,o.kt)(r.uT,{user:"anne",relation:"subscriber_member",object:"plan:advanced",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(r.$q,{description:"Check the following sections for more on how object-to-object relationships can be used.",relatedLinks:[{title:"Advanced Modeling Patterns: Entitlements",description:"Learn how to model entitlement access patterns.",link:"/modeling/advanced/patterns/entitlements",id:"../advanced/patterns/entitlements.mdx"},{title:"Modeling Parent-Child Relationships",description:"Learn how to model parent and child relationships.",link:"/modeling/basics/parent-child",id:"../basics/parent-child.mdx"},{title:"Modeling User Groups",description:"Learn how to model user groups.",link:"/modeling/basics/user-groups",id:"../basics/user-groups.mdx"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);