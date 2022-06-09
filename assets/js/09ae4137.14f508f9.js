"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1705],{39012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(80566),l=["components"],s={sidebar_position:2,slug:"/writing-data/managing-relationships-between-objects"},d="Managing Relationships Between Objects",p={unversionedId:"content/writing-data/managing-relationships-between-objects",id:"content/writing-data/managing-relationships-between-objects",title:"Managing Relationships Between Objects",description:"In this guide you will learn how to give a user access to a particular object through a relationship with another object.",source:"@site/docs/content/writing-data/managing-relationships-between-objects.mdx",sourceDirName:"content/writing-data",slug:"/writing-data/managing-relationships-between-objects",permalink:"/writing-data/managing-relationships-between-objects",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/writing-data/managing-relationships-between-objects.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/writing-data/managing-relationships-between-objects"},sidebar:"docs",previous:{title:"Managing Group Membership",permalink:"/writing-data/managing-group-membership"},next:{title:"Transactional Writes",permalink:"/writing-data/transactional-writes"}},c={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling Basics",id:"modeling-basics",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Modify authorization model",id:"01-modify-authorization-model",level:3},{value:"02. Adding relationship tuples where user is another object",id:"02-adding-relationship-tuples-where-user-is-another-object",level:3},{value:"03. Adding relationship tuples to the other object",id:"03-adding-relationship-tuples-to-the-other-object",level:3},{value:"04. Validating user access",id:"04-validating-user-access",level:3},{value:"05. Revoking access",id:"05-revoking-access",level:3},{value:"Related Sections",id:"related-sections",level:2}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-relationships-between-objects"},"Managing Relationships Between Objects"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"In this guide you will learn how to give a user access to a particular object through a relationship with another object."),(0,o.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,(0,o.kt)("p",null,"Giving user access through a relationship with another object is helpful because it allows scaling as the number of object grows. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"organization that owns many repos"),(0,o.kt)("li",{parentName:"ul"},"team that administers many documents"))),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,o.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Assume that you have the following ",(0,o.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"repo")," type that can have a ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," relation"))),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"repo",relations:{admin:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition, you will need to know the following:"),(0,o.kt)("h3",{id:"modeling-basics"},"Modeling Basics"),(0,o.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,o.kt)("a",{parentName:"p",href:"/modeling/basics/modeling-basics"},"Learn more \u2192")),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("p",null,"For the current model, a ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"user",mdxType:"ProductConcept"})," can be related as an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," to an ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"})," of ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),". If we wanted to have Anne be related to two repos, ",(0,o.kt)("inlineCode",{parentName:"p"},"repo:1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"repo:2"),", we would have to add two ",(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"}),", like so:"),(0,o.kt)(r.Gb,{relationshipTuples:[{user:"anne",relation:"admin",object:"repo:1"},{user:"anne",relation:"admin",object:"repo:2"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"In general, every time we wanted to add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," relationship to a ",(0,o.kt)("inlineCode",{parentName:"p"},"repo")," we'd have to add a new tuple. This doesn't scale as the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),"s and users grows."),(0,o.kt)("h3",{id:"01-modify-authorization-model"},"01. Modify authorization model"),(0,o.kt)("p",null,"Another way of modeling this is to have an authorization model as follows:"),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"repo",relations:{admin:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"repo_admin"}}}]}},owner:{this:{}}}},{type:"org",relations:{repo_admin:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"In this model, we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"added a new type ",(0,o.kt)("inlineCode",{parentName:"li"},"org")," with one relation ",(0,o.kt)("inlineCode",{parentName:"li"},"repo_admin"),"."),(0,o.kt)("li",{parentName:"ul"},"added a new relation ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," for type ",(0,o.kt)("inlineCode",{parentName:"li"},"repo"),"."),(0,o.kt)("li",{parentName:"ul"},"re-defined the relation ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"repo"),". A user can be defined as an ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," directly, as we have seen above, or through the ",(0,o.kt)("inlineCode",{parentName:"li"},"repo_admin from owner")," clause. How this works, for example, is that if ",(0,o.kt)("inlineCode",{parentName:"li"},"user")," is related as ",(0,o.kt)("inlineCode",{parentName:"li"},"repo_admin")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"org:xyz"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"org:xyz")," is related as ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"repo:1"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"user")," is an ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"repo:1"),".")),(0,o.kt)("h3",{id:"02-adding-relationship-tuples-where-user-is-another-object"},"02. Adding relationship tuples where user is another object"),(0,o.kt)("p",null,"With this model, we can add tuples representing that an ",(0,o.kt)("inlineCode",{parentName:"p"},"org")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),". By adding following relationship tuples, we are indicating that the xyz organization is the owner of repositories with IDs ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,o.kt)(r.Gb,{relationshipTuples:[{user:"org:xyz",relation:"owner",object:"repo:1"},{user:"org:xyz",relation:"owner",object:"repo:2"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("h3",{id:"03-adding-relationship-tuples-to-the-other-object"},"03. Adding relationship tuples to the other object"),(0,o.kt)("p",null,"Now, imagine we have a new user Becky. If we wanted to have Becky be the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," of all ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),"s without having to add one tuple per ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),", all we need to do is add one tuple that says that Becky is related as ",(0,o.kt)("inlineCode",{parentName:"p"},"repo_admin")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"org:xyz"),"."),(0,o.kt)(r.Gb,{relationshipTuples:[{user:"becky",relation:"repo_admin",object:"org:xyz"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("h3",{id:"04-validating-user-access"},"04. Validating user access"),(0,o.kt)("p",null,"We can now verify that Becky an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," of all the ",(0,o.kt)("inlineCode",{parentName:"p"},"repo"),"s owned by ",(0,o.kt)("inlineCode",{parentName:"p"},"org:xyz"),":"),(0,o.kt)(r.uT,{user:"becky",relation:"admin",object:"repo:1",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)(r.uT,{user:"becky",relation:"admin",object:"repo:2",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("h3",{id:"05-revoking-access"},"05. Revoking access"),(0,o.kt)("p",null,"Suppose now that we want to prevent users from being an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"repo:1")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"org:xyz"),". We can delete one tuple:"),(0,o.kt)(r.Gb,{deleteRelationshipTuples:[{user:"org:xyz",relation:"owner",object:"repo:1"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"With this change, we may now verify that Becky is no longer an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"repo:1"),"."),(0,o.kt)(r.uT,{user:"becky",relation:"admin",object:"repo:1",allowed:!1,mdxType:"CheckRequestViewer"}),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(r.$q,{description:"Check the following sections for more on how to model relationships between objects.",relatedLinks:[{title:"Modeling Parent-Child Objects",description:"Learn about how to cascade relationships from parent object to child object.",link:"/modeling/basics/parent-child",id:"../modeling/basics/parent-child.mdx"},{title:"Modeling Object to Object Relationships",description:"Learn about modeling patterns on objects that are not specifically tied to a user.",link:"/modeling/concepts/object-to-object-relationships",id:"../modeling/concepts/object-to-object-relationships.mdx"},{title:"Modeling GitHub",description:"An example of object to object relationships.",link:"/modeling/advanced/use-cases/github",id:"../modeling/advanced/use-cases/github.mdx"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0}}]);